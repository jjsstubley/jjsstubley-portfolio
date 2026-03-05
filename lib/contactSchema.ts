import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  message: z.string().min(1, "Message is required").max(2000),
});

export type ContactFormData = z.infer<typeof contactSchema>;
