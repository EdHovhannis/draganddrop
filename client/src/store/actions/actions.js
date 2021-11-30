import {
  CREATE_DATA_SUCCESS,
  CREATE_DATA_FAIL,
  GET_DATA,
  GET_DATA_FAIL,
} from "./../constants/constants";

export const createDataAction = (keys) => {
  return async (dispatch) => {
    try {
      const response = await fetch("/api/data/datacreate", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(keys),
      });
      const data = await response.json();
      dispatch({ type: CREATE_DATA_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: CREATE_DATA_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};
export const getDataAction = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("/api/data/getdata");
      const data = await response.json();
      dispatch({
        type: GET_DATA,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_DATA_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const deletecurrentframeAction = (id) => {
  return async () => {
    try {
      return await fetch(`/api/data/removedata/${id}`, {
        method: "POST",
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const updatecurrentframeAction = (keys, id) => {
  return async () => {
    try {
      return await fetch(`/api/data/updatedata/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(keys),
      });
    } catch (error) {
      console.log(error);
    }
  };
};
