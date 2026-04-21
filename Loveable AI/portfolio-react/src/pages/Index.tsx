import InteractiveGrid from "@/components/portfolio/InteractiveGrid";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Services from "@/components/portfolio/Services";
import Projects from "@/components/portfolio/Projects";
import Certifications from "@/components/portfolio/Certifications";
import Education from "@/components/portfolio/Education";
import Contact from "@/components/portfolio/Contact";
import { ContactDialogProvider } from "@/components/portfolio/ContactDialogProvider";

const Index = () => {
  return (
    <ContactDialogProvider>
      <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
        <InteractiveGrid />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Services />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
    </ContactDialogProvider>
  );
};

export default Index;
