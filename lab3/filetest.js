var fs = require("fs");

fs.writeFile("test.txt", "Hello world", "utf8", function(err, data) {
  setTimeout(() => {
    console.log("timeout");
  }, 0);
  setImmediate(() => {
    console.log("imm");
  });
  process.nextTick(() => {
    console.log("ti");
  });
});
