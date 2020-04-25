import React from "react";
import {
    Toolbar,
    styled,
    makeStyles,
    AppBar,
    IconButton,
    Typography,
} from "@material-ui/core";
import FindInPageRoundedIcon from "@material-ui/icons/FindInPageRounded";

export const ContentWrapper = styled("div")(({ theme }) => ({
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
        width: "96%",
        minWidth: theme.spacing(128),
        marginTop: theme.spacing(4),
    },
}));

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appbar: {
        borderTop: `4px solid ${theme.palette.primary.dark}`,
    },
    menuButton: {
        color: theme.palette.common.white,
    },
    title: {
        flexGrow: 1,
        width: theme.spacing(10),
        minWidth: theme.spacing(8),
        color: theme.palette.common.white,
        fontFamily: "'Baloo Paaji 2'",
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },
}));

export default ({ title, subTitle, autocomplete, children, ...rest }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <FindInPageRoundedIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        {title}
                    </Typography>
                    {autocomplete}
                </Toolbar>
            </AppBar>
            <ContentWrapper>{children}</ContentWrapper>
        </div>
    );
};
