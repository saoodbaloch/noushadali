import { Card } from "./ui/card";
import { Play, Youtube, Film } from "lucide-react";
import video1 from "../assets/Videos/video1.mp4";
import video2 from "../assets/Videos/video2.mp4";
import video3 from "../assets/Videos/video3.mp4";
import video4 from "../assets/Videos/video4.mp4";

const longFormVideos = [
  {
    title: "YouTube Documentary",
    icon: Youtube,
    duration: "15-30 min",
    description: "In-depth storytelling with cinematic editing",
    videoUrl: video1,
  },
  {
    title: "Podcast Episodes",
    icon: Film,
    duration: "30-60 min",
    description: "Professional multi-camera podcast editing",
    videoUrl: video2,
  },
  {
    title: "Video Sales Letter",
    icon: Play,
    duration: "10-20 min",
    description: "High-converting sales presentations",
    videoUrl: video4,
  },
];

export function LongFormVideo() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
          <h2 className="text-4xl md:text-5xl neon-glow">Long-Form Content</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Crafting compelling narratives that keep audiences engaged from start to finish
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {longFormVideos.map((video, index) => (
            <div
              key={video.title}
              className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Card className="group relative overflow-hidden bg-card border-primary/20 rounded-2xl hover:border-primary/50 transition-all duration-500 h-full flex flex-col">
                {/* Landscape video container */}
                <div className="relative aspect-video flex-shrink-0">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                  </video>
                  <div className={`absolute inset-0 bg-gradient-to-br ${video} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                  {/* Icon overlay */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${video} flex items-center justify-center shadow-lg border-2 border-white/20`}>
                      <video.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Watch Sample button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                      <span className="text-sm text-white">Watch Sample</span>
                    </div>
                  </div>
                </div>

                {/* Content below video */}
                <div className="p-6 space-y-3 flex-grow">
                  <h3 className="text-xl">{video.title}</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <p className="text-sm text-gray-300">
                      {video.duration}
                    </p>
                  </div>
                  <p className="text-sm text-gray-400">
                    {video.description}
                  </p>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-all duration-500 pointer-events-none" />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}