import { envs } from "@/config/envs.config";
import { NextResponse } from "next/server";
import z from "zod/v4";
import { mapCareer } from "./career.mapper";

export const careerFromApiSchema = z.object({
  id: z.string(),
  title: z.string(),
});

export type CareerFromApi = z.infer<typeof careerFromApiSchema>;

export const getCareersListResponseFromApiSchema = z.array(
  careerFromApiSchema,
);

export type GetCareersListResponseFromApi = z.infer<
  typeof getCareersListResponseFromApiSchema
>;

export async function GET() {
  try {
    const response = await fetch(
      `${envs.BASE_URL}/jobs/get-list`,
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
      getCareersListResponseFromApiSchema.safeParse(data);

    if (!parsedData.success) {
      console.error("Upstream schema mismatch:", parsedData.error);

      return NextResponse.json(
        { error: "Invalid response from upstream service" },
        { status: 502 },
      );
    }

    return NextResponse.json(parsedData.data.map(mapCareer));
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}