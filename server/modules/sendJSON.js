export const sendJSON = (res, statusCode, dataload) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.statusCode = statusCode;
  res.end(JSON.stringify(dataload));
};
