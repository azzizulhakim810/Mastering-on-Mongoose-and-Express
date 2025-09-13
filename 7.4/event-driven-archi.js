// Built in module
const EventEmitter = require("events"); // Capitalize the first letter as it's a class

// Create an instance
const myEmitter = new EventEmitter();

// emit --> listen --> call the callback

// Listener - They are on, means they're listening.....
myEmitter.on("birthday", () => {
  console.log("Happy Birthday To You");
});

myEmitter.on("birthday", (gift) => {
  console.log(`I'll bring ${gift} for you`);
});

myEmitter.emit("birthday", "Watch"); // We can pass arguments
