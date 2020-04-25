import axios from "axios";
import { ACTION_TYPES } from "./";
const END_POINT = `${window.location.protocol}//${window.location.hostname}:${
  process.env.PORT || 4000
}`;

const asyncRequest = async function fetchAsync(url, options = {}) {
  console.log("#CC making a request at ", url);
  const response = await axios({
    url,
    method: options.method || "get",
    ...(options.data && options.data),
    ...(options.params && options.params),
    withCredentials: false,
    ...options,
  });
  return response.data;
};

const searchABNandCompany = (key) => async (dispatch) => {
  dispatch({ type: ACTION_TYPES.SEARCH_ABN_STARTED });
  const searchABN = await asyncRequest(`${END_POINT}/abn/${key}`);
  if (searchABN && searchABN.Abn) {
    dispatch({
      type: ACTION_TYPES.SEARCH_ABN_SUCCESS,
      payload: searchABN,
    });
    return Promise.resolve(searchABN);
  }

  const searchCompanyName = await asyncRequest(`${END_POINT}/company/${key}`);
  if (
    searchCompanyName &&
    searchCompanyName.Names &&
    searchCompanyName.Names.length
  ) {
    dispatch({
      type: ACTION_TYPES.SEARCH_COMPANY_SUCCESS,
      payload: searchCompanyName.Names,
    });
    return Promise.resolve(searchCompanyName.Names);
  }

  return Promise.resolve();
};

const searchSelected = (payload) => (dispatch) => {
  dispatch({ type: ACTION_TYPES.SEARCH_SELECTED, payload });
};

export default { searchABNandCompany, searchSelected };
