const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// Listener

myEmitter.on("birthday", () => {
  console.log("Happy Birthday To You");
});

myEmitter.on("birthday", (gift) => {
  console.log(`I'll bring ${gift} for you`);
});

myEmitter.emit("birthday", "Watch");
