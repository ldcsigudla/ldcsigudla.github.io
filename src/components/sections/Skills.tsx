import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Cpu, 
  Zap, 
  Radio, 
  Settings, 
  Code, 
  BookOpen,
  Award,
  Users
} from "lucide-react";

const skillCategories = [
  {
    title: "Electrical & Electronic Engineering",
    icon: Zap,
    description: "Core competencies in power systems, digital electronics, and circuit design",
    skills: [
      { name: "Power Electronics", level: 95 },
      { name: "Digital Circuit Design", level: 90 },
      { name: "Electromagnetic Theory", level: 92 },
      { name: "Energy Conversion Systems", level: 88 }
    ]
  },
  {
    title: "RF & Antenna Engineering", 
    icon: Radio,
    description: "Advanced expertise in radio frequency design and electromagnetic simulation",
    skills: [
      { name: "Antenna Design & Optimization", level: 94 },
      { name: "CST Studio Suite", level: 91 },
      { name: "Microwave Engineering", level: 87 },
      { name: "EIRP Optimization", level: 89 }
    ]
  },
  {
    title: "Computer Engineering",
    icon: Cpu, 
    description: "Programming and computational methods for engineering applications",
    skills: [
      { name: "C++ Programming", level: 85 },
      { name: "Python Programming", level: 83 },
      { name: "Digital Signal Processing", level: 86 },
      { name: "Embedded Systems", level: 82 }
    ]
  },
  {
    title: "Research & Development",
    icon: Settings,
    description: "Systematic approach to innovation and problem-solving",
    skills: [
      { name: "Experimental Design", level: 93 },
      { name: "Data Analysis", level: 88 },
      { name: "Technical Documentation", level: 90 },
      { name: "Patent Research", level: 85 }
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
  "14+ consecutive years of Gold/Silver medals in science fairs",
  "First student to win international Intel science fair competitions",
  "Published research in wireless power transfer optimization", 
  "Collaborated with Nobel laureates in physics and chemistry",
  "Pioneered novel antenna design methodologies"
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skill set spanning electrical, electronic, and computer engineering disciplines
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="glass-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="glass-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary" />
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
                  <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                    <div>
                      <p className="font-medium">{cert.name}</p>
                      <p className="text-sm text-muted-foreground">{cert.type}</p>
                    </div>
                    <Badge variant="outline">{cert.year}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Key Achievements</CardTitle>
                  <CardDescription>Notable accomplishments and recognition</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">{achievement}</p>
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