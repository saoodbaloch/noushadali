import { Card } from "./ui/card";
import { Instagram, Youtube, Video } from "lucide-react";
import reel1 from "../assets/Videos/reel1.mp4";
import reel7 from "../assets/Videos/reel7.mp4";
import reel3 from "../assets/Videos/reel3.mp4";
import reel4 from "../assets/Videos/reel4.mp4";
import reel5 from "../assets/Videos/reel5.mp4";
import reel6 from "../assets/Videos/reel6.mp4";


const shortFormVideos = [
  {
    title: "Instagram Reels",
    icon: Instagram,
    count: "50+ Reels",
    description: "Viral-ready content with trending audio",
    color: "from-pink-500 to-purple-500",
    videoUrl: reel1,
  },
  {
    title: "YouTube Shorts",
    icon: Youtube,
    count: "30+ Shorts",
    description: "Attention-grabbing vertical videos",
    color: "from-red-500 to-pink-500",
    videoUrl: reel7,
  },
  {
    title: "TikTok Videos",
    icon: Video,
    count: "40+ Videos",
    description: "Fast-paced, engaging edits",
    color: "from-cyan-500 to-blue-500",
    videoUrl: reel3,
  },
  {
    title: "Instagram Reels",
    icon: Instagram,
    count: "Trending Content",
    description: "Scroll-stopping vertical videos",
    color: "from-purple-500 to-pink-500",
    videoUrl: reel4,
  },
  {
    title: "YouTube Shorts",
    icon: Youtube,
    count: "Viral Videos",
    description: "High-engagement short clips",
    color: "from-orange-500 to-red-500",
    videoUrl: reel5,
  },
  {
    title: "TikTok Videos",
    icon: Video,
    count: "Creative Edits",
    description: "Platform-optimized content",
    color: "from-blue-500 to-cyan-500",
    videoUrl: reel6,
  },
];

export function ShortFormVideo() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
          <h2 className="text-4xl md:text-5xl neon-glow">Short-Form Content</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Creating scroll-stopping content optimized for social media platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shortFormVideos.map((video, index) => (
            <div
              key={`${video.title}-${index}`}
              className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="group relative overflow-hidden bg-card border-primary/20 rounded-2xl hover:border-primary/50 transition-all duration-500 h-[500px]">
                <div className="absolute inset-0">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                  </video>
                  <div className={`absolute inset-0 bg-gradient-to-br ${video} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 space-y-4">
                    <div className="flex items-center justify-center mb-4">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${video.color} flex items-center justify-center shadow-lg`}>
                        <video.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl text-center">{video.title}</h3>
                    <p className="text-sm text-gray-300 text-center opacity-80">
                      {video.count}
                    </p>
                    <p className="text-sm text-gray-300 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {video.description}
                    </p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                    <span className="text-sm text-white">View Portfolio</span>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}