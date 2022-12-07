import Axios from "./axios-config";

export const USER_LOGIN = "LOGIN";
export const LOGIN_LOADING = "LOADING";
export const CLOSE_SNACKBAR = "CLOSE_SNACKBAR";
export const LOGOUT = "LOGOUT";

export const loginAction = (userCredentials) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  return Axios.post(`/user/login`, userCredentials)
    .then((res) => {
      console.log(res)
      // localStorage.setItem("KW_AT", res.data.token);
      console.log(res.data.data)
      localStorage.setItem("user", res.data.data.email)
      dispatch({
        type: USER_LOGIN,
        user: res.data.data,
      });
    })
    .catch((err) => {
      console.log("#1........")
      if (err.message === "Network Error") {
        console.log("#2.................")
        dispatch({
          type: USER_LOGIN,
          error: err.message,
        });
      }
      if (err.response) {
        console.log("#3...............")
        console.log(err.response)
        dispatch({
          type: USER_LOGIN,
          error: err.response.data.message,
        });
      }
    });
};

export const logoutAction = () => (dispatch) => {
  localStorage.removeItem("KW_AT")
  localStorage.removeItem("user")
  dispatch({ type: LOGOUT });
};
