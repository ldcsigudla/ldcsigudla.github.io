import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
export const Hero = () => {
  return <header className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 -z-10 bg-center bg-cover" style={{
      backgroundImage: `url(${heroImage})`
    }} aria-hidden />
      <div className="absolute inset-0 -z-10 bg-gradient-hero bg-animate" aria-hidden />

      <div className="container mx-auto px-6 py-24 md:py-32 text-center">
        <p className="text-sm uppercase tracking-widest text-white/80 mb-4 hover-float drop-shadow-md">
          Electrical & Electronic Engineer
        </p>
        <h1 className="mt-3 text-5xl md:text-7xl font-bold font-display text-white mb-6 hover-lift drop-shadow-lg">
          Lungelo Sigudla
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-12 leading-relaxed md:text-xl text-white/90 drop-shadow-md">Working on energy systems and RF solutions since 2009. Passionate about sustainable technology and innovation.</p>

        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <a href="#contact" aria-label="Contact">
            <Button variant="hero" className="shadow-medium hover-glow bg-gradient-button border-0 text-primary-foreground font-semibold px-8 py-4">
              <Mail className="w-5 h-5" /> Contact
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/lungelosigudla/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Button variant="outline" className="hover-lift shadow-soft border-primary/20 hover:border-primary/40">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </Button>
          </a>
          <a href="#projects" aria-label="Projects">
            <Button variant="secondary" className="hover-float shadow-soft bg-gradient-accent text-accent-foreground">
              <Github className="w-5 h-5" /> Projects
            </Button>
          </a>
        </div>
      </div>
    </header>;
};
export default Hero;