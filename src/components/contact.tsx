"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, BookOpenText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-sm font-semibold text-blue-500 tracking-wider uppercase mb-3 text-center">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground text-center mb-6">
            Let&apos;s Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">Future of Learning</span>
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            Interested in collaborating on AI tools, instructional design projects, or IELTS learning technology? I&apos;m always open to discussing new opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <Card className="bg-background/80 backdrop-blur-xl border border-border/50 shadow-2xl overflow-hidden">
             {/* Glow header row */}
             <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500" />
             
             <CardContent className="p-8 sm:p-10 flex flex-col items-center gap-8">
                
                <div className="flex flex-col items-center gap-4 w-full text-center">
                   <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-2">
                     <Mail className="w-8 h-8" />
                   </div>
                   <div>
                     <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-1">Email</p>
                     <a href="mailto:Muhammadalfata8@gmail.com" className="text-xl sm:text-2xl font-bold text-foreground hover:text-blue-500 transition-colors">
                       Muhammadalfata8@gmail.com
                     </a>
                   </div>
                </div>

                <div className="w-full h-px bg-border/50" />

                <div className="flex flex-col items-center gap-4 w-full text-center">
                   <div className="w-16 h-16 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-500 mb-2">
                     <MapPin className="w-8 h-8" />
                   </div>
                   <div>
                     <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-1">Location</p>
                     <p className="text-xl font-medium text-foreground">
                       Melbourne, Australia
                     </p>
                   </div>
                </div>

                <div className="flex justify-center gap-4 pt-4">
                  {[
                    { icon: Linkedin, label: "LinkedIn", link: "#", color: "hover:text-blue-500" },
                    { icon: Github, label: "GitHub", link: "#", color: "hover:text-foreground" },
                    { icon: BookOpenText, label: "Google Scholar", link: "#", color: "hover:text-amber-500" }
                  ].map((social) => {
                    const Icon = social.icon;
                    return (
                      <Link 
                        key={social.label} 
                        href={social.link}
                        className={`w-12 h-12 rounded-full flex items-center justify-center bg-muted text-muted-foreground transition-all duration-300 hover:scale-110 ${social.color}`}
                        aria-label={social.label}
                      >
                         <Icon className="w-5 h-5" />
                      </Link>
                    )
                  })}
                </div>

             </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
