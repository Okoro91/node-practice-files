import http from "node:http";
import { getDataFromDB } from "./database/db.js";
import { sendJSON } from "./modules/sendJSON.js";
import { dataPath } from "./modules/dataPath.js";

const PORT = 8000;

const server = http.createServer(async (req, res) => {
  const getData = await getDataFromDB();

  if (req.url === "/api" && req.method === "GET") {
    const destinations = JSON.stringify(getData);
    sendJSON(res, 200, destinations);
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
