import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Cookies = () => {
  return (
    <Layout>
      <div className="pt-16 pb-24">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2024</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>What Are Cookies</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Cookies are small text files that are stored on your computer or mobile device when 
                  you visit our website. They allow the website to recognize your device and remember 
                  certain information about your preferences or past actions.
                </p>
                <p>
                  UnifyEdge LLP ("we," "us," or "our") uses cookies and similar tracking technologies 
                  to enhance your experience on our ERP platform.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Types of Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <h4>Essential Cookies</h4>
                <p>
                  These cookies are necessary for the platform to function properly. They include:
                </p>
                <ul>
                  <li>Authentication cookies to keep you logged in</li>
                  <li>Security cookies to prevent fraudulent activities</li>
                  <li>Load balancing cookies to ensure optimal performance</li>
                </ul>

                <h4>Functional Cookies</h4>
                <p>
                  These cookies enable enhanced functionality and personalization:
                </p>
                <ul>
                  <li>Language preferences</li>
                  <li>User interface settings</li>
                  <li>Dashboard customizations</li>
                </ul>

                <h4>Analytics Cookies</h4>
                <p>
                  We use these cookies to understand how you use our platform:
                </p>
                <ul>
                  <li>Google Analytics for usage statistics</li>
                  <li>Performance monitoring tools</li>
                  <li>Error tracking systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third-Party Cookies</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Some cookies are placed by third-party services that appear on our platform:
                </p>
                <ul>
                  <li><strong>Google Analytics:</strong> Web analytics service</li>
                  <li><strong>Hotjar:</strong> User behavior analytics</li>
                  <li><strong>Razorpay:</strong> Payment processing</li>
                  <li><strong>Zendesk:</strong> Customer support chat</li>
                </ul>
                <p>
                  These third parties may use cookies to collect information about your online 
                  activities across different websites.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookie Consent</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  When you first visit our website, you will see a cookie banner asking for your 
                  consent to use non-essential cookies. You can choose to:
                </p>
                <ul>
                  <li>Accept all cookies</li>
                  <li>Reject non-essential cookies</li>
                  <li>Customize your cookie preferences</li>
                </ul>
                <p>
                  Your consent choices will be remembered for future visits. You can change your 
                  preferences at any time through our cookie settings.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Managing Cookies</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  You can control and manage cookies in several ways:
                </p>
                
                <h4>Browser Settings</h4>
                <p>
                  Most browsers allow you to control cookies through their settings. You can:
                </p>
                <ul>
                  <li>Block all cookies</li>
                  <li>Allow only first-party cookies</li>
                  <li>Delete existing cookies</li>
                  <li>Set up automatic cookie deletion</li>
                </ul>

                <h4>Opt-Out Tools</h4>
                <p>
                  For analytics cookies, you can opt out using:
                </p>
                <ul>
                  <li>Google Analytics Opt-out Browser Add-on</li>
                  <li>Your Advertising Choices</li>
                  <li>Network Advertising Initiative opt-out</li>
                </ul>

                <p>
                  <strong>Note:</strong> Disabling essential cookies may affect the functionality 
                  of our platform.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Different cookies have different retention periods:
                </p>
                <ul>
                  <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Remain for a specific period (up to 2 years)</li>
                  <li><strong>Local Storage:</strong> Remains until manually deleted</li>
                </ul>
                <p>
                  We regularly review and clean up unnecessary stored data.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We may update this Cookie Policy from time to time. When we do, we will post the 
                  revised policy on this page and update the "Last updated" date.
                </p>
                <p>
                  We encourage you to review this policy periodically to stay informed about how 
                  we use cookies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p><strong>UnifyEdge LLP</strong></p>
                  <p>Email: privacy@unifyedge.com</p>
                  <p>Phone: +91 (555) 123-4567</p>
                  <p>Address: 123 Business District, Mumbai, Maharashtra, India</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cookies;