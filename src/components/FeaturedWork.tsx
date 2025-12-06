import { Card } from "./ui/card";

const workCategories = [
  {
    title: "Best Video Edits",
    description: "Premium editing with cinematic transitions",
    gradient: "from-primary/20 to-accent/20",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    title: "Short-Form Videos",
    description: "Engaging content for Instagram & TikTok",
    gradient: "from-accent/20 to-primary/20",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    title: "Long-Form Content",
    description: "YouTube videos with storytelling",
    gradient: "from-primary/20 to-purple-500/20",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    title: "VSL Samples",
    description: "High-converting video sales letters",
    gradient: "from-accent/20 to-pink-500/20",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
];

export function FeaturedWork() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
          <h2 className="text-4xl md:text-5xl neon-glow">Featured Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Crafting visual stories that captivate audiences and drive results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workCategories.map((category, index) => (
            <div
              key={category.title}
              className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="group relative overflow-hidden bg-card border-primary/20 rounded-2xl hover:border-primary/50 transition-all duration-500 h-[400px]">
                <div className="absolute inset-0">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={category.videoUrl} type="video/mp4" />
                  </video>
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl mb-2 text-left">{category.title}</h3>
                    <p className="text-sm text-gray-300 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-all duration-500" />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}