import { z } from "zod";

const idSchema = z.object({
  id: z.string().regex(/^[0-9a-f]{24}$/),
});

export function validateId(object) {
  return idSchema.safeParse(object);
}
