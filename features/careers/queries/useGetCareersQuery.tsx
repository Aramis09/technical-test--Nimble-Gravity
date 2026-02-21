import { queryOptions, useQuery } from "@tanstack/react-query";
import { getCareers } from "../services";

export const getCareersQueryOptions = queryOptions({
  queryKey: ["careers"],
  queryFn: getCareers,
});

export const useGetCareersQuery = () =>
  useQuery(getCareersQueryOptions);
