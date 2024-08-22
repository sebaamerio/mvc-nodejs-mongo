import { z } from "zod";

const paginationSchema = z.object({
	limit: z.string({
		required_error: "limit is required.",
	}),
	skip: z.string({
		required_error: "skip is required.",
	}),
});

export function validatePagination(object) {
	return paginationSchema.safeParse(object);
}
/*
import { z } from "zod";

const rolSchema = z.object({
	description: z
		.string({
			invalid_type_error: "Description must be a string",
			required_error: "Description is required.",
		})
		.max(100),
});

export function validateRol(object) {
	return rolSchema.safeParse(object);
}
*/
