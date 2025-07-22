import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, IndianRupee } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Full-time",
      salary: "₹15-25 LPA",
      description: "Join our engineering team to build next-generation ERP solutions for the textile industry.",
      requirements: ["5+ years React/Node.js experience", "ERP system knowledge", "Textile industry experience preferred"]
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Delhi, India",
      type: "Full-time",
      salary: "₹20-30 LPA",
      description: "Drive product strategy and roadmap for our textile ERP platform.",
      requirements: ["3+ years product management", "B2B SaaS experience", "Technical background preferred"]
    },
    {
      title: "Sales Executive",
      department: "Sales",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "₹8-15 LPA + Commission",
      description: "Build relationships with textile manufacturers and drive business growth.",
      requirements: ["2+ years B2B sales", "Textile industry knowledge", "Strong communication skills"]
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "₹12-20 LPA",
      description: "Maintain and scale our cloud infrastructure to support growing customer base.",
      requirements: ["AWS/Azure experience", "Docker/Kubernetes", "CI/CD pipeline expertise"]
    }
  ];

  const benefits = [
    "Competitive salary packages",
    "Health insurance for you and family",
    "Flexible working hours",
    "Remote work options",
    "Learning and development budget",
    "Annual team retreats",
    "Stock options",
    "Paid time off"
  ];

  return (
    <Layout>
      <div className="pt-16 pb-24">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join UnifyEdge
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Help us transform the textile industry with cutting-edge technology. 
              Build your career with a team that values innovation, growth, and impact.
            </p>
          </div>

          {/* Why Work With Us */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Why Work With Us?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-3">🚀</div>
                  <h3 className="font-semibold mb-2">Innovation First</h3>
                  <p className="text-sm text-muted-foreground">Work on cutting-edge technology that's transforming an entire industry.</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">📈</div>
                  <h3 className="font-semibold mb-2">Growth Focused</h3>
                  <p className="text-sm text-muted-foreground">Continuous learning opportunities and clear career progression paths.</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">🤝</div>
                  <h3 className="font-semibold mb-2">Team Culture</h3>
                  <p className="text-sm text-muted-foreground">Collaborative environment where every voice is heard and valued.</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">💰</div>
                  <h3 className="font-semibold mb-2">Great Benefits</h3>
                  <p className="text-sm text-muted-foreground">Competitive compensation and comprehensive benefits package.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <h3 className="text-xl font-bold">{position.title}</h3>
                          <Badge variant="outline">{position.department}</Badge>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {position.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {position.type}
                          </div>
                          <div className="flex items-center gap-1">
                            <IndianRupee className="h-4 w-4" />
                            {position.salary}
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-3">{position.description}</p>
                        
                        <div>
                          <p className="font-medium mb-2">Requirements:</p>
                          <ul className="text-sm text-muted-foreground">
                            {position.requirements.map((req, reqIndex) => (
                              <li key={reqIndex} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-4 lg:mt-0 lg:ml-6">
                        <Button>Apply Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Benefits & Perks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Careers;