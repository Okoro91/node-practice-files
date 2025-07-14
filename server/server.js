import http from "node:http";

const PORT = 8000;

const server = http.createServer((req, res) => {
  res.write("we are write something now ccan it \n");
  res.end("hello mr sevrer how are today", "utf8", () => {
    console.log("end of server life");
  });
});

server.listen(PORT, () => console.log(`server runing on port: ${PORT}`));
