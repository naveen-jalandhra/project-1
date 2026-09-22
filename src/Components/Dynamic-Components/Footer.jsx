import React from "react";
import { NavLink } from "react-router";
// (Fa = FontAwesome, Fi = Feather)
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCcVisa,
  FaCcMastercard,
  FaPaypal,
  FaApplePay,
} from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-slate-300 font-sans border-t border-slate-800">
      <style
        dangerouslySetInnerHTML={{
          __html: `@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap'); footer { font-family: 'Plus Jakarta Sans', sans-serif; }`,
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4 pr-4">
            <NavLink
              to="/"
              className="text-3xl font-semibold tracking-tighter text-white flex items-center gap-1 mb-6"
            >
              Naveen's<span className="text-[#E65C2B]">Store</span>
            </NavLink>
            <p className="text-slate-400 font-light text-sm leading-relaxed mb-8 max-w-sm">
              Discover a curated collection of premium gadgets, fresh groceries,
              and trendy fashion directly to your doorstep. Your ultimate
              shopping destination.
            </p>
            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center gap-3 text-sm font-light hover:text-[#E65C2B] transition-colors group"
              >
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#E65C2B]/10">
                  <FiPhone />
                </span>
                +91 98765 43210
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-sm font-light hover:text-[#E65C2B] transition-colors group"
              >
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#E65C2B]/10">
                  <FiMail />
                </span>
                support@naveensstore.com
              </a>
              <p className="flex items-start gap-3 text-sm font-light text-slate-400">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <FiMapPin />
                </span>
                Rajasthan, India
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-medium mb-6 text-lg tracking-wide">
              Shopping
            </h4>
            <ul className="space-y-4">
              {["Electronics", "Fashion", "Groceries", "Home Decor"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm font-light hover:text-[#E65C2B] transition-colors flex items-center group"
                    >
                      <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">
                        <FiArrowRight className="text-xs" />
                      </span>
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-medium mb-6 text-lg tracking-wide">
              Support
            </h4>
            <ul className="space-y-4">
              {["Help Center", "Track Order", "Returns", "Privacy Policy"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm font-light hover:text-[#E65C2B] transition-colors flex items-center group"
                    >
                      <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">
                        <FiArrowRight className="text-xs" />
                      </span>
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-white font-medium mb-6 text-lg tracking-wide">
              Stay Updated
            </h4>
            <p className="text-sm font-light text-slate-400 mb-4">
              Subscribe to our newsletter for exclusive offers and fresh
              updates.
            </p>
            <div className="flex bg-white/5 rounded-full p-1 border border-white/10 focus-within:border-[#E65C2B]/50 transition-colors">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent text-sm w-full px-4 outline-none text-white placeholder-slate-500 font-light"
              />
              <button className="bg-[#E65C2B] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#ff6e3d] transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>

            <div className="mt-8">
              <h5 className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-4">
                Accepted Payments
              </h5>
              <div className="flex gap-3 text-2xl text-slate-600">
                <FaCcVisa className="hover:text-white transition-colors cursor-pointer" />
                <FaCcMastercard className="hover:text-white transition-colors cursor-pointer" />
                <FaPaypal className="hover:text-white transition-colors cursor-pointer" />
                <FaApplePay className="hover:text-white transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm font-light text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Naveen's Store. All rights
            reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0 text-lg">
            <a href="#" className="hover:text-[#E65C2B] transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#E65C2B] transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#E65C2B] transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#E65C2B] transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
