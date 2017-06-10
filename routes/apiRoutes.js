var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

//Display All
	app.get("api/all", function(req, res) {
		var query = {};
		if (req.query.burger_name) {
			query.Burger_name = req.query.burger_name;
		}
		db.Burgers.findAll ({
			where: query
		}).then(function(burgerDb){
			res.json(burgerDb);
		});
	});

//Create New Burger

  app.post("/api/posts", function(req, res) {
    db.Burgers.create(req.body).then(function(burgerDb) {
      res.json(burgerDb);
    });
  });

  //Update

   app.put("/api/posts", function(req, res) {
    db.Burgers.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(burgerDb) {
        res.json(burgerDb);
      });
 	 });


  //Delete Burger
   app.delete("/api/posts/:id", function(req, res) {
    db.Burgers.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(burgerDb) {
      res.json(burgerDb);
    });
  });
};