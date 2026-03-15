"use client";

import { motion } from "framer-motion";
import { Layers, Server, Brain, BookOpen } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function Services() {
  const services = [
    {
      title: "Instructional Design",
      description: "Design of highly engaging digital learning environments and structured online courses tailored for specific pedagogical outcomes.",
      icon: Layers,
      color: "text-blue-500",
      bgClass: "from-blue-500/10 to-transparent",
    },
    {
      title: "LMS Development",
      description: "Expert development and optimization of Moodle-based learning management systems to streamline educational delivery.",
      icon: Server,
      color: "text-violet-500",
      bgClass: "from-violet-500/10 to-transparent",
    },
    {
      title: "AI Integration",
      description: "Implementation of intelligent AI tools for automated feedback systems, grading, and dynamically adaptive learning paths.",
      icon: Brain,
      color: "text-emerald-500",
      bgClass: "from-emerald-500/10 to-transparent",
    },
    {
      title: "IELTS Learning Support",
      description: "Comprehensive guidance and digital tools optimized for strategic IELTS test preparation and intensive language mastery.",
      icon: BookOpen,
      color: "text-rose-500",
      bgClass: "from-rose-500/10 to-transparent",
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0 z-0">
         <div className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-sm font-semibold text-blue-500 tracking-wider uppercase mb-3"
          >
            Capabilities
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">Services</span>
          </motion.h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <Card className="h-full bg-background/60 backdrop-blur-xl border-border/40 hover:border-transparent overflow-hidden transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300 block -z-10`} />
                  <CardHeader className="p-8">
                    <div className="flex items-center gap-6 mb-4">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center bg-background border border-border shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-6 h-6 ${service.color}`} />
                      </div>
                      <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
