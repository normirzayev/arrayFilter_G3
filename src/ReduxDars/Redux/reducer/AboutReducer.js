let m = "salom";
function AboutReducer(state = m, action) {
  switch (action.type) {
    case "click2":
      console.log("click ishladi");
      return state;
    default:
      return state;
  }
}
export default AboutReducer;
