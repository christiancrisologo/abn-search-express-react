import React, { createContext, useReducer } from "react";
import { SEARCH_TYPE } from "appConstants";

export const ACTION_TYPES = {
    SEARCH_ABN_SUCCESS: "SEARCH_ABN_SUCCESS",
    SEARCH_COMPANY_SUCCESS: "SEARCH_COMPANY_SUCCESS",
    SEARCH_ABN_STARTED: "SEARCH_ABN_STARTED",
    SEARCH_SELECTED: "SEARCH_SELECTED",
};

export const StoreContext = createContext({});

const initialState = {
    searchOptions: [],
    abn: null,
    searchSelected: null,
    searchType: "",
};

function reducer(state, { type, payload }) {
    switch (type) {
        case ACTION_TYPES.SEARCH_ABN_STARTED: {
            return {
                ...state,
                ...initialState,
            };
        }
        case ACTION_TYPES.SEARCH_SELECTED: {
            return {
                ...state,
                searchSelected: payload,
            };
        }
        case ACTION_TYPES.SEARCH_COMPANY_SUCCESS: {
            return {
                ...state,
                searchOptions: payload,
                searchType: SEARCH_TYPE.COMPANY,
            };
        }
        case ACTION_TYPES.SEARCH_ABN_SUCCESS: {
            return {
                ...state,
                searchOptions: [payload],
                abn: payload,
                searchType: SEARCH_TYPE.ABN,
            };
        }
        default:
            return state;
    }
}

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StoreContext.Provider value={[state, dispatch]}>
            {children}
        </StoreContext.Provider>
    );
};

export default Store;
export { default as actions } from "./actions";
