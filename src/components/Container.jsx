// /src/components/Container.jsx
export default function Container({ children, className = "", wide = false }) {
  return (
    <div
      className={[
        "mx-auto",
        wide ? "max-w-[96rem]" : "max-w-content", // 96rem = 1536px, 90rem = 1440px
        "px-4 sm:px-5 lg:px-[6px]", // 🔧 tightened padding at large screens
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
