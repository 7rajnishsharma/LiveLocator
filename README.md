# LiveLocator

This project is a real-time location tracking application built using Node.js, Socket.io, and Leaflet.js. It allows users to share their current location, which is then displayed on a map for all connected users. Each user is represented by a marker on the map that updates as they move.

## Features

- Real-time location sharing across multiple clients
- Dynamic map marker updates
- User markers are removed when they disconnect
- Responsive UI using Leaflet.js

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/7rajnishsharma/LiveLocator.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the Application

1. **Start the server**:
   ```bash
   npm start
   ```

2. **Access the application**:

   Open your browser and navigate to [http://localhost:5000](http://localhost:5000).

3. **Test with multiple users**:

   Open multiple tabs or different browsers and access the application to see real-time location tracking in action.

## Project Structure

```bash
.
├── public
│   ├── css
│   │   └── style.css
│   ├── js
│       └── script.js
├── views
│   └── index.ejs
├── app.js
└── package.json
```

- `public/`: Contains static assets like CSS, JS, and the HTML template.
- `app.js`: Main server-side script to handle socket connections and events.
- `package.json`: Contains project dependencies and scripts.

## Technologies Used

- **Node.js**: Backend server
- **Express.js**: Web framework for Node.js
- **Socket.io**: Real-time communication between clients and server
- **Leaflet.js**: Library for interactive maps

## How It Works

1. **Server-Side (app.js)**:
   - When a user connects, their location is tracked and broadcast to all other connected users.
   - User locations are stored on the server to ensure all connected users see the correct markers on the map.
   - When a user disconnects, their marker is removed from the map.

2. **Client-Side (script.js)**:
   - The user's location is obtained using the browser's Geolocation API.
   - Location data is sent to the server via Socket.io.
   - The map is updated with markers representing the locations of all connected users.

## Contributions

Contributions are welcome! Feel free to submit issues, fork the repository, and create pull requests.


## Acknowledgments

- [Leaflet.js](https://leafletjs.com/) for the interactive map library
- [Socket.io](https://socket.io/) for real-time communication


## Here's a quick preview of what the application looks like:

![LiveLocator](https://github.com/user-attachments/assets/347e68f4-35ed-475c-bd74-a64180158e68)

---
