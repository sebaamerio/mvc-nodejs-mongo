import { z } from "zod";

export const GenreSchema = z.object({
  description: z.string(),
});
