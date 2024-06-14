import React, { useState } from "react";
import logo from "../assets/logo.svg";
import menu from "../assets/hamburger.svg";
import { RightNav } from "./RightNav";
import { NavItems } from "./NavItems";

const Navbar = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <>
      <header className="w-full shadow-xl border-b-[1px]">
        <nav className="flex items-center w-full bg-white py-4 px-6 lg:px-36 justify-between">
          <img src={logo} alt="logo" />
          <RightNav />
          <div
            className="lg:hidden block text-neutral-800"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <img src={menu} alt="menu" className="text-neutral-800" />
          </div>
        </nav>
      </header>
      {isMenuOpen ? (
        <section className="z-10 min-h-full bg-neutral-800 px-8 py-14 lg:hidden">
          <NavItems />
        </section>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
export default Navbar;
