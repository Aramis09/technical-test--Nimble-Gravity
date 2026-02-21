import { Career,careerSchema } from "@/app/api/careers/career.mapper";

const getBaseUrl = ()=>typeof window === "undefined" ? process.env.NEXT_PUBLIC_APP_URL : "";



export const getCareers = async ():Promise<Career[]> => {
  const res = await fetch(`${getBaseUrl()}/api/careers`);
  if (!res.ok) throw new Error("Failed to fetch careers");
  const careers = await res.json() as unknown[]
  return careers.map(c=> careerSchema.parse(c))
};


export interface ApplyToCareerPayload {
  uuid: string;
  jobId: string;
  candidateId: string;
  repoUrl: string;
}

export async function applyToCareer(
  payload: ApplyToCareerPayload
) {
  const response = await fetch("/api/candidate/apply", {
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