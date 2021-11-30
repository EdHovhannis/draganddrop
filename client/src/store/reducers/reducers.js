import { GET_DATA, GET_DATA_FAIL } from "./../constants/constants";

export const getDataReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        data: action.payload,
      };
    case GET_DATA_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
