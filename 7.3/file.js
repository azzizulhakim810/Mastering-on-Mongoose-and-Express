const fs = require("fs");

// Working Syncronously

// At first
// Reading a file text
const readText = fs.readFileSync("./texts/read.txt", "utf-8");

// console.log(readText);

// Then
// Writing a text
const writtenText = fs.writeFileSync(
  "./texts/newlyAdded",
  readText +
    "Newly Added Newly Added Newly Added Newly Added Newly Added Newly Added"
);

console.log(writtenText);
