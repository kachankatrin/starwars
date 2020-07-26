import axios from "axios";
import { url, sortData } from "../../utils";
import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from "./ActionsConstants";

export function fetchDataAxios(key, query, sortKey) {
  return (dispatch) => {
    dispatch(fetchDataBegin());
    let fetchedData = [];
    const getAllData = (mainQuery) => {
      return axios
        .get(mainQuery)
        .then((res) => {
          fetchedData = fetchedData.concat(res.data.results);
          if (res.data.next !== null) {
            getAllData(res.data.next);
          } else {
            dispatch(fetchDataSuccess(key, fetchedData, sortKey));
          } 
        })
        .catch((error) => dispatch(fetchDataFailure(error)));
    };
    return getAllData(`${url}${query}`);
  };
}

export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN,
});

export const fetchDataSuccess = (key, data, sortKey) => ({
  type: FETCH_DATA_SUCCESS,
  payload: {
    result: sortData(data, sortKey),
    key,
  },
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: { error },
});