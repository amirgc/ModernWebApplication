"use strict";
var express = require("express");
var router = express.Router();
const MongoCLient = require("mongodb").MongoClient;
const client = new MongoCLient("mongodb://localhost:27017");
var url = require("url");

router.post("/", function(req, res, next) {
  client.connect(function(err) {
    console.log(req.body);
    const db = client.db("waphomework");
    db.collection("locations").insert(req.body);
    res.send(req.body)
  });
});

router.get("/", function(req, res, next) {
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
 
  client.connect(function(err) {
    const db = client.db("waphomework");
    var col = db.collection("locations");
    //col.createIndex({ location: "2d" });
    col
      .find({ location: { $near: [parseFloat(query.long),parseFloat(query.lat)] } })
      .sort({ location: 1 })
      .limit(3)
      .toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
      });
  });
});

module.exports = router;
