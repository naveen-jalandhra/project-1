import React, { useContext, useState } from "react";
import { Link } from "react-router";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiUser,
} from "react-icons/fi";
import { FaGoogle, FaApple } from "react-icons/fa";
import { MystoreContext } from "../Context/StoreContext";

export const RegisterUser = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { setRegistrationPanel, Accounts, setAccounts } =
    useContext(MystoreContext);

  const [UserName, setUserName] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const [UserPassword, setUserPassword] = useState("");

  let FieldData = {
    Name: UserName,
    Email: UserEmail,
    Password: UserPassword,
  };

  let SetInputFieldVal = () => {
    setAccounts((Users) => [...Users, FieldData]);
    console.log(Accounts);
    setRegistrationPanel(true);
  };

  return (
    <div className="relative min-h-screen bg-[#FDFDFD] font-sans flex items-center justify-center p-4 overflow-hidden selection:bg-[#E65C2B] selection:text-white">
      {/* --- Ambient Blurry Glass Backgrounds --- */}
      {/* Top Left Deep Orange Blob */}
      <div className="absolute top-[-10%] left-[-10%] w-[45rem] h-[45rem] bg-[#E65C2B]/15 rounded-full blur-[130px] pointer-events-none"></div>
      {/* Bottom Right Orange Blob */}
      <div className="absolute bottom-[-15%] right-[-10%] w-[40rem] h-[40rem] bg-orange-400/20 rounded-full blur-[120px] pointer-events-none"></div>
      {/* Center Soft Peach Blob */}
      <div className="absolute top-[30%] left-[20%] w-[35rem] h-[35rem] bg-rose-300/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* --- Main Register Card (Glassmorphism) --- */}
      <div className="relative z-10 w-full max-w-[460px] py-8">
        {/* Logo Area */}
        <div className="text-center mb-8">
          <Link
            to="/"
            className="inline-block text-3xl font-semibold tracking-tighter text-slate-900"
          >
            Naveen's<span className="text-[#E65C2B] font-bold">Store</span>
          </Link>
        </div>

        {/* The Glassy Form Container */}
        <div className="bg-white/60 backdrop-blur-2xl border border-white/60 p-8 md:p-10 rounded-[2.5rem] shadow-[0_8px_40px_rgb(0,0,0,0.04)]">
          <div className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-light text-slate-900 tracking-tight mb-2">
              Create an <span className="font-medium">Account</span>
            </h2>
            <p className="text-slate-500 font-light text-sm">
              Join us to get started with premium shopping.
            </p>
          </div>

          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              SetInputFieldVal();
            }}
          >
            {/* Full Name Input */}
            <div className="space-y-1.5">
              <label className="text-[13px] font-medium text-slate-700 ml-1">
                Full Name
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#E65C2B] transition-colors">
                  <FiUser className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={UserName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  className="w-full bg-white/50 border border-white text-slate-800 text-sm rounded-2xl pl-11 pr-4 py-3.5 outline-none focus:bg-white focus:border-[#E65C2B]/30 focus:ring-4 focus:ring-[#E65C2B]/10 transition-all placeholder:text-slate-400 font-light shadow-sm"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-1.5">
              <label className="text-[13px] font-medium text-slate-700 ml-1">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#E65C2B] transition-colors">
                  <FiMail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  placeholder="hello@example.com"
                  value={UserEmail}
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                  }}
                  className="w-full bg-white/50 border border-white text-slate-800 text-sm rounded-2xl pl-11 pr-4 py-3.5 outline-none focus:bg-white focus:border-[#E65C2B]/30 focus:ring-4 focus:ring-[#E65C2B]/10 transition-all placeholder:text-slate-400 font-light shadow-sm"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <label className="text-[13px] font-medium text-slate-700 ml-1">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#E65C2B] transition-colors">
                  <FiLock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={UserPassword}
                  onChange={(e) => {
                    setUserPassword(e.target.value);
                  }}
                  className="w-full bg-white/50 border border-white text-slate-800 text-sm rounded-2xl pl-11 pr-12 py-3.5 outline-none focus:bg-white focus:border-[#E65C2B]/30 focus:ring-4 focus:ring-[#E65C2B]/10 transition-all placeholder:text-slate-400 font-light shadow-sm tracking-widest focus:tracking-normal"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? (
                    <FiEyeOff className="w-4 h-4" />
                  ) : (
                    <FiEye className="w-4 h-4" />
                  )}
                </button>
              </div>
              <p className="text-[11px] text-slate-400 font-light ml-1 mt-1">
                Must be at least 8 characters long.
              </p>
            </div>

            {/* Terms and Conditions */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 mt-0.5 rounded-md border-slate-300 text-[#E65C2B] focus:ring-[#E65C2B]/20 cursor-pointer accent-[#E65C2B]"
                />
                <span className="text-[13px] text-slate-500 font-light leading-relaxed group-hover:text-slate-700 transition-colors">
                  I agree to the{" "}
                  <a
                    href="#"
                    className="font-medium text-slate-700 hover:text-[#E65C2B] transition-colors"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="font-medium text-slate-700 hover:text-[#E65C2B] transition-colors"
                  >
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-slate-900 text-white rounded-2xl px-6 py-4 font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#E65C2B] transition-all duration-300 shadow-lg shadow-slate-900/10 hover:shadow-[#E65C2B]/30 group mt-4"
            >
              Create Account
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="h-px bg-slate-200 flex-1"></div>
            <span className="text-xs font-light text-slate-400 uppercase tracking-widest">
              Or sign up with
            </span>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 bg-white border border-slate-100 hover:border-slate-200 hover:bg-slate-50 text-slate-700 rounded-2xl px-4 py-3 text-[13px] font-medium transition-all shadow-sm">
              <FaGoogle className="text-red-500 text-lg" /> Google
            </button>
            <button className="flex items-center justify-center gap-2 bg-white border border-slate-100 hover:border-slate-200 hover:bg-slate-50 text-slate-700 rounded-2xl px-4 py-3 text-[13px] font-medium transition-all shadow-sm">
              <FaApple className="text-slate-900 text-lg" /> Apple
            </button>
          </div>
        </div>

        {/* Login Link */}
        <p
          onClick={() => {
            setRegistrationPanel(true);
          }}
          className="text-center mt-8 text-[14px] text-slate-500 font-light"
        >
          Already have an account?
          <span className="font-medium text-slate-900 hover:text-[#E65C2B] transition-colors">
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};
