import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import client1 from "../assets/pictures/luuk.jpg";
import client2 from "../assets/pictures/leo.jpg";
import client3 from "../assets/pictures/jemmy.jpg";

interface Testimonial {
  name: string;
  image: string;
  rating: number;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Luuk Hendriks",
    image: client1,
    rating: 5,
    feedback:
      "The VSL you made came out really good. It was smooth and brought in sales! Already seeing a noticeable boost in responses.",
  },
  {
    name: "Leo Stanton",
    image: client2,
    rating: 5,
    feedback:
      "The edit you did was clean. The reel pulled good engagement and even brought in a few new leads. Super happy!",
  },
  {
    name: "Jamie Febio",
    image: client3,
    rating: 5,
    feedback:
      "Loved that reel. Editing was clean, vibe was spot on, got way more reach than usual posts. People were commenting and reacting!",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading with proper gap */}
        <h2 className="text-4xl md:text-5xl mb-16 neon-glow">
          What Clients Say
        </h2>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-card/50 border border-primary/20 rounded-3xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 backdrop-blur-md opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              {/* Client Image */}
              <div className="w-24 h-24 md:w-24 md:h-24 rounded-full overflow-hidden mb-4 border-2 border-accent flex-shrink-0">
                <ImageWithFallback
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Client Name */}
              <h4 className="mb-2 text-lg md:text-xl font-semibold neon-glow-accent">
                {t.name}
              </h4>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < t.rating ? "text-accent" : "text-gray-700"
                      }`}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                "{t.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
