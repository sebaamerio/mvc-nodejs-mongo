import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const rolSchema = new Schema({
	id: ObjectId,
	description: {
		type: String,
		required: true,
		max: 50,
	},
});

export const rolModel = mongoose.model("Rol", rolSchema);
