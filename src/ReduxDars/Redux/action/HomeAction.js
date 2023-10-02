function handlePlus(param) {
  return {
    type: "plus",
    payload: param,
  };
}
function handleMinus(param) {
  return {
    type: "minus",
    payload: param,
  };
}

export { handleMinus, handlePlus };
