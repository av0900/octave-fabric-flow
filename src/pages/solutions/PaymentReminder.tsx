import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, AlertCircle, DollarSign, Calendar, Zap, Bot } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Bot className="h-6 w-6" />,
    title: "AI-Powered Smart Reminders",
    description: "Our AI agents analyze payment patterns and send personalized reminders at optimal times for maximum effectiveness."
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Automated Scheduling",
    description: "Set up custom reminder sequences with smart timing based on invoice due dates and customer behavior."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Multi-Channel Alerts",
    description: "Send reminders via email, SMS, WhatsApp, and in-app notifications for maximum reach."
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Payment Tracking",
    description: "Real-time payment status tracking with automatic reminder updates and escalation workflows."
  },
  {
    icon: <AlertCircle className="h-6 w-6" />,
    title: "Escalation Management",
    description: "Intelligent escalation paths that automatically involve team members based on payment delays."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Aging Reports",
    description: "Comprehensive aging reports with AI insights to optimize your collection strategies."
  }
];

const reminderTypes = [
  {
    title: "Gentle Reminder",
    timing: "3 days before due",
    tone: "Friendly",
    description: "Polite reminder about upcoming payment",
    color: "bg-green-100 text-green-800"
  },
  {
    title: "Due Date Alert",
    timing: "On due date",
    tone: "Professional",
    description: "Professional notification that payment is due today",
    color: "bg-blue-100 text-blue-800"
  },
  {
    title: "Overdue Notice",
    timing: "1 day after due",
    tone: "Firm",
    description: "Firm but respectful overdue payment notice",
    color: "bg-yellow-100 text-yellow-800"
  },
  {
    title: "Final Notice",
    timing: "7 days overdue",
    tone: "Urgent",
    description: "Final notice before escalation to collections",
    color: "bg-red-100 text-red-800"
  }
];

const stats = [
  { label: "Faster Payments", value: "65%", icon: <Zap className="h-5 w-5" /> },
  { label: "Reduced DSO", value: "40%", icon: <Clock className="h-5 w-5" /> },
  { label: "Collection Rate", value: "92%", icon: <DollarSign className="h-5 w-5" /> },
  { label: "Time Saved", value: "80%", icon: <CheckCircle2 className="h-5 w-5" /> }
];

const PaymentReminder = () => {
  return (
    <Layout>
      <div className="pt-16 pb-24">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full">
                <Bot className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI-Powered Payment Reminders
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Never chase payments again. Our AI agents automatically send smart, personalized 
              payment reminders that get results while maintaining customer relationships.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="px-4 py-2">
                <Bot className="h-4 w-4 mr-2" />
                AI-Powered
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Zap className="h-4 w-4 mr-2" />
                Automated
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <DollarSign className="h-4 w-4 mr-2" />
                Results-Driven
              </Badge>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 bg-gradient-to-br from-card to-secondary/50">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
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

          {/* Reminder Types */}
          <Card className="mb-16 border-0 bg-gradient-to-r from-background to-secondary/30">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Smart Reminder Sequence</CardTitle>
              <p className="text-center text-muted-foreground">
                Our AI determines the perfect timing and tone for each reminder
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {reminderTypes.map((reminder, index) => (
                  <div key={index} className="text-center">
                    <div className="relative mb-4">
                      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                        {index + 1}
                      </div>
                      {index < reminderTypes.length - 1 && (
                        <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border"></div>
                      )}
                    </div>
                    <Badge className={reminder.color} variant="secondary">
                      {reminder.timing}
                    </Badge>
                    <h3 className="font-semibold mt-2 mb-1">{reminder.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{reminder.description}</p>
                    <Badge variant="outline" className="text-xs">
                      {reminder.tone} Tone
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Features */}
          <Card className="mb-16 border-0 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="text-2xl text-center flex items-center justify-center gap-3">
                <Bot className="h-8 w-8 text-primary" />
                AI Agent Capabilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Intelligent Analysis</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      <span>Customer payment history analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      <span>Optimal timing prediction</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      <span>Communication preference learning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      <span>Success rate optimization</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Automated Actions</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      <span>Smart reminder scheduling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      <span>Personalized message generation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      <span>Multi-channel delivery</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      <span>Automatic escalation handling</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="border-0 bg-gradient-to-r from-primary/10 to-accent/10">
            <CardContent className="text-center py-12">
              <h3 className="text-3xl font-bold mb-4">
                Get Paid Faster with AI
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                Join thousands of businesses using our AI-powered payment reminder system. 
                Reduce your Days Sales Outstanding and improve cash flow automatically.
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

export default PaymentReminder;