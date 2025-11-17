import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-0 m-0">
      <nav  className="flex gap-8 bg-pink-400 justify-center items-center text-white list-none  " >
        <NavLink className={(e)=>{return e.isActive? "bg-blue-400": ""}} to="/">
          <li>Home</li>
        </NavLink>
        <NavLink className={(e)=>{return e.isActive? "bg-blue-400": ""}} to="/about">
          <li>About</li>
        </NavLink>
        <NavLink className={(e)=>{return e.isActive? "bg-blue-400": ""}} to="/login">
          <li>Login</li>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;


