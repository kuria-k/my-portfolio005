import React, { useState } from "react";
import techieImage from "./Images/Techie.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

/* ─── Update these with your real info ─── */
const GITHUB  = "https://github.com/";
const TAGLINE = "I build clean, fast, and thoughtful digital products — from pixel-perfect UIs to solid back-end systems.";
const STATS   = [
  { value: "20+",  label: "Projects Shipped" },
  { value: "1+",   label: "Years Experience" },
  { value: "5+",  label: "Happy Clients"    },
  { value: "100%", label: "Dedication"       },
];
const SKILLS = [
  "React", "JavaScript", "Node.js",
  "Tailwind CSS", "Python", "REST APIs", "Git & GitHub",
  "Figma",  "PostgreSQL", "Canva",
];

export default function Home() {
  const [imgErr, setImgErr] = useState(false);

  return (
    /*
      Add to your index.html <head> for the fonts:
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Outfit:wght@300;400;500&display=swap" rel="stylesheet" />
    */
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Outfit', sans-serif" }}>

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="relative h-screen flex flex-col overflow-hidden bg-[#1E3A8A]">

        {/* Background photo */}
        {!imgErr && (
          <img
            src={techieImage}
            alt=""
            aria-hidden="true"
            onError={() => setImgErr(true)}
            className="absolute inset-0 w-full h-full object-cover object-top opacity-[0.14] scale-105"
          />
        )}

        {/* Navy overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A]/92 to-[#1a3278]" />

        {/* Subtle grid lines */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "54px 54px",
          }}
        />

        {/* Teal glow accent — top right */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-[#14B8A6]/15 blur-3xl pointer-events-none"
        />
        {/* Soft glow — bottom left */}
        <div
          aria-hidden="true"
          className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-[#14B8A6]/10 blur-3xl pointer-events-none"
        />

        {/* Navbar */}
        <div className="relative z-20">
          <Navbar />
        </div>

        {/* Hero copy */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-6 text-center">
          <div className="max-w-2xl w-full">

            {/* Eyebrow badge */}
            <div
              className="inline-flex items-center gap-3 mb-7 opacity-0"
              style={{ animation: "fadeUp 0.6s 0.1s ease forwards" }}
            >
              <span className="h-px w-8 bg-[#14B8A6]" />
              <span className="text-[#14B8A6] text-xs font-medium tracking-[0.22em] uppercase">
                Available for Hire
              </span>
              <span className="h-px w-8 bg-[#14B8A6]" />
            </div>

            {/* Main headline */}
            <h1
              className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.07] mb-5 opacity-0"
              style={{
                fontFamily: "'Playfair Display', serif",
                animation: "fadeUp 0.7s 0.25s ease forwards",
              }}
            >
              Ideas met with{" "}
              <em
                className="not-italic text-[#14B8A6]"
                style={{ fontStyle: "italic", fontWeight: 400 }}
              >
                flawless execution.
              </em>
            </h1>

            {/* Sub-headline */}
            <p
              className="text-white/55 text-[1.05rem] font-light leading-[1.85] max-w-lg mx-auto mb-10 opacity-0"
              style={{ animation: "fadeUp 0.7s 0.42s ease forwards" }}
            >
              {TAGLINE}
            </p>

            {/* CTA buttons */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-3 opacity-0"
              style={{ animation: "fadeUp 0.7s 0.58s ease forwards" }}
            >
              <NavLink
                to="/contact"
                className="w-full sm:w-auto px-9 py-3.5 rounded bg-[#14B8A6] hover:bg-[#0d9488] text-white text-sm font-medium tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#14B8A6]/30"
              >
                Get in Touch →
              </NavLink>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-9 py-3.5 rounded border border-white/20 hover:border-[#14B8A6] text-white/75 hover:text-[#14B8A6] text-sm font-medium tracking-wide transition-all duration-200 hover:-translate-y-0.5"
              >
                GitHub Profile →
              </a>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        {/* <div
          className="relative z-10 flex flex-col items-center gap-2 pb-9 opacity-0"
          style={{ animation: "fadeUp 0.6s 0.9s ease forwards" }}
        >
          <span className="text-white/30 text-[0.6rem] tracking-[0.22em] uppercase">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-[#14B8A6]/60 to-transparent animate-pulse" />
        </div> */}
      </section>


      {/* ══════════════════════════════
          ABOUT
      ══════════════════════════════ */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-14 items-start">

          {/* Left — label + heading */}
          <div className="md:col-span-2">
            <p className="text-[#14B8A6] text-xs font-medium tracking-[0.2em] uppercase mb-3">
              About Me
            </p>
            <h2
              className="text-[2.2rem] font-bold text-[#1E3A8A] leading-snug"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Building things{" "}
              <span
                className="text-[#14B8A6]"
                style={{ fontStyle: "italic", fontWeight: 400 }}
              >
                worth remembering.
              </span>
            </h2>
            {/* Teal accent bar */}
            <div className="mt-5 w-12 h-1 bg-[#14B8A6] rounded-full" />
          </div>

          {/* Right — body copy */}
          <div className="md:col-span-3 space-y-4 text-[#6B7280] leading-[1.9] font-light text-[0.97rem]">
            <p>
              I'm a{" "}
              <span className="text-[#1E3A8A] font-medium">full-stack developer</span> who
              lives at the intersection of design and engineering. I believe great software
              isn't just functional — it's thoughtful, fast, and a pleasure to use.
            </p>
            <p>
              I bring a holistic perspective across{" "}
              <span className="text-[#1E3A8A] font-medium">
                front-end, back-end, and product thinking
              </span>
              , writing clean, maintainable code and obsessing over the details that make
              users smile.
            </p>
            <p>
              Currently open to{" "}
              <span className="text-[#1E3A8A] font-medium">
                full-time roles, contracts, and collaborations
              </span>{" "}
              where I can make a real impact.
            </p>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════
          STATS
      ══════════════════════════════ */}
      <section className="bg-[#1E3A8A] py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {STATS.map(({ value, label }, i) => (
            <div key={i} className="text-center group">
              <div
                className="text-4xl font-bold text-[#14B8A6] leading-none mb-1.5 transition-transform duration-300 group-hover:-translate-y-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {value}
              </div>
              <div className="text-white/40 text-[0.68rem] tracking-[0.18em] uppercase font-light">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ══════════════════════════════
          SKILLS
      ══════════════════════════════ */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#14B8A6] text-xs font-medium tracking-[0.2em] uppercase mb-2">
            What I Work With
          </p>
          <h2
            className="text-3xl font-bold text-[#1E3A8A] mb-10"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Skills &amp; Technologies
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {SKILLS.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-3 bg-white border border-slate-200 hover:border-[#14B8A6] hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#14B8A6]/10 transition-all duration-200 rounded px-4 py-3 cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] flex-shrink-0" />
                <span className="text-[#1E3A8A] text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════
          CTA STRIP
      ══════════════════════════════ */}
      <section className="relative bg-[#1E3A8A] py-24 px-6 text-center overflow-hidden">
        {/* Soft glow center */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-40 bg-[#14B8A6]/12 blur-3xl rounded-full pointer-events-none"
        />
        <div className="relative z-10 max-w-lg mx-auto">
          <p className="text-[#14B8A6] text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Let's Work Together
          </p>
          <h2
            className="text-4xl font-bold text-white mb-4 leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Got a project in mind?
          </h2>
          <p className="text-white/45 font-light mb-9 leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects,
            or just a good conversation about tech.
          </p>
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#14B8A6] hover:bg-[#0d9488] text-white text-sm font-medium tracking-wide rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#14B8A6]/30"
          >
            Start a Conversation →
          </NavLink>
        </div>
      </section>


      {/* ══════════════════════════════
          FOOTER
      ══════════════════════════════ */}
      <Footer />


      {/* Keyframe animation */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}