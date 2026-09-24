import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router"; // react-router-dom use karein
// react-icons se icons import kar rahe hain (Fi = Feather Icons)
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import { MystoreContext } from "../Context/StoreContext";

export const Header = () => {
  const { CartPopUpToggle, setCartPopUpToggle } = useContext(MystoreContext);
  let navigate = useNavigate();
  const navLinkStyle = ({ isActive }) =>
    `text-[15px] font-medium tracking-wide transition-all duration-300 ease-in-out pb-1 border-b-2 ${
      isActive
        ? "text-orange-500 border-orange-500"
        : "text-gray-500 border-transparent hover:text-orange-500 hover:border-orange-500"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <NavLink
              to="/"
              className="text-2xl font-semibold tracking-tighter text-gray-900 flex items-center gap-1"
            >
              Naveen's<span className="text-orange-500 font-bold">Store</span>
            </NavLink>
          </div>

          <nav className="hidden md:flex items-center space-x-10">
            <NavLink to="/" className={navLinkStyle}>
              Home
            </NavLink>
            <NavLink to="/store" className={navLinkStyle}>
              Store
            </NavLink>
            <NavLink to="/about" className={navLinkStyle}>
              About
            </NavLink>
            <NavLink to="/service" className={navLinkStyle}>
              Service
            </NavLink>
            <NavLink to="/contact" className={navLinkStyle}>
              Contact
            </NavLink>
            <NavLink to="/cart" className={navLinkStyle}>
              Cart
            </NavLink>
          </nav>

          <div className="flex items-center space-x-5 text-gray-600">
            <button className="hover:text-orange-500 transition-colors p-2 rounded-full hover:bg-orange-50">
              <FiSearch className="text-xl" />
            </button>
            <button className="hover:text-orange-500 transition-colors p-2 rounded-full hover:bg-orange-50 hidden sm:block">
              <FiUser
                onClick={() => {
                  navigate("/account");
                }}
                className="text-xl"
              />
            </button>
            <button
              onClick={() => {
                setCartPopUpToggle(true);
              }}
              className="hover:text-orange-500 transition-colors p-2 rounded-full hover:bg-orange-50 relative"
            >
              <FiShoppingCart className="text-xl" />
              <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
