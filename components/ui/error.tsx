"use client";

import { ComponentProps } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

type ErrorStateProps = {
  title?: string;
  description?: string;
  onRetry?: () => void;
} & ComponentProps<"div">;

export function ErrorState({
  title = "Oops! Something went wrong",
  description = "We couldn’t load the data. Please try again.",
  onRetry,
  className,
  ...props
}: ErrorStateProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center py-16 px-4",
        className
      )}
      {...props}
    >
      <Card className="w-full max-w-md rounded-2xl shadow-md border-destructive/20">
        <CardContent className="flex flex-col items-center text-center gap-6 py-10">
          <div className="bg-destructive/10 p-4 rounded-full">
            <AlertTriangle className="w-8 h-8 text-destructive" />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>

          {onRetry && (
            <Button
              variant="destructive"
              onClick={onRetry}
              className="rounded-xl"
            >
              Try Again
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}