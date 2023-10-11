import React from "react";
import { BrowserRouter } from "react-router-dom";
import Pages from "../Pages/Pages";

export default function Main() {
  return (
    <div>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </div>
  );
}
