import _ from "lodash";
export const url = `https://swapi.dev/api/`;

export const debouncedDispatch = _.debounce(function (dispatch, action) {
  dispatch(action);
}, 250);

export function splitId(str) {
  const splittedArr = str.split("/").filter((item) => item !== "");
  return splittedArr[splittedArr.length - 1];
}

export function splitCategory(str) {
  const splittedArr = str.split("/").filter((item) => item !== "");
  return splittedArr[splittedArr.length - 2];
}

export function sortData(arr, key) {
  return arr.sort(function (a, b) {
      if (a[key] && b[key]) {
        if (a[key].toLowerCase() < b[key].toLowerCase()) return -1;
        if (a[key].toLowerCase() > b[key].toLowerCase()) return 1;
      }
      return 0;
    })
}