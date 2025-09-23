export default function SectionTitle({ eyebrow, title, className = "" }) {
  return (
    <div className={`mb-4 md:mb-6 ${className}`}>
      {eyebrow && (
        <p className="text-sm font-semibold tracking-wide uppercase text-holidayGreen">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold font-holiday text-red-600">
        {title}
      </h2>
    </div>
  );
}
