import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import ContactNote from "./components/ContactNote";
import CustomCursor from "./components/CustomCursor";
import HandDrawnArrow from "./components/HandDrawnArrow";
import ScrapCard from "./components/ScrapCard";
import SectionTitle from "./components/SectionTitle";
import Sticker from "./components/Sticker";
import Tape from "./components/Tape";
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
} from "./data/portfolio";
import { openEmailWithFallback } from "./utils/openEmailWithFallback";

const desktopRevealProps = {
  initial: { opacity: 0, y: 40, rotate: -2 },
  whileInView: { opacity: 1, y: 0, rotate: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { type: "spring", stiffness: 140, damping: 18, duration: 0.55 },
};

const mobileRevealProps = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring", stiffness: 170, damping: 20, duration: 0.42 },
};

const floatingNotes = [
  {
    id: "roles",
    text: "OPEN TO FULL STACK ROLES",
    tone: "yellow",
    className: "left-0 top-12 -rotate-[8deg]",
    duration: 4.6,
  },
  {
    id: "responsive",
    text: "MERN STACK BUILDS",
    tone: "red",
    className: "right-2 top-4 rotate-[7deg]",
    duration: 5.1,
  },
  {
    id: "chaos",
    text: "RESPONSIVE DESIGN",
    tone: "blue",
    className: "right-12 bottom-6 -rotate-[5deg]",
    duration: 4.8,
  },
];

const mobileMenuCardSurfaces = ["bg-[#ffe600]", "bg-[#ff3b3b] text-white", "bg-[#0066ff] text-white", "bg-white"];

