const http = require("http");
const fs = require("fs");

// Creating a server using raw node.js
const server = http.createServer();

// Listener
server.on("request", (req, res) => {
  if (req.url === "/read-file" && req.method === "GET") {
    // Streaming file reading
    // const readableStream = fs.createReadStream(__dirname + "/texts/read.txt");
    const readableStream = fs.createReadStream(
      process.cwd() + "/texts/read.txt"
    );

    readableStream.on("data", (buffer) => {
      res.write(buffer);
    });

    readableStream.on("end", () => {
      res.end("Hello from stream world!");
    });
  }
});

server.listen(5000, () => {
  console.log(`The server is running on port 5000`);
});
