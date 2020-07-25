import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  CHANGE_SEARCH
} from "../actions/ActionsConstants";
let initStore = {
  loading: true,
  searchPeople: ''
};

export const mainReducer = (initialState = initStore, action) => {
  if (action.type === FETCH_DATA_BEGIN) {
    return {
      ...initialState,
      loading: true,
      error: null,
    };
  }
  if (action.type === FETCH_DATA_SUCCESS) {
    return {
      ...initialState,
      loading: false,
      [action.payload.key]: action.payload.result,
    };
  }
  if (action.type === FETCH_DATA_FAILURE) {
    return {
      ...initialState,
      loading: false,
      error: action.payload.error
    };
  }
  if (action.type === CHANGE_SEARCH) {
    return {
      ...initialState,
      [action.payload.key]: action.payload.value,
    }
  }
  return {
    ...initialState,
  };
};
