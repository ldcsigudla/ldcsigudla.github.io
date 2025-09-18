import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, Calendar, Target, FlaskConical, Microscope, BarChart3, Lightbulb, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ProjectDetailProps {
  project: {
    year: string;
    title: string;
    description: string;
    technologies: string[];
    icon: any;
    highlight: string;
    problemStatement?: string;
    hypothesis?: string;
    methodology?: string;
    results?: string;
    interpretation?: string;
    learnings?: string;
    images?: string[];
    documents?: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetail = ({ project, isOpen, onClose }: ProjectDetailProps) => {
  const scientificSections = [
    {
      title: "Problem Statement",
      content: project.problemStatement || "Detailed problem analysis and research motivation will be added here.",
      icon: Target,
      placeholder: true
    },
    {
      title: "Hypothesis", 
      content: project.hypothesis || "Research hypothesis and expected outcomes will be documented here.",
      icon: Lightbulb,
      placeholder: true
    },
    {
      title: "Methodology",
      content: project.methodology || "Detailed experimental design, tools, and procedures will be outlined here.",
      icon: FlaskConical,
      placeholder: true
    },
    {
      title: "Results",
      content: project.results || "Experimental data, measurements, and findings will be presented here.",
      icon: BarChart3,
      placeholder: true
    },
    {
      title: "Analysis & Interpretation", 
      content: project.interpretation || "Data analysis, conclusions, and implications will be discussed here.",
      icon: Microscope,
      placeholder: true
    },
    {
      title: "Key Learnings",
      content: project.learnings || "Technical insights, challenges overcome, and future improvements will be summarized here.",
      icon: FileText,
      placeholder: true
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary rounded-lg">
                <project.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <DialogTitle className="text-2xl text-foreground">{project.title}</DialogTitle>
                <div className="flex items-center gap-2 mt-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{project.year}</span>
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-8 mt-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Project Overview</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
              <div className="flex items-start gap-2">
                <Lightbulb className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-accent text-sm mb-1">Key Innovation</p>
                  <p className="text-sm text-foreground">{project.highlight}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="bg-secondary/50">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="bg-secondary/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Microscope className="h-5 w-5 text-primary" />
              Scientific Method Documentation
            </h3>
            <p className="text-sm text-muted-foreground mb-6 italic">
              Detailed research documentation will be added here. This project follows rigorous scientific methodology.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {scientificSections.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <Card key={index} className="border-0 bg-card/80 shadow-soft">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <IconComponent className="h-5 w-5 text-primary" />
                        <CardTitle className="text-base">{section.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className={`text-sm leading-relaxed ${section.placeholder ? 'text-muted-foreground italic' : 'text-foreground'}`}>
                        {section.content}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="bg-primary/5 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-foreground mb-4">Documentation & Media</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-foreground mb-2">Images & Diagrams</h4>
                <p className="text-sm text-muted-foreground italic">
                  Project images, circuit diagrams, and experimental setups will be uploaded here.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Research Documents</h4>
                <p className="text-sm text-muted-foreground italic">
                  PDFs, reports, and datasets will be made available for download here.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t">
            <Button onClick={onClose} variant="outline">
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetail;