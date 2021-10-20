const { io } = require("../server");
const { TicketControl } = require("../classes/ticket-control");

const ticketControl = new TicketControl();

io.on("connection", (client) => {
  client.on("nextTicket", (callback) => {
    callback(ticketControl.next());
  });

  client.emit("currentState", {
    current: ticketControl.getCurrentState(),
    lastFour: ticketControl.getLastTickets(),
  });

  client.on("handleTicket", (data, callback) => {
    if (!data.desktop) {
      return callback({ error: true, message: "The desk has to be provided" });
    }

    let resolveTicket = ticketControl.handleTicket(data.desktop);
    callback(resolveTicket);
    client.broadcast.emit("updateTickets", resolveTicket);
  });
});
