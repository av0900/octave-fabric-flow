import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Database, Users, TrendingUp, Settings, BarChart3, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Database className="h-6 w-6" />,
    title: "Complete Data Integration",
    description: "Seamlessly integrate all your business data from production to sales in one unified system."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Multi-Department Access",
    description: "Enable all departments to access relevant data with role-based permissions and security."
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Real-Time Analytics",
    description: "Get instant insights into your business performance with live dashboards and reports."
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: "Process automation",
    description: "Automate repetitive tasks and workflows to increase efficiency and reduce errors."
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Advanced Reporting",
    description: "Generate comprehensive reports for better decision-making and compliance requirements."
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Document Management",
    description: "Centralized document storage with version control and easy access across departments."
  }
];

const modules = [
  {
    name: "Financial Management",
    description: "Complete accounting, budgeting, and financial reporting",
    features: ["Accounts Payable/Receivable", "General Ledger", "Financial Reporting", "Budget Planning"]
  },
  {
    name: "Supply Chain Management",
    description: "End-to-end supply chain visibility and control",
    features: ["Procurement", "Vendor Management", "Demand Planning", "Logistics Tracking"]
  },
  {
    name: "Production Planning",
    description: "Optimize your manufacturing processes and scheduling",
    features: ["Production Scheduling", "Resource Planning", "Quality Control", "Capacity Management"]
  },
  {
    name: "Human Resources",
    description: "Complete HR management from hiring to payroll",
    features: ["Employee Management", "Payroll Processing", "Performance Tracking", "Compliance Management"]
  },
  {
    name: "Customer Relationship",
    description: "Manage customer interactions and sales processes",
    features: ["Lead Management", "Sales Pipeline", "Customer Support", "Order Management"]
  },
  {
    name: "Inventory Control",
    description: "Real-time inventory tracking and optimization",
    features: ["Stock Management", "Warehouse Operations", "Inventory Analytics", "Reorder Automation"]
  }
];

const benefits = [
  { metric: "50%", description: "Reduction in operational costs" },
  { metric: "75%", description: "Faster reporting and analytics" },
  { metric: "90%", description: "Improved data accuracy" },
  { metric: "60%", description: "Increase in productivity" }
];

const ERPSystem = () => {
  return (
    <Layout>
      <div className="pt-16 pb-24">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full">
                <Database className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete ERP System
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Streamline your entire textile business with our comprehensive ERP solution. 
              From production planning to financial management, everything integrated in one platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="px-4 py-2">
                <Database className="h-4 w-4 mr-2" />
                Fully Integrated
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Settings className="h-4 w-4 mr-2" />
                Customizable
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <TrendingUp className="h-4 w-4 mr-2" />
                Scalable
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

          {/* ERP Modules */}
          <Card className="mb-16 border-0 bg-gradient-to-r from-background to-secondary/30">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Complete ERP Modules</CardTitle>
              <p className="text-center text-muted-foreground">
                All the modules you need to run your textile business efficiently
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.map((module, index) => (
                  <div key={index} className="p-6 border border-border rounded-lg bg-card">
                    <h3 className="font-semibold text-lg mb-2">{module.name}</h3>
                    <p className="text-muted-foreground mb-4">{module.description}</p>
                    <ul className="space-y-2">
                      {module.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-success" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Implementation Process */}
          <Card className="mb-16 border-0 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Implementation Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Analysis & Planning</h3>
                  <p className="text-sm text-muted-foreground">
                    We analyze your current processes and plan the optimal ERP implementation
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Configuration</h3>
                  <p className="text-sm text-muted-foreground">
                    Custom configuration of modules according to your business requirements
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Data Migration</h3>
                  <p className="text-sm text-muted-foreground">
                    Secure migration of your existing data to the new ERP system
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4">
                    4
                  </div>
                  <h3 className="font-semibold mb-2">Training & Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive training and ongoing support for your team
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="border-0 bg-gradient-to-r from-primary/10 to-accent/10">
            <CardContent className="text-center py-12">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                Join hundreds of textile businesses that have streamlined their operations 
                with our comprehensive ERP solution. Get started today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/signup">
                  <Button size="lg" className="h-12 px-8">
                    Start Free Trial
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="h-12 px-8">
                    Schedule Demo
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

export default ERPSystem;