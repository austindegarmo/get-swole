module.exports = function(sequelize, DataTypes) {
  var chestExercise = sequelize.define("chest_exercise", {
    title: {
    exercise_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    weight_1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    set_1: {
      type: DataTypes.INTEGER,
      isNumber: true,
      isInt: true
    }, 
    weight_2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    set_2: {
      type: DataTypes.INTEGER,
      isNumber: true,
      isInt: true
    },
    weight_3: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    set_3:{
      type: DataTypes.INTEGER,
      isNumber: true,
      isInt: true
    }
  });
  return chestExercise;
};