import * as actions from "./constant";

export const login = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actions.LOGIN_INITIATED });
    payload.userid = 1;
    localStorage.setItem("auth", JSON.stringify(payload));
    await dispatch({ type: actions.LOGIN_SUCCESS, payload: payload });
    dispatch({ type: actions.LOGIN_ERROR, error: "" });
  } catch (error) {
    console.log(error, "action catch");
    dispatch({ type: actions.LOGIN_ERROR, error: "Network Error" });
  }
};
export const setAuth = (payload) => (dispatch) => {
  dispatch({ type: actions.SET_AUTH, payload });
};
