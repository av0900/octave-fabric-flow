import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  IndianRupee, 
  Clock, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Download,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Invoicing = () => {
  const features = [
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Smart Invoice Generation",
      description: "Create professional invoices in seconds with automated data pulling from your textile orders."
    },
    {
      icon: <IndianRupee className="h-8 w-8 text-primary" />,
      title: "Multi-Currency Support",
      description: "Handle global transactions with support for 150+ currencies and real-time exchange rates."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Automated Reminders",
      description: "Never chase payments again with intelligent follow-up sequences and payment reminders."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "GST Compliance",
      description: "Fully compliant with Indian GST regulations and automatic tax calculations."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Quick Payments",
      description: "Enable instant payments with UPI, cards, and net banking integrations."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Revenue Analytics",
      description: "Track payment trends, outstanding amounts, and cash flow with detailed reports."
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "₹999",
      period: "/month",
      features: [
        "Up to 100 invoices/month",
        "Basic templates",
        "Email support",
        "GST compliance",
        "Payment reminders"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "₹2,499",
      period: "/month",
      features: [
        "Up to 500 invoices/month",
        "Custom templates",
        "Priority support",
        "Multi-currency",
        "Advanced analytics",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹4,999",
      period: "/month",
      features: [
        "Unlimited invoices",
        "White-label solution",
        "24/7 phone support",
        "Custom integrations",
        "Advanced reporting",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const integrations = [
    "Razorpay", "PayU", "CCAvenue", "Paytm Business", "PhonePe Business", 
    "Google Pay Business", "HDFC Payment Gateway", "ICICI Payment Gateway"
  ];

  return (
    <Layout>
      <div className="pt-16 pb-24">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              New Feature
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Smart Invoicing for Textiles
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Streamline your billing process with India's most advanced invoicing solution 
              designed specifically for textile manufacturers and traders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
              <div className="text-muted-foreground">Invoices Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">₹500Cr+</div>
              <div className="text-muted-foreground">Transactions Processed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Everything You Need to Manage Invoices
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Create Invoice</h3>
                <p className="text-muted-foreground">
                  Select your template, add items, and generate professional invoices instantly.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Send & Track</h3>
                <p className="text-muted-foreground">
                  Send invoices via email, WhatsApp, or SMS and track when they're viewed.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Get Paid</h3>
                <p className="text-muted-foreground">
                  Receive payments through multiple channels and get real-time notifications.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold">
                      {plan.price}
                      <span className="text-lg font-normal text-muted-foreground">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Integrations */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Payment Gateway Integrations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-4">
                {integrations.map((integration, index) => (
                  <Badge key={index} variant="outline" className="px-4 py-2">
                    {integration}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Invoicing?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of textile businesses who have streamlined their billing 
                process with UnifyEdge Invoicing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Start 14-Day Free Trial
                </Button>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Talk to Sales
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

export default Invoicing;