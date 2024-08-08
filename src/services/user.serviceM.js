import { userModel } from "../models/mongo/user.model";

export default class userService {
  static async getAll() {
    const user = await userModel.find();
    return user;
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
