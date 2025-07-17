import http from "node:http";
import { getDataFromDB } from "./database/db.js";
import { sendJSON } from "./modules/sendJSON.js";
import { dataPath } from "./modules/dataPath.js";
import { dataQuery } from "./modules/dataQuery.js";

const PORT = 8000;

const server = http.createServer(async (req, res) => {
  const getData = await getDataFromDB();

  const urlObj = new URL(req.url, `http://${req.headers.host}`);

  const queryObj = Object.fromEntries(urlObj.searchParams);

  if (urlObj.pathname === "/api" && req.method === "GET") {
    let filteredData = dataQuery(getData, queryObj);
    sendJSON(res, 200, filteredData);
  } else if (req.url.startsWith("/api/continent") && req.method === "GET") {
    const continent = req.url.split("/").pop();
    const filteredData = dataPath(getData, "continent", continent);
    sendJSON(res, 200, filteredData);
  } else if (req.url.startsWith("/api/country") && req.method === "GET") {
    const country = req.url.split("/").pop();
    const filteredData = dataPath(getData, "country", country);
    sendJSON(res, 200, filteredData);
  } else {
    const error = {
      error: "not found",
      message: "The requested route does not exist",
    };
    sendJSON(res, 404, error);
  }
});

server.listen(PORT, () => console.log(`server runing on port: ${PORT}`));
