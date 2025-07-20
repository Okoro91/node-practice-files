import http from "node:http";

import { serverStatic } from "./utils/serverStatic.js";

import { handleGet } from "./Handlers/routeHandlers.js";
import { handlePost } from "./Handlers/routeHandlers.js";

const PORT = 7000;

const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
  if (req.url === "/api") {
    if (req.method === "GET") {
      return await handleGet(res);
    }
    if (req.method === "POST") {
      return await handlePost(req, res);
    }
  } else if (!req.url.startsWith("/api")) {
    return await serverStatic(req, res, __dirname);
  }
});

server.listen(PORT, () => console.log(`server life at: ${PORT}`));
