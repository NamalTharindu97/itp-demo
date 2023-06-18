const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
	name: {
		type: String,
	},
	age: {
		type: Number,
	},
	nic: {
		type: String,
	},
	phone: {
		type: Number,
	},
	profession: {
		type: String,
	},
});

module.exports = mongoose.model("User", UserSchema);
