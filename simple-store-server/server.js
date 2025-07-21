import http from "node:http";
import path from "node:path";
import fs from "node:fs/promises";
import { fileType } from "./utils/fileType.js";

const PORT = 8000;

const PUBLIC_DIR = path.join(process.cwd(), "public");

const server = http.createServer(async (req, res) => {
  if (req.url === "/favicon.ico") {
    res.writeHead(204, { "Content-Type": "image/x-icon" });
    res.end();
    return;
  }

  let filePath = path.join(PUBLIC_DIR, req.url);

  if (req.url === "/") {
    filePath = path.join(PUBLIC_DIR, "index.html");
  }

  const contentType = fileType(filePath);
  const content = await fs.readFile(filePath);

  res.statusCode = 200;
  res.setHeader("Content-Type", contentType);
  res.end(content);
});

server.listen(PORT, () => console.log(`connected on port ${PORT}`));
