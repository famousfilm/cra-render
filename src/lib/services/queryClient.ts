import { QueryClient } from "@tanstack/react-query";

export const getQueryClient = (): QueryClient => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        staleTime: 8640000000, //24 hours in MS
      },
    },
  });
};

export const QUERY_CLIENT = getQueryClient();
