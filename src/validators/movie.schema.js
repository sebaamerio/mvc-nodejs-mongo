import { z } from "zod";

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: "Title must be a string",
    required_error: "Title is required.",
  }),
  year: z
    .number({
      required_error: "Year is required",
      invalid_type_error: "Year must be a integer",
    })
    .int()
    .min(1900)
    .max(2024),
  type: z.number().int().positive(),
  genre: z.array(
    z.enum([
      "Action",
      "Adventure",
      "Crime",
      "Comedy",
      "Drama",
      "Fantasy",
      "Horror",
      "Thriller",
      "Sci-fi",
    ]),
    {
      required_error: "Movie genre is required.",
      invalid_type_error: "Movie genre must be an array of enum Genre",
    }
  ),
  duration: z.number().int().positive(),
  poster: z.string().url({
    message: "Poster must be a valid URL",
  }),
});

export function validateMovie(object) {
  return movieSchema.safeParse(object);
}

export function validatePartialMovie(input) {
  return movieSchema.partial({ duration: true, poster: true }).safeParse(input);
}
