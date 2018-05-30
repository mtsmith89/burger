var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  cat.all(function(data) {
    var hbsObject = {
      cats: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  cat.create([
    "name"
  ], [
    req.body.name
  ], function(result) {
    res.json({ id: result.insertId });
  });
});



module.exports = router;