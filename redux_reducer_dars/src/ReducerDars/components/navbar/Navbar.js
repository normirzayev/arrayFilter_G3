import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/filterPage">filterPage</NavLink>
          </li>
          <li>
            <NavLink to="/reducer">reducer</NavLink>
          </li>
        </ul>
        <h2>logo</h2>
      </nav>
      <Outlet />
    </div>
  );
}
export default memo(Navbar);
