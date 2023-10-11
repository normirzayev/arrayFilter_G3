import Home from "./Home";
import Settings from "./Setting";
import About from "./About";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../navbar/Navbar";

export default function Pages() {
  return (
    <div>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/setting" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}
