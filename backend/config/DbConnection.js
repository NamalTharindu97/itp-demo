const mongoose = require("mongoose");

const DbConnection = async () => {
	try {
		const connect = await mongoose.connect(process.env.CONNECTION_STRING);
		console.log("mongo db connect");
	} catch (error) {
		console.log(error);
	}
};

module.exports = DbConnection;
