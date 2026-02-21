"use client";

import { ComponentProps, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useGetCareersQuery } from "../queries/useGetCareersQuery";
import { useApplyCareerMutation } from "../queries/useApplyCareerMutation";
import { cn } from "@/lib/utils";
import { CareersListSkeleton } from "./list-skeleton";
import { ErrorState } from "@/components/ui/error";
import { getCandidate } from "@/features/candidates/service";

const userData = {
  email: "aramisjaime48@gmail.com",
};

function isValidUrl(value: string): boolean {
  const urlRegex =
    /^(https?:\/\/)(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;

  return urlRegex.test(value);
}

type CareersListProps = ComponentProps<"div">;

export default function CareersList({ className, ...props }: CareersListProps) {
  const [repoUrls, setRepoUrls] = useState<Record<string, string>>({});

  const careersQueryData = useGetCareersQuery();

  const mutation = useApplyCareerMutation();

  const handleSubmit = async (careerId: string) => {
    const repoUrl = repoUrls[careerId];

    if (!repoUrl) {
      toast.error("Missing repository URL");
      return;
    }

    const candidateResponse = await getCandidate({
      email: userData.email,
    });

    if (!isValidUrl(repoUrl)){
      return toast.error(`Repository URL "${repoUrl}" must be a link`)
    }

    mutation.mutate({
      repoUrl,
      candidateId: candidateResponse.candidateId,
      jobId: careerId,
      uuid: candidateResponse.uuid,
    });
  };

  if (careersQueryData.isError) {
    return <ErrorState onRetry={careersQueryData.refetch} />;
  }

  if (careersQueryData.isLoading) {
    return <CareersListSkeleton />;
  }

  return (
    <div className={cn("grid gap-6 md:grid-cols-2", className)} {...props}>
      {careersQueryData.data?.map((career) => (
        <Card key={career.id} className="rounded-2xl shadow-md">
          <CardHeader>
            <CardTitle>{career.title}</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={`repo-${career.id}`}>GitHub Repository</Label>
              <Input
                id={`repo-${career.id}`}
                placeholder="https://github.com/your-user/repo"
                value={repoUrls[career.id] || ""}
                onChange={(e) =>
                  setRepoUrls((prev) => ({
                    ...prev,
                    [career.id]: e.target.value,
                  }))
                }
              />
            </div>

            <Button
              className="w-full"
              disabled={mutation.isPending}
              onClick={() => handleSubmit(career.id)}
            >
              {mutation.isPending ? "Submitting..." : "Submit"}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
