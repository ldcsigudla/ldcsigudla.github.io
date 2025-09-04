import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Award, Zap, Recycle, Mountain, Factory, Waves, Radio, Antenna } from "lucide-react";

const projects = [
  {
    year: "2018-2022",
    title: "Elliptical Convergence Antenna System",
    description: "Advanced custom antenna design using CST Studio Suite for optimized RF gain efficiency and EIRP characteristics. Extensive electromagnetic simulation and power conversion efficiency optimization for wireless energy transfer applications.",
    technologies: ["CST Studio Suite", "Electromagnetic Simulation", "RF Engineering", "Antenna Theory"],
    icon: Antenna,
    highlight: "Custom elliptical geometry for enhanced directional gain"
  },
  {
    year: "2016", 
    title: "RF-to-DC Power Harvesting System",
    description: "Investigation into radio wave conversion for usable direct current generation. Developed novel rectenna arrays and impedance matching networks for ambient RF energy harvesting from multiple frequency bands.",
    technologies: ["RF Engineering", "Power Electronics", "Rectenna Design", "Energy Harvesting"],
    icon: Radio,
    highlight: "Multi-band ambient RF energy conversion"
  },
  {
    year: "2015",
    title: "Coal Ash Electrochemical Cell Development", 
    description: "Innovative compound extraction from coal combustion residues to create half-cell reactions generating milliwatt-level power output. Novel approach to waste-to-energy conversion using electrochemical principles.",
    technologies: ["Electrochemistry", "Materials Science", "Waste Management", "Power Generation"],
    icon: Factory,
    highlight: "Waste-to-energy electrochemical conversion"
  },
  {
    year: "2014",
    title: "Medium-Range Wireless Inductive Transfer",
    description: "Comprehensive investigation of maximum feasible distances for inductive coupling energy transfer. Developed optimized coil geometries and resonant frequency tuning for enhanced transmission efficiency.",
    technologies: ["Electromagnetic Induction", "Resonant Coupling", "Coil Design", "Power Transfer"],
    icon: Waves,
    highlight: "Extended range inductive power transmission"
  },
  {
    year: "2013",
    title: "Synthetic Anthracite Coal Production",
    description: "Developed synthetic chemical process for creating high-energy-density briquettes from pine cone biomass. Achieved energy density comparable to natural anthracite coal through controlled pyrolysis and compression techniques.",
    technologies: ["Chemical Engineering", "Biomass Processing", "Energy Density Optimization", "Pyrolysis"],
    icon: Mountain,
    highlight: "Biomass-to-coal energy density matching"
  },
  {
    year: "2012",
    title: "High-Efficiency Dynamo Design",
    description: "Lean engineering approach to develop low-cost, minimal energy loss electrical generator. Optimized magnetic flux density distribution and reduced mechanical friction losses for enhanced power generation efficiency.",
    technologies: ["Generator Design", "Magnetic Systems", "Mechanical Engineering", "Efficiency Optimization"],
    icon: Zap,
    highlight: "Lean engineering for maximum efficiency"
  },
  {
    year: "2011",
    title: "Gravitational Force Energy Converter",
    description: "Novel gravitational energy harvesting system converting potential energy differentials into direct current. Innovative mechanical-to-electrical energy conversion using gravity-driven mechanical advantage systems.",
    technologies: ["Mechanical Systems", "Energy Conversion", "Gravitational Physics", "Power Generation"],
    icon: Zap,
    highlight: "Gravity-driven electrical generation"
  },
  {
    year: "2010",
    title: "Coal Emission Sequestration System",
    description: "Advanced coal smoke freezing and sequestration technology using controlled de-sublimation processes. Developed novel approach to carbon capture through phase-change engineering of combustion byproducts.",
    technologies: ["Environmental Engineering", "Phase Change Systems", "Carbon Capture", "Thermodynamics"],
    icon: Factory,
    highlight: "Phase-change carbon sequestration"
  },
  {
    year: "2009",
    title: "Grey Water Energy Recovery System", 
    description: "Sustainable energy generation through household greywater flow optimization. Integrated water recycling with micro-hydroelectric generation for dual environmental and energy benefits.",
    technologies: ["Hydraulic Engineering", "Sustainable Design", "Water Management", "Micro-Hydro"],
    icon: Recycle,
    highlight: "Dual water recycling and energy generation"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-hero bg-animate">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 text-gradient hover-lift">
            Engineering Innovation Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Research and development projects in electrical, electronic, and energy engineering over the years
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="glass-card hover-glow hover-float shadow-medium transition-spring">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-button rounded-lg shadow-soft">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2 hover:text-primary transition-smooth">{project.title}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CalendarDays className="h-4 w-4" />
                          {project.year}
                          <Award className="h-4 w-4 ml-2 text-accent" />
                          Research Project
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-6 text-foreground/80">
                    {project.description}
                  </CardDescription>
                  
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="h-4 w-4 text-primary" />
                      <span className="font-semibold text-sm">Key Innovation:</span>
                    </div>
                    <p className="text-sm text-primary font-medium bg-primary/10 p-3 rounded-lg">{project.highlight}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs hover-lift bg-secondary/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;