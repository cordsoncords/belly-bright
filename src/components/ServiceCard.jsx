// /src/components/ServiceCard.jsx
export default function ServiceCard({ title, blurb, image, className = "" }) {
  return (
    <div
      className={[
        "group relative rounded-3xl overflow-hidden",
        "shadow-[0_14px_0_rgba(0,0,0,0.25)] transition will-change-transform hover:-translate-y-1.5",
        "h-72 md:h-80", // card height
        className,
      ].join(" ")}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />

      <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/65" />

      {/* Title (default) */}
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <h3 className="text-white text-2xl md:text-3xl font-extrabold tracking-tight transition-opacity duration-200 group-hover:opacity-0">
          {title}
        </h3>
      </div>

      {/* Blurb (on hover) */}
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <p className="max-w-lg text-white/95 text-base md:text-lg font-semibold opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          {blurb}
        </p>
      </div>

      <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-3xl" />
    </div>
  );
}
