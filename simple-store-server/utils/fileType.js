import path from "node:path";

export const fileType = (filePath) => {
  const extname = String(path.extname(filePath)).toLowerCase();

  switch (extname) {
    case ".js":
      return "text/javascript";

    case ".css":
      return "text/css";

    case ".json":
      return "application/json";

    case ".png":
      return "image/png";

    case ".jpg":
    case ".jpeg":
      return "image/jpeg";

    case ".gif":
      return "image/gif";
    default:
      return "text/html";
  }
};
