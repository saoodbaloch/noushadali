import { Hero } from "./components/Hero";
import { ShortFormVideo } from "./components/ShortFormVideo";
import { LongFormVideo } from "./components/LongFormVideo";
import { PodcastPortfolio } from "./components/PodcastPortfolio";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { CalendlySection } from "./components/CalendlySection";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import "./styles/globals.css";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Short-Form Video Section */}
      <div id="short-form">
        <ShortFormVideo />
      </div>

      {/* Long-Form Video Section */}
      <div id="long-form">
        <LongFormVideo />
      </div>

      {/* Podcast Portfolio Section */}
      <div id="podcasts">
        <PodcastPortfolio />
      </div>

      {/* About Section */}
      <div id="about">
        <About />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials">
      <Testimonials />
      </div>
      {/* Calendly Section */}
      <CalendlySection />

      {/* Footer */}
      <Footer />
    </div>
  );
}