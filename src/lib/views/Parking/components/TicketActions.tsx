import React from "react";
import {
    SmallArrowIcon,
    SmallClockIcon,
    SmallHelpIcon,
    SmallReceiptIcon,
} from "lib/icons";
import Box from '@mui/material/Box';

export type TicketAction = {
    actionText: string,
    actionType: ACTION_TYPE,
}

export enum ACTION_TYPE {
    HELP = "help",
    CLOCK = "clock",
    RECEIPT = "receipt",
}

const actionIconMap = {
    [ACTION_TYPE.CLOCK]: SmallClockIcon,
    [ACTION_TYPE.HELP]: SmallHelpIcon,
    [ACTION_TYPE.RECEIPT]: SmallReceiptIcon,
}

type TicketActionsProps = {
    ticketActions: TicketAction[]
};

export const TicketActions: React.FC<TicketActionsProps> = ({
    ticketActions
}) => {
    return (
        <>
            {ticketActions.map((ticketAction, index) => 
                (
                    <Box key={index}>
                        {index === 0 ? null : (<hr className="ticket-divider"/>)}
                        <Box sx={{ pt: 2, pb: 2, pr: 3, display: "flex", flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between", alignItems: "center" }}>
                            <Box>
                                <img 
                                    className="black-circle-icon" 
                                    src={actionIconMap[ticketAction.actionType]} 
                                    alt={`${ticketAction.actionType} icon`} />
                                <span className="ticket-action-text">
                                    {ticketAction.actionText}
                                </span>
                            </Box>
                            <Box>
                                <img 
                                    src={SmallArrowIcon} 
                                    alt={`${ticketAction.actionType} arrow`} />
                            </Box>
                        </Box>
                    </Box>
                )
            )}
        </>
    )
};