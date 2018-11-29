var http = require("http"),
  fileSystem = require("fs"),
  path = require("path");

var server = http.createServer();

server.on("request", function(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("hello World");
  res.end();
});
server.listen(4000);

server.on("request", function(request, response) {
  var filePath = path.join(__dirname, "test.mp4");
  response.writeHead(200, {
    "Content-Type": "video/mp4"
  });
  var readStream = fileSystem.createReadStream(filePath);
  readStream.pipe(response);
});

server.on("request", function(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  let responseFile = fileSystem.readFile(
    path.join(__dirname, "randomtext_lorem_p.txt"),
    "utf8",
    function(error, fileData) {
      res.write(fileData);
      res.end();
    }
  );
});

server.listen(4000);
