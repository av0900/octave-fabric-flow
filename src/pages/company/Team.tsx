import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Pratham Arora",
      position: "Chief Executive Officer",
      description: "Visionary leader with 10+ years in textile technology and business strategy.",
      email: "pratham.arora55@unifyedge.shop",
      linkedin: "https://www.linkedin.com/company/unifyedge",
      image: "/lovable-uploads/b1749b33-a45b-4b85-823c-14efa2d2a458.png"
    },
    {
      name: "Shubham Chaudhary",
      position: "Chief Technology Officer",
      description: "Expert in ERP systems and software architecture with deep textile industry knowledge.",
      email: "shubham@unifyedge.shop",
      linkedin: "https://www.linkedin.com/company/unifyedge",
      image: "/lovable-uploads/a241852b-e175-4feb-bc0a-8a78fb3d020c.png"
    },
    {
      name: "Aditeya Gupta",
      position: "Chief Financial Officer",
      description: "Financial strategist ensuring sustainable growth and operational excellence.",
      email: "aditeya@unifyedge.shop",
      linkedin: "https://www.linkedin.com/company/unifyedge",
      image: "/lovable-uploads/5f568751-5b53-469e-9d54-d1840df9a42d.png"
    }
  ];

  return (
    <Layout>
      <div className="pt-16 pb-24">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our leadership team combines deep industry expertise with cutting-edge technology 
              knowledge to drive innovation in textile manufacturing.
            </p>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg ${
                        member.name === "Pratham Arora" ? "object-top" : ""
                      }`}
                    />
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <Badge variant="secondary" className="mb-3">
                      {member.position}
                    </Badge>
                    <p className="text-muted-foreground text-sm">
                      {member.description}
                    </p>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Join Us Section */}
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">Join Our Growing Team</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for 
                innovation and excellence in the textile industry.
              </p>
              <a
                href="/company/careers"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                View Open Positions
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Team;