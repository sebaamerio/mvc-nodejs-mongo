import { userModel } from "../models/mongo/user.model.js";

export default class userService {
	static async getAll() {
		const data = await userModel.aggregate([
			{
				$lookup: {
					from: "rols",
					localField: "rol",
					foreignField: "_id",
					as: "rolMAP",
				},
			},
		]);

		return data;
	}

	static async getAllpagination({ pagination }) {
		{
			limit, skip;
		}

		const data = await userModel
			.aggregate([
				{
					$lookup: {
						from: "rols",
						localField: "rol",
						foreignField: "_id",
						as: "rolMAP",
					},
				},
			])
			.skip(skip)
			.limit(limit);

		return data;
	}

	static async create({ user }) {
		const { name, lastname, email, date_birth, rol, password } = user;

		const existEmail = await userModel.find({ email });
		if (existEmail.length > 0) throw "Email exists";

		const objUser = new userModel({
			name,
			lastname,
			email,
			date_birth,
			rol,
			password,
		});
		await objUser.save();
		return objUser;
	}

	static async remove({ id }) {
		const obj = await userModel.findByIdAndDelete(id, { new: true });
		return obj;
	}
}
