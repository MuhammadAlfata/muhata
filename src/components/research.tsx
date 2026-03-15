"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, BookOpen, FlaskConical, Sparkles } from "lucide-react";
import Link from "next/link";

export function Research() {
  const slides = [
    {
      category: "Featured Research",
      title: "From Assessment to Autonomy",
      description:
        "An AI-powered language learning system designed to support self-directed IELTS mastery through feedback loops, learning analytics, and adaptive study paths.",
      image: "/images/project-placeholder-1.svg",
      link: "#projects",
      accent: "from-blue-500 to-cyan-400",
      meta: ["AI in education", "Self regulated learning", "IELTS"],
      cta: "See project",
      icon: BookOpen,
    },
    {
      category: "Portfolio Showcase",
      title: "IELTS Question Generator",
      description:
        "A speaking practice tool that simulates timed prompts and helps learners prepare with more realistic, repeatable, AI-assisted practice sessions.",
      image: "/images/project-placeholder-2.svg",
      link: "#projects",
      accent: "from-violet-500 to-fuchsia-400",
      meta: ["Generative AI", "Language learning", "Portfolio"],
      cta: "Open portfolio",
      icon: Sparkles,
    },
    {
      category: "Research Direction",
      title: "Learning Analytics for Student Agency",
      description:
        "Exploring how dashboards and predictive data can improve learner autonomy, guide intervention, and strengthen self-regulated study behavior.",
      image: "/images/project-placeholder-3.svg",
      link: "#contact",
      accent: "from-emerald-500 to-teal-400",
      meta: ["Analytics", "Student agency", "Research"],
      cta: "Discuss research",
      icon: FlaskConical,
    },
  ];
  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeSlide = slides[activeIndex];

  const showPrev = () => {
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  return (
    <section id="research" className="py-24 relative bg-background/50 dark:bg-black/20">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-500 font-medium text-sm">
              <Sparkles className="w-4 h-4" /> Research & Portfolio
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Highlighting the work that best represents my <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500">research direction</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Instead of a static list, this section lets visitors browse featured research and selected portfolio work like a mini showcase. You can swap each slide later with your real papers, prototypes, or case studies.
            </p>

            <div className="space-y-3 pt-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-left transition-all duration-300 ${
                    activeIndex === index
                      ? "border-cyan-400/50 bg-cyan-400/10"
                      : "border-white/10 bg-background/50 hover:border-white/20 hover:bg-background/70"
                  }`}
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{slide.category}</p>
                    <p className="mt-2 text-sm font-semibold text-foreground">{slide.title}</p>
                  </div>
                  <ArrowRight className={`h-4 w-4 ${activeIndex === index ? "text-cyan-400" : "text-muted-foreground"}`} />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className={`absolute -inset-1 rounded-[2rem] bg-gradient-to-r ${activeSlide.accent} blur-xl opacity-20`} />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background/80 shadow-2xl backdrop-blur-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.35 }}
                  className="grid lg:grid-cols-[1.1fr_0.9fr]"
                >
                  <div className="relative min-h-[320px] overflow-hidden border-b border-white/10 lg:border-r lg:border-b-0">
                    <Image
                      src={activeSlide.image}
                      alt={activeSlide.title}
                      width={1200}
                      height={720}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  </div>

                  <div className="p-8 lg:p-10">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${activeSlide.accent} text-white shadow-lg`}>
                        <activeSlide.icon className="h-6 w-6" />
                      </div>
                      <Badge variant="outline" className="border-cyan-400/30 text-xs uppercase tracking-wider text-cyan-400">
                        {activeSlide.category}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground">{activeSlide.title}</h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{activeSlide.description}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {activeSlide.meta.map((item) => (
                        <Badge key={item} variant="secondary" className="bg-secondary/50 px-2.5 py-1 text-xs font-normal text-secondary-foreground">
                          {item}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center justify-between gap-4">
                      <Link href={activeSlide.link} className="inline-flex items-center text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300">
                        {activeSlide.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={showPrev}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-background/70 text-foreground transition-colors hover:border-cyan-400/40 hover:text-cyan-400"
                          aria-label="Previous slide"
                        >
                          <ArrowLeft className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={showNext}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-background/70 text-foreground transition-colors hover:border-cyan-400/40 hover:text-cyan-400"
                          aria-label="Next slide"
                        >
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-6 flex gap-2">
                      {slides.map((slide, index) => (
                        <button
                          key={slide.title}
                          type="button"
                          onClick={() => setActiveIndex(index)}
                          className={`h-2.5 rounded-full transition-all ${
                            activeIndex === index ? "w-10 bg-cyan-400" : "w-2.5 bg-white/20 hover:bg-white/40"
                          }`}
                          aria-label={`Go to ${slide.title}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
