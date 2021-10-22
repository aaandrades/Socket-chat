const express = require("express");

// Import nodeJs packages of Socket and Http
const socketIO = require("socket.io");
const http = require("http");

const path = require("path");
const app = express();

// Inject Express server into node Http
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, "../public");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// Initialize the server, communication of Backend
module.exports.io = socketIO(server);
require('./sockets/socket')

server.listen(port, (err) => {
  if (err) throw new Error(err);
  console.log(`Server running in port: ${port}`);
});
