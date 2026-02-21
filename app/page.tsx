import ContentWrapper from "@/components/content-wrapper";
import { getQueryClient } from "@/config/queryClient";
import CareersList from "@/features/careers/components/list";
import { getCareersQueryOptions } from "@/features/careers/queries/useGetCareersQuery";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(getCareersQueryOptions);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ContentWrapper className="pt-5 pb-52">
        <CareersList />
      </ContentWrapper>
    </HydrationBoundary>
  );
}
