import {
  Home, User, Code2, Layers, Palette, Smartphone, Plug, Mail, FileText, Briefcase, Settings, MessageSquare, ArrowUp, Heart, ChevronRight,
} from "lucide-react";
import { Github, Linkedin, Twitter, Instagram } from "./components/BrandIcons";

export const profile = {
  name: "Diwakar Kumar",
  firstName: "Diwakar",
  roles: ["Full Stack Developer", "Frontend Developer", "Digital Marketer"],
  tagline: "Ready to handle your next project",
  intro:
    "I craft elegant, high-performance web experiences that blend clean design with scalable engineering. Turning ideas into pixel-perfect, production-ready products is what I do best.",
  email: "kumardiwakar0858@gmail.com",
  phone: "+91 88600685977",
  location: "Delhi, India",
};

export const socials = [
  { name: "GitHub", icon: Github, href: "https://github.com/Diwakar01-dev" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/diwakar-kumar-220154347" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "Email", icon: Mail, href: "mailto:kumardiwakar0858@gmail.com" },
];

export const stats = [
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Projects Completed", value: 5, suffix: "+" },
  { label: "Happy Clients", value: 5, suffix: "+" },
  { label: "Technologies", value: 20, suffix: "+" },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3 / Tailwind", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "React", level: 70 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 65 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 77 },
      { name: "Python", level: 65 },
      { name: "Express.js", level: 58 },
      { name: "MongoDB", level: 65 },
      { name: "REST APIs", level: 68 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Wordpress", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "CANVA", level: 95 },
      { name: "Figma", level: 80 },
      { name: "Vercel", level: 85 },
        ],
  },
];

export const education = [
  {
    period: "2021 — 2024",
    title: "Bachelor of Computer Applications (BCA)",
    place: "IGNOU - Indra Gandhi National Open University",
    desc: "Graduated with distinction, specializing in software development and web technologies.",
  },
  {
    period: "2023",
    title: "Full Stack Web Development Certification",
    place: "Meta / Coursera",
    desc: "Professional certification covering React, Node.js and modern deployment workflows.",
  },
  {
    period: "2022",
    title: "Advanced Digital marketing",
    place: "Self or Youtube",
    desc: "Hands-on training in design systems, prototyping and user research.",
  },
];

export const experience = [
  {
    period: "2024 — Present",
    title: "Freelance Full Stack Developer",
    place: "Self-employed",
    desc: "Building bespoke web apps and dashboards for clients across e-commerce, SaaS and fintech.",
  },
  {
    period: "2023 — 2024",
    title: "Frontend Developer Intern",
    place: "Nova Labs",
    desc: "Developed reusable React components and improved page performance by 40%.",
  },
  {
    period: "2022 — 2023",
    title: "Personal Projects & Open Source",
    place: "GitHub",
    desc: "Contributed to open-source libraries and shipped several side projects with 1k+ stars.",
  },
];

export const categories = [
  "All",
  "Web Development",
  "React Projects",
  "Full Stack Projects",
  "Wordpress Projects",
];

