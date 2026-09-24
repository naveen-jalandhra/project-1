import React, { useContext, useState } from "react";
import {
  FiTrash2,
  FiPlus,
  FiMinus,
  FiArrowRight,
  FiShoppingBag,
} from "react-icons/fi";
import { MystoreContext } from "../Components/Context/StoreContext";

export const Cart = () => {
  const { CartItems, RemoveFromCart, IncreaseFnc, DecreaseFnc, CartAmount } =
    useContext(MystoreContext);
  console.log(CartItems);

  return (
    <div className="relative min-h-screen bg-[#FDFDFD] font-sans p-6 md:p-12 overflow-hidden selection:bg-[#E65C2B] selection:text-white">
      {/* --- Ambient Blurry Glass Backgrounds --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[45rem] h-[45rem] bg-[#E65C2B]/15 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[40rem] h-[40rem] bg-orange-400/25 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[30%] left-[30%] w-[35rem] h-[35rem] bg-rose-300/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900">
            Shopping <span className="font-semibold text-[#E65C2B]">Cart</span>
          </h1>
          <p className="text-slate-500 font-light text-sm mt-1">
            You have{" "}
            <span className="font-medium text-slate-800">
              {CartItems.length} items
            </span>{" "}
            in your cart.
          </p>
        </div>
        <button className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-white/60 backdrop-blur-md border border-white/80 px-4 py-2.5 rounded-2xl shadow-sm hover:border-[#E65C2B]/40 transition-all">
          <FiShoppingBag className="w-4 h-4 text-[#E65C2B]" /> Continue Shopping
        </button>
      </div>

      {/* --- MAIN LAYOUT GRID --- */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column: Cart Items List */}
        <div className="lg:col-span-2 space-y-4">
          {CartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white/60 backdrop-blur-2xl border border-white/80 p-4 md:p-6 rounded-[2.5rem] shadow-[0_8px_40px_rgb(0,0,0,0.03)] flex flex-col sm:flex-row items-center gap-5 hover:border-[#E65C2B]/30 transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="w-full sm:w-32 h-32 flex-shrink-0 bg-white/50 backdrop-blur-md rounded-2xl p-3 border border-white/60 flex items-center justify-center relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1 text-center sm:text-left w-full">
                <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider bg-white/70 px-2.5 py-0.5 rounded-full border border-white/60">
                  {item.category}
                </span>
                <h3 className="font-medium text-slate-800 text-sm md:text-base line-clamp-1 mt-1.5">
                  {item.title}
                </h3>
                <p className="text-sm font-bold text-slate-900 mt-1">
                  ${item.price}
                </p>

                {/* Quantity Controls & Delete */}
                <div className="flex items-center justify-center sm:justify-between mt-4 pt-3 border-t border-slate-200/50">
                  <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-white/80 px-3 py-1.5 rounded-xl shadow-xs">
                    <button
                      onClick={() => {
                        DecreaseFnc(item);
                      }}
                      className="text-slate-500 hover:text-slate-900 transition-colors"
                    >
                      <FiMinus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-semibold text-slate-800 w-4 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => {
                        IncreaseFnc(item);
                      }}
                      className="text-slate-500 hover:text-slate-900 transition-colors"
                    >
                      <FiPlus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      RemoveFromCart(item);
                    }}
                    className="text-rose-500 hover:text-rose-700 bg-rose-50/80 backdrop-blur-sm p-2 rounded-xl transition-all border border-rose-100/50"
                  >
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Sticky Order Summary Card */}
        <div className="lg:col-span-1 bg-white/60 backdrop-blur-2xl border border-white/80 p-6 md:p-8 rounded-[2.5rem] shadow-[0_8px_40px_rgb(0,0,0,0.04)] sticky top-6">
          <h2 className="text-xl font-medium text-slate-900 tracking-tight mb-6 pb-4 border-b border-slate-200/50">
            Order <span className="font-semibold text-[#E65C2B]">Summary</span>
          </h2>

          <div className="space-y-4 text-sm font-light text-slate-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium text-slate-900">${CartAmount}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Shipping</span>
              <span className="font-medium text-slate-900">${CartAmount}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax 0%</span>
              <span className="font-medium text-slate-900">$0.00</span>
            </div>

            <div className="pt-4 border-t border-slate-200/50 flex justify-between text-base font-semibold text-slate-900">
              <span>Total Amount</span>
              <span className="text-[#E65C2B]">${CartAmount}</span>
            </div>
          </div>

          {/* Checkout Button */}
          <button className="w-full mt-8 bg-slate-900 text-white rounded-2xl py-4 font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#E65C2B] transition-all duration-300 shadow-lg shadow-slate-950/10 hover:shadow-[#E65C2B]/30 group">
            Proceed to Checkout
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-[11px] text-center text-slate-400 font-light mt-4">
            Secure Checkout powered by Glass UI standards.
          </p>
        </div>
      </div>
    </div>
  );
};
