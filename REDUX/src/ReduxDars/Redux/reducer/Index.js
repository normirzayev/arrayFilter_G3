import { combineReducers } from "redux";
import HomeReduc from "./HomeReduc";
const rootReducer = combineReducers({
  HomeReduc: HomeReduc,
});
export default rootReducer;