export const projects = [
  {
    title: "Codeintips-EdTech & IT Solutions Platform",
    category: "Wordpress Projects",
    desc: "Comprehensive EdTech and IT services platform offering professional training programs, AI solutions, web development, digital marketing, and business automation services with responsive design and lead generation features.",
    tech: ["WordPress", "Elementor", "PHP", "JavaScript","HTML5","CSS3", "SEO"],
    color: "from-amber-400 to-orange-500",
    github: "#",
    demo: "https://codeintips.com/",
  },
  {
    title: "Personal Portfolio Website",
    category: "React Projects",
    desc: "Modern portfolio website built using React, TypeScript and Tailwind CSS with animations and responsive design.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    color: "from-sky-400 to-indigo-500",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
   title: "AI Real Estate Platform",
   category: "Full Stack Projects",
   desc: "Modern real estate platform built with React and TypeScript, enhanced with AI features for property suggestions, smart search, and user recommendations.",
   tech: ["React", "TypeScript", "AI Integration", "Tailwind CSS"],
   color: "from-blue-400 to-indigo-600",
   github: "YOUR_GITHUB_LINK",
   demo: "#",
},
  {
   title: "Netflix Landing Page Clone",
   category: "Web Development",
   desc: "Responsive Netflix homepage clone built using HTML and CSS with modern layout and UI structure.",
   tech: ["HTML", "CSS"],
   color: "from-red-400 to-rose-600",
   github: "https://github.com",
   demo: "#",
},
{
   title: "Amazon Homepage Clone",
   category: "Web Development",
   desc: "Static Amazon homepage UI clone focusing on layout structure, product sections and responsive design using HTML and CSS.",
   tech: ["HTML", "CSS"],
   color: "from-yellow-400 to-orange-500",
   github: "https://github.com",
   demo: "#",
},
{
   title: "Blinkit UI Clone",
   category: "Web Development",
   desc: "Blinkit grocery app UI clone created using HTML and CSS with clean layout and mobile-first design approach.",
   tech: ["HTML", "CSS"],
   color: "from-green-400 to-emerald-500",
   github: "https://github.com",
   demo: "#",
},
{
   title: "Analog & Digital Clock",
   category: "Web Development",
   desc: "Interactive analog and digital clock built using JavaScript, featuring real-time updates, clean UI and smooth UI rendering.",
   tech: ["HTML", "CSS", "JavaScript"],
   color: "from-gray-400 to-blue-500",
   github: "YOUR_GITHUB_LINK",
   demo: "#",
},
  
];

export const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "Pixel-perfect, accessible interfaces built with React, Next.js and Tailwind CSS.",
  },
  {
    icon: Layers,
    title: "Full Stack Development",
    desc: "End-to-end web applications with robust APIs, databases and authentication.",
  },
  {
    icon: Palette,
    title: "Website Design",
    desc: "Beautiful, modern UI/UX design crafted in Figma with strong visual hierarchy.",
  },
  {
    icon: Smartphone,
    title: "Responsive Websites",
    desc: "Mobile-first layouts that look and feel perfect on every device and screen.",
  },
  // {
  //   icon: Plug,
  //   title: "API Integration",
  //   desc: "Seamless integration of third-party services, payments and REST/GraphQL APIs.",
  // },
  {
    icon: FileText,
    title: "Digital Marketing",
    desc: "SEO, Social Media Marketing, Meta Ads, Lead Generation and Growth Strategies.",
  },
];

export const testimonials = [
  {
    name: "Sofia Reyes",
    role: "Product Manager, Nova Labs",
    review:
      "Arjun delivered beyond expectations. The product was fast, polished and exactly what our users needed. A true professional.",
    rating: 5,
  },
  {
    name: "Daniel Kim",
    role: "Founder, Lumen Store",
    review:
      "Our conversion rate jumped after the redesign. Clean code, great communication and on-time delivery. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "CTO, Fintrack",
    review:
      "An exceptional developer with a designer's eye. Arjun built our dashboard with care and incredible attention to detail.",
    rating: 5,
  },
  {
    name: "Marco Rossi",
    role: "CEO, Aura Digital",
    review:
      "Working with Diwakar was effortless. He understood the vision instantly and turned it into a stunning, performant website.",
    rating: 5,
  },
];

export const navItems = [
  { id: "home", label: "Home" ,Icon: Home},
  { id: "about", label: "About", Icon: User},
  { id: "skills", label: "Skills", Icon: Code2},
  { id: "resume", label: "Resume", Icon: FileText},
  { id: "portfolio", label: "Portfolio", Icon: Briefcase},
  { id: "services", label: "Services", Icon: Settings},
  { id: "blog", label: "BLogs", Icon: Settings},
  { id: "testimonials", label: "Reviews", Icon: MessageSquare},
  { id: "contact", label: "Contact", Icon: Mail},
];
