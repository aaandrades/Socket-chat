let socket = io();

const searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has("escritorio")) {
  window.location = "index.html";
  throw new Error("The desktop have to be provided");
}

const desktop = searchParams.get("escritorio");

$("h1").text("Escritorio " + desktop);

let label = $("span");

$("button").on("click", () => {
  socket.emit("handleTicket", { desktop }, (response) => {
    if (response === "There's no current tickets") {
      label.text("No ticket");
      alert("There are no tickets");
    }
    label.text(response.id);
  });
});
