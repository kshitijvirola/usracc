import * as actions from "./constant";
const initialState = {
  userId: 0,
  error: false,
  loading: false,
  message: false,
  isAuthenticated: false,
  redirectProfile: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_INITIATED:
      return {
        ...state,
        isAuthenticated: false,
        message: false,
        error: false,
        loading: true,
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        isAuthenticated: true,
      };
    case actions.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        isAuthenticated: false,
        message: action.error,
      };
    case actions.SET_AUTH:
      return {
        ...state,
        isAuthenticated: true,
        userId: action.payload,
      };
    default:
      return state;
  }
};
