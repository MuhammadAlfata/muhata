"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Mic, BarChart3, FlaskConical, Target } from "lucide-react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function Projects() {
  const projects = [
    {
      title: "IELTS Mastery Hub",
      description: "AI-powered IELTS learning platform providing structured practice, automated feedback systems, and detailed learning analytics to boost student proficiency.",
      icon: Target,
      link: "#",
      image: "/images/project-placeholder-1.svg",
      color: "from-blue-500 to-indigo-500",
      tag: "Platform Design",
      delay: 0,
    },
    {
      title: "IELTS Q Gen",
      description: "Generative AI-powered application designed to produce timed IELTS speaking questions, simulating realistic test environments for authentic practice.",
      icon: Mic,
      link: "#",
      image: "/images/project-placeholder-2.svg",
      color: "from-violet-500 to-purple-500",
      tag: "Generative AI",
      delay: 0.1,
    },
    {
      title: "Analytics Dashboard",
      description: "A comprehensive learning analytics system that visualizes learner performance, tracking progress over time and predicting mastery levels.",
      icon: BarChart3,
      link: "#",
      image: "/images/project-placeholder-3.svg",
      color: "from-emerald-500 to-teal-500",
      tag: "Data Insight",
      delay: 0.2,
    },
    {
      title: "AI Learning Lab",
      description: "Experimental projects exploring the deep integration of Large Language Models (LLMs) into educational feedback and pedagogical strategies.",
      icon: FlaskConical,
      link: "#",
      image: "/images/project-placeholder-4.svg",
      color: "from-amber-500 to-orange-500",
      tag: "Experiment Lab",
      delay: 0.3,
    },
  ];

  return (
    <section id="projects" className="py-24 relative bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-sm font-semibold text-blue-500 tracking-wider uppercase mb-3"
          >
            Digital Portfolio
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            Showcasing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">Innovation</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: project.delay }}
              >
                <Link href={project.link} className="block group h-full">
                  <Card className="h-full relative overflow-hidden border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:border-transparent dark:hover:border-transparent group-hover:-translate-y-2">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-[0.05] dark:group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className={`absolute -inset-[1px] bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500`} style={{ zIndex: 0 }} />

                    <div className="relative z-10 flex h-full flex-col p-2">
                      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50">
                        <Image
                          src={project.image}
                          alt={`${project.title} preview`}
                          width={1200}
                          height={720}
                          className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80 backdrop-blur-md">
                          {project.tag}
                        </div>
                      </div>

                      <CardHeader className="flex-grow">
                        <div className="flex justify-between items-start mb-4">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${project.color} shadow-lg text-white`}>
                            <Icon className="w-7 h-7" />
                          </div>
                          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-background border border-border/50 text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300 shadow-sm">
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </div>
                        <CardTitle className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-muted-foreground transition-all duration-300">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-base text-muted-foreground leading-relaxed mt-4">
                          {project.description}
                        </CardDescription>
                        <p className="mt-5 text-sm text-cyan-400/90">
                          Ganti `image` pada data project untuk memasukkan screenshot project asli kamu.
                        </p>
                      </CardHeader>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
