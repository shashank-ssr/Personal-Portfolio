const accentClasses = {
  red: "bg-[#ff3b3b] text-white",
  yellow: "bg-[#ffe600] text-black",
  blue: "bg-[#0066ff] text-white",
};

export default function SectionTitle({ kicker, title, subtitle, accent = "yellow", className = "" }) {
  return (
    <div className={`w-full max-w-3xl min-w-0 ${className}`}>
      <span
        className={`inline-flex max-w-full break-words border-4 border-black px-3 py-2 font-display text-xs uppercase tracking-[0.24em] shadow-[2px_2px_0_#000] sm:shadow-[4px_4px_0_#000] ${accentClasses[accent]}`}
      >
        {kicker}
      </span>
      <h2 className="section-underline mt-4 break-words font-display text-4xl uppercase leading-none sm:text-6xl">{title}</h2>
      <p className="mt-3 break-words font-mono text-sm leading-relaxed sm:text-base">{subtitle}</p>
    </div>
  );
}
