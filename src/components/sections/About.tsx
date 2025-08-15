import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-hero bg-animate">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 text-gradient hover-lift">
            Building Things Since 2009
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Electrical, electronic, and computer engineering specialist with a passion for energy systems and RF design
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="p-8 glass-card border-l-4 border-l-primary hover-float shadow-medium">
              <h3 className="text-2xl font-bold mb-4 text-primary">The Science Fair Kid</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Started winning science fair medals in Grade 4 and never stopped. By high school, 
                I became the first student from my school to compete internationally at Intel science 
                fairs in New York and Los Angeles. Got to have dinner with Nobel laureates too, 
                which was pretty surreal.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Those early wins shaped how I approach engineering problems - always asking "what if" 
                and building prototypes to find out.
              </p>
            </Card>

            <Card className="p-8 glass-card border-l-4 border-l-accent hover-float shadow-medium">
              <h3 className="text-2xl font-bold mb-4 text-primary">What I Actually Do</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I work at the intersection of electrical, electronic, and computer engineering. 
                My focus areas include RF engineering, antenna design, power systems, and energy 
                conversion. I've spent years figuring out how to make things more efficient and 
                how to transfer energy wirelessly.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I collaborate with professionals in energy, telecommunications, and computer science 
                to turn research concepts into working prototypes and commercial solutions.
              </p>
            </Card>

            <Card className="p-8 glass-card border-l-4 border-l-secondary hover-float shadow-medium">
              <h3 className="text-2xl font-bold mb-4 text-primary">Random Personal Stuff</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Big fan of Robert Greene's "Mastery" - it perfectly captures the journey from 
                curiosity to expertise. When I'm not working on engineering projects, you'll 
                find me watching Rick and Morty or Love, Death & Robots.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I use MIT OpenCourseWare and Stanford courses to keep learning. Currently 
                diving deeper into advanced electromagnetics and signal processing.
              </p>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="p-8 glass-card border-l-4 border-l-primary hover-float shadow-medium">
              <h3 className="text-2xl font-bold mb-4 text-primary">Technical Arsenal</h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <Badge variant="secondary" className="hover-lift">RF Engineering</Badge>
                <Badge variant="secondary" className="hover-lift">Antenna Design</Badge>
                <Badge variant="secondary" className="hover-lift">Power Systems</Badge>
                <Badge variant="secondary" className="hover-lift">Electromagnetics</Badge>
                <Badge variant="secondary" className="hover-lift">Digital Electronics</Badge>
                <Badge variant="secondary" className="hover-lift">Energy Conversion</Badge>
                <Badge variant="secondary" className="hover-lift">CST Studio Suite</Badge>
                <Badge variant="secondary" className="hover-lift">Microwave Design</Badge>
                <Badge variant="secondary" className="hover-lift">Python</Badge>
                <Badge variant="secondary" className="hover-lift">C++</Badge>
                <Badge variant="secondary" className="hover-lift">MATLAB</Badge>
                <Badge variant="secondary" className="hover-lift">Circuit Design</Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Proficient in electromagnetic simulation using CST Studio Suite, custom antenna 
                development, EIRP optimization, and microwave system design. Also comfortable 
                with programming and mathematical modeling.
              </p>
            </Card>

            <Card className="p-8 glass-card border-l-4 border-l-accent hover-float shadow-medium">
              <h3 className="text-2xl font-bold mb-4 text-primary">14 Years of Building</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                From sustainable water-flow generators to wireless power transfer systems, 
                I've been building energy solutions since 2009. Projects include gravitational 
                energy converters, coal emission sequestration systems, and RF-to-DC harvesting.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Recent work focuses on wireless inductive energy transfer and custom elliptical 
                antenna designs. I'm particularly interested in improving power conversion 
                efficiency and extending transmission ranges.
              </p>
            </Card>

            <Card className="p-8 glass-card border-l-4 border-l-secondary hover-float shadow-medium">
              <h3 className="text-2xl font-bold mb-4 text-primary">The Bigger Picture</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Started a tech startup in digital microelectronics and RF engineering, working 
                with industry professionals to commercialize research. The experience taught me 
                how to bridge the gap between theoretical concepts and practical implementation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Always looking for ways to apply engineering solutions to real-world problems, 
                especially in energy efficiency and sustainable technology.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;