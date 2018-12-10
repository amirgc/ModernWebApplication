var express = require("express");
var router = express.Router();
const axios = require("axios");

var getUsers = function(numberOfUsers, callback) {
  axios
    .get("https://randomuser.me/api/?results=" + numberOfUsers)
    .then(data => {
      return callback(null, data.data);
    })
    .catch(error => {
      callback(error.message);
    });
};

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/api", function(req, res, next) {
  let page = req.query.results;
  getUsers(page, function(error, users) {
    if (error) {
      return next(error);
    } else {
      console.log(users);
      res.setHeader("link", `</p=${parseFloat(page)+1}>`, (rel = "next"));
      res.set("Cache-Control", "private,max-age=86400");
      return res.send(users);
    }
  });
});

module.exports = router;
