import { ApplyToJobBody } from "@/app/api/careers/apply/route";
import { Career,careerSchema } from "@/app/api/careers/career.mapper";

const getBaseUrl = ()=>typeof window === "undefined" ? process.env.NEXT_PUBLIC_APP_URL : "";



export const getCareers = async ():Promise<Career[]> => {
  const res = await fetch(`${getBaseUrl()}/api/careers`);
  if (!res.ok) throw new Error("Failed to fetch careers");
  const careers = await res.json() as unknown[]
  return careers.map(c=> careerSchema.parse(c))
};



export async function applyToCareer(
  payload: ApplyToJobBody
) {
  const response = await fetch("/api/careers/apply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const message = "Failed to apply to career";
    throw new Error(message);
  }

  return response.json();
}