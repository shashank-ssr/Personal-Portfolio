const toneClasses = {
  white: "bg-white text-black",
  yellow: "bg-[#ffe600] text-black",
  red: "bg-[#ff3b3b] text-white",
  blue: "bg-[#0066ff] text-white",
};

export default function ProjectPreview({ preview }) {
  return (
    <div role="img" aria-label={preview.eyebrow} className="brutal-card w-full max-w-full min-w-0 overflow-hidden bg-white p-3">
      <div className="mb-3 flex w-full max-w-full flex-col items-start gap-2 border-4 border-black bg-white px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
        <span className="break-words font-mono text-[10px] uppercase tracking-[0.18em]">{preview.eyebrow}</span>
        <span className="break-words font-display text-sm uppercase leading-none">{preview.metric}</span>
      </div>

      <div className="grid w-full max-w-full auto-rows-[64px] grid-cols-2 gap-2 sm:auto-rows-[72px] sm:grid-cols-4">
        {preview.tiles.map((tile) => (
          <div
            key={`${tile.label}-${tile.span}`}
            className={`min-h-20 min-w-0 overflow-hidden border-4 border-black p-2 font-display text-xs uppercase leading-tight shadow-[2px_2px_0_#000] sm:shadow-[3px_3px_0_#000] ${toneClasses[tile.tone]} ${tile.span}`}
          >
            <span className="break-words">{tile.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
