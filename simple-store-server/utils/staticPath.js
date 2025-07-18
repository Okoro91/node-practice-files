import fs from "node:fs";
import path from "node:path";

export const staticPath = (filePath, res) => {
  let contentType = "text/html";
  const extname = String(path.extname(filePath)).toLowerCase();

  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
    case ".jpeg":
      contentType = "image/jpeg";
      break;
    case ".gif":
      contentType = "image/gif";
      break;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.end(
          "<h1>404 Not Found</h1><p>The requested file could not be found.</p>"
        );
      } else {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", contentType);
      res.end(data);
    }
  });
};
