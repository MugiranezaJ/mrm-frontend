/* eslint-disable */
import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
import { registerReducer } from "./register.reducer"
import { usersReducer } from "./user.reducer";

const reducers = combineReducers({
  login: loginReducer,
  register: registerReducer,
  users: usersReducer
});

export default reducers;
