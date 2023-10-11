import { createStore } from "redux";
import { RootReducer } from "./redux/reducer/RootReducer";

export const Store = createStore(RootReducer);
