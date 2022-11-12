import React from "react";
import { CloseIcon, ParkingIcon } from "lib/icons";
import { Box, Card, Container, Grid } from '@mui/material';
import { ACTION_TYPE, TicketActions } from "./components/TicketActions";
import { 
    TicketBottom, 
    TicketTop,
    TicketFooter,
    IdentifyVehicleButton 
} from "./components";
import { useParkingSpotStatus } from "lib/hooks";
import { getMapsImageURL } from "lib/services/api";
import "./ParkingConfirmed.css";
import "./Loader.css";

export const ParkingConfirmedView: React.FC = () => {
    const { data: details, isLoading, isError } = useParkingSpotStatus("foo");
    if (isLoading) return (
        <Container>
            <Box className="loader">Loading...</Box>
        </Container>
    );
    // TODO: Fix this, obviously
    else if (isError) return <>Oops. You broke it.</> 
    return (
        <Box sx={{
            backgroundImage: `url(${getMapsImageURL(
                details.locationAddress, 
                // window.innerWidth, 
                // window.innerHeight
            )})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
        }}>
            <Box sx={{
                backgroundColor: "rgba(246, 198, 45, 0.75)", 
                backdropFilter: "blur(1px)", 
                width: "100%",
                height: "100%",
            }}>
                <Container sx={{ pt: 7, px: 2, pb: 2 }}>
                    <Box>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sx={{ pb: 3, pl: 1 }}>
                                <img src={CloseIcon} alt="close icon" />
                            </Grid>
                            <Grid item xs={12} sx={{ pl: 1 }}>
                                <Box>
                                    <Box className="confirmed" sx={{ pb: 1, mr: 3 }}>
                                        Nice! Your monthly parking is confirmed.
                                    </Box>
                                    <Box className="confirmed-details">
                                        Your reservation details are below.
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <img src={ParkingIcon} className="parking-icon" alt="parking icon" />
                                <TicketTop 
                                    locationTitle={details.locationTitle}
                                    locationAddress={details.locationAddress}
                                    parkingSpotDetails={details.parkingSpotDetails}
                                />

                            </Grid>
                            <Grid item xs={12}>
                                <TicketBottom 
                                    localStartDatetime={details.startDateTimeLocal}
                                    localEndDatetime={details.endDateTimeLocal}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Card square className="ticket-actions">
                                    <Box sx={{ pl: 3 }}>
                                        <TicketActions 
                                            ticketActions={[
                                                {actionText: "View parking instructions", actionType: ACTION_TYPE.HELP},
                                                {actionText: "Purchase additional months", actionType: ACTION_TYPE.CLOCK},
                                                {actionText: `View receipt for $${details.receiptAmount}`, actionType: ACTION_TYPE.RECEIPT},
                                            ]}
                                        />
                                    </Box>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <TicketFooter 
                                    avatarDisplayName={details.avatarDisplayName}
                                    avatarImageURL={details.avatarImageURL}
                                    avatarTitle={details.avatarTitle}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ pt: 3 }}>
                                <IdentifyVehicleButton />
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};
