import React from "react";
import {
    MessagesIcon,
} from "lib/icons";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

type TicketFooterProps = {
    avatarImageURL: string,
    avatarDisplayName: string,
    avatarTitle: string,
}

export const TicketFooter: React.FC<TicketFooterProps> = ({
    avatarImageURL,
    avatarDisplayName,
    avatarTitle
}) => {
    return (
        <Card square sx={{ 
            pl: 3,
            pr: 3,
            pt: 2,
            pb: 2,
            background: "#F4F6F8", 
            borderBottomLeftRadius: "8px", 
            borderBottomRightRadius: "8px" 
        }}>
                <Box sx={{ 
                    display: "flex", 
                    flexDirection: "row", 
                    flexWrap: "nowrap", 
                    justifyContent: "space-between", 
                    alignItems: "center",
                    fontSize: "14px",
                    lineHeight: "17px",
                }}>
                    <Box sx={{ display: "flex" }}>
                        <Box>
                            <img src={avatarImageURL} alt="avatar" width={40} height={40} style={{ borderRadius: "50%" }} />
                        </Box>
                        <Box sx={{ pl: 2 }}>
                            <Box sx={{ fontWeight: 500 }}>
                                {avatarDisplayName}
                            </Box>
                            <Box sx={{ fontWeight: 400, color: "rgba(0, 0, 0, 0.4)", }}>
                                {avatarTitle}
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <img src={MessagesIcon} alt="messages icon" />
                    </Box>
                </Box>
        </Card>
    )
}