"use strict";
var express = require("express");
var router = express.Router();
const MongoCLient = require("mongodb").MongoClient;
const client = new MongoCLient("mongodb://localhost:27017");

/* GET home page. */
router.get("/", function(req, res, next) {
  client.connect(function(err) {
    const db = client.db("rms");
    db.collection("restaurants")
      .find({}).project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1,_id:0 })
      .toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
      });
  });
});

module.exports = router;
