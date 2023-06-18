const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
	{
		name: {
			type: String,
			require: true,
		},
		age: {
			type: Number,
			require: true,
		},
		nic: {
			type: String,
			require: true,
		},
		phone: {
			type: String,
			require: true,
		},
		profession: {
			type: String,
			require: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("User", UserSchema);
