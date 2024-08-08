import { rolModel } from "../models/mongo/rol.model.js";

export default class rolService {
  static async getAll() {
    return await rolModel.find();
  }
  static async create({ rol }) {
    console.Console("serv rol", rol);
    // const { description } = rol;

    const objRol = new rolModel({
      rol,
    });
    await objRol.save();

    return objRol;
  }
}
