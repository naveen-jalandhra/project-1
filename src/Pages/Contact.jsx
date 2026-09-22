import React from "react";
// react-icons se icons import kar rahe hain
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

export const Contact = () => {
  return (
    // py-[72px] lagaya hai padding y 18 ke liye
    <div className="relative min-h-screen bg-[#FDFDFD] font-sans py-[72px] overflow-hidden selection:bg-[#E65C2B] selection:text-white">
      {/* Background Blurry Orange Blobs (Isse premium transparent feel aayega) */}
      <div className="absolute top-0 left-[-10%] w-[40rem] h-[40rem] bg-orange-400/10 rounded-full blur-[100px] -z-0"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[35rem] h-[35rem] bg-[#E65C2B]/15 rounded-full blur-[120px] -z-0"></div>

      {/* Main Container (Width 1400px fixed like previous pages) */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        {/* Page Title Section */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <span className="text-[#E65C2B] font-semibold tracking-wider uppercase text-xs mb-3 block">
            Let's Connect
          </span>
          <h1 className="text-4xl md:text-6xl font-extralight tracking-tight text-slate-900 leading-tight">
            Get in{" "}
            <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#E65C2B] to-[#ff8c61]">
              Touch
            </span>
          </h1>
          <p className="text-slate-400 font-light max-w-lg mt-4 text-sm md:text-base leading-relaxed">
            Have a question, feedback, or just want to say hi? We'd love to hear
            from you. Send us a message below.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          {/* Left Side: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            {[
              {
                icon: FiMapPin,
                title: "Our Location",
                detail: "Rajasthan, India",
                subDetail: "Come say hello at our office HQ.",
              },
              {
                icon: FiMail,
                title: "Email Us",
                detail: "support@naveensstore.com",
                subDetail: "We're here to help 24/7.",
              },
              {
                icon: FiPhone,
                title: "Call Us",
                detail: "+91 98765 43210",
                subDetail: "Mon-Fri from 9am to 6pm.",
              },
            ].map((info, idx) => (
              <div
                key={idx}
                className="bg-white/60 backdrop-blur-xl border border-white p-6 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex items-center group hover:bg-white hover:shadow-[0_20px_40px_rgb(230,92,43,0.08)] hover:-translate-y-1 transition-all duration-500 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#E65C2B] flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-500 shrink-0">
                  <info.icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900 tracking-tight">
                    {info.title}
                  </h3>
                  <p className="text-[#E65C2B] font-medium text-sm mt-0.5">
                    {info.detail}
                  </p>
                  <p className="text-xs text-slate-400 font-light mt-1">
                    {info.subDetail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Contact Form (Blurry Orange Transparent Form) */}
          <div className="lg:col-span-7">
            <div className="bg-orange-50/40 backdrop-blur-2xl border border-orange-100/50 p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-orange-500/5 h-full">
              <h3 className="text-2xl font-light text-slate-900 tracking-tight mb-8">
                Send a <span className="font-medium">Message</span>
              </h3>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 ml-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white/70 border border-slate-200 text-slate-800 text-sm rounded-2xl px-5 py-4 outline-none focus:border-[#E65C2B] focus:ring-4 focus:ring-[#E65C2B]/10 transition-all placeholder:text-slate-400 font-light"
                    />
                  </div>
                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white/70 border border-slate-200 text-slate-800 text-sm rounded-2xl px-5 py-4 outline-none focus:border-[#E65C2B] focus:ring-4 focus:ring-[#E65C2B]/10 transition-all placeholder:text-slate-400 font-light"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 ml-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help you?"
                    className="w-full bg-white/70 border border-slate-200 text-slate-800 text-sm rounded-2xl px-5 py-4 outline-none focus:border-[#E65C2B] focus:ring-4 focus:ring-[#E65C2B]/10 transition-all placeholder:text-slate-400 font-light"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 ml-1">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Write your message here..."
                    className="w-full bg-white/70 border border-slate-200 text-slate-800 text-sm rounded-2xl px-5 py-4 outline-none focus:border-[#E65C2B] focus:ring-4 focus:ring-[#E65C2B]/10 transition-all placeholder:text-slate-400 font-light resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white rounded-2xl px-8 py-4 font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#E65C2B] transition-colors duration-300 shadow-lg shadow-slate-900/20 hover:shadow-[#E65C2B]/30 group"
                >
                  Send Message
                  <FiSend className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
