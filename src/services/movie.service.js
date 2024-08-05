import { movies } from "../config/local.js";
import crypto from "node:crypto";

export default class movieService {
	static async getAll() {
		const data = await movies.data;
		return data;
	}

	static async getById(pId) {
		const data = await movies.data.find((item) => item.id === pId);
		return data;
	}

	static async getFilterTitle(pTitle) {
		// Busqueda que inicien con el titulo
		const data = await movies.data.filter((item) =>
			item.title.toLowerCase().startsWith(pTitle.toLowerCase())
		);

		// Busqueda que contenga el titulo
		const dataConteiner = await movies.data.filter((item) =>
			item.title.toLowerCase().includes(pTitle.toLowerCase())
		);

		return data;
	}

	static async create({ movie }) {
		const dataIndex = movies.data.findIndex((item) => item.title === movie.title);
		if (dataIndex != -1) throw "Item exists";
		const newMovie = {
			id: crypto.randomUUID().toString(),
			...movie,
		};

		await movies.data.push(newMovie);
		return newMovie;
	}

	static async update({ movie }) {
		const dataIndex = await movies.data.findIndex((item) => item.id === movie.id);

		if (dataIndex === -1) throw "Not Found";

		const updateMovie = {
			...movies.data[dataIndex],
			...movie,
		};
		movies.data[dataIndex] = updateMovie;

		/*
    movies.data[dataIndex].title = movie.title;
    movies.data[dataIndex].year = movie.year;
    movies.data[dataIndex].genre = movie.genre;
*/
		return updateMovie;
	}

	static async remove({ id }) {
		const dataIndex = await movies.data.findIndex((item) => item.id === id);
		if (dataIndex === -1) return false;
		movies.data.splice(dataIndex, 1);
		return true;
	}
}
