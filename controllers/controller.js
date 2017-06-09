var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();


//Display all current burgers
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//Post a new burger
router.post("/", function(req, res) {
  burger.newBurger([
    "burger_name"
  ], [
    req.body.burger
  ], function() {
    res.redirect("/");
  });
});

//Move Burger to "Devoured"

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.devourBurger({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

//Delete Burger From List

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    res.redirect("/");
  });
});

module.exports = router;