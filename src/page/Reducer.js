import { Button } from "@mui/material";
import React, { useReducer } from "react";
export default function Reducer() {
  let reducer = (state, action) => {
    console.log(action, state);
    switch (action.type) {
      case "plus":
        return state + 1;
      case "minus":
        return state - 1;
      default:
        return state;
    }
  };

  let [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      Reducer
      <br />
      <Button
        variant="contained"
        onClick={() => dispatch({ count, type: "minus" })}
      >
        minus
      </Button>
      <h2> {count} </h2>
      <Button
        variant="contained"
        onClick={() => dispatch({ count, type: "plus" })}
      >
        plus
      </Button>
    </div>
  );
}
