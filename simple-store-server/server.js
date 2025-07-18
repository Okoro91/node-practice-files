import http from "node:http";
import path from "node:path";
import { staticPath } from "./utils/staticPath.js";

const PORT = 8000;

const PUBLIC_DIR = path.join(process.cwd(), "public");

const server = http.createServer((req, res) => {
  let filePath = path.join(PUBLIC_DIR, req.url);

  if (req.url === "/") {
    filePath = path.join(PUBLIC_DIR, "index.html");
  }
  staticPath(filePath, res);
});

server.listen(PORT, () => console.log(`connected on port ${PORT}`));
