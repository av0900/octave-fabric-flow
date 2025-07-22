import { BarChart3, Box, Cog, Database, UserCircle2, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "BOM & Costing Engine",
    description:
      "Automated Bill of Materials calculation with precise costing for yarn, fabric, trims, and accessories. Real-time Cost Per Item (CPI) generation.",
    icon: <Box className="h-10 w-10 text-primary" />,
  },
  {
    title: "Live Inventory Management",
    description:
      "Real-time tracking of raw materials with automatic allocation and alerts. Monitor stock levels, purchase orders, and material costs instantly.",
    icon: <Database className="h-10 w-10 text-primary" />,
  },
  {
    title: "CRM & Order Management",
    description:
      "Comprehensive client management with complete order history. Seamless conversion from Sales Orders to Production Orders.",
    icon: <UserCircle2 className="h-10 w-10 text-primary" />,
  },
  {
    title: "Production Analytics",
    description:
      "Advanced reporting and analytics for production efficiency, cost analysis, and performance tracking across all manufacturing operations.",
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
  },
  {
    title: "Multi-Role Access",
    description:
      "Dedicated Admin and Worker panels with role-based permissions. Admins get full control while workers access task-specific information.",
    icon: <Cog className="h-10 w-10 text-primary" />,
  },
  {
    title: "Enterprise Security",
    description:
      "Bank-grade security with data encryption, user authentication, and audit trails. Your textile business data stays protected and compliant.",
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to Run Your Textile Business
          </h2>
          <p className="text-muted-foreground">
            Our comprehensive ERP solution covers every aspect of textile manufacturing, from initial costing to final product delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg shadow-sm border border-border flex flex-col"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;