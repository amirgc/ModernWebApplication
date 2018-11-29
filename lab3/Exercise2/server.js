var http = require("http"),
  fileSystem = require("fs"),
  path = require("path");

var server = http.createServer();

// server.on("request", function(req, res) {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.write("hello World");
//   res.end();
// });
// server.listen(4000);

// server.on("request", function(request, response) {
//   var filePath = path.join(__dirname, "test.mp4");
//   console.log(filePath);
//   var stat = fileSystem.statSync(filePath);

//   response.writeHead(200, {
//     "Content-Type": "video/mp4",
//     "Content-Length": stat.size
//   });
//   var readStream = fileSystem.createReadStream(filePath);
//   readStream.pipe(response);
// });

server.on("request", function(request, response) {
  var filePath = path.join(__dirname, "test.mp4");
  console.log(filePath);
  var stat = fileSystem.statSync(filePath);
  var buf = Buffer.from(fileSystem.statSync(filePath));
  response.writeHead(200, {
    "Content-Type": "video/mp4",
    "Content-Length": stat.size
  });
  response.write(buf)
});

server.listen(4000);
