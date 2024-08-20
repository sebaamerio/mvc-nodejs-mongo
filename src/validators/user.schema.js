import { z } from "zod";

const userSchema = z.object({
	name: z
		.string({
			invalid_type_error: "Name must be a string",
			required_error: "Name is required.",
		})
		.max(50),
	lastname: z
		.string({
			invalid_type_error: "Lastname must be a string",
			required_error: "Lastname is required.",
		})
		.max(50),
	email: z.string().email({ message: "Invalid email address" }),
	date_birth: z.string().date({ message: "Invalid date address" }),
	rol: z.string().regex(/^[0-9a-f]{24}$/),
	password: z.string().max(50),
});

export function validateUser(object) {
	return userSchema.safeParse(object);
}

// password : true is opcional
export function validatePartialUser(input) {
	return userSchema.partial({ password: true }).safeParse(input);
}
