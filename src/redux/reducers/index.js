/* eslint-disable */
import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
import { registerReducer } from "./register.reducer"

const reducers = combineReducers({
  login: loginReducer,
  register: registerReducer,
  // user: userReducer
});

export default reducers;
