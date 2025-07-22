import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const HeroSection = () => {
  return (
    <section className="pt-16 pb-24 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-foreground">Enterprise</span><br />
                <span className="text-foreground">Solutions</span><br />
                <span className="text-primary">for Modern</span><br />
                <span className="text-primary">Business</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                UnifyEdge transforms how businesses operate with intelligent software solutions. 
                Streamline operations, boost productivity, and drive growth with our comprehensive platform.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/analytics">
                <Button size="lg" variant="outline" className="gap-2">
                  Watch Demo
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">10,000+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          {/* Dashboard Preview Card */}
          <Card className="p-6 shadow-lg rounded-lg overflow-hidden bg-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Business Dashboard</h3>
              <div className="flex gap-1">
                <div className="h-3 w-3 rounded-full bg-destructive"></div>
                <div className="h-3 w-3 rounded-full bg-success"></div>
                <div className="h-3 w-3 rounded-full bg-accent"></div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between bg-secondary p-4 rounded-md">
                <div className="flex items-center gap-2">
                  <span className="bg-primary/20 p-1 rounded">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <span>Revenue: $1.2M</span>
                </div>
                <span className="text-success">+12% ↗</span>
              </div>

              <div className="flex items-center justify-between bg-secondary p-4 rounded-md">
                <div className="flex items-center gap-2">
                  <span className="bg-primary/20 p-1 rounded">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                  <span>Active Users: 8,432</span>
                </div>
                <span className="text-success">+8% ↗</span>
              </div>

              <div className="flex items-center justify-between bg-secondary p-4 rounded-md">
                <div className="flex items-center gap-2">
                  <span className="bg-primary/20 p-1 rounded">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </span>
                  <span>Automation: 95%</span>
                </div>
                <span className="bg-success/20 text-success px-2 py-0.5 rounded text-sm">Active</span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Monthly Goals</span>
                  <span className="text-sm font-medium">89%</span>
                </div>
                <Progress value={89} className="h-2" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;