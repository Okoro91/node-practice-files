import path from "node:path";
import fs from "node:fs/promises";
import { sendRes } from "./sendRes.js";

export const serverStatic = async (req, res, basedir) => {
  const filePath = path.join(basedir, "public", "index.html");
  try {
    const content = await fs.readFile(filePath);
    sendRes(res, 200, content);
  } catch (err) {
    console.log(err);
  }
};
