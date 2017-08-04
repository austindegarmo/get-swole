var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/index", function(req, res) {
    var query = {};
    if (req.query.exercise_id) {
      query.exerciseId = req.query.exercise_id;
    }
    db.ArmExercise.findAll({
      where: query
    }).then(function(dbPost) {
      console.log(dbPost);
      res.json(dbPost);
    });
  });

  // Get rotue for retrieving a single post
  app.get("/index/:id", function(req, res) {
    db.ArmExercise.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      console.log(dbPost);
      res.json(dbPost);
    });
  });

  // POST route for saving a new exercise
  app.post("/index", function(req, res) {
    db.ArmExercise.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // DELETE route for deleting posts
  app.delete("/index/:id", function(req, res) {
    db.ArmExercise.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // PUT route for updating posts
  app.put("/index", function(req, res) {
    db.ArmExercise.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
        res.json(dbPost);
      });
  });
};

