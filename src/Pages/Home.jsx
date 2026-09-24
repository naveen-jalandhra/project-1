import React, { useContext } from "react";
import { Link, useNavigate } from "react-router"; // 👈 useNavigate import kiya
import {
  FiArrowRight,
  FiShoppingBag,
  FiStar,
  FiShield,
  FiTruck,
  FiRefreshCw,
  FiHeart,
  FiShoppingCart,
} from "react-icons/fi";
import { FaLaptop, FaTshirt, FaMobileAlt, FaGlasses } from "react-icons/fa";
import { MystoreContext } from "../Components/Context/StoreContext";

export const Home = () => {
  const { CurrentProducts, AddToCartFnc, singlePageFnc } =
    useContext(MystoreContext); // 👈 Context se singlePageFnc nikal liya

  let navigate = useNavigate(); // 👈 Navigate hook initialize kiya

  // Manual Categories for quick navigation UI
  const categories = [
    {
      id: 1,
      name: "electronics",
      title: "Electronics",
      icon: <FaLaptop className="w-6 h-6 text-[#E65C2B]" />,
      count: "Latest Gadgets",
    },
    {
      id: 2,
      name: "men's clothing",
      title: "Men's Clothing",
      icon: <FaTshirt className="w-6 h-6 text-[#E65C2B]" />,
      count: "Trendy Apparel",
    },
    {
      id: 3,
      name: "jewelery",
      title: "Jewelery",
      icon: <FaGlasses className="w-6 h-6 text-[#E65C2B]" />,
      count: "Premium Ornaments",
    },
    {
      id: 4,
      name: "women's clothing",
      title: "Women's Clothing",
      icon: <FaMobileAlt className="w-6 h-6 text-[#E65C2B]" />,
      count: "Exquisite Fashion",
    },
  ];

  // Real API se top 4 products utha kar trending banaye hain
  const trendingProducts = CurrentProducts ? CurrentProducts.slice(0, 4) : [];

  // Testimonials
  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      comment: "The product quality is amazing and delivery was super fast!",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Verma",
      comment: "Super sleek design and very smooth shopping experience.",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Kumar",
      comment:
        "Best online store interface I have used so far. Highly recommend!",
      rating: 4,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#FDFDFD] font-sans overflow-x-hidden selection:bg-[#E65C2B] selection:text-white">
      {/* --- Ambient Blurry Glass Background Blobs --- */}
      <div className="absolute top-[-5%] left-[-5%] w-[45rem] h-[45rem] bg-[#E65C2B]/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-[35%] right-[-10%] w-[40rem] h-[40rem] bg-orange-400/20 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[45rem] h-[45rem] bg-rose-300/15 rounded-full blur-[150px] pointer-events-none"></div>

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-white/80 text-[#E65C2B] text-xs font-semibold px-4 py-1.5 rounded-full shadow-xs uppercase tracking-widest">
            ✨ Premium Handcrafted Store
          </span>
          <h1 className="text-4xl md:text-6xl font-light text-slate-900 tracking-tight leading-tight">
            Discover Style &{" "}
            <span className="font-semibold text-[#E65C2B]">Innovation</span>
          </h1>
          <p className="text-slate-500 font-light text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Welcome to Naveen's Store. Explore our curated selection of
            high-quality products wrapped in an unmatched glassmorphic
            aesthetic.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <Link
              to="/store"
              className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-2xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#E65C2B] transition-all duration-300 shadow-xl shadow-slate-950/10 hover:shadow-[#E65C2B]/30 group"
            >
              Explore Collection
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/register"
              className="w-full sm:w-auto bg-white/70 backdrop-blur-md border border-white/80 text-slate-800 px-8 py-4 rounded-2xl font-medium text-sm flex items-center justify-center hover:bg-white transition-all shadow-sm"
            >
              Join Us
            </Link>
          </div>
        </div>

        {/* Hero Glass Card Illustration (Clickable to Single Page too!) */}
        <div className="relative flex justify-center">
          {CurrentProducts?.[0] && (
            <div
              onClick={() => {
                singlePageFnc(CurrentProducts[0]);
                navigate("/singlepage");
              }}
              className="w-full max-w-md bg-white/60 backdrop-blur-2xl border border-white/80 p-8 rounded-[3rem] shadow-[0_12px_50px_rgb(0,0,0,0.05)] relative group cursor-pointer"
            >
              <div className="absolute -top-4 -right-4 bg-amber-500/90 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-2xl shadow-md rotate-6">
                🔥 Featured Pick
              </div>
              <div className="h-72 w-full bg-white/40 rounded-2xl flex items-center justify-center p-6 border border-white/50">
                <img
                  src={CurrentProducts[0].image}
                  alt="Hero Product"
                  className="h-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="font-semibold text-slate-900 text-lg line-clamp-1 group-hover:text-[#E65C2B] transition-colors">
                  {CurrentProducts[0].title}
                </h3>
                <p className="text-sm font-light text-slate-500 mt-1">
                  Starting from just ${CurrentProducts[0].price}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ================= 2. FEATURES BAR ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-white/50 backdrop-blur-2xl border border-white/80 rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-2xl bg-[#E65C2B]/10 flex items-center justify-center text-[#E65C2B] text-xl">
              <FiTruck />
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 text-sm">
                Free Global Shipping
              </h4>
              <p className="text-xs font-light text-slate-500">
                On all orders above $50
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-600 text-xl">
              <FiShield />
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 text-sm">
                Secure Transactions
              </h4>
              <p className="text-xs font-light text-slate-500">
                100% encrypted checkout
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-600 text-xl">
              <FiRefreshCw />
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 text-sm">
                Easy Returns
              </h4>
              <p className="text-xs font-light text-slate-500">
                30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. POPULAR CATEGORIES ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-light text-slate-900 tracking-tight">
            Browse By{" "}
            <span className="font-semibold text-[#E65C2B]">Category</span>
          </h2>
          <p className="text-slate-500 font-light text-sm mt-1">
            Explore categories tailored for your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to="/store"
              className="bg-white/60 backdrop-blur-2xl border border-white/80 p-6 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:border-[#E65C2B]/40 hover:shadow-lg transition-all duration-300 flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/80 border border-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <div>
                <h3 className="font-medium text-slate-800 text-base group-hover:text-[#E65C2B] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs font-light text-slate-400 mt-0.5">
                  {cat.count}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= 4. REAL API TRENDING PRODUCTS GRID (Dynamic Click to Single Page) ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4 text-center sm:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-light text-slate-900 tracking-tight">
              Trending{" "}
              <span className="font-semibold text-[#E65C2B]">Products</span>
            </h2>
            <p className="text-slate-500 font-light text-sm mt-1">
              Live fetched items from our main store catalog.
            </p>
          </div>
          <Link
            to="/store"
            className="text-xs font-semibold text-slate-900 hover:text-[#E65C2B] flex items-center gap-1 transition-colors"
          >
            View All Products <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                singlePageFnc(item);
                navigate("/singlepage");
              }}
              className="bg-white/60 backdrop-blur-2xl border border-white/80 p-5 rounded-[2.5rem] shadow-[0_8px_40px_rgb(0,0,0,0.03)] hover:border-[#E65C2B]/30 hover:shadow-xl transition-all duration-500 flex flex-col justify-between group cursor-pointer"
            >
              <div className="h-48 w-full flex items-center justify-center p-4 bg-white/40 backdrop-blur-md rounded-2xl mb-4 relative overflow-hidden border border-white/50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // 👈 Card click hone par single page khulne se bachata hai
                    AddToCartFnc(item);
                  }}
                  className="absolute top-3 right-3 bg-white/80 backdrop-blur-md p-2 rounded-full text-slate-600 hover:text-white hover:bg-[#E65C2B] transition-all shadow-xs cursor-pointer"
                  title="Quick Add to Cart"
                >
                  <FiShoppingCart className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider bg-white/70 px-2.5 py-0.5 rounded-full border border-white/60">
                  {item.category}
                </span>
                <h3 className="font-medium text-slate-800 text-sm line-clamp-1 group-hover:text-[#E65C2B] transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-200/50">
                <span className="text-base font-bold text-slate-900">
                  ${item.price}
                </span>
                <span className="text-xs font-medium text-amber-700 bg-amber-50/80 px-2.5 py-1 rounded-xl flex items-center gap-1 border border-amber-200/50">
                  <FiStar className="fill-amber-500 text-amber-500 w-3 h-3" />{" "}
                  {item.rating?.rate || "4.5"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 5. PROMO BANNER SECTION ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-[#E65C2B]/80 text-white rounded-[3rem] p-8 md:p-14 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-4 max-w-xl text-center md:text-left">
            <span className="bg-white/25 backdrop-blur-md text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Limited Time Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              Get <span className="font-semibold text-amber-400">30% OFF</span>{" "}
              on your first order!
            </h2>
            <p className="text-slate-300 font-light text-sm leading-relaxed">
              Sign up today and use our exclusive store discount code to save
              big on top premium brands.
            </p>
          </div>

          <Link
            to="/register"
            className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-medium text-sm hover:bg-[#E65C2B] hover:text-white transition-all shadow-lg whitespace-nowrap"
          >
            Claim Your Discount
          </Link>
        </div>
      </section>

      {/* ================= 6. TESTIMONIALS SECTION ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-12 mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-light text-slate-900 tracking-tight">
            What Our{" "}
            <span className="font-semibold text-[#E65C2B]">Customers Say</span>
          </h2>
          <p className="text-slate-500 font-light text-sm mt-1">
            Real reviews from verified shoppers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white/60 backdrop-blur-2xl border border-white/80 p-6 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] space-y-4"
            >
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(rev.rating)].map((_, i) => (
                  <FiStar key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              <p className="text-slate-600 text-sm font-light leading-relaxed italic">
                "{rev.comment}"
              </p>
              <h4 className="font-semibold text-slate-900 text-sm pt-2 border-t border-slate-200/50">
                - {rev.name}
              </h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
