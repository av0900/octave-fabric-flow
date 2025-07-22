import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <Layout>
      <div className="pt-16 pb-24">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: January 2024</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  By accessing and using the UnifyEdge platform ("Service"), you accept and agree to be 
                  bound by the terms and provision of this agreement. If you do not agree to abide by the 
                  above, please do not use this service.
                </p>
                <p>
                  These Terms of Service ("Terms") govern your use of our ERP software platform operated 
                  by UnifyEdge LLP ("Company," "we," "us," or "our").
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Use License</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Permission is granted to temporarily use the UnifyEdge platform for personal, 
                  non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul>
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the platform</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Share account credentials with unauthorized users</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Service Description</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  UnifyEdge provides cloud-based ERP solutions specifically designed for textile 
                  manufacturing and trading businesses. Our services include:
                </p>
                <ul>
                  <li>Inventory management and tracking</li>
                  <li>Order processing and fulfillment</li>
                  <li>Bill of Materials (BOM) management</li>
                  <li>Financial reporting and analytics</li>
                  <li>Invoicing and billing solutions</li>
                  <li>Third-party integrations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. User Accounts</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  When you create an account with us, you must provide information that is accurate, 
                  complete, and current at all times. You are responsible for safeguarding the password 
                  and for maintaining the confidentiality of your account.
                </p>
                <p>
                  You agree to notify us immediately upon becoming aware of any breach of security or 
                  unauthorized use of your account.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  All fees are quoted in Indian Rupees (INR) and are due upon receipt of invoice. 
                  Subscription fees are billed in advance on a monthly or annual basis.
                </p>
                <ul>
                  <li>All payments are non-refundable except as required by law</li>
                  <li>Late payments may result in service suspension</li>
                  <li>Price changes will be communicated 30 days in advance</li>
                  <li>GST and other applicable taxes will be added to your invoice</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Data Ownership and Privacy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  You retain all rights to your data. We will not use your data for any purpose other 
                  than providing the Service to you. We implement industry-standard security measures 
                  to protect your data.
                </p>
                <p>
                  Our data handling practices are governed by our Privacy Policy, which is incorporated 
                  into these Terms by reference.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Service Availability</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We strive to maintain 99.9% uptime for our Service. However, we do not guarantee 
                  uninterrupted access and may perform maintenance that temporarily affects service availability.
                </p>
                <p>
                  We will provide advance notice of scheduled maintenance whenever possible.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  In no event shall UnifyEdge LLP or its suppliers be liable for any damages arising 
                  out of the use or inability to use the Service, even if UnifyEdge LLP has been 
                  notified orally or in writing of the possibility of such damage.
                </p>
                <p>
                  Our total liability to you for any claim shall not exceed the amount paid by you 
                  for the Service in the 12 months preceding the claim.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Termination</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Either party may terminate this agreement at any time with 30 days written notice. 
                  We may terminate your access immediately if you violate these Terms.
                </p>
                <p>
                  Upon termination, your right to use the Service will cease immediately, and we will 
                  provide you with a data export for 30 days following termination.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p><strong>UnifyEdge LLP</strong></p>
                  <p>Email: legal@unifyedge.com</p>
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

export default Terms;