const positions = {
  left: "left-3 top-1 rotate-0 sm:left-4 sm:-top-4 sm:-rotate-[8deg]",
  right: "right-3 top-1 rotate-0 sm:right-4 sm:-top-4 sm:rotate-[8deg]",
  center: "left-1/2 top-1 -translate-x-1/2 rotate-0 sm:-top-4 sm:-rotate-[3deg]",
};

export default function Tape({ position = "left", className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`tape-strip absolute h-5 w-16 border-x-2 border-b-2 border-black sm:h-7 sm:w-24 ${positions[position]} ${className}`}
    />
  );
}
