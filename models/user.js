var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		email: {
			type: DataTypes.STRING,
			allownull: false,
			validate: {
				isEmail: true
			}
		},
		password: {
			type: DataTypes.STRING,
			allownull: false
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
return User;

}