var orm = require("../config/orm.js");

var burger = {
	all: function(cb) {
		orm.all("burgers", function(res) {
			cb(res);
		});
	},
	newBurger: function(val_burger, val_date, cb) {
		orm.newBurger("burgers", val_burger, val_date, function(res) {
			cb(res);
		});
	},
	devourBurger: function(objColVals, condition, cb) {
		orm.devourBurger("burgers", objColVals, condition, function(res){
			cb(res);
		});
	},
	delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;

