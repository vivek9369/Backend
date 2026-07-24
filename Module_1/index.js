const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello this is server, 8080");
});

server.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});