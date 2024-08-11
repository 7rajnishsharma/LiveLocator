const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const socketio = require('socket.io');

const server = http.createServer(app);
const io = socketio(server);

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public'))); // Use app.use to serve static files

io.on('connection', function(socket) {    
    socket.on('send-location', function(data) {
        io.emit("receive-location", {id: socket.id, ...data});
    });

    socket.on("disconnect", function(){
        io.emit("user-disconnected", socket.id);
    })
});


// Define a route for the root URL
app.get('/', (req, res) => {
    res.render('index');
});

// Start the server on port 3000
const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server is working on http://localhost:${PORT}`);
});
