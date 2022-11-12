export type HookResult<T> = {
    data: T;
    isError: boolean;
    isLoading: boolean;
};

export type ParkingDetails = {
    statusId?: string,
    conirmed: boolean,
    locationTitle: string,
    locationAddress: string,
    startDateTimeLocal: string,
    endDateTimeLocal: string,
    parkingSpotDetails: string,
    receiptAmount: number,
    avatarDisplayName: string,
    avatarImageURL: string,
    avatarTitle: string,
}

export type ParkingDetailsResponse = {
    data: ParkingDetails,
};