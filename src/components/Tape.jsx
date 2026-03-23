const positions = {
  left: "left-4 -top-4 -rotate-[8deg]",
  right: "right-4 -top-4 rotate-[8deg]",
  center: "left-1/2 -top-4 -translate-x-1/2 -rotate-[3deg]",
};

export default function Tape({ position = "left", className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`tape-strip absolute h-7 w-24 border-x-2 border-b-2 border-black ${positions[position]} ${className}`}
    />
  );
}
