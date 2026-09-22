import React from "react";
import {
  FiHeart,
  FiShoppingCart,
  FiArrowRight,
  FiUser,
  FiShield,
  FiCreditCard,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";

// --- MOCK DATA ---
const CATEGORIES = [
  {
    name: "Electronics",
    img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    name: "Health & Beauty",
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    name: "Home Decor",
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    name: "Groceries",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    name: "Fashion",
    img: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    name: "Food",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=300&h=300",
  },
];

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Google Pixel 10 Pro",
    price: 999.0,
    rating: 4.8,
    reviews: 39,
    img: "https://images.unsplash.com/photo-1598327105666-5b89351cb315?auto=format&fit=crop&q=80&w=500&h=500",
  },
  {
    id: 2,
    name: "Wedding Flower Vase",
    price: 19.0,
    rating: 4.5,
    reviews: 148,
    img: "https://images.unsplash.com/photo-1582274528604-1fea63914a1f?auto=format&fit=crop&q=80&w=500&h=500",
  },
  {
    id: 3,
    name: "Nike P-6000 SE",
    price: 160.0,
    rating: 4.7,
    reviews: 256,
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=500&h=500",
  },
  {
    id: 4,
    name: "Tallow & Olive Balm",
    price: 33.0,
    rating: 4.9,
    reviews: 39,
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=500&h=500",
  },
];

