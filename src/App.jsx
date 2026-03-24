import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import CustomCursor from "./components/CustomCursor";
import DesktopPortfolio from "./components/DesktopPortfolio";
import ProjectPreview from "./components/ProjectPreview";
import SectionTitle from "./components/SectionTitle";
import Sticker from "./components/Sticker";
import useCanHover from "./hooks/useCanHover";
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

const mobileRevealProps = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring", stiffness: 170, damping: 20, duration: 0.42 },
};

const mobileMenuCardSurfaces = ["bg-[#ffe600]", "bg-[#ff3b3b] text-white", "bg-[#0066ff] text-white", "bg-white"];

const codingProfiles = [
  { label: "HACKERRANK PROFILE", href: "https://www.hackerrank.com/profile/rajputshashank12", surface: "bg-[#ff3b3b]", textClassName: "text-white" },
  { label: "LEETCODE PROFILE", href: "https://leetcode.com/u/shashank1563/", surface: "bg-[#0066ff]", textClassName: "text-white" },
];

function MobileProjectCard({ project, canHover }) {
  const textTone = project.surface === "bg-[#0066ff]" ? "text-white" : "text-black";

  return (
    <motion.article
      {...mobileRevealProps}
      {...(canHover ? { whileHover: { scale: 1.01 } } : {})}
      whileTap={{ scale: 0.99, y: 1 }}
      className={`brutal-card w-full overflow-hidden p-5 ${project.surface}`}
    >
      <p className={`break-words font-mono text-[10px] uppercase tracking-[0.22em] ${textTone}`}>{project.label}</p>
      <h3 className={`mt-2 break-words font-display text-3xl uppercase leading-none ${textTone}`}>{project.title}</h3>
      <span className={`mt-2 break-words font-mono text-[11px] uppercase tracking-[0.18em] ${textTone}`}>{project.year}</span>

      <div className="mt-4">
        <ProjectPreview preview={project.preview} />
      </div>

      <p className={`mt-4 font-mono text-sm leading-relaxed ${textTone}`}>{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((item, index) => (
          <Sticker key={item} tone={index % 3 === 0 ? "yellow" : index % 3 === 1 ? "red" : "blue"}>
            {item}
          </Sticker>
        ))}
      </div>

      <div className="mt-4 grid gap-2">
        {project.details.map((detail) => (
          <div key={detail} className="border-4 border-black bg-white px-4 py-3 font-mono text-sm leading-relaxed text-black">
            {detail}
          </div>
        ))}
      </div>
    </motion.article>
  );
}

function MobileContactCard({ canHover, onEmailStart, onSocialLinkClick }) {
  return (
    <motion.article {...mobileRevealProps} className="brutal-card w-full overflow-hidden bg-white p-5">
      <p className="font-display text-3xl uppercase leading-none">Let&apos;s Build Something Solid.</p>
      <p className="mt-3 font-mono text-sm leading-relaxed">{contactDetails.availability}</p>

      <div className="mt-5 grid gap-3">
        <motion.a
          href={`mailto:${contactDetails.email}`}
          onClick={onEmailStart}
          {...(canHover ? { whileHover: { scale: 1.02 } } : {})}
          whileTap={{ scale: 0.98, y: 1 }}
          className="border-4 border-black bg-[#ff3b3b] px-4 py-4 font-display text-sm uppercase tracking-[0.18em] text-white shadow-[2px_2px_0_#000]"
        >
          Start Email Conversation
        </motion.a>

        <a
          href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
          className="border-4 border-black bg-[#ffe600] px-4 py-4 font-display text-sm uppercase tracking-[0.18em] shadow-[2px_2px_0_#000]"
        >
          Call: {contactDetails.phone}
        </a>
      </div>

      <div className="mt-5 grid gap-3">
        {codingProfiles.map((profile) => (
          <motion.a
            key={profile.label}
            href={profile.href}
            target="_blank"
            rel="noreferrer"
            {...(canHover ? { whileHover: { scale: 1.02 } } : {})}
            whileTap={{ scale: 0.98, y: 1 }}
            className={`border-4 border-black px-4 py-4 font-display text-sm uppercase tracking-[0.16em] shadow-[2px_2px_0_#000] ${profile.surface} ${profile.textClassName}`}
          >
            {profile.label}
          </motion.a>
        ))}

        {socialLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            onClick={(event) => onSocialLinkClick(event, link.href)}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            {...(canHover ? { whileHover: { scale: 1.02 } } : {})}
            whileTap={{ scale: 0.98, y: 1 }}
            className={`brutal-card flex w-full flex-col gap-2 px-4 py-4 ${link.surface}`}
          >
            <span className={`font-display text-2xl uppercase leading-none ${link.inverted ? "text-white" : ""}`}>{link.label}</span>
            <span className={`break-all font-mono text-xs uppercase tracking-[0.18em] ${link.inverted ? "text-white" : ""}`}>{link.meta}</span>
          </motion.a>
        ))}
      </div>
    </motion.article>
  );
}

