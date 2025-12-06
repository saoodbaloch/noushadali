import { Card } from "./ui/card";
import { ExternalLink, Mic } from "lucide-react";

const podcastProjects = [
  {
    title: "Podcast Episode #1",
    platform: "YouTube",
    url: "https://youtu.be/neWVubutwcc?si=HZKknRCibWPGIjKb",
    thumbnail: "https://img.youtube.com/vi/neWVubutwcc/maxresdefault.jpg",
  },
  {
    title: "Podcast Episode #2",
    platform: "YouTube",
    url: "https://youtu.be/UEzUokPDBf4",
    thumbnail: "https://img.youtube.com/vi/UEzUokPDBf4/maxresdefault.jpg",
  },
  {
    title: "Podcast Reel",
    platform: "Instagram",
    url: "https://www.instagram.com/reel/DQwYU6Ngdrj/?igsh=eXliOGQ1aXFrM2Rp",
    thumbnail: "https://images.unsplash.com/photo-1709846487437-7445553bb6ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwc3R1ZGlvJTIwbWljcm9waG9uZXxlbnwxfHx8fDE3NjMzMTgzNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function PodcastPortfolio() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
          <div className="inline-flex items-center gap-3 mb-4">
            <Mic className="w-8 h-8 text-accent" />
            <h2 className="text-4xl md:text-5xl neon-glow-accent">Podcast Editing Work</h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional podcast editing with dynamic visuals and engaging storytelling
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {podcastProjects.map((project, index) => (
            <div
              key={project.url}
              className={`opacity-0 animate-[fadeInScale_0.6s_ease-out_forwards] ${
                index === 2 ? 'md:col-span-2 lg:col-span-1 md:mx-auto md:max-w-md lg:max-w-none' : ''
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Card className="group relative overflow-hidden bg-card border-accent/20 rounded-2xl hover:border-accent/50 transition-all duration-500 cursor-pointer h-full">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="block h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-16 h-16 rounded-full bg-accent/80 backdrop-blur-sm flex items-center justify-center neon-border-accent">
                        <ExternalLink className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl">{project.title}</h3>
                      <span className="text-sm px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/30">
                        {project.platform}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">
                      Click to view on {project.platform}
                    </p>
                  </div>
                </a>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}