import React from "react";
import { CameraIcon } from "lib/icons";
import { Box, Button } from "@mui/material";

export const IdentifyVehicleButton: React.FC = () => {
    return (
        <Button variant="contained" fullWidth sx={{
            backgroundColor: "#000",
            borderRadius: "24px",
            fontWeight: 900,
            fontSize: "17px",
            lineHeight: "20px",
            display: "flex",
            flexWrap: "nowrap", 
            alignItems: "center",
            textAlign: "center",
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: "#FFFFFF"
        }}> 
            <Box sx={{ px: 1, py: 2, display: "flex", verticalAlign: "bottom" }}>
                <img src={CameraIcon} alt="camera icon" />
            </Box>
            <Box sx={{ p: 2 }}>
                Identify your vehicle
            </Box>
        </Button>
    )
}