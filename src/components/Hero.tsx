import { Button } from "./ui/button";
import { Mail, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import smartboy from "../assets/pictures/Smartboy.jpeg";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Professional Portrait */}
        <div className="flex justify-center lg:justify-start opacity-0 animate-[slideInLeft_0.8s_ease-out_forwards] order-2 lg:order-1">
          <div className="relative max-w-md w-full">
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] neon-border">
              <ImageWithFallback
                src={smartboy}
                alt="Noushad Ali - Motion Designer & Video Editor"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Name overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl neon-glow mb-1">Noushad Ali</h3>
                <p className="text-accent text-sm">Motion Designer & Video Editor</p>
              </div>

              {/* Decorative border */}
              <div className="absolute inset-0 border-4 border-primary/20 rounded-3xl pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Right: Introduction */}
        <div className="space-y-8 opacity-0 animate-[slideInRight_0.8s_ease-out_0.3s_forwards] order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Motion Designer & Video Editor</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl neon-glow">
              Hi, I'm <span className="text-accent">Noushad Ali</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              I help brands grow with engaging YouTube and Instagram content, including podcasts and video sales letters. I deliver fast, professional and impactful edits that grab attention and drive results.
            </p>

            <p className="text-gray-400">
              Let's grow your audience through your videos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-6 rounded-full neon-border transition-all duration-300 hover:scale-105"
              onClick={() => window.open("https://calendly.com/noushadali9881/30min")}
            >
              Book a Call
            </Button>
            <a href="mailto:noushadali9881@gmail.com">
              <Button
                size="lg"
                className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-full transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Email Me
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}