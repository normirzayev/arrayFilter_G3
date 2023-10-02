import { createStore } from "redux";
import RootReducer from "./Redux/reducer/RootReducer";
const Store = createStore(RootReducer);
export default Store;
