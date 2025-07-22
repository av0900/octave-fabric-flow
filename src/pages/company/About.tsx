import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <Layout>
      <div className="pt-16 pb-24">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About UnifyEdge
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a leading provider of ERP solutions specifically designed for the textile industry, 
              helping businesses streamline their operations and achieve sustainable growth.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To empower textile manufacturers with cutting-edge technology solutions that optimize 
                  operations, reduce costs, and drive sustainable business growth in an increasingly 
                  competitive global market.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To become the world's most trusted partner for textile industry digital transformation, 
                  setting new standards for innovation, efficiency, and sustainability in manufacturing operations.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Companies Trust Us</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">₹50Cr+</div>
              <div className="text-muted-foreground">Cost Savings Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>

          {/* Values */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    Continuously pushing boundaries to deliver state-of-the-art solutions.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3">Reliability</h3>
                  <p className="text-muted-foreground">
                    Building trust through consistent performance and unwavering support.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3">Partnership</h3>
                  <p className="text-muted-foreground">
                    Working closely with clients to understand and exceed their expectations.
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

export default About;