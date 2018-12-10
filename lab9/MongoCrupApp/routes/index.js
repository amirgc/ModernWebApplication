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
    var col = db.collection("addresses");
    //col.createIndex({ location: "2d" });
    col
      //.aggregate([{ $match: { state: "IA" } }])
      .aggregate([
        {
          $group: {
            _id: { state: "$state", city: "$city" },
            pop: { $sum: "$pop" }
          }
        },
        { $sort: { "_id.state": 1, pop: -1 } },
        { $group: { _id: { state: "$_id.state" }, pop: { $first: "$pop" } } }
      ])
      //.find({})
      .toArray(function(err, result) {
        if (err) throw err;
        console.log("called", result);
        res.send(result);
      });
  });
});

module.exports = router;
