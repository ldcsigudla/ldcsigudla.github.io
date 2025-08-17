import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Sparkles, Brain, Lightbulb, Users, Rocket, Globe, Zap } from "lucide-react";

// Import images
import steveJobsImg from "@/assets/inspirations/steve-jobs.jpg";
import isaacNewtonImg from "@/assets/inspirations/isaac-newton.jpg";
import albertEinsteinImg from "@/assets/inspirations/albert-einstein.jpg";
import billGatesImg from "@/assets/inspirations/bill-gates.jpg";
import davidRubensteinImg from "@/assets/inspirations/david-rubenstein.jpg";
import oprahImg from "@/assets/inspirations/oprah.jpg";
import leonardoDaVinciImg from "@/assets/inspirations/leonardo-da-vinci.jpg";

const inspirations = [
  {
    name: "Steve Jobs",
    image: steveJobsImg,
    icon: Lightbulb,
    quote: "Innovation distinguishes between a leader and a follower",
    domain: "Technology & Design"
  },
  {
    name: "Isaac Newton",
    image: isaacNewtonImg,
    icon: Brain,
    quote: "If I have seen further, it is by standing on the shoulders of giants",
    domain: "Physics & Mathematics"
  },
  {
    name: "Albert Einstein",
    image: albertEinsteinImg,
    icon: Zap,
    quote: "Imagination is more important than knowledge",
    domain: "Theoretical Physics"
  },
  {
    name: "Bill Gates",
    image: billGatesImg,
    icon: Globe,
    quote: "Your most unhappy customers are your greatest source of learning",
    domain: "Technology & Philanthropy"
  },
  {
    name: "David Rubenstein",
    image: davidRubensteinImg,
    icon: Users,
    quote: "The best way to learn is to ask questions",
    domain: "Finance & Leadership"
  },
  {
    name: "Oprah Winfrey",
    image: oprahImg,
    icon: Sparkles,
    quote: "The biggest adventure you can take is to live the life of your dreams",
    domain: "Media & Inspiration"
  },
  {
    name: "Leonardo da Vinci",
    image: leonardoDaVinciImg,
    icon: Rocket,
    quote: "Learning never exhausts the mind",
    domain: "Art & Science"
  }
];

export const Inspirations = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-accent rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-32 w-3 h-3 bg-brand-tertiary rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-40 right-10 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 text-primary hover-lift">
            Cosmic Inspirations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            These visionaries have shaped our world and continue to inspire innovation across the galaxy. 
            Their wisdom lights the path for future explorers and creators.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {inspirations.map((person, index) => {
                const IconComponent = person.icon;
                return (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="glass-card p-6 hover-float h-[480px] flex flex-col">
                      <div className="relative mb-4">
                        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-primary/30 shadow-glow">
                          <img
                            src={person.image}
                            alt={person.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-medium">
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      
                      <div className="text-center flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-foreground mb-2 font-display">
                          {person.name}
                        </h3>
                        <p className="text-sm text-primary font-semibold mb-4 px-3 py-1 bg-primary/10 rounded-full inline-block">
                          {person.domain}
                        </p>
                        <div className="flex-1 flex flex-col justify-center">
                          <blockquote className="text-sm text-muted-foreground italic leading-relaxed">
                            "{person.quote}"
                          </blockquote>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="glass-button border-primary/30 text-primary hover:bg-primary hover:text-white -left-16" />
            <CarouselNext className="glass-button border-primary/30 text-primary hover:bg-primary hover:text-white -right-16" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground italic">
            "We are all made of star stuff, connected to the cosmos and to each other." - Carl Sagan
          </p>
        </div>
      </div>
    </section>
  );
};