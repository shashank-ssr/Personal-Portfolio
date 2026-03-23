const positions = {
  left: "left-3 -top-4 -rotate-[8deg] sm:left-4",
  right: "right-3 -top-4 rotate-[8deg] sm:right-4",
  center: "left-1/2 -top-4 -translate-x-1/2 -rotate-[3deg]",
};

export default function Tape({ position = "left", className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`tape-strip absolute h-6 w-20 border-x-2 border-b-2 border-black sm:h-7 sm:w-24 ${positions[position]} ${className}`}
    />
  );
}
