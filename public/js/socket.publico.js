const socket = io();

const ticket1 = $("#lblTicket1");
const ticket2 = $("#lblTicket2");
const ticket3 = $("#lblTicket3");
const ticket4 = $("#lblTicket4");

const escritorio1 = $("#lblEscritorio1");
const escritorio2 = $("#lblEscritorio2");
const escritorio3 = $("#lblEscritorio3");
const escritorio4 = $("#lblEscritorio4");

let tickets = [ticket1, ticket2, ticket3, ticket4];

let desktops = [escritorio1, escritorio2, escritorio3, escritorio4];

const updateHtml = (lastFour) => {
  for (let i = 0; i <= lastFour.length - 1; i++) {
    tickets[i].text("Ticket " + lastFour[i].id);
    desktops[i].text("Desktop " + lastFour[i].desktop);
  }
};

socket.on("currentState", (data) => {
  updateHtml(data.lastFour);
});

socket.on("updateTickets", (data) => {
  const audio = new Audio("audio/new-ticket.mp3");
  audio.play();
});
