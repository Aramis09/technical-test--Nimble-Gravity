import { envs } from "@/config/envs.config";
import { NextResponse } from "next/server";
import z from "zod/v4";

export const applyToJobBodySchema = z.object({
  uuid: z.string(),
  jobId: z.string(),
  candidateId: z.string(),
  repoUrl: z.string(),
  applicationId:z.string()

});

export type ApplyToJobBody = z.infer<typeof applyToJobBodySchema>;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsedBody = applyToJobBodySchema.safeParse(body);

    if (!parsedBody.success) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const response = await fetch(
      `${envs.BASE_URL}/candidate/apply-to-job`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsedBody.data),
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Upstream service error" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}