import React from "react";
import cx from "clsx";
import {
    makeStyles,
    IconButton,
    fade,
    TextField,
    InputAdornment,
    CircularProgress,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { StoreContext, actions } from "../store";

const useStyles = makeStyles((theme, props) => ({
    root: {
        transition: theme.transitions.create("width"),
        width: "100%",
        minWidth: 310,
    },
    searchTextfield: {
        color: theme.palette.common.white,
        "& .MuiInputBase-root": {
            padding: theme.spacing(0.4, 0.5, 0.4, 0),
            backgroundColor: fade(theme.palette.shade60, 0.35),
            "&:hover": {
                backgroundColor: fade(theme.palette.shade60, 0.75),
            },
        },
        "& .PrivateNotchedOutline-root, & .MuiOutlinedInput-notchedOutline": {
            display: "none",
        },
        "& .MuiInputBase-input": {
            color: theme.palette.common.white,
            fontFamily: "Raleway",
            fontWeight: 700,
            "&:focus": {
                color: fade(theme.palette.primary.main, 1),
            },
        },
    },
    searchIcon: {
        color: theme.palette.common.white,
    },
    progressIcon: {
        color: theme.palette.secondary.main,
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(0.5),
    },
}));

export default () => {
    const [state, dispatch] = React.useContext(StoreContext);
    const classes = useStyles();
    const [isFocus, setIsFocus] = React.useState(false);
    const [searching, setSearching] = React.useState(false);
    const [value, setValue] = React.useState([]);

    React.useEffect(() => {
        setValue([state.abn]);
    }, [state.abn, dispatch]);

    const searchChangeHandler = React.useCallback(
        (e) => {
            if (e.target.value.length > 2) {
                setSearching(true);
                actions
                    .searchABNandCompany(e.target.value)(dispatch)
                    .then(() => setSearching(false));
            }
        },
        [dispatch]
    );

    const searchSelectedHandler = React.useCallback(
        (e, newValue) => {
            setValue(newValue);
            actions.searchSelected(newValue)(dispatch);
        },
        [dispatch]
    );

    return (
        <div className={cx(classes.root)} style={{ width: isFocus ? 500 : 300 }}>
            <Autocomplete
                className={classes.autoComplete}
                id="autocomplete-search"
                freeSolo
                options={state.searchOptions}
                getOptionSelected={(option, value) => option.Abn === value.Abn}
                getOptionLabel={(option) =>
                    option.Abn
                        ? `${option.Name || option.EntityName} - ${option.Abn}`
                        : ""
                }
                disableClearable
                loading={searching}
                value={value}
                onChange={searchSelectedHandler}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        onChange={searchChangeHandler}
                        className={classes.searchTextfield}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        InputProps={{
                            ...params.InputProps,
                            type: "search",
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IconButton
                                        aria-label="search"
                                        className={classes.searchIcon}
                                    >
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <React.Fragment>
                                    {searching ? (
                                        <CircularProgress
                                            size={20}
                                            className={classes.progressIcon}
                                        />
                                    ) : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            ),
                        }}
                        placeholder="Search ABN or company name"
                        variant="outlined"
                    />
                )}
            />
        </div>
    );
};
