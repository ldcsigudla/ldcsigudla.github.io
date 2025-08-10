import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
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
      
      <section id="contact" className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Want to Chat?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Always up for discussing engineering projects, startup ideas, or just geeking out about RF systems. 
            Drop me a line if you're working on something interesting.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href="mailto:sigudlalungelo@gmail.com" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-8 py-4 rounded-lg hover:from-primary/90 hover:to-primary/70 transition-all shadow-elegant transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/lungelosigudla/" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-8 py-4 rounded-lg hover:from-accent/90 hover:to-accent/70 transition-all transform hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Currently open to engineering roles, consulting opportunities, and research collaborations
          </p>
        </div>
      </section>
    </main>
  );
};

export default Index;