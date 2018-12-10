var express = require("express");
var router = express.Router();
const axios = require('axios'); 
var url=require('url')

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resourc dsdsf");
});

router.get("/test:p", function(req, res, next) {
  var params=url.parse(res.url,true);
  console.log(params)
  axios
    .get("https://randomuser.me/api/?results=10")
    .then(data => {
      console.log(data);
      // res.writeHead(200, {'Content-Type':'application/json'});
      res.set("Cache-Control", "private,max-age=86400");
      res.json(data.data);
    })
    .catch(error => {
      res.end(error.message);
    });
});

module.exports = router;
