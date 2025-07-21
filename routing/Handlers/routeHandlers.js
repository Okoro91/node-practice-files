import { getData } from "../utils/getData.js";
import { sendRes } from "../utils/sendRes.js";
import { parseJSON } from "../utils/parseJSON.js";
import { addNewSighting } from "../utils/addNewSighting.js";
import { sanitizer } from "../utils/sanitizer.js";

export const handleGet = async (res) => {
  const data = await getData();
  const content = JSON.stringify(data);
  sendRes(res, 200, "application/json", content);
};

export const handlePost = async (req, res) => {
  try {
    const parsedBody = await parseJSON(req);
    const sanitizedBody = sanitizer(parsedBody);
    await addNewSighting(sanitizedBody);
    sendRes(res, 201, "application/json", JSON.stringify(sanitizedBody));
  } catch (err) {
    sendResponse(res, 400, "application/json", JSON.stringify({ error: err }));
  }
};
