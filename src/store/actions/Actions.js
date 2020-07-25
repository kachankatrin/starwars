import axios from "axios";
import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  CHANGE_SEARCH,
} from "./ActionsConstants";
import { url } from "../../utils";

export function fetchDataAxios(key, query) {
  return (dispatch) => {
    dispatch(fetchDataBegin());
    let response;
    let fetchedData = [];
    const getAllData = (mainQuery) => {
      response = axios
        .get(mainQuery)
        .then((res) => {
          console.log(mainQuery);
          fetchedData = [...fetchedData.concat(res.data.results)];
          console.log(fetchedData);
          if (res.data.next !== null) {
            mainQuery = res.data.next;
            getAllData(mainQuery);
          }
          console.log(res.data.results);
          dispatch(fetchDataSuccess(key, fetchedData));
        })
        .catch((error) => dispatch(fetchDataFailure(error)));
      return response;
    };
    getAllData(`${url}${query}`);
    return response;
  };
}
export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN,
});

export const fetchDataSuccess = (key, data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: {
    result: data,
    key,
  },
});
export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: { error },
});

export const handleInput = (value, key) => {
  return {
    type: CHANGE_SEARCH,
    payload: { value: value, key },
  };
};