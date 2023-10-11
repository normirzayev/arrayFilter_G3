import { HomeType } from "./ActionTypes";

function handlePlus(param) {
  return {
    type: HomeType.plus,
    payload: param,
  };
}
function handleMinus(param) {
  return {
    type: HomeType.minus,
    payload: param,
  };
}

export { handleMinus, handlePlus };
