const positions = {
  left: "left-3 top-2 -rotate-[4deg] sm:left-4 sm:-top-4 sm:-rotate-[8deg]",
  right: "right-3 top-2 rotate-[4deg] sm:right-4 sm:-top-4 sm:rotate-[8deg]",
  center: "left-1/2 top-2 -translate-x-1/2 rotate-0 sm:-top-4 sm:-rotate-[3deg]",
};

export default function Tape({ position = "left", className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`tape-strip absolute h-6 w-20 border-x-2 border-b-2 border-black sm:h-7 sm:w-24 ${positions[position]} ${className}`}
    />
  );
}
