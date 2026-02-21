import { envs } from "@/config/envs.config";
import { NextResponse } from "next/server";
import z from "zod/v4";
import { mapCandidate } from "./candidate.mapper";

type Params = {
  params: Promise<{
    email: string;
  }>;
};

export const getCandidateDataResponseFromApiSchema = z.object({
  uuid: z.string(),
  applicationId: z.string(),
  candidateId: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
});



export type GetCandidateDataResponseFromApi = z.infer<
  typeof getCandidateDataResponseFromApiSchema
>;

export async function GET(_: Request, { params }: Params) {
  try {
    const { email } = await params;

    if (!email) {
      return NextResponse.json(
        { error: "Email parameter is required" },
        { status: 400 },
      );
    }

    const response = await fetch(
      `${envs.BASE_URL}/candidate/get-by-email?email=${email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Upstream service error" },
        { status: response.status },
      );
    }

    const data = await response.json();

    const parsedData =
      getCandidateDataResponseFromApiSchema.safeParse(data);

    if (!parsedData.success) {
      return NextResponse.json(
        { error: "Invalid response from upstream service" },
        { status: 502 },
      );
    }

    return NextResponse.json(mapCandidate(parsedData.data));
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}