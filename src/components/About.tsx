import { Card } from "./ui/card";
import { Zap, Target, TrendingUp, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import about from "../assets/pictures/about.jpeg";

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround without compromising quality",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Edits that grab attention and drive conversions",
  },
  {
    icon: TrendingUp,
    title: "Growth-Focused",
    description: "Content optimized for audience growth",
  },
  {
    icon: Award,
    title: "Professional",
    description: "Industry-standard quality and techniques",
  },
];

export function About() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative opacity-0 animate-[slideInLeft_0.8s_ease-out_forwards]">
            <div className="relative rounded-3xl overflow-hidden aspect-square">
              <ImageWithFallback
                src={about}
                alt="Noushad Ali - Motion Designer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0  from-primary/30 to-accent/30" />
              <div className="absolute inset-0 border-4 border-primary/20 rounded-3xl" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8 opacity-0 animate-[slideInRight_0.8s_ease-out_forwards]">
            <div className="space-y-4">
              <div>
                <h2 className="text-4xl md:text-5xl mb-2">Why Choose <span className="neon-glow">Me?</span></h2>
                <p className="text-xl text-accent">Professional Video Editing Excellence</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <Card className="bg-card/50 border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}