const getUsers = (req, res) => {
	res.status(200).json(
		"this is the route of get all the users000000000000000"
	);
};

const getSingleUser = (req, res) => {
	res.status(200).json("this is the route of get single user route");
};

const createUser = (req, res) => {
	res.status(200).json("this is the route of create user");
};

const updateUser = (req, res) => {
	res.status(200).json("this is the route of the update user");
};

const deleteUser = (req, res) => {
	res.status(200).json("this is the delete route");
};

module.exports = {
	getUsers,
	getSingleUser,
	createUser,
	updateUser,
	deleteUser,
};
