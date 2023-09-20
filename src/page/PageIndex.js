import React from "react";
import Home from "./Home";
import About from "./About";
import NotFoun from "./NotFoun";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import FilterPage from "./FilterPage";
export default function PageIndex() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/filterPage" element={<FilterPage />} />
      </Route>
      <Route path="*" element={<NotFoun />} />
    </Routes>
  );
}