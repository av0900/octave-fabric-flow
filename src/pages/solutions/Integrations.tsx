import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ExternalLink, Zap, Globe, Database, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const integrations = [
  {
    name: "SAP ERP",
    description: "Seamlessly connect with SAP for enterprise resource planning",
    category: "ERP",
    status: "Active",
    logo: "https://logos-world.net/wp-content/uploads/2021/02/SAP-Logo.png",
    features: ["Real-time data sync", "Financial integration", "Supply chain management"]
  },
  {
    name: "QuickBooks",
    description: "Sync financial data and automate accounting processes",
    category: "Accounting",
    status: "Active",
    logo: "https://logos-world.net/wp-content/uploads/2021/03/QuickBooks-Logo.png",
    features: ["Invoice automation", "Expense tracking", "Tax reporting"]
  },
  {
    name: "Shopify",
    description: "Connect your e-commerce store for seamless order management",
    category: "E-commerce",
    status: "Active",
    logo: "https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png",
    features: ["Order sync", "Inventory updates", "Customer data"]
  },
  {
    name: "Salesforce CRM",
    description: "Integrate customer relationship management",
    category: "CRM",
    status: "Active",
    logo: "https://logos-world.net/wp-content/uploads/2020/11/Salesforce-Logo.png",
    features: ["Lead management", "Customer insights", "Sales pipeline"]
  },
  {
    name: "Microsoft Dynamics",
    description: "Enterprise business application integration",
    category: "ERP",
    status: "Beta",
    logo: "https://logos-world.net/wp-content/uploads/2021/02/Microsoft-Dynamics-Logo.png",
    features: ["Business intelligence", "Financial management", "Operations"]
  },
  {
    name: "WooCommerce",
    description: "WordPress e-commerce platform integration",
    category: "E-commerce",
    status: "Coming Soon",
    logo: "https://logos-world.net/wp-content/uploads/2020/11/WooCommerce-Logo.png",
    features: ["Product sync", "Order management", "Payment processing"]
  },
  {
    name: "Slack",
    description: "Team communication and notification integration",
    category: "Communication",
    status: "Active",
    logo: "https://logos-world.net/wp-content/uploads/2020/10/Slack-Logo.png",
    features: ["Real-time alerts", "Team collaboration", "Workflow automation"]
  },
  {
    name: "Google Workspace",
    description: "Productivity suite integration for documents and collaboration",
    category: "Productivity",
    status: "Active",
    logo: "https://logos-world.net/wp-content/uploads/2020/09/Google-Workspace-Logo.png",
    features: ["Document sync", "Calendar integration", "Email automation"]
  },
  {
    name: "Amazon AWS",
    description: "Cloud infrastructure and services integration",
    category: "Cloud",
    status: "Active",
    logo: "https://logos-world.net/wp-content/uploads/2020/09/Amazon-Web-Services-AWS-Logo.png",
    features: ["Data storage", "Computing power", "Machine learning"]
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active": return "bg-green-100 text-green-800";
    case "Beta": return "bg-yellow-100 text-yellow-800";
    case "Coming Soon": return "bg-blue-100 text-blue-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "ERP": return <Database className="h-5 w-5" />;
    case "Accounting": return <Database className="h-5 w-5" />;
    case "E-commerce": return <Globe className="h-5 w-5" />;
    case "CRM": return <Globe className="h-5 w-5" />;
    case "Communication": return <Zap className="h-5 w-5" />;
    case "Productivity": return <Zap className="h-5 w-5" />;
    case "Cloud": return <Shield className="h-5 w-5" />;
    default: return <Globe className="h-5 w-5" />;
  }
};

const Integrations = () => {
  return (
    <Layout>
      <div className="pt-16 pb-24">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Integrations
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Connect UnifyEdge with your existing tools and systems. Our extensive integration library 
              and AI agents ensure seamless data flow across your entire business ecosystem with intelligent automation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="px-4 py-2">
                <Zap className="h-4 w-4 mr-2" />
                Real-time Sync
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                Secure APIs
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Database className="h-4 w-4 mr-2" />
                Data Integrity
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                🤖 AI Agents
              </Badge>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Integrations</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">&lt; 1min</div>
                <div className="text-muted-foreground">Setup Time</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </CardContent>
            </Card>
          </div>

          {/* Integrations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {integrations.map((integration, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-secondary rounded-lg">
                        {getCategoryIcon(integration.category)}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{integration.name}</CardTitle>
                        <Badge className={getStatusColor(integration.status)} variant="secondary">
                          {integration.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{integration.description}</p>
                  <div className="space-y-2 mb-4">
                    {integration.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-success" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full gap-2" 
                    variant={integration.status === "Active" ? "default" : "outline"}
                    disabled={integration.status === "Coming Soon"}
                  >
                    {integration.status === "Active" ? "Configure" : 
                     integration.status === "Beta" ? "Join Beta" : "Coming Soon"}
                    {integration.status !== "Coming Soon" && <ExternalLink className="h-4 w-4" />}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* AI Integration Feature */}
          <Card className="mb-16 border-0 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="text-center py-12">
              <div className="text-6xl mb-6">🤖</div>
              <h3 className="text-2xl font-bold mb-4">
                AI-Powered Integration Intelligence
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our deployed AI agents continuously monitor your integrations, optimize data flow, 
                and automatically resolve common integration issues. Experience 99.9% uptime with 
                intelligent automation that learns from your business patterns.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-semibold mb-2">Smart Monitoring</h4>
                  <p className="text-sm text-muted-foreground">AI agents monitor all integrations 24/7</p>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-semibold mb-2">Auto-Resolution</h4>
                  <p className="text-sm text-muted-foreground">Automatic fixing of common integration issues</p>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-semibold mb-2">Predictive Insights</h4>
                  <p className="text-sm text-muted-foreground">Predict and prevent integration failures</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Custom Integration CTA */}
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="text-center py-12">
              <h3 className="text-2xl font-bold mb-4">
                Need a Custom Integration?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Don't see your tool listed? Our development team can create custom integrations 
                tailored to your specific business needs. Get in touch to discuss your requirements.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg">
                    Request Custom Integration
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Contact Sales
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

export default Integrations;