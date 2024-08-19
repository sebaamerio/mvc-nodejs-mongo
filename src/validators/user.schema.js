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

export function validateMovie(object) {
  return movieSchema.safeParse(object);
}

export function validatePartialMovie(input) {
  return movieSchema.partial({ duration: true, poster: true }).safeParse(input);
}
