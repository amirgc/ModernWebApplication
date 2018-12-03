var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resourc dsdsf');
});

router.get('/test', function(req, res, next) {
  // var id = request.params.results;
  // console.log(id);
  console.log('test')
  res.render('index', { title: 'Express' });
});

module.exports = router;
