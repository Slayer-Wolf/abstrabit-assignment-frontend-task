import React from "react";
import logo from "../assets/logo.svg";
import { NavLinks } from "./NavLinks";

const Navbar = () => {
  return (
    <>
      <header className="w-full shadow-xl border-b-[1px]">
        <nav className="flex items-center  w-full bg-white py-4 px-4  justify-between">
          <img src={logo} alt="logo" />
          <NavLinks />
        </nav>
      </header>
    </>
  );
};
export default Navbar;
