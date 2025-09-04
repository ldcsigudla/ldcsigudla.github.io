import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Lightbulb, 
  Zap, 
  Satellite, 
  Wrench, 
  Code, 
  BookOpen,
  Award,
  Users,
  Atom,
  Orbit,
  Waves,
  Battery
} from "lucide-react";

const skillCategories = [
  {
    title: "Electrical & Electronic Engineering",
    icon: Battery,
    description: "Core competencies in power systems, digital electronics, and circuit design",
    skills: [
      { name: "Power Electronics", size: "large" },
      { name: "Digital Circuit Design", size: "medium" },
      { name: "Electromagnetic Theory", size: "large" },
      { name: "Energy Conversion Systems", size: "medium" }
    ]
  },
  {
    title: "RF & Antenna Engineering", 
    icon: Satellite,
    description: "Advanced expertise in radio frequency design and electromagnetic simulation",
    skills: [
      { name: "Antenna Design & Optimization", size: "large" },
      { name: "CST Studio Suite", size: "medium" },
      { name: "Microwave Engineering", size: "medium" },
      { name: "EIRP Optimization", size: "small" }
    ]
  },
  {
    title: "Computer Engineering",
    icon: Code, 
    description: "Programming and computational methods for engineering applications",
    skills: [
      { name: "C++ Programming", size: "medium" },
      { name: "Python Programming", size: "medium" },
      { name: "Digital Signal Processing", size: "medium" },
      { name: "Embedded Systems", size: "small" }
    ]
  },
  {
    title: "Research & Development",
    icon: Lightbulb,
    description: "Systematic approach to innovation and problem-solving",
    skills: [
      { name: "Experimental Design", size: "large" },
      { name: "Data Analysis", size: "medium" },
      { name: "Technical Documentation", size: "medium" },
      { name: "Patent Research", size: "small" }
    ]
  }
];

const certifications = [
  { name: "TVET Electrical Engineering N4", year: "2021", type: "Certification" },
  { name: "MIT OpenCourseWare - Electromagnetics", year: "2023", type: "Self-Study" },
  { name: "Stanford Online - Linear Algebra", year: "2023", type: "Self-Study" },
  { name: "University of Michigan - Digital Electronics", year: "2022", type: "Self-Study" }
];

const achievements = [
  "Participated in science fairs for over 14 years, earning various medals",
  "Competed in international Intel science fair competitions",
  "Conducted research in wireless power transfer optimization", 
  "Had opportunities to meet Nobel laureates in physics and chemistry",
  "Developed custom antenna design approaches"
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-hero bg-animate">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 text-gradient hover-lift">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive skill set spanning electrical, electronic, and computer engineering disciplines
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="glass-card hover-float shadow-medium border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg rounded-2xl">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-button rounded-lg shadow-soft">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-6 p-6">
                      {category.skills.map((skill, skillIndex) => {
                        const sizeClasses = {
                          small: "w-20 h-20 text-xs",
                          medium: "w-24 h-24 text-sm", 
                          large: "w-28 h-28 text-sm"
                        };
                        
                        const skillColors = [
                          'hsl(var(--skill-orange))',
                          'hsl(var(--skill-blue))',
                          'hsl(var(--skill-green))',
                          'hsl(var(--skill-red))',
                          'hsl(var(--skill-purple))',
                          'hsl(var(--skill-cyan))',
                          'hsl(var(--skill-yellow))',
                          'hsl(var(--skill-pink))'
                        ];
                        
                        const currentColor = skillColors[skillIndex % skillColors.length];
                        
                        return (
                          <div
                            key={skillIndex}
                            className={`
                              ${sizeClasses[skill.size as keyof typeof sizeClasses]}
                              border border-white/20
                              rounded-full flex items-center justify-center
                              transition-all duration-300 cursor-pointer
                              hover:scale-110 hover:shadow-lg
                              ${category.title === "Computer Engineering" ? 'm-3' : 'm-2'}
                            `}
                            style={{
                              backgroundColor: currentColor,
                              color: '#000'
                            }}
                          >
                            <span className="text-center font-semibold leading-tight px-3 break-words">
                              {skill.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="glass-card hover-float shadow-medium border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg rounded-2xl">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-button rounded-lg shadow-soft">
                  <BookOpen className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle>Education & Certifications</CardTitle>
                  <CardDescription>Formal qualifications and continuous learning</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl hover-lift shadow-soft border border-primary/10">
                    <div>
                      <p className="font-medium">{cert.name}</p>
                      <p className="text-sm text-muted-foreground">{cert.type}</p>
                    </div>
                    <Badge variant="outline" className="bg-primary/10 border-primary/30 rounded-full">{cert.year}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card hover-float shadow-medium border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg rounded-2xl">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-accent rounded-lg shadow-soft">
                  <Award className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <CardTitle>Key Achievements</CardTitle>
                  <CardDescription>Notable accomplishments and recognition</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3 hover-lift p-3 rounded-2xl transition-smooth bg-gradient-to-r from-accent/5 to-primary/5">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full mt-2 flex-shrink-0 shadow-glow animate-pulse" />
                    <p className="text-sm leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;