import { HomeType } from "../action/ActionTypes";

let data = [
  { id: 1, name: "olma", soni: 0 },
  { id: 2, name: "nok", soni: 0 },
  { id: 3, name: "kiwi", soni: 0 },
];
const HomeReducer = (state = data, action) => {
  let { type, payload } = action;
  switch (type) {
    case HomeType.plus:
      state = state.map((item) =>
        item.id === payload ? { ...state, soni: item.soni + 1 } : item
      );
      return state;
    case HomeType.minus:
      state = state.map((item) =>
        item.id === payload ? { ...state, soni: item.soni - 1 } : item
      );
      return state;
    default:
      return state;
  }
};

export default HomeReducer;
