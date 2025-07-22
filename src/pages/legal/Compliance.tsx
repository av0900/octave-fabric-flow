import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, FileCheck, Lock } from "lucide-react";

const Compliance = () => {
  const certifications = [
    {
      title: "ISO 27001",
      description: "Information Security Management System",
      status: "Certified",
      icon: <Shield className="h-8 w-8 text-primary" />
    },
    {
      title: "SOC 2 Type II",
      description: "Security, Availability, and Confidentiality",
      status: "Compliant",
      icon: <Lock className="h-8 w-8 text-primary" />
    },
    {
      title: "GDPR",
      description: "General Data Protection Regulation",
      status: "Compliant",
      icon: <FileCheck className="h-8 w-8 text-primary" />
    },
    {
      title: "GST Compliance",
      description: "Indian Goods and Services Tax",
      status: "Certified",
      icon: <CheckCircle className="h-8 w-8 text-primary" />
    }
  ];

  const frameworks = [
    "ISO 27001 - Information Security Management",
    "SOC 2 Type II - Security and Availability",
    "GDPR - Data Protection and Privacy",
    "GST - Indian Tax Compliance",
    "Companies Act 2013 - Corporate Governance",
    "IT Act 2000 - Digital Security Standards"
  ];

  return (
    <Layout>
      <div className="pt-16 pb-24">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Compliance & Security</h1>
            <p className="text-muted-foreground">
              UnifyEdge maintains the highest standards of security, privacy, and regulatory compliance
            </p>
          </div>

          <div className="space-y-8">
            {/* Certifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">{cert.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold">{cert.title}</h3>
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            {cert.status}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{cert.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Data Protection & Privacy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  UnifyEdge LLP is committed to protecting the privacy and security of your data. 
                  We implement comprehensive data protection measures in compliance with international 
                  and Indian data protection laws.
                </p>
                
                <h4>Our Data Protection Commitments:</h4>
                <ul>
                  <li>End-to-end encryption for all data in transit and at rest</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Strict access controls and authentication mechanisms</li>
                  <li>Data minimization and purpose limitation principles</li>
                  <li>Right to data portability and deletion</li>
                  <li>Transparent privacy practices and regular policy updates</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security Framework</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Our security framework is built on industry best practices and internationally 
                  recognized standards to ensure the highest level of protection for your business data.
                </p>
                
                <h4>Technical Safeguards:</h4>
                <ul>
                  <li>Multi-factor authentication (MFA) for all user accounts</li>
                  <li>Role-based access control (RBAC) system</li>
                  <li>Regular automated backups with disaster recovery</li>
                  <li>Network security monitoring and intrusion detection</li>
                  <li>Secure coding practices and regular code reviews</li>
                  <li>Vulnerability management and patch deployment</li>
                </ul>

                <h4>Administrative Safeguards:</h4>
                <ul>
                  <li>Security awareness training for all employees</li>
                  <li>Background checks for personnel with data access</li>
                  <li>Incident response and breach notification procedures</li>
                  <li>Regular security policy reviews and updates</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Regulatory Compliance</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We ensure compliance with all applicable regulations in the textile industry 
                  and data protection landscape:
                </p>
                
                <h4>Compliance Frameworks:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-4">
                  {frameworks.map((framework, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">{framework}</span>
                    </div>
                  ))}
                </div>

                <h4>Industry-Specific Compliance:</h4>
                <ul>
                  <li>Textile waste management regulations</li>
                  <li>Environmental compliance reporting</li>
                  <li>Labor law compliance tracking</li>
                  <li>Export-import documentation standards</li>
                  <li>Quality certification management</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Audit & Monitoring</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We maintain transparent audit trails and continuous monitoring to ensure 
                  ongoing compliance and security.
                </p>
                
                <h4>Audit Practices:</h4>
                <ul>
                  <li>Annual third-party security assessments</li>
                  <li>Quarterly internal compliance reviews</li>
                  <li>Continuous security monitoring and alerting</li>
                  <li>Regular penetration testing and vulnerability scans</li>
                  <li>Compliance documentation and evidence collection</li>
                  <li>Customer audit support and documentation</li>
                </ul>

                <h4>Monitoring & Reporting:</h4>
                <ul>
                  <li>Real-time security event monitoring</li>
                  <li>Automated compliance reporting</li>
                  <li>Performance and availability monitoring</li>
                  <li>Regular compliance status updates to stakeholders</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Business Continuity</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Our business continuity plan ensures service availability and data protection 
                  even during unexpected events.
                </p>
                
                <h4>Continuity Measures:</h4>
                <ul>
                  <li>Multi-region data replication and backup</li>
                  <li>Disaster recovery procedures with RTO &lt; 4 hours</li>
                  <li>Regular business continuity testing</li>
                  <li>Alternative communication channels</li>
                  <li>Emergency response procedures</li>
                  <li>Vendor and supplier risk management</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Our Compliance Team</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  For compliance-related inquiries, audit requests, or security questions, 
                  please contact our dedicated compliance team:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p><strong>Compliance Department</strong></p>
                  <p><strong>UnifyEdge LLP</strong></p>
                  <p>Email: compliance@unifyedge.com</p>
                  <p>Security Issues: security@unifyedge.com</p>
                  <p>Phone: +91 (555) 123-4567</p>
                  <p>Address: 123 Business District, Mumbai, Maharashtra, India</p>
                </div>
                
                <p className="mt-4">
                  <strong>Response Times:</strong> We aim to respond to all compliance inquiries 
                  within 48 hours during business days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Compliance;