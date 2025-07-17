import http from "node:http";

const PORT = 7000;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  res.end("<html><h1>The server is working</h1></html>");
});

server.listen(PORT, () => console.log(`server life at: ${PORT}`));
