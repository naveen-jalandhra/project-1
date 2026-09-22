import React from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

//// Yahan aap baad mein API se aane wala data pass karenge
const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Google Pixel 10 Pro",
    price: 999.0,
    rating: 4.8,
    reviews: 39,
    img: "https://images.unsplash.com/photo-1598327105666-5b89351cb315?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    id: 2,
    name: "Wedding Flower Vase",
    price: 19.0,
    rating: 4.5,
    reviews: 148,
    img: "https://images.unsplash.com/photo-1582274528604-1fea63914a1f?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    id: 3,
    name: "Nike P-6000 SE",
    price: 160.0,
    rating: 4.7,
    reviews: 256,
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    id: 4,
    name: "Tallow & Olive Balm",
    price: 33.0,
    rating: 4.9,
    reviews: 39,
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    id: 5,
    name: "Sony WH-1000XM5",
    price: 348.0,
    rating: 4.6,
    reviews: 1024,
    img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    id: 6,
    name: "Minimalist Desk Lamp",
    price: 45.0,
    rating: 4.3,
    reviews: 89,
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    id: 7,
    name: "Organic Strawberries",
    price: 6.5,
    rating: 4.8,
    reviews: 312,
    img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    id: 8,
    name: "Premium Leather Wallet",
    price: 55.0,
    rating: 4.7,
    reviews: 64,
    img: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=400&h=400",
  },
];

export const Store = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-18 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {MOCK_PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-[2rem] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-500 group cursor-pointer border border-slate-50 flex flex-col h-full hover:-translate-y-2"
          >
            {/* Image & Heart Icon Container */}
            <div className="relative aspect-square mb-6 rounded-2xl overflow-hidden bg-[#F8F9FA] flex items-center justify-center p-6">
              <button className="absolute top-4 right-4 p-2.5 bg-white/80 backdrop-blur-md rounded-full shadow-sm text-slate-400 opacity-0 group-hover:opacity-100 group-hover:text-red-500 hover:scale-110 transition-all duration-300 z-10">
                <FiHeart className="text-lg" />
              </button>

              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="flex flex-col flex-grow px-2 pb-2">
              <h3 className="text-slate-800 font-medium mb-1.5 truncate text-[16px] tracking-tight">
                {product.name}
              </h3>

              {/* Ratings */}
              <div className="flex items-center text-[12px] text-slate-400 mb-5 font-light">
                <div className="flex items-center text-amber-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-3 h-3 mx-0.5 ${i < Math.floor(product.rating) ? "text-amber-400" : "text-slate-200"}`}
                    />
                  ))}
                </div>
                ({product.reviews} reviews)
              </div>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-2xl font-medium text-slate-900 tracking-tight">
                  ${product.price.toFixed(2)}
                </span>
                <button className="bg-slate-50 text-slate-900 p-3 rounded-full flex items-center justify-center hover:bg-[#E65C2B] hover:text-white active:scale-95 transition-all duration-300">
                  <FiShoppingCart className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
