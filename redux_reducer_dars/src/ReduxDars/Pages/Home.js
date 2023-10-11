import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleMinus, handlePlus } from "../Redux/action/HomeAction";
function Home() {
  let { son } = useSelector((state) => state.HomeReduc);
  let dispatch = useDispatch();
  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => dispatch(handleMinus())}> minus </button>
      <h3> {son} </h3>
      <button onClick={() => dispatch(handlePlus())}> plus </button>
    </div>
  );
}
export default Home;
