import Hero from "@/components/sections/Hero";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lungelo Sigudla",
    url: "https://www.linkedin.com/in/lungelosigudla/",
    sameAs: ["https://www.linkedin.com/in/lungelosigudla/"],
  };

  return (
    <main>
      <Hero />

      <section id="about" className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
            <p className="mt-3 text-muted-foreground">
              Hi, I’m Lungelo. Use this space to add a short bio: your role, what you love building,
              and the impact you aim to make. We’ll pull more details from LinkedIn next.
            </p>
          </div>
          <Card className="md:col-span-2 glass-card p-6">
            <h3 className="font-medium">Quick facts</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• Location: Your city</li>
              <li>• Focus: Your primary focus</li>
              <li>• Email: your@email.com</li>
            </ul>
          </Card>
        </div>
      </section>

      <section id="skills" className="container mx-auto px-6 pb-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Tailwind",
            "Node.js",
            "SQL",
          ].map((s) => (
            <Badge key={s} variant="secondary">{s}</Badge>
          ))}
        </div>
      </section>

      <section id="projects" className="container mx-auto px-6 pb-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <Card key={i} className="p-6 glass-card">
              <h3 className="text-lg font-medium">Project {i}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Short description of what the project does and the value it provides.
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="container mx-auto px-6 pb-24">
        <h2 className="text-2xl md:text-3xl font-semibold">Get in touch</h2>
        <p className="mt-3 text-muted-foreground">Open to opportunities and collaborations.</p>
        <div className="mt-4 text-sm text-muted-foreground">
          Prefer email? Replace this with your address and a contact form later.
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
    </main>
  );
};

export default Index;
