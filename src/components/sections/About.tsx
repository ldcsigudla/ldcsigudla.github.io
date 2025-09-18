import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Beaker, Zap, Cpu, Code } from "lucide-react";

const journeySteps = [
  {
    period: "2009-2012",
    field: "Chemical Engineering",
    icon: Beaker,
    description: "Started with sustainable materials and energy conversion processes",
    highlight: "Coal ash electrochemical cells, synthetic fuel development"
  },
  {
    period: "2013-2016", 
    field: "Electrical Engineering",
    icon: Zap,
    description: "Transitioned to power systems and energy generation optimization",
    highlight: "Dynamo design, gravitational energy conversion, wireless power transfer"
  },
  {
    period: "2017-2020",
    field: "Electronics Engineering", 
    icon: Cpu,
    description: "Advanced into RF systems and electromagnetic theory applications",
    highlight: "Antenna design, CST Studio Suite mastery, EIRP optimization"
  },
  {
    period: "2021-Present",
    field: "Computer Engineering & Mathematics",
    icon: Code,
    description: "Integrating computational methods with engineering principles",
    highlight: "Digital signal processing, embedded systems, algorithmic optimization"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              My Engineering Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From chemical processes to cutting-edge RF systems—a decade-plus evolution through engineering disciplines
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <Card className="border-0 shadow-medium bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">The Foundation</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    My journey began in 2009 with a fascination for sustainable energy and materials science. 
                    What started as curiosity about chemical processes evolved into a comprehensive understanding 
                    of how energy flows through systems at every scale.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-accent/10 text-accent">14+ Science Fair Medals</Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">Intel International Finalist</Badge>
                    <Badge variant="secondary" className="bg-muted-foreground/10">Nobel Laureate Meetings</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Today's Focus</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Currently, I'm at the intersection of electrical engineering and computer science, 
                    developing next-generation RF systems and exploring the mathematical foundations 
                    that drive innovation in wireless technology and sustainable energy solutions.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>
              
              <div className="space-y-8">
                {journeySteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="relative flex items-start gap-6">
                      <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-primary rounded-full shadow-medium">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-bold text-foreground">{step.field}</h4>
                          <Badge variant="outline" className="text-xs">{step.period}</Badge>
                        </div>
                        <p className="text-muted-foreground mb-3 leading-relaxed">
                          {step.description}
                        </p>
                        <div className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-accent font-medium">{step.highlight}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="text-center">
            <Card className="border-0 shadow-large bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">What Drives Me</h3>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Every project I undertake is guided by a simple principle: <strong className="text-foreground">engineering should solve real problems</strong>. 
                  Whether it's optimizing antenna efficiency, developing sustainable energy systems, or creating novel approaches to power conversion, 
                  I believe in building solutions that matter.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;