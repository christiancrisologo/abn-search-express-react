import React from "react";
import Layout from "components/Layout";
import { Typography, makeStyles } from "@material-ui/core";
import Social from "./Social";

const useStyles = makeStyles((theme) => ({
    footer: {
        left: 0,
        bottom: 0,
        width: "100%",
        marginTop: theme.spacing(50),
        padding: theme.spacing(3),
        color: theme.palette.shade60,
        marginBottom: -theme.spacing(3),
        textAlign: "center",
        borderTop: "1px solid rgba(0,0,0,.2)",
    },
}));

const Footer = function ({ children }) {
    const classes = useStyles();
    return <div className={classes.footer}>{children}</div>;
};

export default function ({ children, autocomplete }) {
    return (
        <>
            <Layout title="ABN / COMPANY SEARCH" autocomplete={autocomplete}>
                {children}
                <Footer>
                    <Typography variant="body2">
                        CHRISTIAN R. CRISOLOGO - Full-stack / Senior Frontend Developer
                    </Typography>
                    <Social />
                </Footer>
            </Layout>
        </>
    );
}
