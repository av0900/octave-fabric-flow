import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const TextileFeaturesSection = () => {
  const textileFeatures = [
    {
      title: "Yarn & Fabric Calculations",
      description: "Precise consumption calculations based on CPP and size-wise quantities",
    },
    {
      title: "Stitching Thread Logic",
      description: "Advanced calculations for thread consumption based on stitch types and lengths",
    },
    {
      title: "Trim & Accessories",
      description: "Automate quantities required per style with custom rules for buttons, zippers, labels",
    },
    {
      title: "Process Costing",
      description: "Detailed breakdown of washing, printing, embroidery, and other processes",
    },
    {
      title: "Multi-Currency Support",
      description: "Work with suppliers and buyers across countries with automatic currency conversion",
    },
    {
      title: "Fabric Width Optimization",
      description: "Intelligent marker planning to minimize fabric waste based on width",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative">
        <div className="text-center mb-16 fade-in-up">
          <span className="inline-block px-4 py-1.5 bg-success/10 text-success rounded-full text-sm font-medium mb-4">
            Industry Specific
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-display">
            Built Specifically for{" "}
            <span className="gradient-text">Textile Manufacturing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every feature designed with deep understanding of garment and textile industry workflows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {textileFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="group border-border/50 bg-card/80 backdrop-blur-sm hover-lift transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center group-hover:bg-success/20 group-hover:scale-110 transition-all duration-300">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 font-display group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextileFeaturesSection;