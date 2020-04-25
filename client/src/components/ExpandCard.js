import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Card,
  Box,
  Typography,
  CardHeader,
  Collapse,
  CardContent,
} from "@material-ui/core";
import Avatar from "./Avatar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    padding: theme.spacing(2),
    boxShadow: theme.shadows[2],
    cursor: "pointer",
    "&:hover": {
      boxShadow: theme.shadows[12],
      backgroundColor: theme.palette.secondaryColors[50],
    },
  },
}));

export const Field = function ({ label, value }) {
  return (
    <Box display="flex" flexDirection="row">
      <Typography variant="body2" gutterBottom style={{ minWidth: 114 }}>
        <strong>{label} </strong>
      </Typography>
      <span style={{ padding: "0 4px" }}>:</span>

      <Typography variant="body2" gutterBottom>
        {value}
      </Typography>
    </Box>
  );
};

export default function ({ title, subTitle, selected = false, children }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    setExpanded(selected);
  }, [selected]);

  const expandhandler = React.useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  return (
    <Card className={classes.root} onClick={expandhandler}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="avatar"
            className={classes.avatar}
            useNameInitial
            useRandomColors
            label={title}
          />
        }
        action={
          <IconButton aria-label="expand">
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        }
        title={
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        }
        subheader={subTitle}
      />
      <Collapse in={expanded} timeout="auto">
        <CardContent>{children} </CardContent>
      </Collapse>
    </Card>
  );
}
