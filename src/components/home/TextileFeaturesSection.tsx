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
    <section className="py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built Specifically for Textile Manufacturing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {textileFeatures.map((feature, index) => (
            <Card key={index} className="border border-border">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
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