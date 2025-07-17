import http from "node:http";
import fs from "node:fs";

const PORT = 8000;

const __dirname = import.meta.dirname;
const file = "public/index.html";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  fs.readFile(file, (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.statusCode = 500;
      res.setHeader("Content-Type", "text/plain");
      res.end("Error loading the page.");
      return;
    }

    res.end(data);
  });
});

server.listen(PORT, () => console.log(`connected on port ${PORT}`));
