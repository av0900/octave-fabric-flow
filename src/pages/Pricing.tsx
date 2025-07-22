import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, X } from "lucide-react";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    name: "Starter",
    price: "199",
    period: "month",
    description: "Perfect for small textile businesses",
    popular: false,
    features: [
      "Up to 5 users",
      "Basic BOM & Costing",
      "Inventory management",
      "Order tracking",
      "Email support",
      "Mobile app access",
    ],
    limitations: [
      "Advanced analytics",
      "Custom integrations",
      "API access",
      "Priority support"
    ]
  },
  {
    name: "Professional",
    price: "499",
    period: "month",
    description: "Ideal for growing textile manufacturers",
    popular: true,
    features: [
      "Up to 25 users",
      "Advanced BOM & Costing",
      "Full inventory management",
      "CRM & Order management",
      "Production analytics",
      "Standard integrations",
      "Phone & email support",
      "Mobile app access",
      "Custom reports",
    ],
    limitations: [
      "Custom integrations",
      "Dedicated support",
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large-scale textile operations",
    popular: false,
    features: [
      "Unlimited users",
      "Full ERP suite",
      "Advanced analytics & BI",
      "Custom integrations",
      "API access",
      "Multi-location support",
      "Dedicated account manager",
      "24/7 priority support",
      "Custom training",
      "White-label options",
    ],
    limitations: []
  }
];

const Pricing = () => {
  return (
    <Layout>
      <div className="pt-16 pb-24">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your textile business. Scale up or down as your needs change, 
              with no hidden fees or long-term commitments.
            </p>
            <div className="flex justify-center items-center gap-4 mb-8">
              <Badge variant="secondary" className="px-4 py-2">
                30-day free trial
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                No setup fees
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Cancel anytime
              </Badge>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">
                      {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
                    </span>
                    {plan.period && <span className="text-muted-foreground">/{plan.period}</span>}
                  </div>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, limitIndex) => (
                      <li key={limitIndex} className="flex items-center gap-3 text-muted-foreground">
                        <X className="h-5 w-5 flex-shrink-0" />
                        <span>{limitation}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="block">
                    <Button 
                      className="w-full" 
                      variant={plan.popular ? "default" : "outline"}
                      size="lg"
                    >
                      {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-2">What's included in the free trial?</h3>
                  <p className="text-muted-foreground">
                    All features of your chosen plan are available during the 30-day free trial. 
                    No credit card required to start.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Can I change plans later?</h3>
                  <p className="text-muted-foreground">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect 
                    at the next billing cycle.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Is training included?</h3>
                  <p className="text-muted-foreground">
                    Professional and Enterprise plans include comprehensive training. Starter plan 
                    users have access to our knowledge base and video tutorials.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                  <p className="text-muted-foreground">
                    We accept all major credit cards, ACH bank transfers, and wire transfers for 
                    Enterprise customers.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Is there a setup fee?</h3>
                  <p className="text-muted-foreground">
                    No setup fees for Starter and Professional plans. Enterprise customers may 
                    have implementation fees based on customization requirements.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
                  <p className="text-muted-foreground">
                    Yes, you can cancel your subscription at any time. Your access continues 
                    until the end of your current billing period.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;