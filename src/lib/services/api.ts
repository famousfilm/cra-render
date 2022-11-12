import axios from "axios";
import { ParkingDetailsResponse } from "lib/models";

const BASE_URL = "https://mysite-0an5.onrender.com/api/"

/**
 * Get the map image for a given address
 * @param address the address we're looking up
 */
export const getMapsImageURL = (
  address: string,
  width?: number,
  height?: number,
): string => {
  if (!address) {
      return ""
  }
  const url = new URL(`${BASE_URL}map/`);
  url.searchParams.set("center", address);
  width && height && url.searchParams.set("size", `${height}x${width}`);
  return url.toString()
};

export const getParkingSpotStatus = async (
  statusId: string,
): Promise<ParkingDetailsResponse> => {
  const result = await axios.get(`${BASE_URL}parking_spot_status/${statusId}/`);
  return result?.data
};