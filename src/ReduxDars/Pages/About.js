import React from "react";
import { handleClick } from "../Redux/action/AboutAction";
import { useDispatch } from "react-redux";

export default function About() {
  let dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(handleClick())}> click </button>
    </div>
  );
}
