import { rolModel } from "../models/mongo/rol.model.js";

export default class rolService {
	static async getAll() {
		return await rolModel.find();
	}

	static async create({ rol }) {
		const existRol = await rolModel.find({ description: rol.description });
		if (existRol.length > 0) throw "Item exists";

		const objRol = new rolModel(rol);
		await objRol.save();

		return objRol;
	}

	static async remove({ id }) {
		const obj = await rolModel.findByIdAndDelete(id, { new: true });
		return obj;
	}

	static async edit({ id, rol }) {
		console.log("servi");
		const { description } = rol;

		const objRol = await rolModel.findByIdAndUpdate(id, { description }, { new: true });
		// Si no actualiza devuelve null
		return objRol;
	}
}
