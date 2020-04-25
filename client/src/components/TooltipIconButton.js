import React from "react";
import { IconButton } from "@material-ui/core";
import Tooltip from "./Tooltip";

export default function ({ children, title, tooltipProps, ...rest }) {
    return (
        <Tooltip title={title} {...tooltipProps}>
            <IconButton {...rest}>{children}</IconButton>
        </Tooltip>
    );
}
