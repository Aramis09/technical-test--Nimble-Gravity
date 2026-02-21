import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function CareersListSkeleton() {
  return (
    <div
      className="
        grid gap-6
        grid-cols-1
        sm:grid-cols-2
      "
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <Card key={index} className="rounded-2xl shadow-sm">
          <CardHeader>
            <Skeleton className="h-6 w-3/4 rounded-md" />
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Skeleton className="h-4 w-32 rounded-md" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>

            <Skeleton className="h-10 w-full rounded-md" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
