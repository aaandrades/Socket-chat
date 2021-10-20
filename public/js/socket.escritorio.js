let socket = io();

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

const searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has("escritorio")) {
  window.location = "index.html";
  throw new Error("The desktop have to be provided");
}

const desktop = searchParams.get("escritorio");

$("h1").text("Escritorio " + desktop);

let label = $("small");

$("button").on("click", () => {
  socket.emit("handleTicket", { desktop }, (response) => {
    console.log(response);
    if (response === "There's no current tickets") {
      label.text('No ticket');
      alert("There are no tickets");
    }
    label.text(response.id);
  });
});
