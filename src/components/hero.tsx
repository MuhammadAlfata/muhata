"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-background dark:bg-background">
      {/* Background with animated mesh gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-background to-background" />
        <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] mix-blend-screen mix-blend-plus-lighter opacity-50 animate-pulse" />
        <div className="absolute top-3/4 -left-1/4 w-[400px] h-[400px] bg-blue-600/30 rounded-full blur-[100px] mix-blend-screen opacity-50 animate-pulse delay-700" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-600">Muhammad Alfata</span>
            </motion.h1>
            
            <motion.h2 
              className="text-xl sm:text-2xl font-semibold text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Educational Technology Researcher & <br className="hidden lg:block"/> AI Learning Designer
            </motion.h2>
          </div>

          <motion.p
            className="text-lg text-muted-foreground/80 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building <strong className="text-foreground font-medium">AI-powered learning experiences</strong> for language education, digital platforms, and research-driven innovation.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link href="#projects" className="inline-flex shrink-0 items-center justify-center rounded-full text-sm font-medium transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px h-12 gap-1.5 px-8 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20">
              Explore Projects
            </Link>
            <Link href="#research" className="inline-flex shrink-0 items-center justify-center rounded-full text-sm font-medium transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px h-12 gap-1.5 px-8 border border-border bg-background/50 backdrop-blur-sm hover:bg-muted hover:text-foreground">
              View Research
            </Link>
          </motion.div>
        </motion.div>

        <div className="relative hidden w-full md:flex items-center justify-center">
          <motion.div
               className="relative w-full max-w-md"
               initial={{ opacity: 0, scale: 0.9, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background/55 p-3 shadow-[0_35px_90px_rgba(13,25,56,0.28)] backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/images/profile-placeholder.svg"
                  alt="Profile portrait"
                  width={640}
                  height={760}
                  priority
                  className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
