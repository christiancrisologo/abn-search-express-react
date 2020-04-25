import React from "react";
import MainLayout from "components/MainLayout";
import { makeStyles, Fab, Typography, Grid, Divider } from "@material-ui/core";
import UpIcon from "@material-ui/icons/ArrowUpward";
import Autocomplete from "../components/Autocomplete";
import ABNcard from "components/ABNcard";
import CompanyCard from "components/CompanyCard";
import { StoreContext } from "../store";
import { SEARCH_TYPE } from "appConstants";

const scrollToRef = (ref, el = null) => {
    const element = el || (ref && ref.current && ref.current);

    window.scrollTo({
        top: element ? element.offsetTop - 90 : 0,
        behavior: "smooth",
    });
};

const useStyles = makeStyles((theme) => ({
    divider: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
    },

    statusBar: {
        margin: theme.spacing(2),
    },

    fab: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        backgroundColor: theme.palette.primary.dark,
        "& .MuiFab-label": {
            color: theme.palette.common.white,
        },
    },
}));

export default function () {
    const classes = useStyles();
    const [state] = React.useContext(StoreContext);

    return (
        <MainLayout autocomplete={<Autocomplete />}>
            {state.searchOptions && !!state.searchOptions.length ? (
                <div className={classes.statusBar}>
                    <Typography variant="body2" gutterBottom>
                        {state.searchType} search found ({state.searchOptions.length})
                    </Typography>
                    <Divider className={classes.divider} />
                </div>
            ) : null}
            <Grid container spacing={2}>
                {(!state.searchSelected || !state.searchSelected.Abn) &&
                state.searchOptions &&
                state.searchOptions.length
                    ? state.searchOptions.map((item) => (
                          <Grid item xs={12} md={6} key={item.Abn}>
                              {state.searchType === SEARCH_TYPE.ABN ? (
                                  <ABNcard {...item} />
                              ) : (
                                  <CompanyCard {...item} />
                              )}
                          </Grid>
                      ))
                    : null}
                {state.searchSelected && state.searchSelected.Abn ? (
                    <Grid item xs={12} md={6}>
                        {state.searchType === SEARCH_TYPE.ABN ? (
                            <ABNcard {...state.searchSelected} selected />
                        ) : (
                            <CompanyCard {...state.searchSelected} selected />
                        )}
                    </Grid>
                ) : null}
            </Grid>

            <Fab aria-label="up" className={classes.fab} onClick={() => scrollToRef(0)}>
                <UpIcon />
            </Fab>
        </MainLayout>
    );
}
