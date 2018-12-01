var fs = require("fs"),
  path = require("path");

readFileAsync = function(pathName) {
  fs.readFile(pathName, 'utf8',function(err, buffer) {
    process.send(buffer);
  });
};

process.on("message", pat => {
  console.log("message on child", pat);
  var filePath = path.join(__dirname, "files\\file.txt");
  readFileAsync(filePath);
});
