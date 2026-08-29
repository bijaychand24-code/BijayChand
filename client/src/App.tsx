import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { ExperienceSection } from "@/components/sections/Experience";
import { EducationSection } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";

function App() {
  return (
    <div className="relative min-h-screen bg-primary text-text-light">
      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content" className="pt-16">
        <AnimatePresence mode="wait">
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <ExperienceSection />
            <EducationSection />
            <Certifications />
            <Services />
            <Contact />
          </>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top */}
      <BackToTop />

      {/* Toast Notifications */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#0F172A",
            color: "#F8FAFC",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "12px",
            padding: "16px",
          },
          success: {
            iconTheme: {
              primary: "#22C55E",
              secondary: "#F8FAFC",
            },
          },
          error: {
            iconTheme: {
              primary: "#EF4444",
              secondary: "#F8FAFC",
            },
          },
        }}
      />
    </div>
  );
}

export default App;