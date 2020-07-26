import axios from "axios";
import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  CHANGE_SEARCH,
  OPEN_MODAL
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
        //   console.log(mainQuery);
          // sorted by default
          fetchedData = [
            ...fetchedData.concat(res.data.results).sort(function (a, b) {
              if (a.name && b.name) {
                if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              }
              if (a.title && b.title) {
                if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
                if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
              }
              return 0;
            }),
          ];
        //   console.log(fetchedData);
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
export const handleModalOpen = (e) => {
    return {
      type: OPEN_MODAL,
    }
  }
