import * as z from "zod";

export const questionSchema = z.object({
  title: z.string().min(5).max(130),
  description: z.string().min(100),
  tags: z.array(z.string().min(1).max(15)).min(1).max(3),
});
