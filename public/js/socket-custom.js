let socket = io();

//   Listen server information
socket.on("connect", () => {
  console.log("Connected to server");
});

//   Listen server information
socket.on("disconnect", () => {
  console.log("Connection lost");
});

//   Send information to server
socket.emit(
  "sendMessage",
  {
    user: "Andres",
    message: "Hello World",
  },
  (response) => {
    console.log("Response: ", response);
  }
);

socket.on("welcomeMessage", (message) => {
  console.log("Server message: ", message);
});
