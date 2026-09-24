import React, { useContext, useState } from "react";
import {
  FiShoppingCart,
  FiStar,
  FiPlus,
  FiMinus,
  FiTrash2,
  FiLayers,
} from "react-icons/fi";
import { MystoreContext } from "../Components/Context/StoreContext";
import { useNavigate } from "react-router";

export const Store = () => {
  const {
    CartItems,
    CurrentProducts,
    AddToCartFnc,
    IncreaseFnc,
    DecreaseFnc,
    CategoryProduct,
    CategorisedProduct,
    AllCategories,
    singlePageFnc,
  } = useContext(MystoreContext);

  const [ActiveBtn, setActiveBtn] = useState("All");

  let navigate = useNavigate();

  let CategoryFnc = (cat) => {
    setActiveBtn(cat);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#FDFDFD] font-sans p-6 md:p-12 overflow-hidden selection:bg-[#E65C2B] selection:text-white">
      <div className="w-full py-4 overflow-x-auto no-scrollbar font-sans">
        <div className="flex items-center gap-3 min-w-max px-2">
          {AllCategories.map((cat, index) => {
            let IsExist = ActiveBtn === cat;
            return (
              <button
                key={index}
                onClick={() => {
                  CategoryProduct(cat);
                  CategoryFnc(cat);
                }}
                className={`px-6 py-3 mb-7 rounded-2xl text-xs font-medium uppercase tracking-wider transition-all duration-300 backdrop-blur-md flex items-center gap-2 cursor-pointer border ${
                  IsExist
                    ? "bg-[#E65C2B] text-white border-[#E65C2B] shadow-xl shadow-[#E65C2B]/40 scale-105"
                    : "bg-white/80 hover:bg-[#E65C2B] text-slate-800 hover:text-white border-white/90 hover:border-[#E65C2B]/30 shadow-sm hover:shadow-md"
                }`}
              >
                {cat === "All" && <FiLayers className="w-3.5 h-3.5" />}
                {cat}
              </button>
            );
          })}
        </div>
      </div>
      {/* --- Ambient Blurry Glass Backgrounds --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[45rem] h-[45rem] bg-[#E65C2B]/15 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[40rem] h-[40rem] bg-orange-400/25 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[40%] left-[30%] w-[35rem] h-[35rem] bg-rose-300/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* --- GLASS GRID CONTAINER --- */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {CategorisedProduct.map((item) => {
          let ExistToCart = CartItems.find((elem) => elem.id === item.id);
          return (
            <div
              onClick={() => {
                singlePageFnc(item);
                navigate("/singlepage");
              }}
              key={item.id}
              className="bg-white/60 backdrop-blur-2xl border border-white/80 p-5 rounded-[2.5rem] shadow-[0_8px_40px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_50px_rgb(230,92,43,0.12)] hover:border-[#E65C2B]/30 transition-all duration-500 flex flex-col justify-between group"
            >
              {/* Image Box with Glass Badge */}
              <div className="h-52 w-full flex items-center justify-center p-6 bg-white/40 backdrop-blur-md rounded-2xl mb-5 relative overflow-hidden border border-white/50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full object-contain group-hover:scale-110 transition-transform duration-500 ease-out drop-shadow-md"
                />
                <span className="absolute top-3 left-3 bg-white/70 backdrop-blur-xl text-[10px] font-medium text-slate-700 px-3 py-1 rounded-full uppercase tracking-wider border border-white/60 shadow-sm">
                  {item.category}
                </span>
              </div>

              {/* Content Section */}
              <div className="flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-medium text-slate-800 text-sm line-clamp-1 group-hover:text-[#E65C2B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-light line-clamp-2 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Price & Rating */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-200/50">
                  <span className="text-lg font-bold text-slate-900 tracking-tight">
                    ${item.price}
                  </span>
                  <span className="text-xs font-medium text-amber-700 bg-amber-50/80 backdrop-blur-sm border border-amber-200/50 px-2.5 py-1 rounded-xl flex items-center gap-1 shadow-xs">
                    <FiStar className="fill-amber-500 text-amber-500 w-3 h-3" />{" "}
                    {item.rating?.rate}{" "}
                    <span className="text-slate-400 font-light">
                      ({item.rating?.count})
                    </span>
                  </span>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {!ExistToCart ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      AddToCartFnc(item);
                    }}
                    className="w-full bg-slate-900 text-white rounded-2xl py-3.5 font-medium text-xs flex items-center justify-center gap-2 hover:bg-[#E65C2B] transition-all duration-300 shadow-lg shadow-slate-950/10 hover:shadow-[#E65C2B]/30 group/btn"
                  >
                    <FiShoppingCart className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                    Add to Cart
                  </button>
                ) : (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="flex items-center justify-between bg-white/70 backdrop-blur-md border border-white/90 p-1.5 rounded-2xl shadow-sm"
                  >
                    <button
                      onClick={() => {
                        DecreaseFnc(item);
                      }}
                      className="w-8 h-8 rounded-xl bg-white/60 hover:bg-[#E65C2B] hover:text-white text-slate-700 flex items-center justify-center transition-all duration-300 shadow-2xs"
                    >
                      <FiMinus className="w-3.5 h-3.5" />
                    </button>

                    <span className="text-xs font-bold text-slate-800 tracking-wide">
                      {ExistToCart.quantity}
                    </span>

                    <button
                      onClick={() => {
                        IncreaseFnc(item);
                      }}
                      className="w-8 h-8 rounded-xl bg-white/60 hover:bg-[#E65C2B] hover:text-white text-slate-700 flex items-center justify-center transition-all duration-300 shadow-2xs"
                    >
                      <FiPlus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
