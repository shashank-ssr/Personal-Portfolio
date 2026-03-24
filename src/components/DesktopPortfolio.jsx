import { motion } from "framer-motion";
import ContactNote from "./ContactNote";
import HandDrawnArrow from "./HandDrawnArrow";
import ScrapCard from "./ScrapCard";
import SectionTitle from "./SectionTitle";
import Sticker from "./Sticker";
import Tape from "./Tape";
import {
  aboutNotes,
  contactDetails,
  heroBadges,
  navItems,
  projects,
  skills,
  socialLinks,
  stats,
  workflowNotes,
} from "../data/portfolio";

const desktopRevealProps = {
  initial: { opacity: 0, y: 40, rotate: -2 },
  whileInView: { opacity: 1, y: 0, rotate: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { type: "spring", stiffness: 140, damping: 18, duration: 0.55 },
};

const floatingNotes = [
  { id: "roles", text: "OPEN TO FULL STACK ROLES", tone: "yellow", className: "left-0 top-12 -rotate-[8deg]", duration: 4.6 },
  { id: "responsive", text: "MERN STACK BUILDS", tone: "red", className: "right-2 top-4 rotate-[7deg]", duration: 5.1 },
  { id: "chaos", text: "RESPONSIVE DESIGN", tone: "blue", className: "right-12 bottom-6 -rotate-[5deg]", duration: 4.8 },
];

export default function DesktopPortfolio({
  activeProjectId,
  canHover,
  isDark,
  handleEmailStart,
  handleSocialLinkClick,
  setActiveProjectId,
  toggleDarkMode,
  scrollToSection,
}) {
  const activeProject = projects.find((project) => project.id === activeProjectId) ?? projects[0];

  return (
    <>
      <motion.header className="brutal-card relative z-40 mb-8 w-full overflow-visible bg-white px-4 py-4 md:sticky md:top-4" initial={{ y: -18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
        <Tape position="left" />
        <Tape position="right" />

        <div className="flex min-w-0 flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0 shrink pr-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em]">Shashank Singh Portfolio</p>
            <h1 className="mt-1 break-words font-display text-2xl uppercase leading-none lg:text-3xl">Full Stack Developer / MERN Stack</h1>
          </div>

          <nav className="hidden flex-wrap items-center gap-2 md:flex">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                {...(canHover ? { whileHover: { scale: 1.05, rotate: 1 } } : {})}
                whileTap={{ scale: 0.97, y: 2 }}
                className="border-4 border-black bg-[#ffe600] px-3 py-2 font-display text-xs uppercase tracking-[0.18em] shadow-[4px_4px_0_#000]"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          <motion.button
            type="button"
            onClick={toggleDarkMode}
            className="hidden border-4 border-black bg-[#0066ff] px-4 py-2 font-display text-xs uppercase tracking-[0.18em] text-white shadow-[4px_4px_0_#000] md:block"
            aria-pressed={isDark}
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </motion.button>
        </div>
      </motion.header>

      <main className="w-full max-w-full min-w-0 space-y-18 pb-20">
        <section id="hero" className="scroll-mt-28 relative grid w-full min-w-0 gap-8 pt-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
          <div className="absolute inset-0 hidden xl:block">
            {floatingNotes.map((note) => (
              <motion.div
                key={note.id}
                className={`absolute ${note.className}`}
                animate={{ y: [0, -5, 3, 0], rotate: [0, 1, -1, 0] }}
                transition={{ duration: note.duration, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.08 }}
              >
                <Sticker tone={note.tone}>{note.text}</Sticker>
              </motion.div>
            ))}
          </div>

          <motion.div {...desktopRevealProps} className="brutal-card relative min-w-0 bg-white p-8 lg:p-10">
            <Tape position="left" />
            <Tape position="right" />

            <p className="max-w-full break-words font-mono text-xs uppercase tracking-[0.35em]">
              BCA Graduate / Currently Pursuing A Master Of Computer Applications (MCA) / MERN Stack Developer
            </p>
            <h2 className="mt-4 break-words font-display text-[clamp(3.15rem,8vw,7.8rem)] uppercase leading-[0.88]">
              Hi, I&apos;m Shashank
              <span className="block">Full Stack Developer</span>
              <span className="block text-[#ff3b3b]">I Build Scalable Web Applications</span>
            </h2>
            <p className="mt-5 max-w-2xl font-mono text-base leading-relaxed">
              I build full stack web applications using the <span className="marker-yellow">MERN stack</span>, with a
              focus on <span className="marker-blue ml-2 text-white">React.js frontend engineering</span>,
              <span className="marker-red ml-2 text-white">Node.js backend development</span>, REST APIs, and real-world
              problem solving.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {heroBadges.map((badge) => (
                <Sticker key={badge.text} tone={badge.tone} className={badge.rotation}>
                  {badge.text}
                </Sticker>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.button
                type="button"
                onClick={() => scrollToSection("projects")}
                {...(canHover ? { whileHover: { scale: 1.05, rotate: 1 } } : {})}
                whileTap={{ scale: 0.97, y: 2 }}
                className="border-4 border-black bg-[#ff3b3b] px-5 py-3 font-display text-sm uppercase tracking-[0.2em] text-white shadow-[5px_5px_0_#000]"
              >
                See Projects
              </motion.button>
              <motion.a
                href={`mailto:${contactDetails.email}`}
                onClick={handleEmailStart}
                {...(canHover ? { whileHover: { scale: 1.05, rotate: -1 } } : {})}
                whileTap={{ scale: 0.97, y: 2 }}
                className="border-4 border-black bg-[#ffe600] px-5 py-3 font-display text-sm uppercase tracking-[0.2em] shadow-[5px_5px_0_#000]"
              >
                Start A Conversation
              </motion.a>
            </div>

            <HandDrawnArrow className="pointer-events-none absolute -bottom-11 right-6 hidden lg:block" />
          </motion.div>

          <div className="grid min-w-0 gap-5 pt-4 lg:pt-10">
            <motion.div {...desktopRevealProps} transition={{ ...desktopRevealProps.transition, delay: 0.08 }} className="brutal-card min-w-0 rotate-[2deg] bg-[#ffe600] p-5">
              <Tape position="center" />
              <p className="font-display text-5xl uppercase leading-none">I Build Scalable, User-Focused Web Applications That Solve Real Problems</p>
              <p className="mt-4 font-mono text-sm leading-relaxed">
                I develop scalable full-stack applications and live business websites that prioritize usability,
                responsive design, and reliable engineering for real-world impact.
              </p>
            </motion.div>

            <motion.div {...desktopRevealProps} transition={{ ...desktopRevealProps.transition, delay: 0.16 }} className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <motion.article
                  key={stat.label}
                  {...(canHover ? { whileHover: { scale: 1.05, rotate: 1 } } : {})}
                  whileTap={{ scale: 0.97, y: 2 }}
                  className={`brutal-card p-4 ${stat.surface}`}
                >
                  <p className={`font-display text-3xl uppercase leading-none ${stat.inverted ? "text-white" : ""}`}>{stat.value}</p>
                  <p className={`mt-2 font-mono text-[11px] uppercase tracking-[0.2em] ${stat.inverted ? "text-white" : ""}`}>{stat.label}</p>
                </motion.article>
              ))}
            </motion.div>

            <motion.div {...desktopRevealProps} transition={{ ...desktopRevealProps.transition, delay: 0.24 }} className="brutal-card min-w-0 -rotate-[1deg] bg-white p-5">
              <p className="font-mono text-xs uppercase tracking-[0.28em]">Currently Focused On</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Sticker tone="red">Building Production-Ready Full-Stack Applications</Sticker>
                <Sticker tone="blue">Writing Clean, Maintainable, And Efficient Code</Sticker>
                <Sticker tone="white">Improving Data Structures And Problem-Solving Skills</Sticker>
                <Sticker tone="yellow">Designing User-Focused And Responsive Interfaces</Sticker>
              </div>

              <div className="mt-5 grid gap-2">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(event) => handleSocialLinkClick(event, link.href)}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    {...(canHover ? { whileHover: { scale: 1.03, rotate: 1 } } : {})}
                    whileTap={{ scale: 0.97, y: 2 }}
                    className={`brutal-card flex flex-col items-start gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between ${link.surface}`}
                  >
                    <span className={`font-display text-lg uppercase ${link.inverted ? "text-white" : ""}`}>{link.label}</span>
                    <span className={`font-mono text-xs uppercase tracking-[0.2em] ${link.inverted ? "text-white" : ""}`}>{link.meta}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <motion.section id="about" {...desktopRevealProps} className="scroll-mt-28 min-w-0 space-y-6">
          <SectionTitle kicker="Notebook Bio" title="About" subtitle="A full-stack developer focused on building scalable, user-centric applications with clean architecture and real-world impact." accent="red" className={isDark ? "text-white" : "text-black"} />

          <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <article className="notebook-page brutal-card relative min-w-0 -rotate-[1deg] p-8">
              <Tape position="left" />
              <p className="font-display text-5xl uppercase leading-none">Full Stack Development With Real-World Focus.</p>
              <div className="mt-6 space-y-5 font-mono text-base leading-relaxed">
                <p>I am <span className="marker-yellow ml-2">Shashank Singh</span>, a BCA graduate currently pursuing a<span className="marker-blue ml-2 text-white">Master of Computer Applications (MCA)</span>, with hands-on experience building full stack web applications using MongoDB, Express.js, React.js, and Node.js.</p>
                <p>My work includes developing responsive interfaces with React.js, building backend logic with Node.js and Express.js, and managing data through <span className="marker-red ml-2 text-white">MongoDB and database workflows</span>.</p>
                <p>I focus on solving real user problems through practical projects, clean REST API integration, and scalable application structure that supports usability and long-term growth.</p>
              </div>
            </article>

            <div className="grid min-w-0 gap-5">
              {aboutNotes.map((note, index) => (
                <motion.article
                  key={note.title}
                  {...(canHover ? { whileHover: { scale: 1.04, rotate: note.hoverRotate } } : {})}
                  whileTap={{ scale: 0.97, y: 2 }}
                  className={`brutal-card min-w-0 p-5 ${note.surface} ${note.rotation}`}
                  transition={{ type: "spring", stiffness: 220, damping: 14, delay: index * 0.04 }}
                >
                  <p className={`font-display text-3xl uppercase leading-none ${note.inverted ? "text-white" : ""}`}>{note.title}</p>
                  <p className={`mt-3 font-mono text-sm leading-relaxed ${note.inverted ? "text-white" : ""}`}>{note.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="projects" {...desktopRevealProps} className="scroll-mt-28 relative z-10 min-w-0 space-y-6">
          <SectionTitle kicker="Scrap Stack" title="Projects" subtitle="Selected projects built around full stack development, responsive design, database-backed features, and real-world problem solving." accent="blue" className={isDark ? "text-white" : "text-black"} />
          <div className="mt-6 grid min-w-0 items-start gap-6 xl:grid-cols-2">
            {projects.map((project) => (
              <ScrapCard
                key={project.id}
                project={project}
                isActive={project.id === activeProjectId}
                onToggle={() => setActiveProjectId((current) => (current === project.id ? "" : project.id))}
                onFocus={() => setActiveProjectId(project.id)}
              />
            ))}
          </div>

          <motion.aside
            layout
            className="brutal-card mt-6 ml-auto w-full max-w-3xl min-w-0 rotate-[1deg] bg-[#ffe600] p-5"
            {...(canHover ? { whileHover: { scale: 1.03, rotate: 1.2 } } : {})}
          >
            <p className="font-mono text-xs uppercase tracking-[0.28em]">Project Snapshot</p>
            <p className="mt-2 break-words font-display text-4xl uppercase leading-none">{activeProject.title}</p>
            <p className="mt-3 font-mono text-sm leading-relaxed">{activeProject.impact}</p>
          </motion.aside>
        </motion.section>

        <motion.section id="skills" {...desktopRevealProps} className="scroll-mt-28 min-w-0 space-y-6">
          <SectionTitle kicker="Sticker Sheet" title="Skills" subtitle="Core technologies, programming languages, tools, and frameworks I use to build responsive full stack applications." accent="yellow" className={isDark ? "text-white" : "text-black"} />

          <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
            <article className="brutal-card min-w-0 rotate-[1deg] bg-[#ff3b3b] p-6 text-white">
              <Tape position="center" />
              <p className="font-display text-4xl uppercase leading-none">Technical Skill Groups.</p>
              <div className="mt-5 grid gap-3">
                {workflowNotes.map((note) => (
                  <div key={note.title} className="border-4 border-black bg-white px-4 py-3 text-black shadow-[4px_4px_0_#000]">
                    <p className="font-display text-2xl uppercase leading-none">{note.title}</p>
                    <p className="mt-2 font-mono text-sm leading-relaxed">{note.text}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="brutal-card relative min-w-0 bg-white p-6">
              <Tape position="left" />
              <Tape position="right" />
              <div className="flex flex-wrap items-start gap-4">
                {skills.map((skill, index) => (
                  <motion.div key={skill.label} animate={{ y: [0, -1.5, 1.5, 0] }} transition={{ duration: 3.4 + index * 0.14, repeat: Infinity, ease: "easeInOut" }}>
                    <Sticker tone={skill.tone} className={skill.rotation}>{skill.label}</Sticker>
                  </motion.div>
                ))}
              </div>
            </article>
          </div>
        </motion.section>

        <motion.section id="contact" {...desktopRevealProps} className="scroll-mt-28 min-w-0 space-y-6">
          <SectionTitle kicker="Pinned Note" title="Contact" subtitle="Open to placements, internships, and full stack developer roles. Let&apos;s discuss how I can contribute." accent="red" className={isDark ? "text-white" : "text-black"} />
          <div className="mt-6"><ContactNote contactDetails={contactDetails} socialLinks={socialLinks} /></div>
        </motion.section>
      </main>
    </>
  );
}
