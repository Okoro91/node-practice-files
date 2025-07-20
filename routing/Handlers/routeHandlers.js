import { getData } from "../utils/getData.js";
import { sendRes } from "../utils/sendRes.js";

export const handleGet = async (res) => {
  const data = await getData();
  const content = JSON.stringify(data);
  sendRes(res, 200, "application/json", content);
};

export const handlePost = async (req, res) => {
  console.log("post in");
};
