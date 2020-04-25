import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { Box, Typography } from "@material-ui/core";
import TooltipIconButton from "./TooltipIconButton";

export default function () {
  const clickHandler = (url) => {
    window.open(url, "_blank");
  };
  return (
    <Box flexDirection="row">
      <Typography variant="caption">Follow me on :</Typography>
      <TooltipIconButton
        title="linkedin"
        onClick={() => clickHandler("https://www.linkedin.com/in/cyianite/")}
      >
        <LinkedInIcon />
      </TooltipIconButton>
      <TooltipIconButton
        title="Github"
        onClick={() => clickHandler("https://github.com/christiancrisologo")}
      >
        <GitHubIcon />
      </TooltipIconButton>
      <TooltipIconButton
        title="Working Portfolio"
        onClick={() => clickHandler("https://portfolio.cyianite.now.sh/")}
      >
        <AccountBoxIcon />
      </TooltipIconButton>
    </Box>
  );
}
