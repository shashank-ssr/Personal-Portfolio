const toneClasses = {
  white: "bg-white text-black",
  yellow: "bg-[#ffe600] text-black",
  red: "bg-[#ff3b3b] text-white",
  blue: "bg-[#0066ff] text-white",
};

export default function ProjectPreview({ preview }) {
  return (
    <div role="img" aria-label={preview.eyebrow} className="brutal-card bg-white p-3">
      <div className="mb-3 flex items-center justify-between gap-3 border-4 border-black bg-white px-3 py-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em]">{preview.eyebrow}</span>
        <span className="font-display text-sm uppercase leading-none">{preview.metric}</span>
      </div>

      <div className="grid auto-rows-[72px] grid-cols-4 gap-2">
        {preview.tiles.map((tile) => (
          <div
            key={`${tile.label}-${tile.span}`}
            className={`min-h-20 border-4 border-black p-2 font-display text-xs uppercase leading-tight shadow-[3px_3px_0_#000] ${toneClasses[tile.tone]} ${tile.span}`}
          >
            <span>{tile.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
