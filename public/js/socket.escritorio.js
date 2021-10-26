let socket = io();
let openModal = false;

const searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has("escritorio")) {
  window.location = "index.html";
  throw new Error("The desktop have to be provided");
}

// const desktop = searchParams.get("escritorio");
let desktop = Math.round(Math.random(4) * 10)

$("h1").text("Desktop " + desktop);
let label = $("span");

$("button").on("click", () => {
  socket.emit("handleTicket", { desktop }, (response) => {
    
    $("h1").text("Desktop " + desktop);
    if (response === "There's no current tickets") {
      label.text("No ticket");
      alert("There are no tickets");
    }
    label.text(response.id);
    desktop = Math.round(Math.random(4) * 10);
  });
});
