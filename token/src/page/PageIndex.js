import React, { useContext } from "react";
import Home from "./Home";
import About from "./About";
import ContactUS from "./ContactUS";
import Setting from "./Setting";
import { Route, Routes } from "react-router-dom";
import Service from "./Service";
import Blog from "./Blog";
import NotFoun from "./NotFoun";
import Login from "../components/login/Login";
import { Context } from "../context/Context";

export default function PageIndex() {
  let { user } = useContext(Context);

  return (
    <Routes>
      {user?.access_token?.length > 10 ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUS />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Login />} />
        </>
      )}

      <Route path="*" element={<NotFoun />} />
    </Routes>
  );
}
