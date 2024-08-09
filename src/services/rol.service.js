import { rolModel } from "../models/mongo/rol.model.js";

export default class rolService {
  static async getAll() {
    return await rolModel.find();
  }

  static async create({ rol }) {
    console.Console("serv rol", rol);
    const { description } = rol;
    console.Console("serv description", description);
    description;
    const objRol = new rolModel({
      description,
    });
    await objRol.save();

    return objRol;

    // return await rolModel.find();

    //const rol = "llega";
    //	console.Console("serv rol", rol);
    //const { description } = rol;
    //	console.Console("serv ", rol);
    /*
		const objRol = new rolModel({
			description: rol.description,
		});
		await objRol.save();
*/
    //	return rol;
  }
}
