module.exports = function(sequelize, DataTypes) {
  var armsExercise = sequelize.define("arms_exercise", {
    title: {
      exercise_name: DataTypes.STRING,
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
  return armsExercise;
};