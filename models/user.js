var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		email: {
			type: DataTypes.STRING,
			unique: true,
			validate: {
				isEmail: true,
				notNull: true,
				notEmpty: true
			}
		},
		password: {
			type: DataTypes.STRING,
			validate: {
				notNull: true,
				notEmpty: true
			}
		}

	}, {

		instanceMethods: {
			validPassword: function(password) {
				return bcrpyt.compareSync(password, this.password);
			}
		},

		hooks: {
			beforeCreate: function(user, options, cb) {
				user.password = bcrpyt.hashSync(user.password, bcrpyt.genSaltSync(10), null);
				cb(null, options);
			}
		}
	});

return User;}