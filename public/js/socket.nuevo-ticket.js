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

socket.on("currentState", (state) => {
  label.text(state.current);
});

$("button").on("click", () => {
  socket.emit("nextTicket", (data) => {
    label.text(data);
  });
});
