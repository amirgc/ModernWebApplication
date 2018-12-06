"use strict";
var express = require("express");
var router = express.Router();
const MongoCLient = require("mongodb").MongoClient;
const client = new MongoCLient("mongodb://localhost:27017");
var url = require("url");

router.post("/", function(req, res, next) {
  client.connect(function(err) {
    console.log(req.body);
    const db = client.db("rms");
    db.collection("addresses").insert(req.body);
    res.send(req.body);
  });
});

router.get("/", function(req, res, next) {
  client.connect(function(err) {
    const db = client.db("rms");
    var col = db.collection("addrses ");
    //col.createIndex({ location: "2d" });
    col
      .aggregate([{ $group: { _id: "$_id", total: { $sum: "$pop" } } }])
      .toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
      });
  });
});

module.exports = router;
