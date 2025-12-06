import { Card } from "./ui/card";
import { ExternalLink, Sparkles } from "lucide-react";

const referenceLinks = [
  {
    title: "ONIK Edits",
    description: "Professional video editing showcase",
    url: "https://onikn3.my.canva.site/nahidedits",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    title: "Duoframe Studio",
    description: "Motion design inspiration",
    url: "https://duoframe.framer.website",
    gradient: "from-blue-600 to-purple-600",
  },
  {
    title: "Gromedia",
    description: "Creative agency portfolio",
    url: "https://gromedia.me",
    gradient: "from-pink-600 to-red-600",
  },
];

export function Links() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <h2 className="text-4xl md:text-5xl neon-glow">Inspiration & References</h2>
            <Sparkles className="w-6 h-6 text-accent" />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore the creative portfolios that inspire my work
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {referenceLinks.map((link, index) => (
            <div
              key={link.url}
              className="opacity-0 animate-[fadeInScale_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <Card className="group relative overflow-hidden bg-card border-primary/20 rounded-2xl hover:border-primary/50 transition-all duration-500 cursor-pointer h-64">
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                  
                  <div className="relative h-full flex flex-col justify-between p-8">
                    <div className="flex justify-end">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-500">
                        <ExternalLink className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl group-hover:text-primary transition-colors duration-300">
                        {link.title}
                      </h3>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {link.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-sm">Visit Website</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </Card>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
