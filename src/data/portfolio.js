export const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const heroBadges = [
  { text: "MERN STACK DEVELOPMENT", tone: "yellow", rotation: "-rotate-[3deg]" },
  { text: "REACT.JS / NODE.JS / MONGODB", tone: "red", rotation: "rotate-[2deg]" },
  { text: "RESPONSIVE UI / REAL PROJECTS", tone: "blue", rotation: "-rotate-[2deg]" },
];

export const stats = [
  { label: "Core Stack", value: "MERN STACK", surface: "bg-white" },
  { label: "Education", value: "BCA GRADUATE", surface: "bg-[#ffe600]" },
  {
    label: "Current Academic Path",
    value: "PURSUING MCA",
    surface: "bg-[#0066ff]",
    inverted: true,
  },
];

export const aboutNotes = [
  {
    title: "Full Stack Development",
    text: "Build end-to-end web applications with MongoDB, Express.js, React.js, Node.js, REST APIs, and database-driven features.",
    surface: "bg-[#0066ff]",
    rotation: "rotate-[2deg]",
    hoverRotate: 1,
    inverted: true,
  },
  {
    title: "Problem-Solving Projects",
    text: "Develop solutions for real use cases, including vehicle marketplaces, donor-recipient platforms, and live business websites.",
    surface: "bg-[#ffe600]",
    rotation: "-rotate-[2deg]",
    hoverRotate: -1,
  },
  {
    title: "Responsive Product Thinking",
    text: "Focus on usability, scalable structure, and responsive design so features stay clear and reliable across devices.",
    surface: "bg-[#ff3b3b]",
    rotation: "rotate-[1deg]",
    hoverRotate: 1,
    inverted: true,
  },
];

export const projects = [
  {
    id: "car-marketplace",
    title: "Car Buying/Selling Website",
    label: "MERN Marketplace",
    year: "FULL STACK",
    surface: "bg-white",
    accent: "yellow",
    rotation: "rotate-[1deg]",
    summary:
      "A full stack car marketplace that simplifies vehicle discovery, listing management, and buyer-seller interaction through a responsive user experience.",
    impact:
      "Built to make browsing, listing, and engagement easier for users while keeping the platform structured for scalability, clean data handling, and future feature growth.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    details: [
      "Developed a MERN stack application for car buying and selling with structured listing workflows and a user-friendly interface.",
      "Designed responsive pages and intuitive navigation so vehicle discovery and listing creation stay clear across desktop and mobile devices.",
      "Implemented a scalable project structure that supports future feature expansion, organized data flow, and improved marketplace usability.",
    ],
    preview: {
      eyebrow: "vehicle marketplace / listings",
      metric: "SCALABLE BUY / SELL FLOW",
      tiles: [
        { label: "Listings", tone: "yellow", span: "col-span-2 row-span-2" },
        { label: "Browse", tone: "white", span: "col-span-1 row-span-1" },
        { label: "Sell", tone: "red", span: "col-span-1 row-span-2" },
        { label: "Search", tone: "blue", span: "col-span-2 row-span-1" },
        { label: "UI", tone: "white", span: "col-span-1 row-span-1" },
      ],
    },
  },
  {
    id: "blood-bank",
    title: "Blood Donation Bank Website",
    label: "Social Impact Platform",
    year: "REAL-WORLD",
    surface: "bg-[#ffe600]",
    accent: "red",
    rotation: "-rotate-[1deg]",
    summary:
      "A real-world web platform that helps blood donors and recipients connect through accessible flows, clear communication, and responsive design.",
    impact:
      "Created to improve donor-recipient coordination by making critical information easier to access and core actions easier to complete when urgency matters.",
    tech: ["React.js", "Express.js", "Node.js", "MongoDB"],
    details: [
      "Developed a platform that supports donor-recipient connection through clear request handling and information-driven user flows.",
      "Improved accessibility and responsive design so important actions remain straightforward across devices and user conditions.",
      "Structured the experience around real-world communication needs, helping users discover donors and respond to blood requests more efficiently.",
    ],
    preview: {
      eyebrow: "blood donation / connection flow",
      metric: "FASTER DONOR CONNECTION",
      tiles: [
        { label: "Donor", tone: "red", span: "col-span-2 row-span-2" },
        { label: "Need", tone: "white", span: "col-span-1 row-span-1" },
        { label: "Access", tone: "blue", span: "col-span-1 row-span-1" },
        { label: "Support", tone: "yellow", span: "col-span-2 row-span-1" },
        { label: "Request", tone: "white", span: "col-span-2 row-span-1" },
      ],
    },
  },
  {
    id: "protection-website",
    title: "Security Agency Website",
    label: "Live Business Project",
    year: "LIVE",
    surface: "bg-[#0066ff]",
    accent: "blue",
    rotation: "rotate-[1.4deg]",
    summary:
      "A deployed business website for a protection services company, built to present services clearly, strengthen trust, and capture inquiries online.",
    impact:
      "Delivered a production-ready website for Shashank Protection & Co. with structured service pages, company information, and an inquiry workflow that supports direct client communication.",
    tech: ["React.js", "JavaScript", "CSS", "REST APIs"],
    details: [
      "Designed and developed a React.js website with clear service presentation, About and Contact pages, and branded navigation for a local security business.",
      "Implemented an inquiry form integrated with a backend API, enabling direct client communication and live lead capture from the deployed application.",
      "Focused on responsive UI structure and trust-driven content so services, company details, and contact information remain easy to navigate.",
    ],
    preview: {
      eyebrow: "live business site / services",
      metric: "LIVE CLIENT EXPERIENCE",
      tiles: [
        { label: "Services", tone: "red", span: "col-span-2 row-span-2" },
        { label: "About", tone: "yellow", span: "col-span-1 row-span-1" },
        { label: "Contact", tone: "white", span: "col-span-1 row-span-1" },
        { label: "Inquiry", tone: "white", span: "col-span-2 row-span-1" },
        { label: "Trust", tone: "yellow", span: "col-span-2 row-span-1" },
      ],
    },
  },
];

