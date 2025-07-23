import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Calculator, FileText, TrendingDown, Clock, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Calculator className="h-6 w-6" />,
    title: "Accurate Cost Calculation",
    description: "Precise BOM calculations with real-time material costs and consumption per piece (CPP) analysis."
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Detailed Bill of Materials",
    description: "Comprehensive BOM creation with fabric, yarn, trims, and accessory specifications."
  },
  {
    icon: <TrendingDown className="h-6 w-6" />,
    title: "Cost Optimization",
    description: "Identify cost-saving opportunities through material analysis and supplier comparisons."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Version Control",
    description: "Track BOM changes and maintain historical cost data for accurate comparisons."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Quick Estimates",
    description: "Generate instant cost estimates for new products and style variations."
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Margin Analysis",
    description: "Calculate profit margins and target costs for optimal pricing strategies."
  }
];

const bomComponents = [
  {
    category: "Fabrics",
    description: "Main body fabric, lining, interfacing",
    items: ["Cotton Jersey", "Polyester Lining", "Fusible Interfacing", "Stretch Denim"]
  },
  {
    category: "Yarns & Threads",
    description: "Sewing threads, embroidery yarns",
    items: ["Core Spun Thread", "Embroidery Thread", "Overlock Thread", "Button Hole Thread"]
  },
  {
    category: "Trims",
    description: "Buttons, zippers, labels, elastics",
    items: ["Plastic Buttons", "Metal Zippers", "Care Labels", "Elastic Tape"]
  },
  {
    category: "Accessories",
    description: "Hardware, packaging materials",
    items: ["Hang Tags", "Poly Bags", "Rivets", "Grommets"]
  }
];

const costingSteps = [
  {
    step: "1",
    title: "Material Input",
    description: "Enter fabric consumption, yarn requirements, and trim specifications with accurate quantities."
  },
  {
    step: "2",
    title: "CPP Calculation",
    description: "Apply Consumption Per Piece factors including wastage, cutting loss, and efficiency ratios."
  },
  {
    step: "3",
    title: "Cost Analysis",
    description: "Generate detailed cost breakdown with material costs, labor, and overhead allocations."
  },
  {
    step: "4",
    title: "Pricing Strategy",
    description: "Set target margins and final selling prices with competitive market analysis."
  }
];

const benefits = [
  { metric: "85%", description: "Reduction in costing errors" },
  { metric: "60%", description: "Faster BOM creation" },
  { metric: "40%", description: "Material cost savings" },
  { metric: "95%", description: "Costing accuracy" }
];

const BOMCosting = () => {
  return (
    <Layout>
      <div className="pt-16 pb-24">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full">
                <Calculator className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              BOM & Costing Management
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Create accurate Bill of Materials and precise cost calculations with our advanced 
              BOM & Costing system. Include CPP analysis and get detailed material breakdowns.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="px-4 py-2">
                <Calculator className="h-4 w-4 mr-2" />
                Precise Calculations
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <FileText className="h-4 w-4 mr-2" />
                Detailed BOMs
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <TrendingDown className="h-4 w-4 mr-2" />
                Cost Optimization
              </Badge>
            </div>
          </div>

          {/* Benefits Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 bg-gradient-to-br from-card to-secondary/50">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">{benefit.metric}</div>
                  <div className="text-muted-foreground">{benefit.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-secondary/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* BOM Components */}
          <Card className="mb-16 border-0 bg-gradient-to-r from-background to-secondary/30">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Complete BOM Components</CardTitle>
              <p className="text-center text-muted-foreground">
                Manage all material categories with detailed specifications
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {bomComponents.map((component, index) => (
                  <div key={index} className="p-6 border border-border rounded-lg bg-card">
                    <h3 className="font-semibold text-lg mb-2 text-primary">{component.category}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{component.description}</p>
                    <ul className="space-y-2">
                      {component.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-3 w-3 text-success" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Costing Process */}
          <Card className="mb-16 border-0 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Costing Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {costingSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CPP Analysis */}
          <Card className="mb-16 border-0 bg-gradient-to-br from-accent/5 to-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl text-center flex items-center justify-center gap-3">
                <Calculator className="h-8 w-8 text-primary" />
                CPP (Consumption Per Piece) Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="p-6 border border-border rounded-lg bg-card">
                    <h3 className="text-lg font-semibold mb-4">Fabric Consumption</h3>
                    <p className="text-muted-foreground mb-4">
                      Calculate exact fabric requirements including pattern layouts and cutting efficiency
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Pattern efficiency calculation</li>
                      <li>• Fabric width optimization</li>
                      <li>• Cutting wastage factors</li>
                      <li>• Size ratio analysis</li>
                    </ul>
                  </div>
                </div>
                <div className="text-center">
                  <div className="p-6 border border-border rounded-lg bg-card">
                    <h3 className="text-lg font-semibold mb-4">Material Wastage</h3>
                    <p className="text-muted-foreground mb-4">
                      Account for material wastage and process losses in your costing
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Cutting room wastage</li>
                      <li>• Fabric defect allowance</li>
                      <li>• Trimming losses</li>
                      <li>• Process shrinkage</li>
                    </ul>
                  </div>
                </div>
                <div className="text-center">
                  <div className="p-6 border border-border rounded-lg bg-card">
                    <h3 className="text-lg font-semibold mb-4">Cost Optimization</h3>
                    <p className="text-muted-foreground mb-4">
                      Optimize costs through efficient material utilization strategies
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Marker efficiency improvement</li>
                      <li>• Alternative material options</li>
                      <li>• Bulk purchase benefits</li>
                      <li>• Supplier cost comparison</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="border-0 bg-gradient-to-r from-primary/10 to-accent/10">
            <CardContent className="text-center py-12">
              <h3 className="text-3xl font-bold mb-4">
                Start Accurate Costing Today
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                Eliminate costing errors and optimize your material costs with our advanced 
                BOM & Costing system. Try our interactive calculator now.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/signup">
                  <Button size="lg" className="h-12 px-8">
                    Try BOM Calculator
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="h-12 px-8">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default BOMCosting;