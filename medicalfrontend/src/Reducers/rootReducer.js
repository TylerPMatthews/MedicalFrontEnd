import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import userReducer from "../Reducers/userReducer";
import loggedReducer from "./loggedReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  logged: loggedReducer,
});
export default rootReducer;
