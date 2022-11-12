import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { HookResult, ParkingDetails } from "lib/models";
import { getParkingSpotStatus } from "lib/services/api";

type ParkingSpotHook = HookResult<ParkingDetails>;

export const useParkingSpotStatus = (
    statusId: string
): ParkingSpotHook => {
  const {
    isLoading,
    isError,
    data,
  } = useQuery(["parkingSpot", statusId], async () => {
    const result = await getParkingSpotStatus(statusId);
    return result?.data;
  },
  {
      enabled: !!statusId
  }
  );

  return React.useMemo(
    () => ({
      data,
      isLoading,
      isError,
    }),
    [data, isLoading, isError]
  );
};
