export const sendRes = (res, statusCode, data) => {
  res.setHeader("Content-Type", "text/html");
  res.statusCode = statusCode;
  res.end(data);
};
