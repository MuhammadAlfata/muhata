"use client";

import Link from "next/link";
import { Linkedin, Github, Mail, BookOpenText } from "lucide-react";

export function Footer() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Research", href: "#research" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-background border-t border-border/40 py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-xl font-bold tracking-tighter mb-4 text-foreground">
              M<span className="text-blue-500">.</span>Alfata
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs text-center md:text-left">
              Educational Technology Researcher & AI Learning Designer focusing on autonomous language learning.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-blue-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
             <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-muted rounded-full hover:bg-muted/80">
               <Linkedin className="w-4 h-4" />
             </Link>
             <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-muted rounded-full hover:bg-muted/80">
               <Github className="w-4 h-4" />
             </Link>
             <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-muted rounded-full hover:bg-muted/80">
               <BookOpenText className="w-4 h-4" />
             </Link>
             <Link href="mailto:Muhammadalfata8@gmail.com" className="text-muted-foreground hover:text-blue-500 transition-colors p-2 bg-muted rounded-full hover:bg-muted/80">
               <Mail className="w-4 h-4" />
             </Link>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-xs text-muted-foreground text-center md:text-left">
             &copy; {new Date().getFullYear()} Muhammad Alfata. All rights reserved.
           </p>
           <p className="text-xs text-muted-foreground text-center md:text-right">
             Designed with Next.js, Tailwind CSS & Framer Motion.
           </p>
        </div>
      </div>
    </footer>
  );
}
