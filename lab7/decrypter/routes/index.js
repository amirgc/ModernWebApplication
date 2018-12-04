var express = require("express");
var router = express.Router();
const MongoCLient = require("mongodb").MongoClient;
const client = new MongoCLient("mongodb://localhost:27017");
const crypto = require("crypto");
const decipher = crypto.createDecipher("aes256", "asaadsaad");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/secret", function(req, res, next) {
  client.connect(function(err) {
    const db = client.db("waphomework");
    const collection = db.collection("waphomework");

    collection.findOne({}, function(err, doc) {
      //console.dir(doc.message);
      let decrypted = "";
      decipher.on("readable", () => {
        const data = decipher.read();
        if (data) decrypted += data.toString("utf8");
      });
      decipher.on("end", () => {
        console.log(decrypted);
        res.send({ decrypted });
      });
      const encrypted = doc.message;

      decipher.write(encrypted, "hex");
      decipher.end();
      client.close();
    });
  });
});

module.exports = router;
