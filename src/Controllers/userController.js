const User = require("../Models/User");

const userController = {
	getAllUser: async (req, res) => {
		try {
			const user = await User.find();
			return res.status(200).json(user);
		} catch (error) {
			return res.status(500).json(error);
		}
	},
	deleteId: async (req, res) => {
		try {
			const userId = await User.findByIdAndDelete(req.params.id);
			return res.status(200).json(userId);
		} catch (error) {
			return res.status(403).json("you're not allowed to delete other");
		}
	},
};

module.exports = userController;
