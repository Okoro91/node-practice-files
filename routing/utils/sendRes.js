export const sendRes = (res, statusCode, contentType, data) => {
  res.setHeader("Content-Type", contentType);
  res.statusCode = statusCode;
  res.end(data);
};
