export function VisionStatement() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden neon-border opacity-0 animate-[fadeInScale_0.8s_ease-out_forwards]">
          {/* Background Video */}
          <div className="relative aspect-video">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            </video>
            
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
            
            {/* Text Overlay with Animation */}
            <div className="absolute inset-0 flex items-center justify-center px-8">
              <div className="text-center space-y-6 max-w-5xl">
                <h2 className="text-4xl md:text-6xl lg:text-7xl neon-glow opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]">
                  vision → timing → <br />
                  creativity → impact → <br />
                  emotion
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 opacity-0 animate-[fadeInUp_1s_ease-out_1s_forwards]">
                  Every frame tells a story. Every edit creates an impact.
                </p>
              </div>
            </div>

            {/* Decorative border */}
            <div className="absolute inset-0 border-4 border-primary/20 rounded-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
