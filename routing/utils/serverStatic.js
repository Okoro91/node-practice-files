import path from "node:path";
import fs from "node:fs/promises";
import { sendRes } from "./sendRes.js";
import { getContentType } from "./getContentType.js";

export const serverStatic = async (req, res, basedir) => {
  const baseFile = path.join(basedir, "public");
  const filePath = path.join(
    baseFile,
    req.url === "/" ? "index.html" : req.url
  );

  const ext = path.extname(filePath);
  const contentType = getContentType(ext);

  try {
    const content = await fs.readFile(filePath);
    sendRes(res, 200, content, contentType);
  } catch (err) {
    console.log(err);
  }
};
