import Axios from "./axios-config"

export const REQUEST_SIGNUP = 'REQUEST_SIGNUP'
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS'
export const REQUEST_ERROR = 'REQUEST_ERROR'
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR'
export const RESET_STATE = 'RESET_STATE'


export const registerAction = (user) => async dispatch => {
  dispatch({
    type: REQUEST_SIGNUP
  })
  return Axios.post( `/user/register`, user)
    .then(res => {
      localStorage.setItem("user", res.data.data.email)
      localStorage.setItem("role", res.data.data.role)
      dispatch({
        type: REQUEST_SUCCESS,
        payload: res.data.data
      })
    //   nextStep()
      }
    )
    .catch(err => {
      if (err.message === "Network Error") {
        dispatch({
          type: REQUEST_ERROR,
          error: err.message,
        });
      }
      if (err.response) {
        dispatch({
          type: REQUEST_ERROR,
          error: err.response.data.message,
        });
      }
    })
}

export const resetState = () => (dispatch) => {
  dispatch({
    type: RESET_STATE
  })
}