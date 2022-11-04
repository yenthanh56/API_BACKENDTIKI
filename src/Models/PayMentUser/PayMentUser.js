const mongoose = require("mongoose");

const UserPayMent = new mongoose.Schema(
	{
		username: { type: String, require: true, unique: true },
		address: {
			type: String,
			require: true,
			unique: true,
			minlength: 20,
			maxlength: 100,
		},
		city: {
			type: String,
			require: true,
			unique: true,
			minlength: 20,
			maxlength: 100,
		},
		district: {
			type: String,
			require: true,
			unique: true,
		},
		ward: {
			type: String,
			require: true,
			unique: true,
		},
		phone: {
			type: Number,
			require: true,
			unique: true,
			minlength: 11,
			maxlength: 11,
		},

		titleProduct: [
			{
				type: String,
				require: true,
			},
		],
		amount: [
			{
				type: Number,
				require: true,
			},
		],
		priceItem: [
			{
				type: String,
				require: true,
			},
		],
		priceTotal: {
			type: String,
			require: true,
		},
		image: [
			{
				type: String,
				require: true,
			},
		],
		paymentBy: {
			type: String,
			require: true,
		},
	},
	{ timestamps: true }
);

// const letData = mongoose.model("UserPayMent", UserPayMent);
const UserDataOrder = mongoose.model("UserPayMent", UserPayMent);
module.exports = UserDataOrder;
