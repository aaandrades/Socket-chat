const { io } = require("../server");

io.on("connection", (client) => {
  console.log("User connected");

  client.emit("welcomeMessage", {
    message: "Hello from server",
  });

  // Detect disconnection
  client.on("disconnect", () => {
    console.log("Disconnected User");
  });

  // Listen client information
  client.on("sendMessage", (data, callback) => {
    console.log(data);
    // Emit information to everybody connected
    client.broadcast.emit("welcomeMessage", data);
    // if (message.user) {
    //   callback({
    //     message: "Everything good",
    //   });
    // } else {
    //   callback({
    //     message: "Everything bad :(",
    //   });
    // }
    // // await new Promise((resolve) => setTimeout(resolve, 2000));
  });
});
