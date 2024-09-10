// Built in module
const EventEmitter = require("events");

// Create an instance
const myEmitter = new EventEmitter();

// Listener - They are on, means they're listening.....
myEmitter.on("birthday", () => {
  console.log("Happy Birthday To You");
});

myEmitter.on("birthday", (gift) => {
  console.log(`I'll bring ${gift} for you`);
});

myEmitter.emit("birthday", "Watch");
