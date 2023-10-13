import { AboutType } from "../action/ActionTypes";
let initialState = {
  data: [],
  qiymat: true,
};
const AboutReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AboutType.olish:
      state = { ...state, data: payload };
      return state;
    case AboutType.send:
      state = { ...state, data: [...state.data, payload] };
      return state;
    case AboutType.edit:
      let p = state.data.map((item) => {
        return item.id === payload.id ? payload : item;
      });
      state = { ...state, data: p };
      return state;
    case "ozgar":
      state = { ...state, qiymat: !state.qiymat };
      return state;
    default:
      return state;
  }
};
export { AboutReducer };
