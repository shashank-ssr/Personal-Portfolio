import { AnimatePresence, motion } from "framer-motion";
import ProjectPreview from "./ProjectPreview";
import Sticker from "./Sticker";
import Tape from "./Tape";

export default function ScrapCard({ project, isActive, onToggle, onFocus }) {
  const textTone = project.surface === "bg-[#0066ff]" ? "text-white" : "text-black";

  return (
    <motion.article
      layout
      whileHover={{ scale: 1.02, rotate: 1 }}
      whileTap={{ scale: 0.98, y: 3 }}
      className={`brutal-card relative w-full max-w-full min-w-0 overflow-hidden p-5 pt-8 sm:overflow-visible sm:p-6 ${project.surface} ${project.rotation}`}
      onMouseEnter={onFocus}
    >
      <Tape position="left" />
      <Tape position="right" />

      <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className={`font-mono text-xs uppercase tracking-[0.3em] ${textTone}`}>{project.label}</p>
          <h3 className={`mt-2 break-words font-display text-4xl uppercase leading-none sm:text-5xl ${textTone}`}>{project.title}</h3>
        </div>
        <span className={`self-start font-mono text-xs uppercase tracking-[0.2em] ${textTone}`}>{project.year}</span>
      </div>

      <div className="mt-5">
        <ProjectPreview preview={project.preview} />
      </div>

      <p className={`mt-5 font-mono text-sm leading-relaxed ${textTone}`}>{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-3">
        {project.tech.map((item, index) => (
          <Sticker key={item} tone={index % 3 === 0 ? "yellow" : index % 3 === 1 ? "red" : "blue"}>
            {item}
          </Sticker>
        ))}
      </div>

      <motion.button
        type="button"
        onClick={onToggle}
        whileHover={{ scale: 1.05, rotate: -1 }}
        whileTap={{ scale: 0.97, y: 2 }}
        className="mt-6 w-full max-w-full border-4 border-black bg-white px-4 py-3 font-display text-xs uppercase tracking-[0.2em] shadow-[2px_2px_0_#000] sm:w-auto sm:shadow-[4px_4px_0_#000]"
        aria-expanded={isActive}
      >
        {isActive ? "Hide Case Notes" : "Open Case Notes"}
      </motion.button>

      <AnimatePresence initial={false}>
        {isActive ? (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 24 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="brutal-card w-full max-w-full bg-white p-5">
              <p className="font-display text-2xl uppercase leading-none">Why It Hits</p>
              <p className="mt-3 font-mono text-sm leading-relaxed">{project.impact}</p>
              <div className="mt-4 grid gap-3">
                {project.details.map((detail) => (
                  <div
                    key={detail}
                    className="w-full max-w-full border-4 border-black bg-[#ffe600] px-4 py-3 font-mono text-sm leading-relaxed shadow-[2px_2px_0_#000] sm:shadow-[4px_4px_0_#000]"
                  >
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}
