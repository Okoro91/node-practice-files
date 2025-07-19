export const sendRes = (res, statusCode, data, contentType) => {
  res.setHeader("Content-Type", contentType);
  res.statusCode = statusCode;
  res.end(data);
};
