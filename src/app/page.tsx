import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Research } from "@/components/research";
import { Services } from "@/components/services";
import { TechStack } from "@/components/tech-stack";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-blue-500/30">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Projects />
      <Research />
      <Services />
      <TechStack />
      <Contact />
      <About />
      <Footer />
    </main>
  );
}
