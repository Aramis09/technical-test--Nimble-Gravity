import z from "zod";
import { CareerFromApi } from "./route";

export const careerSchema = z.object({
  id: z.string(),
  title: z.string(),
});

export type Career = z.infer<typeof careerSchema>;

export const mapCareer = (career: CareerFromApi): Career => {
  return {
    id: career.id,
    title: career.title,
  };
};
