var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator/check");

let user = [{ id: 1, name: "amir", course: "CS572", grade: 95 }];
/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send(user);
});
router.post("/", [check("name").isLength({ min: 5 })], function(
  req,
  res,
  next
) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  console.log(req.body);
  user.push(req.body);
  res.send("Successfully added user");
});
router.put("/:id", function(req, res, next) {
  console.log(req.params.id, req.body);
  res.send("Sucessfully updated");
});
router.delete("/:id", function(req, res, next) {
  console.log(req.params.id);
  res.send("Successfully deleted");
});

module.exports = router;
