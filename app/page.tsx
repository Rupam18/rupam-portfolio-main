import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import LearningTimeline from "@/components/LearningTimeline";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-accent/30 selection:text-accent flex flex-col">
      <Navbar />

      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LearningTimeline />
        <Contact />
      </main>

      <footer className="bg-card w-full border-t border-card-border py-8 text-center text-muted">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Rupam Kumar Sarangi. All rights reserved. Built with Next.js & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}
