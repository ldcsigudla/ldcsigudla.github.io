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
      
      <section id="contact" className="py-20 bg-brand-gradient bg-animate">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-8 text-white hover-lift">Want to Chat?</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Always up for discussing engineering projects, startup ideas, or just geeking out about RF systems. 
            Drop me a line if you're working on something interesting.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a 
              href="mailto:sigudlalungelo@gmail.com" 
              className="inline-flex items-center gap-3 glass-button text-white px-10 py-5 rounded-xl hover-glow hover-lift shadow-large font-semibold transition-spring"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/lungelosigudla/" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-white/20 text-white px-10 py-5 rounded-xl hover:bg-white/30 transition-spring hover-lift shadow-large font-semibold backdrop-blur-sm"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
          <p className="text-sm text-white/70 mt-8 font-medium">
            Currently open to engineering roles, consulting opportunities, and research collaborations
          </p>
        </div>
      </section>
    </main>
  );
};

export default Index;