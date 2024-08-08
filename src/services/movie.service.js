import { movies } from "../config/local.js";
import { types } from "../config/local.js";
import crypto from "node:crypto";

export default class movieService {
  static async getAll() {
    const data = await movies.data;
    return data;
  }

  static async getById({ id }) {
    const data = await movies.data.find((item) => item.id === id);
    return data;
  }

  static async getFilterTitle({ title }) {
    // Busqueda que inicien con el titulo
    const data = await movies.data.filter((item) =>
      item.title.toLowerCase().startsWith(title.toLowerCase())
    );

    // Busqueda que contenga el titulo
    /*
		const dataConteiner = await movies.data.filter((item) =>
		item.title.toLowerCase().includes(title.toString().toLowerCase())
		);
	*/
    return data;
  }

  static async getFilterType({ type }) {
    const data = await types.data.find((item) => item.description === type);

    if (data) {
      const movieTypes = await movies.data.filter(
        (item) => item.type == data.id
      );
      return movieTypes;
    } else throw "Not Found";
  }

  static async create({ movie }) {
    const dataIndex = movies.data.findIndex(
      (item) => item.title === movie.title
    );

    if (dataIndex != -1) throw "Item exists";

    const newMovie = {
      id: crypto.randomUUID().toString(),
      ...movie,
    };

    await movies.data.push(newMovie);
    return newMovie;
  }

  static async update({ movie }) {
    const dataIndex = await movies.data.findIndex(
      (item) => item.id === movie.id
    );

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
