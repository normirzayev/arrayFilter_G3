import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleMinus, handlePlus } from "../Redux/action/HomeAction";
function Home() {
  let state = useSelector((state) => state.HomeReducer);
  let dispatch = useDispatch();
  return (
    <div>
      <h2>Home</h2>
      {state.map((p) => (
        <div key={p.id}>
          <button onClick={() => dispatch(handleMinus(p.id))}>minus</button>
          <h3> {p.soni} </h3>
          <button onClick={() => dispatch(handlePlus(p.id))}>plus</button>
        </div>
      ))}
    </div>
  );
}
export default Home;