export default function App() {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(() => (typeof window !== "undefined" ? window.innerWidth < 768 : false));
  const canHover = useCanHover();

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

    return () => window.removeEventListener("resize", syncViewportState);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    const top = Math.max(section.getBoundingClientRect().top + window.scrollY - 12, 0);
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleNavSelection = (sectionId) => {
    if (isMobileViewport) {
      setIsMobileMenuOpen(false);
      window.setTimeout(() => {
        scrollToSection(sectionId);
      }, 320);
      return;
    }

    scrollToSection(sectionId);
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

      <div className="paper-texture min-h-screen w-full overflow-x-hidden text-black transition-colors duration-300">
        <div className="mx-auto w-full max-w-full overflow-x-hidden px-4 sm:px-6 md:px-8">
          <div className="mx-auto w-full max-w-7xl pt-4">
            {isMobileViewport ? (
              <>
                <motion.header className="brutal-card mb-5 overflow-hidden bg-white px-4 py-4" initial={{ y: -18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.35 }}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-[0.24em]">Shashank Singh Portfolio</p>
                      <h1 className="mt-2 break-words font-display text-3xl uppercase leading-none">Full Stack Developer / MERN Stack</h1>
                    </div>
                    <motion.button type="button" onClick={() => setIsDark((value) => !value)} whileTap={{ scale: 0.97, y: 1 }} className="shrink-0 border-4 border-black bg-[#0066ff] px-3 py-2 font-display text-[10px] uppercase tracking-[0.18em] text-white shadow-[2px_2px_0_#000]" aria-pressed={isDark}>
                      {isDark ? "Light" : "Dark"}
                    </motion.button>
                  </div>

                  <div className="mt-4 grid gap-3">
                    <motion.button type="button" onClick={() => setIsMobileMenuOpen((value) => !value)} whileTap={{ scale: 0.98, y: 1 }} className="border-4 border-black bg-[#ffe600] px-4 py-3 text-left font-display text-sm uppercase tracking-[0.18em] shadow-[2px_2px_0_#000]" aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"} aria-controls="mobile-portfolio-menu" aria-expanded={isMobileMenuOpen}>
                      {isMobileMenuOpen ? "Close Navigation" : "Open Navigation"}
                    </motion.button>

                    <AnimatePresence initial={false}>
                      {isMobileMenuOpen ? (
                        <motion.div id="mobile-portfolio-menu" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: "easeOut" }} className="overflow-hidden">
                          <div className="grid gap-3">
                            {navItems.map((item, index) => {
                              const surface = mobileMenuCardSurfaces[index % mobileMenuCardSurfaces.length];
                              const textClassName = surface.includes("text-white") ? "text-white" : "text-black";

                              return (
                                <motion.button key={item.id} type="button" onClick={() => handleNavSelection(item.id)} whileTap={{ scale: 0.98, y: 1 }} className={`brutal-card flex w-full items-center justify-between px-4 py-4 ${surface}`}>
                                  <span className={`font-display text-xl uppercase leading-none ${textClassName}`}>{item.label}</span>
                                  <span className={`font-mono text-[10px] uppercase tracking-[0.18em] ${textClassName}`}>Jump</span>
                                </motion.button>
                              );
                            })}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </motion.header>

                <main className="space-y-8 pb-16">
                  <motion.section id="hero" {...mobileRevealProps} className="space-y-4">
                    <article className="brutal-card overflow-hidden bg-white p-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.24em]">BCA Graduate / Pursuing MCA / MERN Stack Developer</p>
                      <h2 className="mt-4 break-words font-display text-[clamp(2.4rem,13vw,4.25rem)] uppercase leading-[0.9]">Hi, I&apos;m Shashank<span className="block">Full Stack Developer</span><span className="block text-[#ff3b3b]">I Build Scalable Web Applications</span></h2>
                      <p className="mt-4 font-mono text-sm leading-relaxed">I build full stack web applications using the <span className="marker-yellow">MERN stack</span>, focused on responsive interfaces, backend logic, REST APIs, and real-world product value.</p>
                      <div className="mt-5 flex flex-wrap gap-2">{heroBadges.map((badge) => <Sticker key={badge.text} tone={badge.tone}>{badge.text}</Sticker>)}</div>
                      <div className="mt-5 grid gap-3">
                        <motion.button type="button" onClick={() => handleNavSelection("projects")} whileTap={{ scale: 0.98, y: 1 }} className="border-4 border-black bg-[#ff3b3b] px-4 py-4 font-display text-sm uppercase tracking-[0.18em] text-white shadow-[2px_2px_0_#000]">See Projects</motion.button>
                        <motion.a href={`mailto:${contactDetails.email}`} onClick={handleEmailStart} whileTap={{ scale: 0.98, y: 1 }} className="border-4 border-black bg-[#ffe600] px-4 py-4 text-center font-display text-sm uppercase tracking-[0.18em] shadow-[2px_2px_0_#000]">Start A Conversation</motion.a>
                      </div>
                    </article>

                    <div className="grid grid-cols-2 gap-3">{stats.map((stat, index) => <motion.article key={stat.label} {...mobileRevealProps} className={`brutal-card overflow-hidden p-4 ${index === 2 ? "col-span-2" : ""} ${stat.surface}`}><p className={`font-display text-3xl uppercase leading-none ${stat.inverted ? "text-white" : ""}`}>{stat.value}</p><p className={`mt-2 font-mono text-[10px] uppercase tracking-[0.18em] ${stat.inverted ? "text-white" : ""}`}>{stat.label}</p></motion.article>)}</div>

                    <motion.article {...mobileRevealProps} className="brutal-card overflow-hidden bg-[#ffe600] p-5"><p className="font-display text-4xl uppercase leading-none">I Build Scalable, User-Focused Web Applications That Solve Real Problems</p><p className="mt-4 font-mono text-sm leading-relaxed">I develop scalable full-stack applications and live business websites that prioritize usability, responsive design, and reliable engineering for real-world impact.</p></motion.article>

                    <motion.article {...mobileRevealProps} className="brutal-card overflow-hidden bg-white p-5"><p className="font-mono text-xs uppercase tracking-[0.24em]">Currently Focused On</p><div className="mt-4 flex flex-wrap gap-2"><Sticker tone="red">Building Production-Ready Full-Stack Applications</Sticker><Sticker tone="blue">Writing Clean, Maintainable, And Efficient Code</Sticker><Sticker tone="white">Improving Data Structures And Problem-Solving Skills</Sticker><Sticker tone="yellow">Designing User-Focused And Responsive Interfaces</Sticker></div></motion.article>
                  </motion.section>

                  <motion.section id="about" {...mobileRevealProps} className="space-y-4">
                    <SectionTitle kicker="Notebook Bio" title="About" subtitle="A full-stack developer focused on building scalable, user-centric applications with clean architecture and real-world impact." accent="red" />
                    <article className="notebook-page brutal-card overflow-hidden bg-white p-5"><p className="font-display text-4xl uppercase leading-none">Full Stack Development With Real-World Focus.</p><div className="mt-5 space-y-4 font-mono text-sm leading-relaxed"><p>I am <span className="marker-yellow ml-2">Shashank Singh</span>, a BCA graduate currently pursuing a<span className="marker-blue ml-2 text-white">Master of Computer Applications (MCA)</span>, with hands-on experience building full stack web applications using MongoDB, Express.js, React.js, and Node.js.</p><p>My work includes responsive interfaces with React.js, backend logic with Node.js and Express.js, and database handling with <span className="marker-red ml-2 text-white">MongoDB and API-driven workflows</span>.</p></div></article>
                    <div className="grid gap-4">{aboutNotes.map((note) => <motion.article key={note.title} {...mobileRevealProps} className={`brutal-card overflow-hidden p-5 ${note.surface}`}><p className={`font-display text-3xl uppercase leading-none ${note.inverted ? "text-white" : ""}`}>{note.title}</p><p className={`mt-3 font-mono text-sm leading-relaxed ${note.inverted ? "text-white" : ""}`}>{note.text}</p></motion.article>)}</div>
                  </motion.section>

                  <section id="projects" className="space-y-4">
                    <SectionTitle kicker="Scrap Stack" title="Projects" subtitle="Selected projects built around full stack development, responsive design, database-backed features, and real-world problem solving." accent="blue" />
                    <div className="grid gap-4">{projects.map((project) => <MobileProjectCard key={project.id} project={project} canHover={canHover} />)}</div>
                  </section>

                  <motion.section id="skills" {...mobileRevealProps} className="space-y-4">
                    <SectionTitle kicker="Sticker Sheet" title="Skills" subtitle="Core technologies, programming languages, tools, and frameworks I use to build responsive full stack applications." accent="yellow" />
                    <article className="brutal-card overflow-hidden bg-[#ff3b3b] p-5 text-white"><p className="font-display text-4xl uppercase leading-none">Technical Skill Groups.</p><div className="mt-5 grid gap-3">{workflowNotes.map((note) => <div key={note.title} className="border-4 border-black bg-white px-4 py-3 text-black shadow-[2px_2px_0_#000]"><p className="font-display text-2xl uppercase leading-none">{note.title}</p><p className="mt-2 font-mono text-sm leading-relaxed">{note.text}</p></div>)}</div></article>
                    <article className="brutal-card overflow-hidden bg-white p-5"><div className="flex flex-wrap gap-3">{skills.map((skill) => <Sticker key={skill.label} tone={skill.tone}>{skill.label}</Sticker>)}</div></article>
                  </motion.section>

                  <motion.section id="contact" {...mobileRevealProps} className="space-y-4">
                    <SectionTitle kicker="Pinned Note" title="Contact" subtitle="Open to placements, internships, and full stack developer roles. Let&apos;s discuss how I can contribute." accent="red" />
                    <MobileContactCard canHover={canHover} onEmailStart={handleEmailStart} onSocialLinkClick={handleSocialLinkClick} />
                  </motion.section>
                </main>
              </>
            ) : (
              <DesktopPortfolio
                activeProjectId={activeProjectId}
                canHover={canHover}
                isDark={isDark}
                handleEmailStart={handleEmailStart}
                handleSocialLinkClick={handleSocialLinkClick}
                setActiveProjectId={setActiveProjectId}
                toggleDarkMode={() => setIsDark((value) => !value)}
                scrollToSection={scrollToSection}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
