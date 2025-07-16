export const sendJSON = (res, statusCode, dataload) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = statusCode;
  res.end(JSON.stringify(dataload));
};
