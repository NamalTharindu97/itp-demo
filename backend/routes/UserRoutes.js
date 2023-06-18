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

Router.route("/getSingle").get(getSingleUser);

Router.route("/createUser").post(createUser);

Router.route("/updateUser").put(updateUser);

Router.route("/deleteUser").delete(deleteUser);

module.exports = Router;
