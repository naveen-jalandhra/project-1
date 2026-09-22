import React from "react";
import {
  FiTarget,
  FiHeart,
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiGlobe,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

export const About = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans pt-[72px] pb-24 overflow-hidden selection:bg-[#E65C2B] selection:text-white">
      {/* 1. Brand Story & Who We Serve (Hero Section) */}
      <section className="max-w-[1400px] mx-auto px-6 mb-24 relative">
        {/* Blurry Background Elements */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-orange-400/5 rounded-full blur-[100px] -z-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <span className="text-[#E65C2B] font-semibold tracking-wider uppercase text-xs mb-4 block">
              Our Origin Story
            </span>
            <h1 className="text-4xl md:text-6xl font-extralight tracking-tight text-slate-900 leading-tight mb-6">
              Redefining Commerce <br />
              <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#E65C2B] to-[#ff8c61]">
                from Anupgarh to the World.
              </span>
            </h1>
            <p className="text-slate-500 font-light text-base leading-relaxed mb-6">
              It all started with a simple vision in the heart of Anupgarh,
              Rajasthan. We realized that finding premium gadgets, fresh daily
              groceries, and trendy fashion required jumping between multiple
              platforms. The middleman markups were high, and the quality was
              inconsistent.
            </p>
            <p className="text-slate-500 font-light text-base leading-relaxed mb-8">
              That’s why Naveen's Store was born. We serve modern,
              quality-conscious consumers who value their time and money. Our
              unique selling proposition? We bring everything you need under one
              digital roof, cutting out unnecessary steps to deliver premium
              value directly to your doorstep.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
                <FiCheckCircle className="text-[#E65C2B] w-5 h-5" /> Premium
                Quality
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
                <FiCheckCircle className="text-[#E65C2B] w-5 h-5" /> Direct to
                Consumer
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-orange-50 rounded-[3rem] p-4 transform rotate-2 hover:rotate-0 transition-transform duration-700">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000"
                alt="Our Workspace"
                className="rounded-[2.5rem] shadow-2xl object-cover h-[500px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Concrete Numbers (Scale & Milestones) */}
      <section className="max-w-[1400px] mx-auto px-6 mb-24">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-16 shadow-2xl shadow-slate-900/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center">
            {[
              { number: "3+", label: "Years in Business" },
              { number: "200k+", label: "Happy Customers" },
              { number: "1.5M+", label: "Products Delivered" },
              { number: "100%", label: "Carbon Neutral" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center"
              >
                <span className="text-4xl md:text-5xl font-medium text-white mb-2 tracking-tight">
                  {stat.number}
                </span>
                <span className="text-sm font-light text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Credibility & Business Model Transparency */}
      <section className="bg-slate-50 py-24 mb-24 border-y border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-4">
              How We <span className="font-medium">Do It</span>
            </h2>
            <p className="text-slate-500 font-light text-sm md:text-base">
              Transparency isn't just a buzzword for us; it's our business
              model. Here is exactly how we deliver premium products at
              accessible prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: FiGlobe,
                title: "Ethical Sourcing",
                desc: "We source our materials and groceries directly from certified local farms and global ethical manufacturers, ensuring fair wages for all workers.",
              },
              {
                icon: FiTrendingUp,
                title: "Zero Middlemen",
                desc: "By bypassing traditional retail wholesalers, we eliminate standard markups. We pass 100% of these savings directly along to you.",
              },
              {
                icon: FiHeart,
                title: "Purpose Driven",
                desc: "For every purchase made, 2% goes directly towards supporting tech education programs in rural Indian communities.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:-translate-y-2 transition-transform duration-500 border border-slate-50 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-50 text-[#E65C2B] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-7 h-7 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 font-light text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Team Details */}
      <section className="max-w-[1400px] mx-auto px-6 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-4">
            Meet the <span className="font-medium">Minds</span> Behind It
          </h2>
          <p className="text-slate-500 font-light text-sm md:text-base">
            A small but dedicated team working hard behind the scenes to make
            your shopping experience seamless.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Naveen Jalandhara",
              role: "Founder & CEO",
              img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=600",
              bio: "With a background in tech and web development, Naveen built this platform to bridge the gap between quality and accessibility.",
            },
            {
              name: "Priya Sharma",
              role: "Head of Product",
              img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
              bio: "Curates our catalog to ensure every item meets our strict standards for durability, aesthetics, and utility.",
            },
            {
              name: "Arjun Verma",
              role: "Operations Manager",
              img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
              bio: "The logistics wizard ensuring that your packages arrive safely and right on time, every single time.",
            },
          ].map((member, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="overflow-hidden rounded-[2.5rem] mb-6 bg-slate-100 aspect-[4/5]">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="text-xl font-medium text-slate-900 tracking-tight">
                {member.name}
              </h3>
              <p className="text-[#E65C2B] text-sm font-medium mb-3">
                {member.role}
              </p>
              <p className="text-slate-500 font-light text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Social Proof (Testimonials) */}
      <section className="max-w-[1400px] mx-auto px-6 mb-24">
        <div className="bg-[#FFF8F5] rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E65C2B]/5 rounded-full blur-[80px]"></div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight">
              Don't just take{" "}
              <span className="font-medium">our word for it</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {[
              {
                text: "The transparency about where products come from and the sheer quality of the packaging blew me away. It's rare to find a store that actually cares about the end consumer.",
                author: "Sarah Jenkins",
                title: "Verified Buyer",
              },
              {
                text: "I was skeptical about the 'no middleman' claim, but the prices for these premium tech gadgets are unbeatable. Delivery was surprisingly fast. Highly recommended!",
                author: "Rohan Desai",
                title: "Tech Enthusiast",
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm p-10 rounded-[2rem] border border-orange-100 shadow-sm"
              >
                <div className="flex gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 font-light leading-relaxed mb-8 text-lg italic">
                  "{review.text}"
                </p>
                <div>
                  <h4 className="text-slate-900 font-medium">
                    {review.author}
                  </h4>
                  <p className="text-slate-400 text-sm font-light">
                    {review.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Next Steps (Call to Action) */}
      <section className="max-w-[1400px] mx-auto px-6">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E65C2B]/20 rounded-full blur-[120px]"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-6 leading-tight">
              Ready to upgrade your <br />
              <span className="font-medium text-[#E65C2B]">
                shopping experience?
              </span>
            </h2>
            <p className="text-slate-300 font-light mb-10 text-base md:text-lg">
              Explore our latest collection of premium products or get in touch
              with our team if you have any questions. We're always here to
              help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-[#E65C2B] text-white px-8 py-4 rounded-full font-medium text-sm flex items-center justify-center hover:bg-[#ff6e3d] transition-colors shadow-lg shadow-[#E65C2B]/30 group">
                Shop the Collection
                <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-medium text-sm flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
