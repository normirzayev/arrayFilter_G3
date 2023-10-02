let data = [
  {
    id: 1,
    soni: 0,
  },
  {
    id: 2,
    soni: 0,
  },
  {
    id: 3,
    soni: 0,
  },
];
const HomeReducer = (state = data, { type, payload }) => {
  switch (type) {
    case "plus":
      state = state.map((i) =>
        i.id === payload ? { ...i, soni: i.soni + 1 } : i
      );
      return state;
    case "minus":
      state = state.map((i) =>
        i.id === payload ? { ...i, soni: i.soni - 1 } : i
      );
      return state;
    default:
      return state;
  }
};
export default HomeReducer;
