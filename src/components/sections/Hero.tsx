import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <header className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/10 to-background/90" aria-hidden />

      <div className="container mx-auto px-6 py-24 md:py-32 text-center">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">Electrical & Electronic Engineer</p>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold font-display">
          Lungelo Sigudla
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Pioneering innovation in electrical, electronic, and computer engineering. 14+ years of award-winning research excellence.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#contact" aria-label="Contact">
            <Button variant="hero" className="shadow-elegant">
              <Mail /> Contact
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/lungelosigudla/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Button variant="outline">
              <Linkedin /> LinkedIn
            </Button>
          </a>
          <a href="#projects" aria-label="Projects">
            <Button variant="secondary">
              <Github /> Projects
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
