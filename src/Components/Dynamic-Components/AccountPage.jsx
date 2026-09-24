import React, { useContext } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiPackage,
  FiHeart,
  FiSettings,
  FiLogOut,
  FiShield,
  FiEdit3,
} from "react-icons/fi";
import { MystoreContext } from "../Context/StoreContext";

export const AccountPage = () => {
  const { UserInfo, LogoutUserFnc } = useContext(MystoreContext);

  return (
    <div className="relative min-h-screen bg-[#FDFDFD] font-sans p-6 md:p-12 overflow-hidden selection:bg-[#E65C2B] selection:text-white">
      {/* --- Ambient Blurry Glass Backgrounds --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[45rem] h-[45rem] bg-[#E65C2B]/15 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[40rem] h-[40rem] bg-orange-400/25 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[40%] left-[30%] w-[35rem] h-[35rem] bg-rose-300/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-8">
        {/* --- PAGE HEADER --- */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900">
              Account{" "}
              <span className="font-semibold text-[#E65C2B]">Dashboard</span>
            </h1>
            <p className="text-slate-500 font-light text-sm mt-1">
              Manage your personal information, orders, and security settings.
            </p>
          </div>

          <button className="bg-white/80 hover:bg-slate-900 hover:text-white text-slate-800 border border-slate-200/80 px-5 py-3 rounded-2xl font-medium text-xs tracking-wider uppercase flex items-center gap-2 transition-all duration-300 shadow-sm">
            <FiEdit3 className="w-3.5 h-3.5 text-[#E65C2B]" />
            Edit Profile
          </button>
        </div>

        {/* --- MAIN GRID LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT COLUMN: Profile Card & Quick Nav */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white/60 backdrop-blur-2xl border border-white/80 p-6 md:p-8 rounded-[2.5rem] shadow-[0_8px_40px_rgb(0,0,0,0.04)] text-center flex flex-col items-center group">
              <div className="relative w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-[#E65C2B] to-rose-400 shadow-lg mb-4">
                {/* <img
                  src={UserInfo.avatar}
                  alt={UserInfo.name}
                  className="w-full h-full object-cover rounded-full border-4 border-white"
                /> */}
              </div>
              <h2 className="text-xl font-semibold text-slate-900">
                {UserInfo?.Name}
              </h2>
              <p className="text-xs text-slate-500 font-light mt-1">
                {/* Member since {UserInfo?.memberSince} */}
              </p>

              <div className="w-full mt-6 pt-6 border-t border-slate-200/50 space-y-3 text-left">
                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <FiMail className="w-4 h-4 text-[#E65C2B]" />
                  <span className="truncate">{UserInfo?.Email}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <FiPhone className="w-4 h-4 text-[#E65C2B]" />
                  <span>{UserInfo?.Phone}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <FiMapPin className="w-4 h-4 text-[#E65C2B]" />
                  <span>{UserInfo?.Location}</span>
                </div>
              </div>
            </div>

            {/* Account Quick Links / Actions */}
            <div className="bg-white/60 backdrop-blur-2xl border border-white/80 p-4 rounded-[2.5rem] shadow-[0_8px_40px_rgb(0,0,0,0.04)] space-y-2">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/80 text-slate-700 hover:text-[#E65C2B] transition-all text-xs font-medium">
                <FiPackage className="w-4 h-4 text-[#E65C2B]" /> My Orders &
                Tracking
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/80 text-slate-700 hover:text-[#E65C2B] transition-all text-xs font-medium">
                <FiHeart className="w-4 h-4 text-rose-500" /> My Wishlist
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/80 text-slate-700 hover:text-[#E65C2B] transition-all text-xs font-medium">
                <FiShield className="w-4 h-4 text-amber-600" /> Security &
                Password
              </button>
              <button
                onClick={() => {
                  LogoutUserFnc();
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-rose-50 text-rose-600 transition-all text-xs font-medium border-t border-slate-200/40 mt-2 pt-3"
              >
                <FiLogOut className="w-4 h-4" /> Logout Account
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Stats & Recent Activity */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/60 backdrop-blur-2xl border border-white/80 p-6 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(230,92,43,0.08)] hover:border-[#E65C2B]/30 transition-all duration-300 flex items-center gap-4 group"
                  >
                    <div
                      className={`w-12 h-12 rounded-2xl ${stat.bg} backdrop-blur-md flex items-center justify-center ${stat.color} shadow-xs group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900 tracking-tight">
                        {stat.value}
                      </p>
                      <p className="text-xs text-slate-500 font-light mt-0.5">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })} */}
            </div>

            {/* Recent Orders Section */}
            <div className="bg-white/60 backdrop-blur-2xl border border-white/80 p-6 md:p-8 rounded-[2.5rem] shadow-[0_8px_40px_rgb(0,0,0,0.04)] space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-slate-900 tracking-tight">
                  Recent <span className="text-[#E65C2B]">Orders</span>
                </h3>
                <span className="text-xs font-medium text-slate-500 cursor-pointer hover:text-[#E65C2B] transition-colors">
                  View All
                </span>
              </div>

              {/* .map((order, idx) => (
                     <div
                       key={idx}
                      className="bg-white/70 backdrop-blur-md border border-white/90 p-4 md:p-5 rounded-2xl shadow-2xs flex items-center justify-between gap-4 hover:border-[#E65C2B]/30 transition-all"
                    >
                      <div>
                        <p className="text-xs font-bold text-slate-900">
                          {order.id}
                        </p>
                        <p className="text-[11px] text-slate-400 font-light mt-0.5">
                          Placed on {order.date}
                        </p>
                      </div>

                      <div className="flex items-center gap-6">
                        <span
                          className={`text-[10px] font-medium px-3 py-1 rounded-full uppercase tracking-wider ${
                            order.status === "Delivered"
                              ? "bg-emerald-50 text-emerald-600 border border-emerald-200/60"
                              : "bg-amber-50 text-amber-600 border border-amber-200/60"
                          }`}
                        >
                          {order.status}
                        </span>
                        <span className="text-xs font-bold text-slate-900">
                          {order.price}
                        </span>
                      </div>
                    </div>
                 )) */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
