import { motion } from "framer-motion";

const tones = {
  white: "bg-white text-black",
  yellow: "bg-[#ffe600] text-black",
  red: "bg-[#ff3b3b] text-white",
  blue: "bg-[#0066ff] text-white",
};

export default function Sticker({ children, tone = "yellow", className = "" }) {
  return (
    <motion.span
      whileHover={{ scale: 1.08, rotate: 1 }}
      whileTap={{ scale: 0.96, y: 2 }}
      className={`inline-flex border-4 border-black px-3 py-2 font-display text-xs uppercase tracking-[0.18em] shadow-[4px_4px_0_#000] ${tones[tone]} ${className}`}
    >
      {children}
    </motion.span>
  );
}
