import { createStore } from "redux";
import rootReducer from "./reducer/Index";
const Store = createStore(rootReducer);
export default Store;
