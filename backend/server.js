const express = require("express");
const app = express();

const PORT = 5000 || 5001;

app.listen(PORT, () => {
	console.log(`Server Runnig on PORT ${PORT}`);
});
