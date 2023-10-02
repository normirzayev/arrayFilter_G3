import { combineReducers } from "redux";
import HomeReducer from "./HomeReducer";
import AboutReducer from "./AboutReducer";
const RootReducer = combineReducers({
  HomeReducer,
  AboutReducer,
});
export default RootReducer;
