import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import professionalHeroImage from "@/assets/professional-hero-bg.jpg";

export const Hero = () => {
  return (
    <header className="relative overflow-hidden min-h-screen flex items-center bg-background">
      <div 
        className="absolute inset-0 -z-10 bg-center bg-cover opacity-80" 
        style={{
          backgroundImage: `url(${professionalHeroImage})`
        }} 
        aria-hidden 
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background/90 to-accent/5" aria-hidden />

      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
            Electrical & Electronic Engineer
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-8">
            Lungelo Sigudla
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Transforming ideas into engineered solutions. Specialized in RF systems, power electronics, and sustainable technology innovation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#projects" aria-label="View Projects">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-medium hover:shadow-large transition-all duration-300">
                See Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a href="#contact" aria-label="Get in Touch">
              <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300">
                Get in Touch
                <Mail className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>

          <div className="mt-16 flex items-center justify-center gap-6">
            <a 
              href="https://www.linkedin.com/in/lungelosigudla/" 
              target="_blank" 
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <div className="w-px h-6 bg-border"></div>
            <a 
              href="mailto:sigudlalungelo@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Hero;