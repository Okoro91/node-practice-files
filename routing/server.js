import http from "node:http";

import { serverStatic } from "./utils/serverStatic.js";
import { getData } from "./utils/getData.js";

const PORT = 7000;

const __dirname = import.meta.dirname;

console.log(await getData());

const server = http.createServer(async (req, res) => {
  await serverStatic(req, res, __dirname);
});

server.listen(PORT, () => console.log(`server life at: ${PORT}`));
