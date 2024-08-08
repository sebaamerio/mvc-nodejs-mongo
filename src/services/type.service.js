import { types } from "../config/local.js";

export default class typeService {
  static async getAll() {
    return types.data;
  }
  static async getById({ id }) {
    const data = await types.data.find((item) => item.id === id);
    return data;
  }
}
