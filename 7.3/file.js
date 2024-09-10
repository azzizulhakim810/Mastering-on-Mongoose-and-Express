const fs = require("fs");

// Working Syncronously

// At first
// Reading a file text
const readText = fs.readFileSync("./texts/read.txt", "utf-8");

// Then
// Writing a text
const writtenText = fs.writeFileSync(
  "./texts/written.txt",
  readText + "The is the written text"
);

console.log(writtenText);
