const fs = require("fs");

class Ticket {
  constructor(id, desktop) {
    this.id = id;
    this.desktop = desktop;
  }
}

class TicketControl {
  constructor() {
    this.last = 0;
    this.today = new Date().getDate();
    this.tickets = [];
    this.lastFour = [];

    let data = require("../data/data.json");

    if (data.today === this.today) {
      this.last = data.last;
      this.tickets = data.tickets;
      this.lastFour = data.lastFour;
    } else {
      this.restartCountdown();
    }
  }

  next = () => {
    this.last += 1;
    let ticket = new Ticket(this.last, null);
    this.tickets.push(ticket);
    this.recordFile();
    return `Ticket ${this.last}`;
  };

  getCurrentState = () => {
    return `Ticket ${this.last}`;
  };

  getLastTickets = () => {
    return this.lastFour;
  };

  handleTicket = (desktop) => {
    if (this.tickets.length === 0) {
      return "There's no current tickets";
    }

    let ticketNumber = this.tickets[0].id;
    this.tickets.shift();

    let resolveTicket = new Ticket(ticketNumber, desktop);
    console.log(resolveTicket);
    console.log(this.lastFour)
    this.lastFour.unshift(resolveTicket);
    if (this.lastFour.length > 4) {
      this.lastFour.splice(-1, 1);
    }

    console.log("ULTIMOS 4");
    console.log(this.lastFour);
    this.recordFile();
    return resolveTicket;
  };

  recordFile = () => {
    let jsonData = {
      last: this.last,
      today: this.today,
      tickets: this.tickets,
      lastFour: this.lastFour,
    };
    const jsonDataString = JSON.stringify(jsonData);
    fs.writeFileSync("./server/data/data.json", jsonDataString);
  };

  restartCountdown = () => {
    this.last = 0;
    this.tickets = [];
    this.lastFour = [];
    console.log("Init system");
    this.recordFile();
  };
}

module.exports = {
  TicketControl,
};
