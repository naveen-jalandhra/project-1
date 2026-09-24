import React, { useContext } from "react";
import { Link } from "react-router";
import { FiMinus, FiPlus } from "react-icons/fi";
import {
  FiShoppingCart,
  FiStar,
  FiArrowLeft,
  FiShield,
  FiTruck,
  FiRefreshCw,
} from "react-icons/fi";
import { MystoreContext } from "../Context/StoreContext";

export const SingleProductPage = () => {
  let {
    singlePageFnc,
    CurrentSinglePageItme,
    RemoveFromCart,
    IncreaseFnc,
    DecreaseFnc,
    AddToCartFnc,
  } = useContext(MystoreContext);

  return (
    <div className="relative min-h-screen bg-[#FDFDFD] font-sans p-6 md:p-12 overflow-hidden selection:bg-[#E65C2B] selection:text-white flex flex-col justify-between">
      <div className="absolute top-[-10%] left-[-10%] w-[45rem] h-[45rem] bg-[#E65C2B]/15 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[40rem] h-[40rem] bg-orange-400/25 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[40%] left-[30%] w-[35rem] h-[35rem] bg-rose-300/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Top Back Navigation */}
      <div className="relative z-10 max-w-6xl mx-auto w-full mb-8">
        <Link
          to="/store"
          className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-white/80 text-slate-800 px-5 py-2.5 rounded-2xl text-xs font-medium uppercase tracking-wider hover:bg-[#E65C2B] hover:text-white transition-all shadow-xs"
        >
          <FiArrowLeft className="w-4 h-4" /> Back to Store
        </Link>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full bg-white/60 backdrop-blur-2xl border border-white/80 p-8 md:p-12 rounded-[3rem] shadow-[0_12px_50px_rgb(0,0,0,0.05)] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Big Image Box with Glass Badge */}
        <div className="h-[26rem] w-full flex items-center justify-center p-8 bg-white/40 backdrop-blur-md rounded-[2.5rem] relative overflow-hidden border border-white/50 shadow-inner">
          <img
            src={CurrentSinglePageItme.image}
            alt={CurrentSinglePageItme.title}
            className="h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-4 left-4 bg-white/80 backdrop-blur-xl text-xs font-semibold text-slate-700 px-4 py-1.5 rounded-full uppercase tracking-wider border border-white shadow-sm">
            {CurrentSinglePageItme.category}
          </span>
        </div>

        {/* Right: Detailed Info & Actions */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E65C2B] bg-orange-500/10 px-3 py-1 rounded-full">
              In Stock & Ready
            </span>
            <h1 className="text-2xl md:text-4xl font-light text-slate-900 tracking-tight leading-snug mt-3">
              {CurrentSinglePageItme.title}
            </h1>
            <p className="text-slate-500 font-light text-sm md:text-base mt-4 leading-relaxed">
              {CurrentSinglePageItme.description}
            </p>
          </div>

          {/* Price & Rating Row */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200/60">
            <span className="text-3xl font-bold text-slate-900 tracking-tight">
              ${CurrentSinglePageItme.price}
            </span>
            <span className="text-xs font-medium text-amber-700 bg-amber-50/80 backdrop-blur-sm border border-amber-200/50 px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-xs">
              <FiStar className="fill-amber-500 text-amber-500 w-4 h-4" />{" "}
              {CurrentSinglePageItme.rating.rate}{" "}
              <span className="text-slate-400 font-light">
                ({CurrentSinglePageItme.rating.count} reviews)
              </span>
            </span>
          </div>

          {/* Action Button & Trust Elements */}
          <div className="pt-2 space-y-4">
            <button
              onClick={() => {
                AddToCartFnc(CurrentSinglePageItme);
              }}
              type="button"
              className="w-full bg-slate-900 text-white rounded-2xl py-4 font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#E65C2B] transition-all duration-300 shadow-xl shadow-slate-950/10 hover:shadow-[#E65C2B]/30 cursor-pointer group"
            >
              <FiShoppingCart className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Add to Cart
            </button>
            <div className="flex items-center justify-between bg-white/70 backdrop-blur-md border border-white/90 p-2 rounded-2xl shadow-sm max-w-xs">
              <button
                type="button"
                className="w-10 h-10 rounded-xl bg-white/80 hover:bg-[#E65C2B] hover:text-white text-slate-700 flex items-center justify-center transition-all shadow-xs cursor-pointer"
              >
                <FiMinus className="w-4 h-4" />
              </button>

              <span className="text-sm font-bold text-slate-800 tracking-wide">
                1
              </span>

              <button
                type="button"
                className="w-10 h-10 rounded-xl bg-white/80 hover:bg-[#E65C2B] hover:text-white text-slate-700 flex items-center justify-center transition-all shadow-xs cursor-pointer"
              >
                <FiPlus className="w-4 h-4" />
              </button>
            </div>

            {/* Micro Trust Badges */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/60 text-center">
              <div className="flex flex-col items-center gap-1 p-3 rounded-2xl bg-white/40 border border-white/60 shadow-xs">
                <FiTruck className="w-4 h-4 text-[#E65C2B]" />
                <span className="text-[10px] font-medium text-slate-600">
                  Free Delivery
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 p-3 rounded-2xl bg-white/40 border border-white/60 shadow-xs">
                <FiShield className="w-4 h-4 text-[#E65C2B]" />
                <span className="text-[10px] font-medium text-slate-600">
                  Secure Pay
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 p-3 rounded-2xl bg-white/60 border border-white/60 shadow-xs">
                <FiRefreshCw className="w-4 h-4 text-[#E65C2B]" />
                <span className="text-[10px] font-medium text-slate-600">
                  Easy Returns
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-10"></div>
    </div>
  );
};
