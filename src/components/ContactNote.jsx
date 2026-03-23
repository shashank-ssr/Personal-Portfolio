import { useState } from "react";
import { motion } from "framer-motion";
import Sticker from "./Sticker";

export default function ContactNote({ contactDetails, socialLinks }) {
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

    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name || "a new contact"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\n${formData.message}`
    );

    setDidSubmit(true);
    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="brutal-card relative bg-white p-6 sm:p-8">
      <span className="push-pin left-5 top-5" />
      <span className="push-pin right-5 top-5 bg-[#0066ff]" />

      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="font-display text-5xl uppercase leading-none sm:text-6xl">Let&apos;s Talk About Full Stack Opportunities.</p>
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
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.97, y: 2 }}
                className="border-4 border-black bg-[#ff3b3b] px-5 py-3 font-display text-sm uppercase tracking-[0.2em] text-white shadow-[5px_5px_0_#000]"
              >
                Send Email Inquiry
              </motion.button>

              {didSubmit ? (
                <div className="border-4 border-black bg-[#ffe600] px-4 py-3 font-mono text-xs uppercase tracking-[0.18em] shadow-[4px_4px_0_#000]">
                  Mail app should open with your draft.
                </div>
              ) : null}
            </div>
          </form>
        </div>

        <div className="grid gap-4">
          <div className="brutal-card rotate-[2deg] bg-[#ffe600] p-5">
            <p className="font-mono text-xs uppercase tracking-[0.24em]">Quick Contact</p>
            <div className="mt-4 grid gap-3 font-mono text-sm">
              <div className="border-4 border-black bg-white px-4 py-3 shadow-[4px_4px_0_#000]">
                <span className="font-display text-xl uppercase leading-none">Direct Contact</span>
                <p className="mt-2 break-all">{contactDetails.email}</p>
              </div>
              <div className="border-4 border-black bg-white px-4 py-3 shadow-[4px_4px_0_#000]">
                <span className="font-display text-xl uppercase leading-none">Location</span>
                <p className="mt-2">{contactDetails.location}</p>
              </div>
            </div>
          </div>

          <div className="brutal-card -rotate-[1deg] bg-white p-5">
            <p className="font-display text-3xl uppercase leading-none">Professional Links</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Sticker tone="red">PLACEMENT READY</Sticker>
              <Sticker tone="blue">RECRUITER FRIENDLY</Sticker>
            </div>
            <div className="mt-5 grid gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ scale: 1.04, rotate: -1 }}
                  whileTap={{ scale: 0.97, y: 2 }}
                  className={`brutal-card flex items-center justify-between px-4 py-3 ${link.surface}`}
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
