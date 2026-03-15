"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const technologies = [
  { name: "Next.js", delay: 0 },
  { name: "React", delay: 0.1 },
  { name: "Tailwind CSS", delay: 0.2 },
  { name: "Moodle", delay: 0.3 },
  { name: "H5P", delay: 0.4 },
  { name: "Learning Analytics", delay: 0.5 },
  { name: "OpenAI", delay: 0.6 },
  { name: "Node.js", delay: 0.7 },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-24 relative bg-background border-y border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:w-1/3"
          >
            <h2 className="text-sm font-semibold text-blue-500 tracking-wider uppercase mb-3">
              Technology Stack
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Modern Tools for <br className="hidden lg:block"/> Modern Education
            </h3>
            <p className="text-muted-foreground">
              I leverage the latest frameworks, specialized learning platforms, and AI models to engineer fully responsive, deeply insightful educational experiences.
            </p>
          </motion.div>

          <div className="md:w-2/3 flex flex-wrap justify-center md:justify-end gap-3 lg:gap-4">
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: tech.delay }}
              >
                <Badge variant="outline" className="px-6 py-3 text-sm md:text-base bg-background/50 backdrop-blur-sm shadow-sm hover:shadow-md border-border/50 text-foreground transition-shadow whitespace-nowrap">
                  {tech.name}
                </Badge>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
