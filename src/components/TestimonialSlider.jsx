// src/components/TestimonialSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef, useEffect } from "react";

// ✅ Only import necessary styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const testimonials = [
  {
    name: "Raul Beltran",
    city: "Killeen",
    text: "We loved everything about the setup. Super clean, really well-done lights, and we didn’t have to touch a thing.",
  },
  {
    name: "Joyce Turner",
    city: "Belton",
    text: "Every bulb was perfect and their timers made it totally hands-off. We’ll book them again for sure.",
  },
  {
    name: "Nina Delaney",
    city: "Harker Heights",
    text: "Excellent service and super fast! Our home has never looked so festive.",
  },
  {
    name: "Timothy Barrett",
    city: "Salado",
    text: "Couldn’t have asked for a smoother experience. Quote, install, done — and it looks amazing.",
  },
  {
    name: "Angela Ruiz",
    city: "Temple",
    text: "Friendly, fast, and festive. The lights went up quickly and got tons of compliments from neighbors.",
  },
  {
    name: "Marcus Gray",
    city: "Belton",
    text: "These lights are perfect — they’re straight, bright, and installed exactly how we pictured.",
  },
];

let swiper = null; // global to reference from event listeners

export default function TestimonialSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    // Defer attachment until DOM is ready
    setTimeout(() => {
      if (prevRef.current && nextRef.current && swiper) {
        prevRef.current.addEventListener("click", () => swiper.slidePrev());
        nextRef.current.addEventListener("click", () => swiper.slideNext());
      }
    }, 100);
  }, []);

  return (
    <div className="py-12 relative">
      {/* Desktop Arrows */}
      <button
        ref={prevRef}
        className="hidden sm:flex absolute top-1/2 left-0 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-holidayGreen text-holidayGreen text-2xl items-center justify-center hover:bg-holidayGreen hover:text-white transition"
      >
        &#8592;
      </button>
      <button
        ref={nextRef}
        className="hidden sm:flex absolute top-1/2 right-0 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-holidayGreen text-holidayGreen text-2xl items-center justify-center hover:bg-holidayGreen hover:text-white transition"
      >
        &#8594;
      </button>

      <Swiper
        modules={[Autoplay, Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(s) => (swiper = s)}
        spaceBetween={24}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 7000 }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            {({ isActive }) => (
              <div
                className={`h-full transition-all duration-300 rounded-2xl shadow-md p-8 flex flex-col justify-between ${
                  isActive ? "bg-holidayGreen text-white" : "bg-white text-black"
                }`}
              >
                <p className="text-lg leading-relaxed">{t.text}</p>
                <div className="mt-6">
                  <div className="text-xl text-red-600">★★★★★</div>
                  <p className={`mt-2 text-sm ${isActive ? "text-white/90" : "text-black/60"}`}>
                    Christmas Light Installation in {t.city}
                  </p>
                  <p className="mt-1 font-extrabold">{t.name}</p>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Mobile Arrows */}
      <div className="flex justify-center gap-8 mt-6 sm:hidden">
        <button
          className="w-10 h-10 rounded-full border border-holidayGreen text-holidayGreen text-2xl flex items-center justify-center hover:bg-holidayGreen hover:text-white transition"
          onClick={() => swiper?.slidePrev()}
        >
          &#8592;
        </button>
        <button
          className="w-10 h-10 rounded-full border border-holidayGreen text-holidayGreen text-2xl flex items-center justify-center hover:bg-holidayGreen hover:text-white transition"
          onClick={() => swiper?.slideNext()}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
