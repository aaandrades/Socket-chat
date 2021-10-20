let socket = io();

const label = $("#lblNuevoTicket");

$(document).ready(function () {
  // socket.emit("nextTicket", (data) => {
  //   label.text(data);
  // });
});

//   Listen server information
socket.on("connect", () => {
  console.log("Connected to server");
});

//   Listen server information
socket.on("disconnect", () => {
  console.log("Connection lost");
});

//   Send information to server
// socket.emit(
//   "sendMessage",
//   {
//     user: "Andres",
//     message: "Hello World",
//   },
//   (response) => {
//     console.log("Response: ", response);
//   }
// );

socket.on("currentState", (state) => {
  label.text(state.current)
  console.log(state);
});

socket.on("welcomeMessage", (message) => {
  console.log("Server message: ", message);
});

$("button").on("click", () => {
  socket.emit("nextTicket", (data) => {
    label.text(data);
    console.log("Next ticket is: ", data);
  });
});
