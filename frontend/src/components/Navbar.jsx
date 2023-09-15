import React from "react";
import { NavLink } from "react-router-dom";

import MedPlusLogo from "../assets/MedPlusLogo.png";

const navbarTabs = [
  { name: "home", link: "/" },
  { name: "about us", link: "/about-us" },
  { name: "services", link: "/services" },
  { name: "contact us", link: "/contact-us" },
];

const Navbar = () => {
  return (
    <nav className="border-grey flex items-center justify-between border-b-2 p-2">
      <div className="h-5">
        <img
          src={MedPlusLogo}
          alt="Med Plus Logo"
          className="h-full object-cover"
        />
      </div>
      <div className="flex gap-10">
        <div className="flex items-center justify-between gap-10">
          {navbarTabs.map((tab) => (
            <NavLink
              to={tab.link}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-cyan" : "text-blue"
              }
            >
              <p className="font-semibold uppercase">{tab.name}</p>
            </NavLink>
          ))}
        </div>
        <button className="bg-cyan rounded-3xl px-4 py-1">
          <p className="font-semibold uppercase text-white">sign in</p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
