const fs = require("fs");

// Reading text asynchronously

fs.readFile("./texts/read.txt", "utf-8", (err, data) => {
  if (err) {
    throw Error("Error in reading text");
  }
  // console.log(data);

  // Writing text asynchronously

  fs.writeFile(
    "./texts/written2.txt",
    data + "This is the new data added",
    "utf-8",
    (err) => {
      if (err) {
        throw Error("Error in writing data");
      }
    }
  );
});

console.log("loading");
