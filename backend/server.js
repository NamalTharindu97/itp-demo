const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const DbConnection = require("./config/DbConnection");

const PORT = process.env.PORT || 5001;
DbConnection();

app.use(express.json());
app.use("/api/v1/users", require("./routes/UserRoutes"));

app.listen(PORT, () => {
	console.log(`Server Runnig on PORT ${PORT}`);
});
