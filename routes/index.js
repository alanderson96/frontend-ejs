var express = require("express");
var router = express.Router();
const rick = require("../rick.json");

/* GET home page. */
router.get("/", function (req, res, next) {
  // res.render("index");
  res.render('index', rick);
});

module.exports = router;
