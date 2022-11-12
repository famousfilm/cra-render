import React from "react";
import {
    SmallStartIcon,
    SmallEndIcon,
} from "lib/icons";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

export type TicketBottomProps = {
    localStartDatetime: string,
    localEndDatetime: string,
}

export const TicketBottom: React.FC<TicketBottomProps> = ({
    localStartDatetime,
    localEndDatetime,
}) => {
    const location = "en-US"
    const startDate = new Date(localStartDatetime)
    const endDate = new Date(localEndDatetime)
    const start = {
        monthDay: startDate.toLocaleString(location, { month: "short", day: "numeric" }),
        year: startDate.toLocaleString(location, { year: "numeric", }),
        hour: startDate.toLocaleString(location, { hour: "numeric", hour12: true, minute: "numeric" }),
    };
    const end = {
        monthDay: endDate.toLocaleString(location, { month: "short", day: "numeric" }),
        year: endDate.toLocaleString(location, { year: "numeric", }),
        hour: endDate.toLocaleString(location, { hour: "numeric", hour12: true, minute: "numeric" }),
    };
    return (
        <Card square className="ticket-bottom">
            <Grid container spacing={0}>
                <Grid item xs={6} sx={{ pl: 3, pr: 3, pt: 2, pb: 2 }} className="ticket-date-left">
                    <Box className="ticket-start-end-date" sx={{ pb: 1 }}>
                        <Box>start date</Box>
                        <Box>
                            <img src={SmallStartIcon} alt="start" />
                        </Box>
                    </Box>
                    <Box className="ticket-big-date">{start.monthDay}</Box>
                    <Box className="ticket-date-year">{`${start.year} (${start.hour})`}</Box>
                </Grid>
                <Grid item xs={6} sx={{ pl: 3, pr: 3, pt: 2, pb: 2 }}>
                    <Box className="ticket-start-end-date" sx={{ pb: 1 }}>
                        <Box>end date</Box>
                        <Box>
                            <img src={SmallEndIcon} alt="end" />
                        </Box>
                    </Box>
                    <Box className="ticket-big-date">{end.monthDay}</Box>
                    <Box className="ticket-date-year">{`${end.year} (${end.hour})`}</Box>
                </Grid>
            </Grid>
        </Card>
    )
}