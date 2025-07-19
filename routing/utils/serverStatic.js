import path from "node:path";
import fs from "node:fs/promises";
import { sendRes } from "./sendRes.js";
import { getContentType } from "./getContentType.js";

export const serverStatic = async (req, res, basedir) => {
  const publicDir = path.join(basedir, "public");
  const filePath = path.join(
    publicDir,
    req.url === "/" ? "index.html" : req.url
  );

  const ext = path.extname(filePath);
  const contentType = getContentType(ext);

  try {
    const content = await fs.readFile(filePath);
    sendRes(res, 200, contentType, content);
  } catch (err) {
    if (err.code === "ENOENT") {
      const content = await fs.readFile(path.join(publicDir, "404.html"));
      sendRes(res, 404, "text/html", content);
    } else {
      sendRes(
        res,
        500,
        "text/html",
        `<html><h1>Server Error: ${err.code}</h1></html>`
      );
    }
  }
};
