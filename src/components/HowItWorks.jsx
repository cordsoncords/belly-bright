import { useState } from "react";

export default function HowItWorks() {
  const steps = [
    { step: "1", title: "Quote", desc: "We’ll discuss your needs and provide a fast, transparent quote." },
    { step: "2", title: "Design", desc: "We design a beautiful, custom lighting setup just for you." },
    { step: "3", title: "Install", desc: "Our professionals install your lights with care and precision." },
    { step: "4", title: "Maintain", desc: "If anything goes out, we’re back to fix it — no questions asked." },
    { step: "5", title: "Takedown", desc: "After the holidays, we come back and safely remove everything." },
    { step: "6", title: "Storage", desc: "We store your lights for you, ready for next season!" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="section-alt">
      <div className="text-center mb-10">
        <p className="text-holidayGreen font-bold uppercase tracking-wide">How It Works</p>
        <h2 className="text-holidayRed font-holiday text-4xl sm:text-5xl mt-2">
          Lighting Magic in 6 Easy Steps
        </h2>
      </div>

      <div className="w-full px-4">
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-y-12 sm:gap-x-8 max-w-full">
          {steps.map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row items-center relative group w-full sm:w-auto">
              {/* Step Circle */}
              <div
                className="flex flex-col items-center relative z-10 pt-2 sm:pt-8 cursor-pointer"
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-holidayGreen rounded-full flex items-center justify-center text-holidayGreen font-bold text-xl bg-transparent hover:bg-holidayGreen hover:text-white transition duration-300">
                  {item.step}
                </div>

                <div className="mt-2 text-center text-holidayGreen font-bold">{item.title}</div>

                {/* Hover card on desktop, click reveal on mobile */}
                <div
                  className={`w-52 mt-4 p-4 bg-white shadow-xl rounded-xl border border-holidayGreen text-sm text-gray-800 transition-all duration-300
                  ${activeIndex === idx ? 'block' : 'hidden'} sm:hidden`}
                >
                  {item.desc}
                </div>

                {/* Desktop hover version */}
                <div className="hidden sm:block absolute top-[110%] left-1/2 transform -translate-x-1/2 w-52 p-4 bg-white shadow-xl rounded-xl border border-holidayGreen opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                  <p className="text-sm text-gray-800">{item.desc}</p>
                </div>
              </div>

              {/* Arrow: right for desktop, down for mobile */}
              {idx < steps.length - 1 && (
                <div className="mt-6 sm:my-0 sm:ml-6 sm:mr-4 flex items-center justify-center">
                  <span className="text-holidayGreen text-4xl font-bold leading-none sm:block hidden">&#8594;</span>
                  <span className="text-holidayGreen text-4xl font-bold leading-none sm:hidden">&#8595;</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
