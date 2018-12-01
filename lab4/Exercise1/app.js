const http = require("http");
const { fork } = require("child_process");
const server = http.createServer();
const url = require("url");

server.on("request", (req, res) => {
  const myUrl = url.parse(req.url, true);
  const filePath = myUrl.query.url;
  res.writeHead(200, { "Content-Type": "text/plain" });
  const childProcess = fork("getFile.js");
  childProcess.send(filePath);
  childProcess.on("message", fileData => {
  //  console.log("return data to child 12", fileData);
    res.write(fileData);
    res.end();
  });
});

server.listen(4000);
