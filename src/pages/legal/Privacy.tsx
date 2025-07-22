import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <Layout>
      <div className="pt-16 pb-24">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2024</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  UnifyEdge LLP ("we," "our," or "us") collects information you provide directly to us, 
                  such as when you create an account, use our services, or contact us for support.
                </p>
                <h4>Information you provide to us:</h4>
                <ul>
                  <li>Account information (name, email address, phone number)</li>
                  <li>Company information (business name, address, industry details)</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Communication data (support requests, feedback)</li>
                  <li>Textile manufacturing data (inventory, orders, production metrics)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide, maintain, and improve our ERP services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, investigate, and prevent fraudulent activities</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Information Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  except as described in this privacy policy:
                </p>
                <ul>
                  <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our platform</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of assets</li>
                  <li><strong>Consent:</strong> With your explicit consent for any other purpose</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We implement appropriate technical and organizational security measures to protect 
                  your personal information, including:
                </p>
                <ul>
                  <li>End-to-end encryption for data transmission</li>
                  <li>Secure data storage with regular backups</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Employee training on data protection practices</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We retain your information for as long as your account is active or as needed to 
                  provide you services. We will retain and use your information as necessary to 
                  comply with legal obligations, resolve disputes, and enforce our agreements.
                </p>
                <p>
                  Upon account termination, we will delete your personal data within 90 days, 
                  except where retention is required by law.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>Under applicable data protection laws, you have the right to:</p>
                <ul>
                  <li>Access your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Delete your personal information</li>
                  <li>Object to processing of your information</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p>
                  To exercise these rights, please contact us at privacy@unifyedge.com
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  If you have any questions about this Privacy Policy, please contact us:
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

export default Privacy;