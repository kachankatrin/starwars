import _ from "lodash";
export const url = `https://swapi.dev/api/`;

export const debouncedDispatch = _.debounce(function (dispatch, action) {
  dispatch(action);
}, 200);

export function splitId(str) {
  const splittedArr = str.split("/").filter((item) => item !== "");
  return splittedArr[splittedArr.length - 1];
}
