import Axios from "./axios-config";

export const USER_LOGIN = "LOGIN";
export const LOGIN_LOADING = "LOADING";
export const CLOSE_SNACKBAR = "CLOSE_SNACKBAR";
export const LOGOUT = "LOGOUT";

export const loginAction = (userCredentials) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  return Axios.post(`/user/login`, userCredentials)
    .then((res) => {
      localStorage.setItem("user", res.data.data.email)
      localStorage.setItem("role", res.data.data.role)
      dispatch({
        type: USER_LOGIN,
        user: res.data.data,
      });
    })
    .catch((err) => {
      if (err.message === "Network Error") {
        dispatch({
          type: USER_LOGIN,
          error: err.message,
        });
      }
      if (err.response) {
        dispatch({
          type: USER_LOGIN,
          error: err.response.data.message,
        });
      }
    });
};


export const logoutAction = () => (dispatch) => {
  console.log("logout...............")
  localStorage.removeItem("user")
  localStorage.removeItem("role")
  dispatch({ type: LOGOUT });
};
