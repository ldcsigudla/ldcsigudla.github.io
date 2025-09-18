import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Inspirations } from "@/components/sections/Inspirations";
import { Mail, Linkedin } from "lucide-react";

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lungelo Sigudla",
  url: "https://ldcsigudla.github.io/",
  jobTitle: "Electrical & Electronic Engineer",
  description: "Specialized in electrical, electronic, and computer engineering with over a decade of research excellence",
  award: ["Intel International Science Fair Winner", "14+ Science Fair Gold/Silver Medals"],
  knowsAbout: ["RF Engineering", "Antenna Design", "Power Electronics", "Electromagnetic Theory"]
};

const Index = () => {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Inspirations />
      
      <section id="contact" className="py-24 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary-foreground">Let's Connect and Build Something Great</h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Open to engineering roles, research collaborations, and consulting opportunities. 
              Always excited to discuss innovative projects and breakthrough technologies.
            </p>
            <div className="flex justify-center gap-8 flex-wrap">
              <a 
                href="mailto:sigudlalungelo@gmail.com" 
                className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-medium hover:shadow-large"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a 
                href="https://www.linkedin.com/in/lungelosigudla/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm border border-primary-foreground/20"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;