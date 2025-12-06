import { Phone, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#short-form", label: "Short-Form" },
    { href: "#long-form", label: "Long-Form" },
    { href: "#podcasts", label: "Podcasts" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a href="#" className="neon-glow">
              Noushad Ali
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-300 hover:text-primary transition-colors duration-300 hover:neon-glow"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Call Button */}
          <div className="hidden md:block">
            <a href="#calendly">
              <Button className="bg-primary hover:bg-primary/80 text-white rounded-full px-6 py-2 flex items-center gap-2 neon-border transition-all duration-300">
                <Phone className="w-4 h-4" />
                Book a Call
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-primary/20">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-gray-300 hover:text-primary py-2 transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            <a href="#calendly" className="block pt-2">
              <Button className="w-full bg-primary hover:bg-primary/80 text-white rounded-full px-6 py-2 flex items-center justify-center gap-2 neon-border">
                <Phone className="w-4 h-4" />
                Book a Call
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}