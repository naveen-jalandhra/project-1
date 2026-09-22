import React from "react";
// react-icons se premium icons
import {
  FiTruck,
  FiHeadphones,
  FiShield,
  FiRefreshCw,
  FiPackage,
  FiStar,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";

export const Service = () => {
  const services = [
    {
      icon: FiTruck,
      title: "Lightning Fast Delivery",
      desc: "Get your premium gadgets and fresh groceries delivered to your doorstep in record time with our optimized logistics network.",
      color: "text-blue-500",
      bg: "bg-blue-50",
      border: "hover:border-blue-200",
    },
    {
      icon: FiShield,
      title: "Secure Buyer Protection",
      desc: "Shop with absolute peace of mind. Every transaction is heavily encrypted and backed by our 100% money-back guarantee.",
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      border: "hover:border-emerald-200",
    },
    {
      icon: FiRefreshCw,
      title: "Hassle-Free Returns",
      desc: "Not entirely satisfied? Our 14-day no-questions-asked return policy ensures you never have to keep what you don't love.",
      color: "text-orange-500",
      bg: "bg-orange-50",
      border: "hover:border-orange-200",
    },
    {
      icon: FiHeadphones,
      title: "24/7 Concierge Support",
      desc: "Our dedicated support team is available around the clock to assist you with tracking, product queries, and styling advice.",
      color: "text-purple-500",
      bg: "bg-purple-50",
      border: "hover:border-purple-200",
    },
    {
      icon: FiPackage,
      title: "Eco-Friendly Packaging",
      desc: "We care about the planet. All our orders are shipped using 100% recyclable, premium, and sustainable packaging materials.",
      color: "text-green-500",
      bg: "bg-green-50",
      border: "hover:border-green-200",
    },
    {
      icon: FiStar,
      title: "Premium Quality Check",
      desc: "Before dispatch, every single item goes through a rigorous multi-point quality inspection to ensure perfection.",
      color: "text-amber-500",
      bg: "bg-amber-50",
      border: "hover:border-amber-200",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#FDFDFD] font-sans py-[72px] overflow-hidden selection:bg-[#E65C2B] selection:text-white">
      {/* Background Ambient Blurs */}
      <div className="absolute top-[-5%] left-[-10%] w-[50rem] h-[50rem] bg-indigo-400/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute top-[40%] right-[-10%] w-[40rem] h-[40rem] bg-[#E65C2B]/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-[1400px] mx-auto px-6">
        {/* Page Header */}
        <div className="flex flex-col items-center justify-center text-center mb-20">
          <span className="text-[#E65C2B] font-semibold tracking-wider uppercase text-xs mb-4 block">
            The Premium Experience
          </span>
          <h1 className="text-4xl md:text-6xl font-extralight tracking-tight text-slate-900 leading-tight mb-6">
            Exceptional Services <br />
            <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#E65C2B] to-[#ff8c61]">
              for an Exceptional You.
            </span>
          </h1>
          <p className="text-slate-500 font-light max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            At Naveen's Store, we don't just sell products; we deliver an
            experience. From the moment you browse to the second your package
            arrives, we've optimized every step.
          </p>
        </div>

        {/* Services Grid (Bento Box Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:-translate-y-2 transition-all duration-500 group cursor-pointer ${service.border}`}
            >
              <div
                className={`w-16 h-16 rounded-[1.2rem] ${service.bg} ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}
              >
                <service.icon className="w-7 h-7 stroke-[1.5]" />
              </div>
              <h3 className="text-2xl font-medium text-slate-900 mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-slate-500 font-light text-[15px] leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* How It Works Section */}
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden mb-24 shadow-2xl">
          {/* Decorative lines */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative z-10 text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-4">
              Our{" "}
              <span className="font-medium text-[#E65C2B]">Fulfillment</span>{" "}
              Process
            </h2>
            <p className="text-slate-400 font-light text-sm md:text-base max-w-xl mx-auto">
              A seamless journey from our warehouse to your front door.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {[
              {
                step: "01",
                title: "Order Placed",
                desc: "Your order goes directly into our automated fulfillment system.",
              },
              {
                step: "02",
                title: "Quality Check",
                desc: "Our team inspects each item for quality and accuracy.",
              },
              {
                step: "03",
                title: "Dispatched",
                desc: "Securely packed and handed over to our trusted delivery partners.",
              },
              {
                step: "04",
                title: "Delivered",
                desc: "Enjoy your premium products safely delivered to you.",
              },
            ].map((process, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center text-xl font-medium mb-6 group-hover:bg-[#E65C2B] group-hover:border-[#E65C2B] transition-colors duration-300">
                  {process.step}
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  {process.title}
                </h3>
                <p className="text-slate-400 font-light text-sm">
                  {process.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment / Guarantee Banner */}
        <div className="bg-orange-50 rounded-[3rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between border border-orange-100">
          <div className="max-w-2xl mb-8 md:mb-0">
            <h3 className="text-2xl md:text-4xl font-light text-slate-900 tracking-tight mb-4">
              The Naveen's Store <span className="font-medium">Promise</span>
            </h3>
            <p className="text-slate-600 font-light leading-relaxed">
              We are committed to providing you with an unparalleled shopping
              experience. If our services ever fall short of your expectations,
              our dedicated team is here to make it right—no questions asked.
            </p>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center text-slate-700 font-medium text-sm">
                <FiCheck className="text-[#E65C2B] mr-2 text-lg" /> 100%
                Satisfaction Guarantee
              </li>
              <li className="flex items-center text-slate-700 font-medium text-sm">
                <FiCheck className="text-[#E65C2B] mr-2 text-lg" /> Verified
                Authentic Products
              </li>
            </ul>
          </div>

          <div className="shrink-0">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-medium text-sm flex items-center hover:bg-[#E65C2B] transition-colors duration-300 shadow-xl shadow-slate-900/10 group">
              Start Shopping
              <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
