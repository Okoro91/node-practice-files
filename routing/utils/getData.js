import path, { parse } from "node:path";
import fs from "node:fs/promises";

export const getData = async () => {
  try {
    const dataPath = path.join("data", "data.json");
    const data = await fs.readFile(dataPath);
    const parseData = JSON.parse(data);
    return parseData;
  } catch (err) {
    console.log(err);
    return [];
  }
};
