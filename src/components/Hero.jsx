import { Link } from "react-router-dom";
import { Snowfall } from "react-snowfall";

export default function Hero({
  title = (
    <>
      Holiday Cheer <br />
      Professionally <br />
      Installed
    </>
  ),
  subtitle = "Temple, Belton, Killeen, and Harker Heights’ choice for Christmas Light Installation.",
  showButtons = true,
  imageSrc = "/images/hero.jpg",
}) {
  return (
    <section
      className="relative min-h-[680px] sm:min-h-[740px] md:min-h-[780px] lg:min-h-[860px] xl:min-h-[920px] flex items-center justify-center text-center overflow-hidden pt-[8rem] sm:pt-[9rem] md:pt-[10rem]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${imageSrc})` }}
        aria-hidden="true"
      />

      {/* Overlay tint */}
      <div className="absolute inset-0 bg-neutral-200/30 backdrop-blur-sm" />

      {/* ❄️ Snowfall effect */}
      <Snowfall
        snowflakeCount={60}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 5,
        }}
        radius={[2, 8]}
      />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center">
        <h1 className="text-white font-extrabold leading-tight text-5xl sm:text-7xl lg:text-8xl xl:text-9xl drop-shadow-md">
          {title}
        </h1>

        <p className="mt-6 text-xl sm:text-2xl lg:text-3xl text-white/90 max-w-4xl drop-shadow-sm">
          {subtitle}
        </p>

        {showButtons && (
          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="btn-cta-lg text-xl px-12 py-5 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get A Fast Quote
            </Link>

            <a
              href="tel:2542523559"
              className="btn-cta-outline text-xl px-12 py-5 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              (254) 252-3559
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
