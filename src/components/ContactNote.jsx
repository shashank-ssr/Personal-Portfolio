import { useState } from "react";
import { motion } from "framer-motion";
import useCanHover from "../hooks/useCanHover";
import { openEmailWithFallback } from "../utils/openEmailWithFallback";

export default function ContactNote({ contactDetails, socialLinks }) {
  const canHover = useCanHover();
  const codingProfiles = [
    {
      label: "HACKERRANK PROFILE",
      href: "https://www.hackerrank.com/profile/rajputshashank12",
      surface: "bg-[#ff3b3b]",
      textClassName: "text-white",
    },
    {
      label: "LEETCODE PROFILE",
      href: "https://leetcode.com/u/shashank1563/",
      surface: "bg-[#0066ff]",
      textClassName: "text-white",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [didSubmit, setDidSubmit] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = `Portfolio inquiry from ${formData.name || "a new contact"}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\n${formData.message}`;

    setDidSubmit(true);
    openEmailWithFallback({
      email: contactDetails.email,
      subject,
      body,
    });
  };

  const handleEmailClick = (event) => {
    event.preventDefault();
    openEmailWithFallback({ email: contactDetails.email });
  };

  const handleSocialLinkClick = (event, href) => {
    if (!href.startsWith("mailto:")) {
      return;
    }

    event.preventDefault();
    openEmailWithFallback({ email: contactDetails.email });
  };

  return (
    <div className="brutal-card relative w-full max-w-full min-w-0 overflow-hidden bg-white px-4 py-6 sm:overflow-visible sm:px-8 sm:py-8">
      <span className="push-pin left-5 top-5" />
      <span className="push-pin right-5 top-5 bg-[#0066ff]" />

      <div className="grid w-full max-w-full min-w-0 gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div className="min-w-0">
          <p className="break-words font-display text-4xl uppercase leading-none sm:text-6xl">Let&apos;s Talk About Full Stack Opportunities.</p>
          <p className="mt-4 max-w-xl font-mono text-sm leading-relaxed sm:text-base">{contactDetails.availability}</p>

          <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
            <label className="grid gap-2 font-mono text-xs uppercase tracking-[0.2em]">
              Name
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="scrap-input"
                placeholder="Your name"
                required
              />
            </label>

            <label className="grid gap-2 font-mono text-xs uppercase tracking-[0.2em]">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="scrap-input"
                placeholder="your.email@company.com"
                required
              />
            </label>

            <label className="grid gap-2 font-mono text-xs uppercase tracking-[0.2em]">
              Project Type
              <input
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="scrap-input"
                placeholder="Placement role, internship, freelance build..."
                required
              />
            </label>

            <label className="grid gap-2 font-mono text-xs uppercase tracking-[0.2em]">
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="scrap-input min-h-36 resize-y"
                placeholder="Share the role, project scope, or product problem you want me to work on."
                required
              />
            </label>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.button
                type="submit"
                {...(canHover ? { whileHover: { scale: 1.05, rotate: 1 } } : {})}
                whileTap={{ scale: 0.97, y: 2 }}
                className="w-full max-w-full border-4 border-black bg-[#ff3b3b] px-5 py-3 font-display text-sm uppercase tracking-[0.2em] text-white shadow-[3px_3px_0_#000] sm:w-auto sm:shadow-[5px_5px_0_#000]"
              >
                Send Email Inquiry
              </motion.button>

              {didSubmit ? (
                <div className="w-full max-w-full break-words border-4 border-black bg-[#ffe600] px-4 py-3 font-mono text-xs uppercase tracking-[0.18em] shadow-[2px_2px_0_#000] sm:w-auto sm:shadow-[4px_4px_0_#000]">
                  Opening your mail draft or Gmail compose.
                </div>
              ) : null}
            </div>
          </form>
        </div>

        <div className="grid min-w-0 gap-4">
          <div className="brutal-card w-full max-w-full min-w-0 rotate-0 bg-[#ffe600] p-5 sm:rotate-[2deg]">
            <p className="font-mono text-xs uppercase tracking-[0.24em]">Quick Contact</p>
            <div className="mt-4 grid gap-3 font-mono text-sm">
              <div className="w-full max-w-full border-4 border-black bg-white px-4 py-3 shadow-[2px_2px_0_#000] sm:shadow-[4px_4px_0_#000]">
                <span className="font-display text-xl uppercase leading-none">Direct Contact</span>
                <a
                  href={`mailto:${contactDetails.email}`}
                  onClick={handleEmailClick}
                  className="mt-2 block break-all underline decoration-2 underline-offset-4"
                >
                  {contactDetails.email}
                </a>
              </div>
              <div className="w-full max-w-full border-4 border-black bg-white px-4 py-3 shadow-[2px_2px_0_#000] sm:shadow-[4px_4px_0_#000]">
                <span className="font-display text-xl uppercase leading-none">Contact Number</span>
                <a
                  href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                  className="mt-2 block break-all text-base font-bold underline decoration-2 underline-offset-4"
                >
                  {contactDetails.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="brutal-card w-full max-w-full min-w-0 rotate-0 bg-white p-5 sm:-rotate-[1deg]">
            <p className="font-display text-3xl uppercase leading-none">Professional Links</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {codingProfiles.map((profile) => (
                <motion.a
                  key={profile.label}
                  href={profile.href}
                  target="_blank"
                  rel="noreferrer"
                  {...(canHover ? { whileHover: { scale: 1.04, rotate: -1 } } : {})}
                  whileTap={{ scale: 0.97, y: 2 }}
                  className={`w-full max-w-full border-4 border-black px-4 py-3 text-center font-display text-xs uppercase tracking-[0.18em] shadow-[2px_2px_0_#000] sm:w-auto sm:text-left sm:shadow-[4px_4px_0_#000] ${profile.surface} ${profile.textClassName}`}
                >
                  {profile.label}
                </motion.a>
              ))}
            </div>
            <div className="mt-5 grid gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => handleSocialLinkClick(event, link.href)}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  {...(canHover ? { whileHover: { scale: 1.04, rotate: -1 } } : {})}
                  whileTap={{ scale: 0.97, y: 2 }}
                  className={`brutal-card flex w-full max-w-full flex-col items-start gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between ${link.surface}`}
                >
                  <span className={`font-display text-xl uppercase leading-none ${link.inverted ? "text-white" : ""}`}>{link.label}</span>
                  <span className={`font-mono text-xs uppercase tracking-[0.18em] ${link.inverted ? "text-white" : ""}`}>{link.meta}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
