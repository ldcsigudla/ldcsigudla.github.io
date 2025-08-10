import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";

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
      
      <section id="contact" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Let's Collaborate</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Open to opportunities in electrical engineering, research collaborations, consulting, and innovative project development.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="mailto:contact@ldcsigudla.com" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors shadow-elegant"
            >
              Professional Inquiry
            </a>
            <a 
              href="https://www.linkedin.com/in/lungelosigudla/" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg hover:bg-secondary transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;