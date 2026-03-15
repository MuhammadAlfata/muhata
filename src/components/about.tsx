"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, BrainCircuit, GraduationCap, Monitor } from "lucide-react";
import Link from "next/link";

export function About() {
  const highlights = [
    {
      title: "Master of Education — Monash University",
      icon: GraduationCap,
    },
    {
      title: "LPDP Scholarship Awardee",
      icon: Award,
    },
    {
      title: "Instructional Design & LMS Specialist",
      icon: Monitor,
    },
    {
      title: "AI-Powered Language Learning Researcher",
      icon: BrainCircuit,
    },
  ];
  const coreSkillsLeft = [
    "Instructional Design & Development: ADDIE, Articulate 360",
    "Intermediate Multimedia (Adobe Suite, CapCut), documentation (guides, scripts)",
    "Learner & System Support: learner onboarding, technical troubleshooting",
  ];
  const coreSkillsRight = [
    "Documentation: quick reference guides, job aids, customer service",
    "Educational Technology & LMS: Moodle, Canvas, learning measurement",
    "AI in Education, Vibe Coding (Next.js, Node.js, React.js)",
  ];
  const workExperiences = [
    "Educational technology practitioner with experience across LMS setup, learning content production, and AI integration for language learning.",
    "Focused on building digital learning platforms, supporting learners, and translating pedagogical needs into practical online learning systems.",
  ];
  const achievements = [
    "LPDP Scholarship Awardee (2021) - Indonesia's most prestigious fully funded government scholarship.",
    "Top 10 Selection - SYEAP PPAN (2019) - Youth Exchange Program finalist.",
    "Published research contributions in educational technology and language learning.",
  ];
  const publicationLinks = [
    {
      label: "doi.org/10.18413/2313-8912-2024-10-2-0-1",
      href: "https://doi.org/10.18413/2313-8912-2024-10-2-0-1",
    },
    {
      label: "JTE Issue 5 October 2024",
      href: "https://digitalcommons.taylors.edu.my/Vol_19_Issue_5_October_2024/19",
    },
    {
      label: "doi.org/10.24815/eej.v15i2.36959",
      href: "https://doi.org/10.24815/eej.v15i2.36959",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-[#040b18] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_left,rgba(59,130,246,0.08),transparent_25%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">About</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Educational Technology Practitioner
          </h2>
          <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#09111f] p-3 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem] border border-white/5 bg-[#0a1324]">
                <Image
                  src="/images/profile-placeholder.svg"
                  alt="Profile portrait"
                  width={640}
                  height={760}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <p className="text-xl leading-10 text-slate-300 md:text-[1.95rem] md:leading-[1.8]">
                Muhammad Alfata is an educational technology practitioner focusing on AI-supported
                language learning. With experience spanning instructional design, learning
                management systems, AI integration in education, and digital learning platform
                development.
              </p>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="rounded-2xl border border-white/10 bg-[#09111f] px-6 py-5 shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-lg leading-relaxed text-slate-200">{item.title}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-white/10 bg-[#09111f] p-7 shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
          >
            <h3 className="border-b border-white/10 pb-3 text-lg font-bold uppercase tracking-[0.08em] text-white">
              Core Skills & Interest
            </h3>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <ul className="space-y-3 text-sm leading-7 text-slate-300">
                {coreSkillsLeft.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3 text-sm leading-7 text-slate-300">
                {coreSkillsRight.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-3xl border border-white/10 bg-[#09111f] p-7 shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
          >
            <h3 className="border-b border-white/10 pb-3 text-lg font-bold uppercase tracking-[0.08em] text-white">
              Work & Experiences
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
              {workExperiences.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-6 rounded-3xl border border-white/10 bg-[#09111f] p-7 shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
        >
          <h3 className="border-b border-white/10 pb-3 text-lg font-bold uppercase tracking-[0.08em] text-white">
            Achievements & Awards
          </h3>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
            {achievements.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            {publicationLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-cyan-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
