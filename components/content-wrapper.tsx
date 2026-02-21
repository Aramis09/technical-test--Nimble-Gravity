import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";

interface ContentWrapperProps extends ComponentProps<"div"> {
  children: React.ReactNode;
}

export default function ContentWrapper({
  children,
  className,
}: ContentWrapperProps) {
  return (
    <div
      className={cn("w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16", className)}
    >
      <div className="mx-auto w-full max-w-7xl ">{children}</div>
    </div>
  );
}
