import { AboutType } from "../action/ActionTypes";

let data = JSON.parse(localStorage.getItem("localStr")) || [];

function refLocal() {
  return JSON.parse(localStorage.getItem("localStr")) || [];
}

const AboutReducer = (state = data, { type, payload }) => {
  switch (type) {
    case AboutType.send:
      localStorage.setItem("localStr", JSON.stringify([...state, payload]));
      state = refLocal();
      return state;
    case AboutType.edit:
      console.log(payload);
      localStorage.setItem(
        "localStr",
        JSON.stringify(
          state.map((item) => (item.id === payload.id ? payload : item))
        )
      );
      state = refLocal();
      return state;
    case AboutType.delete:
      localStorage.setItem(
        "localStr",
        JSON.stringify(state.filter((item) => item.id !== payload))
      );
      state = refLocal();
      return state;
    default:
      return state;
  }
};

export default AboutReducer;
