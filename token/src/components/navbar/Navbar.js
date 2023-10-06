import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { removeToken } from "../../token/token";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar bg-light ">
        <div className="container-fluid">
          <ul className="d-flex gap-5 mt-3">
            <li>
              <NavLink to={"/"}>home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>about</NavLink>
            </li>
            <li>
              <NavLink to={"/setting"}>setting</NavLink>
            </li>
            <li>
              <NavLink to={"/contactus"}>contactUs</NavLink>
            </li>
            <li>
              <button className="btn btn-outline-danger" onClick={removeToken}>
                LogOut
              </button>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
