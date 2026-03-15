"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BarChart3, ChevronLeft, ChevronRight, ExternalLink, FlaskConical, Mic, Target } from "lucide-react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

function normalizeUrl(url: string) {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  return `https://${url}`;
}

type ProjectItem = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  link: string;
  images: string[];
  color: string;
  tag: string;
  delay: number;
};

function ProjectCard({ project }: { project: ProjectItem }) {
  const [activeImage, setActiveImage] = React.useState(0);
  const Icon = project.icon;
  const projectUrl = normalizeUrl(project.link);

  const showPrev = () => {
    setActiveImage((current) => (current === 0 ? project.images.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveImage((current) => (current === project.images.length - 1 ? 0 : current + 1));
  };

  return (
    <Card className="group relative h-full overflow-hidden border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-2xl dark:hover:border-transparent">
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.05] dark:group-hover:opacity-10`} />
      <div
        className={`absolute -inset-[1px] bg-gradient-to-br ${project.color} opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-100`}
        style={{ zIndex: 0 }}
      />

      <div className="relative z-10 flex h-full flex-col p-2">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50">
          <Image
            src={project.images[activeImage]}
            alt={`${project.title} preview ${activeImage + 1}`}
            width={1200}
            height={720}
            className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
          <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80 backdrop-blur-md">
            {project.tag}
          </div>

          {project.images.length > 1 && (
            <>
              <div className="absolute inset-y-0 left-3 flex items-center">
                <button
                  type="button"
                  onClick={showPrev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-slate-950/65 text-white/85 backdrop-blur-md transition-colors hover:bg-slate-950/80"
                  aria-label={`Previous image for ${project.title}`}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-3 flex items-center">
                <button
                  type="button"
                  onClick={showNext}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-slate-950/65 text-white/85 backdrop-blur-md transition-colors hover:bg-slate-950/80"
                  aria-label={`Next image for ${project.title}`}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full border border-white/10 bg-slate-950/65 px-3 py-2 backdrop-blur-md">
                {project.images.map((image, index) => (
                  <button
                    key={`${project.title}-${image}`}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === activeImage ? "w-8 bg-white" : "w-2.5 bg-white/35 hover:bg-white/60"
                    }`}
                    aria-label={`Go to image ${index + 1} for ${project.title}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <CardHeader className="flex-grow">
          <div className="mb-4 flex items-start justify-between">
            <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${project.color} text-white shadow-lg`}>
              <Icon className="w-7 h-7" />
            </div>
            <Link
              href={projectUrl}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background text-foreground shadow-sm transition-colors duration-300 hover:bg-foreground hover:text-background"
              aria-label={`Open ${project.title} in a new tab`}
            >
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
          <CardTitle className="mb-2 text-2xl font-bold transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-muted-foreground group-hover:bg-clip-text group-hover:text-transparent">
            <Link href={projectUrl} target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">
              {project.title}
            </Link>
          </CardTitle>
          <CardDescription className="mt-4 text-base leading-relaxed text-muted-foreground">
            {project.description}
          </CardDescription>
          <p className="mt-5 text-sm text-cyan-400/90">

          </p>
        </CardHeader>
      </div>
    </Card>
  );
}

export function Projects() {
  const projects: ProjectItem[] = [
    {
      title: "IELTS Mastery Hub",
      description: "AI-powered IELTS learning platform providing structured practice, automated feedback systems, and detailed learning analytics to boost student proficiency.",
      icon: Target,
      link: "http://ielts.muhata.my.id",
      images: [
        "/images/project-placeholder-1.png",
        "/images/project-placeholder-1b.png",
        "/images/project-placeholder-1c.png",
      ],
      color: "from-blue-500 to-indigo-500",
      tag: "Platform Design",
      delay: 0,
    },
    {
      title: "IELTS Q Gen",
      description: "Generative AI-powered application designed to produce timed IELTS speaking questions, simulating realistic test environments for authentic practice.",
      icon: Mic,
      link: "qgen.muhata.my.id",
      images: [
        "/images/project-placeholder-2.png",
       
      ],
      color: "from-violet-500 to-purple-500",
      tag: "Web APP",
      delay: 0.1,
    },
    {
      title: "Level-UP",
      description: "A comprehensive learning analytics system that visualizes learner performance, tracking progress over time and predicting mastery levels.",
      icon: BarChart3,
      link: "level-up.muhata.my.id",
      images: [
        "/images/project-placeholder-3.svg",
        "/images/project-placeholder-1.svg",
        "/images/project-placeholder-4.svg",
      ],
      color: "from-emerald-500 to-teal-500",
      tag: "Data Insight",
      delay: 0.2,
    },
    {
      title: "Math Master",
      description: "Experimental projects exploring the deep integration of Large Language Models (LLMs) into educational feedback and pedagogical strategies.",
      icon: FlaskConical,
      link: "math.muhata.my.id",
      images: [
        "/images/project-placeholder-4.svg",
        "/images/project-placeholder-2.svg",
        "/images/project-placeholder-3.svg",
      ],
      color: "from-amber-500 to-orange-500",
      tag: "Experiment Lab",
      delay: 0.3,
    },
  ];

  return (
    <section id="projects" className="py-24 relative bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-base font-bold uppercase tracking-[0.28em] text-blue-500 md:text-lg"
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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg"
          >
            This section highlights selected projects I have designed and developed, focusing on
            educational technology, AI-supported learning, and interactive digital experiences.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: project.delay }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
