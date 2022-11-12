import React from "react";
import {
    MoreIcon,
    SmallDirectionsIcon,
} from "lib/icons";
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

type TicketTopProps = {
    locationTitle: string,
    locationAddress: string,
    parkingSpotDetails: string,
}

export const TicketTop: React.FC<TicketTopProps> = ({
    locationTitle,
    locationAddress,
    parkingSpotDetails,
}) => {
    return (
        <Card 
            variant="outlined" 
            square 
            className="ticket-top" 
            sx={{ pl: 1, pr: 1, pt: 3 }}
        >
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <img src={MoreIcon} alt="more" />
                    </IconButton>
                }
                titleTypographyProps={{
                    fontWeight: 900,
                    fontSize: "18px"
                }}
                subheaderTypographyProps={{
                    fontWeight: 400,
                    fontSize: "13px",
                    color: "rgba(0, 0, 0, 0.6)",
                    lineHeight: "15.41px",
                }}
                title={locationTitle}
                subheader={locationAddress}
            />
            <CardContent sx={{ pt: 0, pb: 0 }}>
                <Box sx={{ 
                    display: "flex", 
                    alignItems: "center",
                    fontWeight: 700,
                    fontSize: "11px",
                    lineHeight: "13px",
                    letterSpacing: "0.25px",
                    textTransform: "uppercase",
                }}>
                    <Box sx={{  
                        pr: 3, 
                        letterSpacing: "0.25px",
                        textTransform: "uppercase" 
                    }}>
                        {parkingSpotDetails}
                    </Box>
                    <Box sx={{ pr: 1 }}>
                        <img src={SmallDirectionsIcon} alt="direction icon"></img>
                    </Box>
                    <Box sx={{ letterSpacing: "1px" }}>
                        <Link href="#" underline="none" color="#118AA3">
                            GET DIRECTIONS
                        </Link>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}