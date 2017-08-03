var db = require("..models");

module.exports = function(app) {

	app.get(".my-info-1", function(req, res) {
		db."tablename".findAll({}).then(function(dbUser) {

			res.json(dbdatabasename);
		});
	});

app.post("/api/workoutname", function(req, res) {

	db.userData.create({

		text: req.body."tabledata"
		type: req.body."tabledata"
	}).then(function(db"dbname") {

		res.json(db"dbname");
	});

	
});

app.put("/api/workoutname", function(req, res) {


})

app.post("/login", )



<<<<<<< HEAD
=======

>>>>>>> 2d9cd2ad27eb61e0a8817574b9c8269888607db2
// changing the opening to a question mark for get, so user input can be reflective
// styling for index page
// look at models after pulling

}