import { userModel } from "../models/mongo/user.model.js";

export default class userService {
	static async getAll() {
		return await userModel.find();
	}

	static async create(user) {
		const { name, lastname, date_birth, rol } = user;

		const objUser = new userModel({
			name,
			lastname,
			date_birth,
			rol,
		});
		await objUser.save();
		return objUser;
	}
}
