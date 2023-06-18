const User = require("../models/User");

const getUsers = async (req, res) => {
	try {
		const users = await User.find();
		if (users) {
			res.status(200).json({ message: "users list", users });
		} else {
			res.status(204).json({ message: "currently not users" });
		}
	} catch (error) {
		res.status(200).json({ message: "error in employee find ", error });
	}
};

const getSingleUser = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (user) {
			res.status(200).json({ message: "this is the user", user });
		} else {
			res.status(204).json({ message: "user not available" });
		}
	} catch (error) {
		res.status(500).json({ message: "internal server error", error });
	}
};

const createUser = async (req, res) => {
	try {
		const user = await User.create({
			name: req.body.name,
			age: req.body.age,
			nic: req.body.nic,
			phone: req.body.phone,
			profession: req.body.profession,
		});
		if (user) {
			res.status(201).json({ message: "user successfully created" });
		}
	} catch (error) {
		res.status(500).json({ error: "user not created", error });
	}
};

const updateUser = async (req, res) => {
	try {
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
			}
		);
		if (updatedUser) {
			res.status(200).json({
				message: "user successfully updated",
				updatedUser,
			});
		} else {
			res.status(204).json({ message: "user not available" });
		}
	} catch (error) {
		res.status(500).json({ message: "internal server error", error });
	}
};

const deleteUser = async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);
		if (user) {
			res.status(200).json({
				message: "user deleted successfully",
				user,
			});
		} else {
			res.status(404).json({ message: "user not found" });
		}
	} catch (error) {
		res.status(500).json({ message: "user deleted fail", error });
	}
};

module.exports = {
	getUsers,
	getSingleUser,
	createUser,
	updateUser,
	deleteUser,
};
