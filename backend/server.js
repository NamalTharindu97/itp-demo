const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const DbConnection = require("./config/DbConnection");

const PORT = process.env.PORT || 5001;
DbConnection();

app.listen(PORT, () => {
	console.log(`Server Runnig on PORT ${PORT}`);
});
