import React from "react";
import { withStyles, Tooltip, Typography } from "@material-ui/core";

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.primary.darker,
    padding: 12,
    color: theme.palette.tint10,
    marginTop: 0,
    border: "1px solid " + theme.palette.shade50,
  },
}))(Tooltip);

export default function ({ html, title, ...props }) {
  return (
    <HtmlTooltip
      title={
        <React.Fragment>
          <Typography variant="caption" color="inherit">
            {title}
          </Typography>
          {html}
        </React.Fragment>
      }
      arrow
      {...props}
    ></HtmlTooltip>
  );
}
