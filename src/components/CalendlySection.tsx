import { Button } from "./ui/button";
import { Calendar, ArrowRight } from "lucide-react";

export function CalendlySection() {
  return (
    <section id="calendly" className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-card border border-primary/30 rounded-3xl p-12 text-center space-y-8 neon-border opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent">
            <Calendar className="w-10 h-10 text-white" />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl neon-glow">
              Let's Bring Your Vision to Life
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your project. Together, we'll create video content that captivates your audience and drives real results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-6 rounded-full neon-border transition-all duration-300 hover:scale-105 group"
              onClick={() => window.open("https://calendly.com/noushadali9881/30min")}
            >
              Schedule a Call with Me
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <a
              href="mailto:noushadali9881@gmail.com"
              className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2"
            >
              or email me directly
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary/20">
            <div>
              <p className="text-2xl md:text-3xl neon-glow">24h</p>
              <p className="text-sm text-gray-400 mt-1">Response Time</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl neon-glow">100+</p>
              <p className="text-sm text-gray-400 mt-1">Happy Clients</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl neon-glow">500+</p>
              <p className="text-sm text-gray-400 mt-1">Videos Created</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}