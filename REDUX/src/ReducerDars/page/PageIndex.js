import React from "react";
import Home from "./Home";
import About from "./About";
import NotFoun from "./NotFoun";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import FilterPage from "./FilterPage";
import Reducer from "./Reducer";
import ContextData from "../context/Context";
export default function PageIndex() {
  return (
    <BrowserRouter>
      <ContextData>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/filterPage" element={<FilterPage />} />
            <Route path="/reducer" element={<Reducer />} />
          </Route>
          <Route path="*" element={<NotFoun />} />
        </Routes>
      </ContextData>
    </BrowserRouter>
  );
}
