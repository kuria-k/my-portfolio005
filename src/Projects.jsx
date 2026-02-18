import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

/* ─── Project data — update these with your real info ─── */
const PROJECTS = [
  {
    id: 1,
    number: "01",
    badge: "Productivity",
    title: "Calorie Counter",
    description:
      "A simple and smart calorie counter that helps you track your daily intake and stay on top of your nutrition goals.",
    live: "https://kuria-k.github.io/calorie-counter/",
    accent: "#14B8A6",
  },
  {
    id: 2,
    number: "02",
    badge: "UI / Frontend",
    title: "Duo Drive Front-End",
    description:
      "A sleek and responsive front-end interface for Duo Drive, designed to showcase seamless user interaction and intuitive navigation.",
    live: "https://kuria-k.github.io/duodrive-front-end-/",
    accent: "#1E3A8A",
  },
  {
    id: 3,
    number: "03",
    badge: "Finance",
    title: "Budget Tracker",
    description:
      "A clean and intuitive tool to help you manage expenses, track spending, and stay in control of your finances every day.",
    live: "https://kuria-k.github.io/tracker/",
    accent: "#14B8A6",
  },
  {
    id: 4,
    number: "04",
    badge: "Dashboard",
    title: "Fleet Manager",
    description:
      "A streamlined dashboard for managing vehicles, tracking operations, and optimizing fleet performance from a single interface.",
    live: "https://kuria-k.github.io/fleet-manager/",
    accent: "#1E3A8A",
  },
  {
    id: 5,
    number: "05",
    badge: "Sales",
    title: "PharmaLink",
    description:
      "PharmaLink is a smart pharmacy POS built to simplify sales, inventory, and customer management. Designed for speed and reliability, it helps pharmacists focus on patient care while solving common POS challenges.",
    live: "https://pharmalink-frontend.onrender.com",
    accent: "#14B8A6",
  },

  {
    id: 6,
    number: "06",
    badge: "Coming Soon",
    title: "Project Six",
    description:
      "Another project currently under development. Check back soon for updates.",
    live: null,
    accent: "#1E3A8A",
  },
  // {
  //   id: 6,
  //   number: "06",
  //   badge: "Coming Soon",
  //   title: "Project Six",
  //   description:
  //     "Another project currently under development. Check back soon for updates.",
  //   live: null,
  //   accent: "#1E3A8A",
  // },
  // {
  //   id: 6,
  //   number: "06",
  //   badge: "Coming Soon",
  //   title: "Project Six",
  //   description:
  //     "Another project currently under development. Check back soon for updates.",
  //   live: null,
  //   accent: "#1E3A8A",
  // },
];

function ProjectCard({ project }) {
  return (
    <div className="group flex flex-col bg-white border border-slate-200 hover:border-[#14B8A6] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#14B8A6]/10">
      {/* Card header — number block */}
      <div
        className="flex items-center justify-between px-6 py-5"
        style={{ background: project.accent }}
      >
        <span
          className="text-4xl font-bold text-white/20 select-none"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {project.number}
        </span>
        <span className="text-xs font-medium tracking-[0.18em] uppercase text-white/60">
          {project.badge}
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <h3
          className="text-lg font-bold text-[#1E3A8A] group-hover:text-[#14B8A6] transition-colors duration-200"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {project.title}
        </h3>
        <p className="text-[#6B7280] text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        {/* CTA */}
        <div className="mt-2">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#14B8A6] hover:bg-[#0d9488] text-white text-xs font-medium tracking-wide rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#14B8A6]/30"
            >
              View Live
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-200 text-slate-400 text-xs font-medium tracking-wide rounded cursor-not-allowed">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );

  // Stay in sync with Navbar theme toggle
  useEffect(() => {
    const id = setInterval(() => {
      const stored = localStorage.getItem("theme") || "dark";
      setTheme((prev) => (prev !== stored ? stored : prev));
    }, 300);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* ── Hero banner ── */}
      <div className="bg-[#1E3A8A] relative overflow-hidden">
        {/* Grid texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "54px 54px",
          }}
        />
        {/* Teal glow */}
        <div
          aria-hidden="true"
          className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[#14B8A6]/15 blur-3xl pointer-events-none"
        />

        <Navbar />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-14 pb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#14B8A6]" />
            <span className="text-[#14B8A6] text-xs font-medium tracking-[0.22em] uppercase">
              Portfolio
            </span>
            <span className="h-px w-8 bg-[#14B8A6]" />
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            My <em className="italic font-normal text-[#14B8A6]">Projects</em>
          </h1>
          <p className="text-white/45 font-light max-w-lg mx-auto text-[0.97rem] leading-relaxed">
            A curated selection of things I've built — from productivity tools
            to full-stack applications.
          </p>
        </div>
      </div>

      {/* ── Projects grid ── */}
      <section className="flex-1 bg-slate-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section className="bg-[#1E3A8A] py-16 px-6 text-center relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-28 bg-[#14B8A6]/12 blur-3xl rounded-full pointer-events-none"
        />
        <div className="relative z-10 max-w-md mx-auto">
          <p className="text-[#14B8A6] text-xs font-medium tracking-[0.2em] uppercase mb-3">
            Have an idea?
          </p>
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let's build it together.
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#14B8A6] hover:bg-[#0d9488] text-white text-sm font-medium tracking-wide rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#14B8A6]/30"
          >
            Get in Touch →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Projects;
