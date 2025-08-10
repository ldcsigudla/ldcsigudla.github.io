import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Engineering Innovation Since 2009
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized in electrical, electronic, and computer engineering with over a decade of research excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-8 glass-card">
              <h3 className="text-2xl font-bold mb-4 text-primary">Research Excellence</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My journey in electrical and electronic engineering began in primary school, evolving through 
                consistent Gold and Silver medal achievements in science fairs from Grade 4 through 12. 
                This foundation led to pioneering participation in international competitions, making history 
                as the first student from my institution to compete and win at Intel's prestigious science 
                fairs in New York and Los Angeles.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These early achievements provided unique opportunities to engage with Nobel laureates in 
                chemistry, materials science, and physics, shaping my approach to scientific inquiry and 
                engineering problem-solving.
              </p>
            </Card>

            <Card className="p-8 glass-card">
              <h3 className="text-2xl font-bold mb-4 text-primary">Professional Focus</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I specialize in the convergence of electrical, electronic, and computer engineering, with 
                particular expertise in digital microelectronics and radio frequency engineering. My work 
                spans energy generation systems, electromagnetic theory, antenna design, and power conversion 
                efficiency optimization.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through collaborative partnerships with industry professionals in energy, telecommunications, 
                and computer science, I've developed comprehensive expertise in both theoretical foundations 
                and practical implementation of complex engineering systems.
              </p>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-8 glass-card">
              <h3 className="text-2xl font-bold mb-4 text-primary">Technical Expertise</h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <Badge variant="secondary">RF Engineering</Badge>
                <Badge variant="secondary">Antenna Design</Badge>
                <Badge variant="secondary">Power Systems</Badge>
                <Badge variant="secondary">Electromagnetics</Badge>
                <Badge variant="secondary">Digital Electronics</Badge>
                <Badge variant="secondary">Energy Conversion</Badge>
                <Badge variant="secondary">CST Studio Suite</Badge>
                <Badge variant="secondary">Microwave Design</Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Advanced proficiency in electromagnetic simulation software including CST Studio Suite, 
                with expertise in custom antenna development, EIRP optimization, and microwave system design.
              </p>
            </Card>

            <Card className="p-8 glass-card">
              <h3 className="text-2xl font-bold mb-4 text-primary">Innovation Track Record</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                14+ years of consistent innovation in energy engineering, from sustainable water-flow 
                generation systems to advanced wireless power transfer technologies. My research encompasses 
                novel approaches to gravitational energy conversion, coal emission sequestration, and 
                RF-to-DC power harvesting.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Recent focus on wireless inductive energy transfer and custom elliptical antenna design 
                has yielded significant advances in power conversion efficiency and transmission range optimization.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;