export const workflowNotes = [
  {
    title: "MERN Stack Development",
    text: "MongoDB, Express.js, React.js, Node.js, and REST API development for full stack web applications.",
  },
  {
    title: "Frontend Engineering",
    text: "HTML, CSS, JavaScript, React.js, responsive design, Tailwind CSS, and UI implementation focused on usability.",
  },
  {
    title: "Backend & Database Management",
    text: "Node.js, Express.js, MongoDB, data handling, database management, and API testing workflows with Postman.",
  },
  {
    title: "Programming",
    text: "Python and C for logic building, problem solving, and strengthening core programming fundamentals.",
  },
];

export const skills = [
  { label: "MongoDB", tone: "yellow", rotation: "-rotate-[3deg]" },
  { label: "Express.js", tone: "blue", rotation: "rotate-[2deg]" },
  { label: "React.js", tone: "red", rotation: "-rotate-[2deg]" },
  { label: "Node.js", tone: "white", rotation: "rotate-[3deg]" },
  { label: "HTML", tone: "yellow", rotation: "-rotate-[1deg]" },
  { label: "CSS", tone: "white", rotation: "rotate-[1deg]" },
  { label: "JavaScript", tone: "blue", rotation: "-rotate-[3deg]" },
  { label: "REST APIs", tone: "red", rotation: "rotate-[2deg]" },
  { label: "Tailwind CSS", tone: "yellow", rotation: "-rotate-[2deg]" },
  { label: "Framer Motion", tone: "white", rotation: "rotate-[1deg]" },
  { label: "Database Management", tone: "red", rotation: "-rotate-[1deg]" },
  { label: "Python", tone: "blue", rotation: "rotate-[3deg]" },
  { label: "C", tone: "yellow", rotation: "-rotate-[2deg]" },
  { label: "GitHub", tone: "white", rotation: "rotate-[2deg]" },
  { label: "Postman", tone: "red", rotation: "-rotate-[3deg]" },
  { label: "VS Code", tone: "blue", rotation: "rotate-[1deg]" },
];

export const socialLinks = [
  {
    label: "CODE REPOSITORIES",
    href: "https://github.com/shashank-ssr",
    meta: "GITHUB / PROJECTS",
    surface: "bg-white",
  },
  {
    label: "PROFESSIONAL PROFILE",
    href: "http://www.linkedin.com/in/shashanksingh15",
    meta: "LINKEDIN / NETWORK",
    surface: "bg-[#0066ff]",
    inverted: true,
  },
  {
    label: "DIRECT CONTACT",
    href: "mailto:rajputshashank1563@gmail.com",
    meta: "EMAIL / RESPONSE",
    surface: "bg-[#ff3b3b]",
    inverted: true,
  },
];

export const contactDetails = {
  email: "rajputshashank1563@gmail.com",
  phone: "+91 9104297557",
  availability:
    "Open to placements, internships, and full stack developer opportunities where I can build scalable web applications and solve real product problems.",
};
