var db = require("..models");

module.exports = function(app) {

	app.get(".my-info-1", function(req, res) {
		db.User.findAll({}).then(function(dbUser) {

			res.json(dbdatabasename);
		});
	});

app.post("/api/workoutname", function(req, res) {

	db.userData.create({

		text: req.body."tabledata"
		type: req.body."tabledata"
	}).then(function(dbuserData) {

		res.json(dbuserData);
	});

	
});

app.put("/api/workoutname", function(req, res) {


})


