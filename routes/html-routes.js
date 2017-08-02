var path = require("path");

modeule.exports = function(app) {


//main page landing
	app.get("/", function(req, res) {
		res.sendfile(path.join(__dirname, "../views/landing.html"));
	});


	app.get("/index", function(req, res) {
		res.sendFile(path.join(__dirname, "../index.html"))
	});

};