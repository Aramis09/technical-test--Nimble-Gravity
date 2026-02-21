import { Candidate, candidateSchema } from "@/app/api/candidate/[email]/candidate.mapper";

export interface GetCandidateParams {
  email: string;
}

export const getCandidate = async ({ email }: GetCandidateParams):Promise<Candidate> => {
  const res = await fetch(`/api/candidate/${email}`);
  if (!res.ok) throw new Error("Failed to fetch careers");
  const candidate = await res.json()
  return candidateSchema.parse(candidate)
};
