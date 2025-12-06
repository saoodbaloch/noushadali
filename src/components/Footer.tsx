import { Instagram, Mail, Youtube, Twitter } from "lucide-react";

export function Footer() {

  const TikTok = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M232 72a55.5 55.5 0 0 1-32-10.2A56.2 56.2 0 0 1 176 32h-24v116.4a28 28 0 1 1-28-28 27.5 27.5 0 0 1 6 .7V96.5a60 60 0 1 0 48 58.9V94.8a86 86 0 0 0 34 7.2Z" />
    </svg>
  );

  // Custom LinkedIn Icon
  const Linkedin = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-5 h-5"
    >
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 8h4v13H3zM9 8h3.7v1.9h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.7 2.5 4.7 5.8V21h-4v-6.3c0-1.5 0-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V21H9z" />
    </svg>
  );
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-primary/20 bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
            <h3 className="text-2xl neon-glow">Noushad Ali</h3>
            <p className="text-gray-400">
              Motion Designer & Video Editor specializing in creating engaging content that drives results.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] delay-100">
            <h4 className="text-lg text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#short-form" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Short-Form Content
                </a>
              </li>
              <li>
                <a href="#long-form" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Long-Form Content
                </a>
              </li>
              <li>
                <a href="#podcasts" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Podcast Portfolio
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  About Me
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] delay-200">
            <h4 className="text-lg text-primary">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:noushadali9881@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>noushadali9881@gmail.com</span>
              </a>

              <div className="flex gap-4 pt-2">

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/noushadali._?igsh=MXQxOXNlempydDczYw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/30 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/playlist?list=PLVRdd4nCerp5ymu9aVgW8AJ6wzVcKEfdb&si=iR597zkg3pCnBE2f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/30 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Youtube className="w-5 h-5 text-primary" />
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@noushadali._?_r=1&_t=ZS-91wgVLMuUNz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/30 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <TikTok />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/noushadali1988?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/30 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Linkedin />
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center gap-4 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] delay-300">
          <p className="text-sm text-gray-400">
            �� {currentYear} Noushad Ali. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}