export default function App() {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  const activeProject = projects.find((project) => project.id === activeProjectId) ?? projects[0];
  const revealProps = isMobileViewport ? mobileRevealProps : desktopRevealProps;

  useEffect(() => {
    const syncViewportState = () => {
      const isMobile = window.innerWidth < 768;

      setIsMobileViewport(isMobile);

      if (!isMobile) {
        setIsMobileMenuOpen(false);
      }
    };

    syncViewportState();
    window.addEventListener("resize", syncViewportState);

    return () => {
      window.removeEventListener("resize", syncViewportState);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNavSelection = (sectionId) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const handleEmailStart = (event) => {
    event.preventDefault();
    openEmailWithFallback({ email: contactDetails.email });
    setIsMobileMenuOpen(false);
  };

  const handleSocialLinkClick = (event, href) => {
    if (href.startsWith("mailto:")) {
      event.preventDefault();
      openEmailWithFallback({ email: contactDetails.email });
    }
  };

  return (
    <div className={`portfolio-shell ${isDark ? "theme-dark" : ""}`}>
      <CustomCursor />

      <div className="paper-texture min-h-screen overflow-x-clip text-black transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-4 sm:px-6 lg:px-8">
          <motion.header
            className="brutal-card relative z-40 mb-6 bg-white px-4 py-4 md:sticky md:top-4 md:mb-8"
            initial={{ y: -18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Tape position="left" />
            <Tape position="right" />

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="shrink-0 pr-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] sm:text-[11px]">Shashank Singh Portfolio</p>
                <h1 className="mt-1 font-display text-xl uppercase leading-none sm:text-2xl lg:text-3xl">
                  Full Stack Developer / MERN Stack
                </h1>
              </div>

              <nav className="hidden flex-wrap items-center gap-2 md:flex">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    whileTap={{ scale: 0.97, y: 2 }}
                    className="border-4 border-black bg-[#ffe600] px-3 py-2 font-display text-xs uppercase tracking-[0.18em] shadow-[4px_4px_0_#000] transition-transform"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              <div className="hidden items-center gap-2 md:flex">
                <motion.button
                  type="button"
                  onClick={() => setIsDark((value) => !value)}
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  whileTap={{ scale: 0.97, y: 2 }}
                  className="border-4 border-black bg-[#0066ff] px-4 py-2 font-display text-xs uppercase tracking-[0.18em] text-white shadow-[4px_4px_0_#000]"
                  aria-pressed={isDark}
                >
                  {isDark ? "Light Mode" : "Dark Mode"}
                </motion.button>
              </div>
            </div>

            <div className="mt-4 grid gap-3 md:hidden">
              <div className="brutal-card -rotate-[1deg] bg-[#ffe600] px-3 py-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em]">Notice Bar</p>
                    <p className="mt-1 font-display text-lg uppercase leading-none">Quick Navigation</p>
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    <motion.button
                      type="button"
                      onClick={() => setIsDark((value) => !value)}
                      whileHover={{ scale: 1.04, rotate: -1 }}
                      whileTap={{ scale: 0.97, y: 2 }}
                      className="border-4 border-black bg-[#0066ff] px-3 py-2 font-display text-[10px] uppercase tracking-[0.18em] text-white shadow-[4px_4px_0_#000]"
                      aria-pressed={isDark}
                    >
                      {isDark ? "Light" : "Dark"}
                    </motion.button>

                    <motion.button
                      type="button"
                      onClick={() => setIsMobileMenuOpen((value) => !value)}
                      whileHover={{ scale: 1.04, rotate: 1 }}
                      whileTap={{ scale: 0.97, y: 2 }}
                      className="border-4 border-black bg-[#ff3b3b] px-3 py-2 font-display text-[10px] uppercase tracking-[0.2em] text-white shadow-[4px_4px_0_#000]"
                      aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                      aria-controls="mobile-notice-menu"
                      aria-expanded={isMobileMenuOpen}
                    >
                      {isMobileMenuOpen ? "Hide Menu" : "Open Menu"}
                    </motion.button>
                  </div>
                </div>
              </div>

              <AnimatePresence initial={false}>
                {isMobileMenuOpen ? (
                  <motion.div
                    key="mobile-notice-menu"
                    id="mobile-notice-menu"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-3">
                      {navItems.map((item, index) => {
                        const surface = mobileMenuCardSurfaces[index % mobileMenuCardSurfaces.length];
                        const textClassName = surface.includes("text-white") ? "text-white" : "text-black";

                        return (
                          <motion.button
                            key={item.id}
                            type="button"
                            onClick={() => handleNavSelection(item.id)}
                            whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                            whileTap={{ scale: 0.97, y: 2 }}
                            className={`brutal-card flex w-full items-center justify-between px-4 py-4 ${surface}`}
                          >
                            <span className={`font-display text-xl uppercase leading-none ${textClassName}`}>{item.label}</span>
                            <span className={`font-mono text-[10px] uppercase tracking-[0.18em] ${textClassName}`}>Jump</span>
                          </motion.button>
                        );
                      })}

                      <motion.a
                        href={`mailto:${contactDetails.email}`}
                        onClick={handleEmailStart}
                        whileHover={{ scale: 1.03, rotate: 1 }}
                        whileTap={{ scale: 0.97, y: 2 }}
                        className="brutal-card bg-white px-4 py-4"
                      >
                        <span className="font-display text-xl uppercase leading-none">Start A Conversation</span>
                      </motion.a>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </motion.header>

          <main className="space-y-18">
            <section id="hero" className="scroll-mt-20 relative grid gap-8 pb-6 pt-2 md:scroll-mt-28 md:pt-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
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

              <motion.div
                {...revealProps}
                className="brutal-card relative bg-white p-6 sm:p-8 lg:p-10"
              >
                <Tape position="left" />
                <Tape position="right" />

                <p className="font-mono text-xs uppercase tracking-[0.35em]">
                  BCA Graduate / Currently Pursuing A Master Of Computer Applications (MCA) / MERN Stack Developer
                </p>
                <h2 className="mt-4 font-display text-[clamp(2.7rem,15vw,4.9rem)] uppercase leading-[0.88] sm:text-[clamp(3.15rem,8vw,7.8rem)]">
                  Hi, I&apos;m Shashank
                  <span className="block">Full Stack Developer</span>
                  <span className="block text-[#ff3b3b]">I Build Scalable Web Applications</span>
                </h2>
                <p className="mt-5 max-w-2xl font-mono text-sm leading-relaxed sm:text-base">
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
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    whileTap={{ scale: 0.97, y: 2 }}
                    className="border-4 border-black bg-[#ff3b3b] px-5 py-3 font-display text-sm uppercase tracking-[0.2em] text-white shadow-[5px_5px_0_#000]"
                  >
                    See Projects
                  </motion.button>
                  <motion.a
                    href={`mailto:${contactDetails.email}`}
                    onClick={handleEmailStart}
                    whileHover={{ scale: 1.05, rotate: -1 }}
                    whileTap={{ scale: 0.97, y: 2 }}
                    className="border-4 border-black bg-[#ffe600] px-5 py-3 font-display text-sm uppercase tracking-[0.2em] shadow-[5px_5px_0_#000]"
                  >
                    Start A Conversation
                  </motion.a>
                </div>

                <HandDrawnArrow className="pointer-events-none absolute -bottom-11 right-6 hidden lg:block" />
              </motion.div>

              <div className="grid gap-5 pt-4 lg:pt-10">
                <motion.div
                  {...revealProps}
                  transition={{ ...revealProps.transition, delay: 0.08 }}
                  className="brutal-card rotate-[2deg] bg-[#ffe600] p-5"
                >
                  <Tape position="center" />
                  <p className="font-display text-4xl uppercase leading-none sm:text-5xl">
                    I Build Scalable, User-Focused Web Applications That Solve Real Problems
                  </p>
                  <p className="mt-4 font-mono text-sm leading-relaxed">
                    I develop scalable full-stack applications and live business websites that prioritize usability,
                    responsive design, and reliable engineering for real-world impact.
                  </p>
                </motion.div>

                <motion.div
                  {...revealProps}
                  transition={{ ...revealProps.transition, delay: 0.16 }}
                  className="grid gap-4 sm:grid-cols-3"
                >
                  {stats.map((stat) => (
                    <motion.article
                      key={stat.label}
                      whileHover={{ scale: 1.05, rotate: 1 }}
                      whileTap={{ scale: 0.97, y: 2 }}
                      className={`brutal-card p-4 ${stat.surface}`}
                    >
                      <p className={`font-display text-3xl uppercase leading-none ${stat.inverted ? "text-white" : ""}`}>
                        {stat.value}
                      </p>
                      <p className={`mt-2 font-mono text-[11px] uppercase tracking-[0.2em] ${stat.inverted ? "text-white" : ""}`}>
                        {stat.label}
                      </p>
                    </motion.article>
                  ))}
                </motion.div>

                <motion.div
                  {...revealProps}
                  transition={{ ...revealProps.transition, delay: 0.24 }}
                  className="brutal-card -rotate-[1deg] bg-white p-5"
                >
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
                        whileHover={{ scale: 1.03, rotate: 1 }}
                        whileTap={{ scale: 0.97, y: 2 }}
                        className={`brutal-card flex items-center justify-between px-4 py-3 ${link.surface}`}
                      >
                        <span className={`font-display text-lg uppercase ${link.inverted ? "text-white" : ""}`}>{link.label}</span>
                        <span className={`font-mono text-xs uppercase tracking-[0.2em] ${link.inverted ? "text-white" : ""}`}>{link.meta}</span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>

            <motion.section id="about" {...revealProps} className="scroll-mt-28 space-y-6">
              <SectionTitle
                kicker="Notebook Bio"
                title="About"
                subtitle="A full-stack developer focused on building scalable, user-centric applications with clean architecture and real-world impact."
                accent="red"
                className={isDark ? "text-white" : "text-black"}
              />

              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <article className="notebook-page brutal-card relative -rotate-[1deg] p-6 sm:p-8">
                  <Tape position="left" />
                  <p className="font-display text-4xl uppercase leading-none sm:text-5xl">Full Stack Development With Real-World Focus.</p>
                  <div className="mt-6 space-y-5 font-mono text-sm leading-relaxed sm:text-base">
                    <p>
                      I am <span className="marker-yellow ml-2">Shashank Singh</span>, a BCA graduate currently pursuing a
                      <span className="marker-blue ml-2 text-white">Master of Computer Applications (MCA)</span>, with
                      hands-on experience building full stack web applications using MongoDB, Express.js, React.js, and Node.js.
                    </p>
                    <p>
                      My work includes developing responsive interfaces with React.js, building backend logic with Node.js and
                      Express.js, and managing data through <span className="marker-red ml-2 text-white">MongoDB and database workflows</span>.
                    </p>
                    <p>
                      I focus on solving real user problems through practical projects, clean REST API integration, and scalable
                      application structure that supports usability and long-term growth.
                    </p>
                  </div>
                </article>

                <div className="grid gap-5">
                  {aboutNotes.map((note, index) => (
                    <motion.article
                      key={note.title}
                      whileHover={{ scale: 1.04, rotate: note.hoverRotate }}
                      whileTap={{ scale: 0.97, y: 2 }}
                      className={`brutal-card p-5 ${note.surface} ${note.rotation}`}
                      transition={{ type: "spring", stiffness: 220, damping: 14, delay: index * 0.04 }}
                    >
                      <p className={`font-display text-3xl uppercase leading-none ${note.inverted ? "text-white" : ""}`}>{note.title}</p>
                      <p className={`mt-3 font-mono text-sm leading-relaxed ${note.inverted ? "text-white" : ""}`}>{note.text}</p>
                    </motion.article>
                  ))}
                </div>
              </div>
            </motion.section>

            <motion.section id="projects" {...revealProps} className="scroll-mt-28 relative z-10 space-y-6 overflow-visible">
              <SectionTitle
                kicker="Scrap Stack"
                title="Projects"
                subtitle="Selected projects built around full stack development, responsive design, database-backed features, and real-world problem solving."
                accent="blue"
                className={isDark ? "text-white" : "text-black"}
              />

              <div className="grid items-start gap-6 xl:grid-cols-2">
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
                className="brutal-card ml-auto w-full max-w-3xl rotate-[1deg] bg-[#ffe600] p-5"
                whileHover={{ scale: 1.03, rotate: 1.2 }}
              >
                <p className="font-mono text-xs uppercase tracking-[0.28em]">Project Snapshot</p>
                <p className="mt-2 font-display text-4xl uppercase leading-none">{activeProject.title}</p>
                <p className="mt-3 font-mono text-sm leading-relaxed">{activeProject.impact}</p>
              </motion.aside>
            </motion.section>

            <motion.section id="skills" {...revealProps} className="scroll-mt-28 space-y-6">
              <SectionTitle
                kicker="Sticker Sheet"
                title="Skills"
                subtitle="Core technologies, programming languages, tools, and frameworks I use to build responsive full stack applications."
                accent="yellow"
                className={isDark ? "text-white" : "text-black"}
              />

              <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
                <article className="brutal-card rotate-[1deg] bg-[#ff3b3b] p-6 text-white">
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

                <article className="brutal-card relative bg-white p-6">
                  <Tape position="left" />
                  <Tape position="right" />
                  <div className="flex flex-wrap items-start gap-4">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.label}
                        animate={{ y: [0, -1.5, 1.5, 0] }}
                        transition={{ duration: 3.4 + index * 0.14, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Sticker tone={skill.tone} className={skill.rotation}>
                          {skill.label}
                        </Sticker>
                      </motion.div>
                    ))}
                  </div>
                </article>
              </div>
            </motion.section>

            <motion.section id="contact" {...revealProps} className="scroll-mt-28 space-y-6">
              <SectionTitle
                kicker="Pinned Note"
                title="Contact"
                subtitle="Open to placements, internships, and full stack developer roles. Let&apos;s discuss how I can contribute."
                accent="red"
                className={isDark ? "text-white" : "text-black"}
              />
              <ContactNote contactDetails={contactDetails} socialLinks={socialLinks} />
            </motion.section>
          </main>
        </div>
      </div>
    </div>
  );
}