const BRANDS = [
  {
    name: "Freshmart",
    sub: "120+ items",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  { name: "Target", sub: "260+ items", color: "text-red-600", bg: "bg-red-50" },
  {
    name: "New Balance",
    sub: "120+ items",
    color: "text-slate-900",
    bg: "bg-slate-100",
  },
  {
    name: "ASOS",
    sub: "333+ items",
    color: "text-gray-800",
    bg: "bg-gray-100",
  },
  {
    name: "Umbra",
    sub: "568+ items",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
  },
  { name: "Hp", sub: "273+ items", color: "text-blue-600", bg: "bg-blue-50" },
  {
    name: "ULTA Beauty",
    sub: "120+ items",
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
  {
    name: "Baseus",
    sub: "165+ items",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
];

// --- REUSABLE COMPONENTS ---
const SectionHeader = ({ title, showViewAll = true }) => (
  <div className="flex justify-between items-end mb-8 mt-24">
    <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
      {title}
    </h2>
    {showViewAll && (
      <button className="text-slate-500 flex items-center text-sm font-medium hover:text-[#E65C2B] transition-colors group pb-1 border-b border-transparent hover:border-[#E65C2B]">
        View Collection
        <FiArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
      </button>
    )}
  </div>
);

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-3xl p-4 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgb(0,0,0,0.06)] transition-all duration-500 group cursor-pointer border border-slate-50 flex flex-col h-full hover:-translate-y-1">
    <div className="relative aspect-square mb-5 rounded-2xl overflow-hidden bg-[#F8F9FA] flex items-center justify-center p-6">
      <button className="absolute top-4 right-4 p-2.5 bg-white/80 backdrop-blur-md rounded-full shadow-sm text-slate-400 opacity-0 group-hover:opacity-100 group-hover:text-red-500 hover:scale-110 transition-all duration-300 z-10">
        <FiHeart className="w-4 h-4" />
      </button>
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out"
      />
    </div>
    <div className="flex flex-col flex-grow px-2 pb-2">
      <h3 className="text-slate-800 font-medium mb-1 truncate text-[15px] tracking-tight">
        {product.name}
      </h3>
      <div className="flex items-center text-[12px] text-slate-400 mb-4 font-light">
        <div className="flex items-center text-amber-400 mr-2">
          <FiStar className="w-3.5 h-3.5 fill-current" />
          <span className="ml-1 text-slate-600 font-medium">
            {product.rating}
          </span>
        </div>
        ({product.reviews} reviews)
      </div>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xl font-semibold text-slate-900 tracking-tight">
          ${product.price.toFixed(2)}
        </span>
        <button className="bg-slate-50 text-slate-900 p-2.5 rounded-full flex items-center justify-center hover:bg-[#E65C2B] hover:text-white active:scale-95 transition-all duration-300">
          <FiShoppingCart className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
);

// --- MAIN PAGE COMPONENT ---
export const Home = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-800 selection:bg-[#E65C2B] selection:text-white pb-20">
      {/* Global Font Integration */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
      `,
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 md:py-12">
        {/* Sleek Hero Section (Removed over-sized text, made it an elegant banner) */}
        <section className="relative bg-slate-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden min-h-[60vh] md:min-h-[70vh] flex items-center shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>

          <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-3xl">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium tracking-wide uppercase mb-6 backdrop-blur-md">
              <FiTrendingUp className="w-3.5 h-3.5 mr-2" /> Naveen's Premium
              Store
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] mb-6 tracking-tight">
              Curated essentials, <br />
              <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#ff8c61] to-[#E65C2B]">
                delivered to you.
              </span>
            </h1>
            <p className="text-slate-300 font-light text-base md:text-lg mb-10 max-w-xl leading-relaxed">
              Explore our exclusive collection of high-end gadgets, fresh daily
              groceries, and trending fashion designed for modern living.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#E65C2B] text-white px-8 py-3.5 rounded-full font-medium text-sm flex items-center hover:bg-[#ff6e3d] transition-all shadow-lg shadow-[#E65C2B]/30 group">
                Shop the Catalog
                <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-full font-medium text-sm flex items-center hover:bg-white hover:text-slate-900 transition-all backdrop-blur-md">
                View Offers
              </button>
            </div>
          </div>
        </section>

        {/* Elegant Categories Grid */}
        <section>
          <SectionHeader title="Explore Categories" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-full aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-slate-50 mb-4 relative shadow-sm group-hover:shadow-lg transition-all duration-500 group-hover:-translate-y-1.5">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
                <span className="text-[14px] font-medium text-slate-700 group-hover:text-[#E65C2B] transition-colors">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Refined Product Grids */}
        <section>
          <SectionHeader title="Trending Now" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOCK_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Sleek Middle Promo Banners (Scaled down text, better balance) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-24">
          <div className="bg-[#f0f4f2] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-center group cursor-pointer min-h-[350px] md:min-h-[400px]">
            <div className="relative z-20 max-w-[60%]">
              <span className="text-emerald-700 font-medium tracking-wider uppercase text-xs mb-3 block">
                Farm to Door
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight mb-6 tracking-tight">
                Quality Groceries. <br />
                <span className="font-medium text-emerald-800">
                  Delivered Fresh.
                </span>
              </h2>
              <button className="bg-emerald-800 text-white px-6 py-3 rounded-full font-medium text-sm flex items-center hover:bg-emerald-900 transition-colors shadow-lg shadow-emerald-800/20 w-fit">
                Shop Groceries <FiArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600"
              alt="Vegetables"
              className="absolute right-[-15%] bottom-[-15%] w-[80%] object-cover transform group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-1000 ease-out mix-blend-multiply"
            />
          </div>

          <div className="bg-[#f4f7fa] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-center group cursor-pointer min-h-[350px] md:min-h-[400px]">
            <div className="relative z-20 max-w-[60%]">
              <span className="text-blue-600 font-medium tracking-wider uppercase text-xs mb-3 block">
                Tech Deals
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight mb-6 tracking-tight">
                Smart Gadgets. <br />
                <span className="font-medium text-blue-700">
                  Smarter Prices.
                </span>
              </h2>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium text-sm flex items-center hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 w-fit">
                View Gadgets <FiArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1598327105666-5b89351cb315?auto=format&fit=crop&q=80&w=400"
              alt="Phone"
              className="absolute right-[-5%] bottom-0 w-[55%] object-cover transform group-hover:-translate-y-4 transition-transform duration-1000 ease-out drop-shadow-2xl mix-blend-multiply"
            />
          </div>
        </section>

        {/* Clean Brands Section */}
        <section>
          <SectionHeader title="Featured Brands" showViewAll={false} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {BRANDS.map((brand, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-5 flex items-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-slate-100 group"
              >
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-xl md:rounded-[1rem] ${brand.bg} flex items-center justify-center font-bold text-xl mr-4 group-hover:scale-105 transition-transform duration-300 ${brand.color}`}
                >
                  {brand.name.charAt(0)}
                </div>
                <div className="overflow-hidden">
                  <h4 className="font-medium text-slate-800 text-[14px] md:text-[15px] tracking-tight truncate">
                    {brand.name}
                  </h4>
                  <p className="text-[11px] md:text-[12px] text-slate-400 font-light mt-0.5 truncate">
                    {brand.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Value Proposition (Clean & Compact) */}
        <section className="my-24 bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {[
              {
                icon: FiUser,
                title: "200k+ Users",
                desc: "Trusted by thousands of daily shoppers.",
                color: "text-orange-500",
                bg: "bg-orange-50",
              },
              {
                icon: FiShoppingCart,
                title: "1.5M+ Orders",
                desc: "Delivered successfully across the region.",
                color: "text-blue-500",
                bg: "bg-blue-50",
              },
              {
                icon: FiShield,
                title: "Top Quality",
                desc: "We source only from verified global brands.",
                color: "text-emerald-500",
                bg: "bg-emerald-50",
              },
              {
                icon: FiCreditCard,
                title: "Safe Payments",
                desc: "100% secure and encrypted transactions.",
                color: "text-purple-500",
                bg: "bg-purple-50",
              },
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col md:items-start group">
                <div
                  className={`w-12 h-12 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-5 h-5 stroke-[2]" />
                </div>
                <h3 className="text-[16px] font-medium text-slate-900 mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-[13px] text-slate-500 font-light leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
