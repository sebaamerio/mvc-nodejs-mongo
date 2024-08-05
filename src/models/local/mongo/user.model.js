import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
	id: ObjectId,
	name: {
		type: String,
		required: true,
		min: 1,
		max: 50,
	},
	lastname: {
		type: String,
		required: true,
		min: 1,
		max: 50,
	},
	date: Date,
	rol: {
		type: Schema.Types.ObjectId,
		ref: "rol",
		requierd: true,
	},
});

export const userModel = mongoose.model("User", userSchema);
