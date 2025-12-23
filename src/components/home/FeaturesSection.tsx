import { BarChart3, Box, Cog, Database, UserCircle2, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "BOM & Costing Engine",
    description:
      "Automated Bill of Materials calculation with precise costing for yarn, fabric, trims, and accessories. Real-time Cost Per Item (CPI) generation.",
    icon: Box,
    color: "primary",
  },
  {
    title: "Live Inventory Management",
    description:
      "Real-time tracking of raw materials with automatic allocation and alerts. Monitor stock levels, purchase orders, and material costs instantly.",
    icon: Database,
    color: "accent",
  },
  {
    title: "CRM & Order Management",
    description:
      "Comprehensive client management with complete order history. Seamless conversion from Sales Orders to Production Orders.",
    icon: UserCircle2,
    color: "success",
  },
  {
    title: "Production Analytics",
    description:
      "Advanced reporting and analytics for production efficiency, cost analysis, and performance tracking across all manufacturing operations.",
    icon: BarChart3,
    color: "warning",
  },
  {
    title: "Multi-Role Access",
    description:
      "Dedicated Admin and Worker panels with role-based permissions. Admins get full control while workers access task-specific information.",
    icon: Cog,
    color: "primary",
  },
  {
    title: "Enterprise Security",
    description:
      "Bank-grade security with data encryption, user authentication, and audit trails. Your textile business data stays protected and compliant.",
    icon: ShieldCheck,
    color: "accent",
  },
];

const FeaturesSection = () => {
  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20" },
      accent: { bg: "bg-accent/10", text: "text-accent", border: "border-accent/20" },
      success: { bg: "bg-success/10", text: "text-success", border: "border-success/20" },
      warning: { bg: "bg-warning/10", text: "text-warning", border: "border-warning/20" },
    };
    return colors[color] || colors.primary;
  };

  return (
    <section className="py-24 bg-secondary/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-40 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative">
        <div className="text-center mb-16 max-w-3xl mx-auto fade-in-up">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Powerful Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display">
            Everything You Need to Run Your{" "}
            <span className="gradient-text">Textile Business</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our comprehensive ERP solution covers every aspect of textile manufacturing, 
            from initial costing to final product delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 stagger-children">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            return (
              <div
                key={index}
                className={`group bg-card p-8 rounded-2xl shadow-soft border border-border/50 flex flex-col hover-lift card-shine transition-all duration-300`}
              >
                <div className={`${colors.bg} ${colors.border} border p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-8 w-8 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-display group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;