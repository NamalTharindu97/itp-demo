const express = require("express");
const {
	getUsers,
	getSingleUser,
	createUser,
	updateUser,
	deleteUser,
} = require("../controllers/UserController");
const Router = express.Router();

Router.route("/").get(getUsers);

Router.route("/getSingle/:id").get(getSingleUser);

Router.route("/createUser").post(createUser);

Router.route("/updateUser/:id").put(updateUser);

Router.route("/deleteUser/:id").delete(deleteUser);

module.exports = Router;
