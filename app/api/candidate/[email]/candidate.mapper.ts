import z from "zod";
import { GetCandidateDataResponseFromApi } from "./route";

export const candidateSchema = z.object({
  uuid: z.string(),
  applicationId: z.string(),
  candidateId: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
});

export type Candidate = z.infer<typeof candidateSchema>

export function mapCandidate(data: GetCandidateDataResponseFromApi): Candidate {
  return {
    uuid: data.uuid,
    applicationId: data.applicationId,
    candidateId: data.candidateId,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
  };
}
