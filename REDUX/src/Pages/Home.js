import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleMinus, handlePlus } from "../redux/action/HomeAction";
function Home() {
  let state = useSelector((state) => state.HomeReducer);
  let dispatch = useDispatch();
  return (
    <div>
      {state.map((item, i) => {
        return (
          <div className="plusMinus" key={item.id}>
            <button onClick={() => dispatch(handleMinus(item.id))}>
              minus
            </button>
            <h1>{item.soni}</h1>
            <button onClick={() => dispatch(handlePlus(item.id))}>plus</button>
          </div>
        );
      })}
    </div>
  );
}
export default Home;
