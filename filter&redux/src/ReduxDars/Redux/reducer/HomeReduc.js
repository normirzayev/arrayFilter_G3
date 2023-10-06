let obj = {
  son: 1,
};
export default function HomeReduc(state = obj, { type, payload }) {
  switch (type) {
    case "son-oshir":
      state = { ...state, son: state.son + 1 };
      return state;
    case "son-kamay":
      state = { ...state, son: state.son - 1 };
      return state;
    default:
      return state;
  }
}
