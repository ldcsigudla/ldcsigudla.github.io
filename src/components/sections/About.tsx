import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
export const About = () => {
  return <section id="about" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 text-primary hover-lift">
          My Journey Since 2009
        </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Electrical, electronic, and computer engineering, energy systems and RF design</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="p-8 glass-card border-0 hover-float shadow-medium bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-primary">The Science Fairs</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Got into science fairs early on in Grade 4 and kept participating through high school. 
                Eventually had the opportunity to compete at Intel science fairs in New York and 
                Los Angeles. The experience included meeting some Nobel laureates, which was 
                quite memorable.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This experience taught me to approach engineering problems by asking "what if" 
                and building prototypes to test ideas.
              </p>
            </Card>

            <Card className="p-8 glass-card border-0 hover-float shadow-medium bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg rounded-2xl">
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

            <Card className="p-8 glass-card border-0 hover-float shadow-medium bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg rounded-2xl">
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
            <Card className="p-8 glass-card border-0 hover-float shadow-medium bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">Technical Arsenal</h3>
              <div className="relative h-64 overflow-hidden rounded-lg">
                <div className="absolute inset-0">
                  {/* Main tech skills constellation - repositioned for clarity */}
                  <div className="absolute top-6 left-6">
                    <div className="px-4 py-2 bg-primary/20 rounded-full border border-primary/30 text-sm font-medium hover:bg-primary/30 transition-all cursor-pointer">
                      RF Engineering
                    </div>
                  </div>

                  <div className="absolute top-6 right-6">
                    <div className="px-4 py-2 bg-secondary/20 rounded-full border border-secondary/30 text-sm font-medium hover:bg-secondary/30 transition-all cursor-pointer">
                      Power Systems
                    </div>
                  </div>

                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
                    <div className="px-3 py-1 bg-accent/20 rounded-full border border-accent/30 text-xs font-medium hover:bg-accent/30 transition-all cursor-pointer">
                      Antenna Design
                    </div>
                  </div>

                  <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                    <div className="px-4 py-2 bg-accent/20 rounded-full border border-accent/30 text-sm font-medium hover:bg-accent/30 transition-all cursor-pointer">
                      Digital Electronics
                    </div>
                  </div>

                  <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                    <div className="px-4 py-2 bg-primary/25 rounded-full border border-primary/35 text-sm font-medium hover:bg-primary/35 transition-all cursor-pointer">
                      CST Studio Suite
                    </div>
                  </div>

                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="px-3 py-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full border border-primary/30 text-xs font-bold hover:from-primary/30 hover:to-accent/30 transition-all cursor-pointer">
                      Python
                    </div>
                  </div>

                  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
                    <div className="px-3 py-1 bg-primary/15 rounded-full border border-primary/25 text-xs font-medium hover:bg-primary/25 transition-all cursor-pointer">
                      Electromagnetics
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6">
                    <div className="px-3 py-1 bg-secondary/15 rounded-full border border-secondary/25 text-xs font-medium hover:bg-secondary/25 transition-all cursor-pointer">
                      Energy Conversion
                    </div>
                  </div>

                  <div className="absolute bottom-6 right-6">
                    <div className="px-3 py-1 bg-accent/15 rounded-full border border-accent/25 text-xs font-medium hover:bg-accent/25 transition-all cursor-pointer">
                      Microwave Design
                    </div>
                  </div>

                  <div className="absolute bottom-12 left-1/4">
                    <div className="px-2 py-1 bg-secondary/20 rounded-full border border-secondary/30 text-xs hover:bg-secondary/30 transition-all cursor-pointer">
                      C++
                    </div>
                  </div>

                  <div className="absolute bottom-12 right-1/4">
                    <div className="px-2 py-1 bg-accent/20 rounded-full border border-accent/30 text-xs hover:bg-accent/30 transition-all cursor-pointer">
                      MATLAB
                    </div>
                  </div>

                  <div className="absolute top-1/3 left-1/4">
                    <div className="px-2 py-1 bg-primary/15 rounded-full border border-primary/25 text-xs hover:bg-primary/25 transition-all cursor-pointer">
                      Circuit Design
                    </div>
                  </div>

                  {/* Connecting lines */}
                  <svg className="absolute inset-0 pointer-events-none opacity-30">
                    <defs>
                      <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                    <path d="M 80 30 Q 200 80 320 30" stroke="url(#line-gradient)" strokeWidth="1" fill="none" />
                    <path d="M 40 130 Q 200 100 360 130" stroke="url(#line-gradient)" strokeWidth="1" fill="none" />
                    <path d="M 200 50 Q 200 130 200 210" stroke="url(#line-gradient)" strokeWidth="1" fill="none" />
                    <path d="M 120 80 Q 200 130 280 180" stroke="url(#line-gradient)" strokeWidth="1" fill="none" />
                    <path d="M 280 80 Q 200 130 120 180" stroke="url(#line-gradient)" strokeWidth="1" fill="none" />
                  </svg>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Proficient in electromagnetic simulation using CST Studio Suite, custom antenna 
                development, EIRP optimization, and microwave system design. Also comfortable 
                with programming and mathematical modeling.
              </p>
            </Card>

            <Card className="p-8 glass-card border-0 hover-float shadow-medium bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-primary">Project Experience</h3>
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

            <Card className="p-8 glass-card border-0 hover-float shadow-medium bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg rounded-2xl">
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
    </section>;
};
export default About;