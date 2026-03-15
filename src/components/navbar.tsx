"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="group inline-flex items-center transition-transform duration-300 hover:scale-[1.02]">
              <div className="flex h-10 w-12 items-center justify-center rounded-md bg-[#05112b] shadow-[0_10px_30px_rgba(6,17,43,0.35)] ring-1 ring-white/5">
                <span className="text-xl font-black tracking-[-0.18em] text-white">
                  M<span className="text-[#16b8ff]">A</span>
                </span>
              </div>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pl-4 border-l border-border/50">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="h-9 w-9"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Link href="#projects" className="inline-flex shrink-0 items-center justify-center text-sm font-medium transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px h-10 gap-1.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                Explore Projects
              </Link>
            </div>
          </nav>

          <div className="flex md:hidden items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3 flex flex-col">
              <Link href="#projects" onClick={() => setIsOpen(false)} className="inline-flex shrink-0 items-center justify-center text-sm font-medium transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px h-10 gap-1.5 px-4 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                Explore Projects
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
