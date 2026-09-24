import React, { useContext } from "react";
import { useNavigate } from "react-router"; // 👈 Navigate hook import kiya
import {
  FiX,
  FiPlus,
  FiMinus,
  FiTrash2,
  FiShoppingBag,
  FiExternalLink,
} from "react-icons/fi";
import { MystoreContext } from "../Context/StoreContext";

export const CartPopUp = () => {
  const {
    setCartPopUpToggle,
    CartPopUpToggle,
    CartItems,
    RemoveFromCart,
    IncreaseFnc,
    DecreaseFnc,
    CartAmount,
  } = useContext(MystoreContext);

  const navigate = useNavigate(); // 👈 Hook initialize kiya

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden font-sans transition-colors duration-300 ${
        CartPopUpToggle ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* 1. Backdrop Layer */}
      <div
        onClick={() => setCartPopUpToggle(false)}
        className={`absolute inset-0 bg-slate-900/30 backdrop-blur-[2px] transition-opacity duration-300 ${
          CartPopUpToggle ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* 2. Slide-over Drawer Container */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div
          onClick={(e) => e.stopPropagation()}
          className={`w-screen max-w-lg bg-white/70 backdrop-blur-2xl border-l border-white/80 shadow-[0_0_60px_rgb(0,0,0,0.08)] flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
            CartPopUpToggle ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* --- TOP HEADER --- */}
          <div className="flex items-center justify-between p-6 md:p-8 border-b border-slate-200/50 bg-white/40 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-orange-100/60 backdrop-blur-md border border-orange-200/50 flex items-center justify-center text-[#E65C2B] shadow-xs">
                <FiShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900 tracking-tight">
                  Your <span className="text-[#E65C2B]">Cart</span>
                </h2>
                <p className="text-xs text-slate-500 font-light">
                  {CartItems.length} items in your bag
                </p>
              </div>
            </div>

            <button
              onClick={() => setCartPopUpToggle(false)}
              className="w-10 h-10 rounded-2xl bg-white/60 hover:bg-[#E65C2B] hover:text-white text-slate-700 flex items-center justify-center transition-all duration-300 border border-white/80 shadow-xs"
            >
              <FiX className="w-4 h-4" />
            </button>
          </div>

          {/* --- ITEMS LIST --- */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-4">
            {CartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-slate-400 space-y-2">
                <FiShoppingBag className="w-12 h-12 stroke-1 text-slate-300" />
                <p className="text-sm">Your cart is empty</p>
              </div>
            ) : (
              CartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/60 backdrop-blur-xl border border-white/90 p-4 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_35px_rgb(230,92,43,0.08)] hover:border-[#E65C2B]/30 transition-all duration-300 flex items-center gap-4 group"
                >
                  <div className="w-20 h-20 bg-white/50 backdrop-blur-md rounded-2xl p-2.5 flex items-center justify-center border border-white/60 shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-medium text-slate-800 truncate">
                      {item.title}
                    </h3>
                    <p className="text-sm font-bold text-slate-900 mt-1">
                      ${item.price}
                    </p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center bg-white/80 border border-slate-200/70 p-1 rounded-xl shadow-2xs">
                        <button
                          onClick={() => DecreaseFnc(item)}
                          className="w-7 h-7 rounded-lg bg-white/60 hover:bg-[#E65C2B] hover:text-white text-slate-700 flex items-center justify-center transition-all shadow-2xs"
                        >
                          <FiMinus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold px-3 text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => IncreaseFnc(item)}
                          className="w-7 h-7 rounded-lg bg-white/60 hover:bg-[#E65C2B] hover:text-white text-slate-700 flex items-center justify-center transition-all shadow-2xs"
                        >
                          <FiPlus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => RemoveFromCart(item)}
                        className="w-8 h-8 rounded-xl bg-rose-50/60 hover:bg-rose-500 hover:text-white text-rose-500 flex items-center justify-center transition-all border border-rose-100 shadow-2xs"
                      >
                        <FiTrash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* --- BOTTOM CHECKOUT FOOTER --- */}
          <div className="p-6 md:p-8 border-t border-slate-200/50 bg-white/50 backdrop-blur-2xl space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500 font-light">Subtotal Amount</span>
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                ${CartAmount}
              </span>
            </div>

            {/* Do Buttons: Checkout & Open Full Cart Page */}
            <div className="space-y-2.5">
              <button className="w-full bg-slate-900 text-white rounded-2xl py-3.5 font-medium text-xs tracking-widest uppercase hover:bg-[#E65C2B] transition-all duration-300 shadow-lg shadow-slate-950/15 hover:shadow-[#E65C2B]/30">
                Proceed to Checkout
              </button>

              <button
                onClick={() => {
                  setCartPopUpToggle(false); // Popup band karo
                  navigate("/cart"); // Cart page par le jao
                }}
                className="w-full bg-white/80 hover:bg-white text-slate-800 border border-slate-200/80 rounded-2xl py-3.5 font-medium text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-xs hover:shadow-md"
              >
                <FiExternalLink className="w-3.5 h-3.5 text-[#E65C2B]" />
                Open in Cart Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
