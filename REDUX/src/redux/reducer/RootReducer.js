import { combineReducers } from "redux";
import HomeReducer from "./HomeReducer";
import { AboutReducer } from "./AboutReducer";

export const RootReducer = combineReducers({
  HomeReducer,
  AboutReducer,
});
