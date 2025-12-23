import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Building2, TrendingUp, Sparkles, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const HeroSection = () => {
  const stats = [
    { value: "10,000+", label: "Active Users", icon: Users },
    { value: "500+", label: "Companies", icon: Building2 },
    { value: "99.9%", label: "Uptime", icon: TrendingUp },
  ];

  const features = [
    "Automated BOM Calculations",
    "Real-time Inventory Tracking", 
    "Smart Payment Reminders",
  ];

  return (
    <section className="pt-32 pb-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 gradient-bg -z-10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
      
      {/* Floating shapes */}
      <div className="absolute top-40 right-20 w-20 h-20 border-2 border-primary/20 rounded-full float hidden lg:block" />
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-primary/10 blob float-delay-1 hidden lg:block" />
      <div className="absolute top-60 left-1/4 w-12 h-12 border-2 border-accent/30 rotate-45 float-delay-2 hidden lg:block" />

      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Hero Content */}
          <div className="space-y-8 fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium fade-in-up">
              <Sparkles className="h-4 w-4" />
              <span>Enterprise-grade Textile ERP Solution</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-display leading-tight">
                <span className="text-foreground fade-in-up-delay-1">Transform Your</span><br />
                <span className="gradient-text fade-in-up-delay-2">Textile Business</span><br />
                <span className="text-foreground fade-in-up-delay-3">with Smart ERP</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md fade-in-up-delay-4">
                UnifyEdge delivers intelligent software solutions that streamline operations, 
                boost productivity, and drive growth for textile manufacturers.
              </p>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 fade-in-up" style={{ animationDelay: '0.5s' }}>
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-3 py-1.5 bg-card rounded-full border border-border/50 text-sm"
                >
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Link to="/contact">
                <Button size="lg" className="rounded-full btn-gradient gap-2 group text-lg px-8">
                  Get Started 
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/analytics">
                <Button size="lg" variant="outline" className="rounded-full gap-2 text-lg px-8 hover:bg-primary/5 border-2">
                  Watch Demo
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 fade-in-up" style={{ animationDelay: '0.7s' }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-card/50 border border-border/50 hover-lift">
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard Preview Card */}
          <div className="slide-in-right">
            <Card className="p-6 shadow-elevated rounded-2xl overflow-hidden bg-card card-shine hover-lift border-border/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold font-display">Business Dashboard</h3>
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-destructive"></div>
                  <div className="h-3 w-3 rounded-full bg-warning"></div>
                  <div className="h-3 w-3 rounded-full bg-success"></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between bg-secondary/50 p-4 rounded-xl group hover:bg-secondary transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-medium">Revenue</p>
                      <p className="text-2xl font-bold">₹1.2 Cr</p>
                    </div>
                  </div>
                  <span className="bg-success/20 text-success px-3 py-1 rounded-full text-sm font-medium">+12% ↗</span>
                </div>

                <div className="flex items-center justify-between bg-secondary/50 p-4 rounded-xl group hover:bg-secondary transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="bg-accent/20 p-2 rounded-lg group-hover:bg-accent/30 transition-colors">
                      <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-medium">Active Users</p>
                      <p className="text-2xl font-bold">8,432</p>
                    </div>
                  </div>
                  <span className="bg-success/20 text-success px-3 py-1 rounded-full text-sm font-medium">+8% ↗</span>
                </div>

                <div className="flex items-center justify-between bg-secondary/50 p-4 rounded-xl group hover:bg-secondary transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="bg-success/20 p-2 rounded-lg group-hover:bg-success/30 transition-colors">
                      <svg className="h-5 w-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-medium">Automation</p>
                      <p className="text-2xl font-bold">95%</p>
                    </div>
                  </div>
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">Active</span>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Monthly Goals</span>
                    <span className="text-sm font-semibold">89%</span>
                  </div>
                  <Progress value={89} className="h-3 rounded-full" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;