//import { rolModel } from "../models/local/mongo/rol.name";

export default class rolService {
	static async getAll() {
		return await { name: "Seba", apellido: "Amerio" };
	}
}

export const getbyId_serv = (pId) => {
	return `Parametro id : ${pId}`;
};
