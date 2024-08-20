import { userModel } from "../models/mongo/user.model.js";

export default class userService {
	static async getAll() {
		return await userModel.find();
	}

	static async create({ user }) {
		console.log("serv : ", user);
		const { name, lastname, date_birth, rol, password } = user;

		const objUser = new userModel({
			name,
			lastname,
			date_birth,
			rol,
			password,
		});
		await objUser.save();
		return objUser;
	}
}
