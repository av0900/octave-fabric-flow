import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/4e048db8-c9bb-40ce-b177-127638a2a814.png" 
                alt="UnifyEdge" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground">
              Transforming textile manufacturing with cutting-edge ERP solutions
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/unifyedge" className="text-foreground hover:text-primary">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 1C3.6891 1 1 3.6891 1 7v10c0 3.3109 2.6891 6 6 6h10c3.3109 0 6-2.6891 6-6V7c0-3.3109-2.6891-6-6-6H7zM7 3h10c2.2091 0 4 1.7909 4 4v10c0 2.2091-1.7909 4-4 4H7c-2.2091 0-4-1.7909-4-4V7c0-2.2091 1.7909-4 4-4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8.5c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 7.5h.01" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/unifyedge" className="text-foreground hover:text-primary">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions/erp" className="text-muted-foreground hover:text-primary">
                  ERP System
                </Link>
              </li>
              <li>
                <Link to="/solutions/bom" className="text-muted-foreground hover:text-primary">
                  BOM & Costing
                </Link>
              </li>
              <li>
                <Link to="/solutions/inventory" className="text-muted-foreground hover:text-primary">
                  Inventory Management
                </Link>
              </li>
              <li>
                <Link to="/solutions/invoicing" className="text-muted-foreground hover:text-primary">
                  Invoicing
                </Link>
              </li>
              <li>
                <Link to="/solutions/payment-reminder" className="text-muted-foreground hover:text-primary">
                  Payment Reminder
                </Link>
              </li>
              <li>
                <Link to="/solutions/integrations" className="text-muted-foreground hover:text-primary">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/company/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/company/team" className="text-muted-foreground hover:text-primary">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/company/careers" className="text-muted-foreground hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/legal/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/terms" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/legal/cookies" className="text-muted-foreground hover:text-primary">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/compliance" className="text-muted-foreground hover:text-primary">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground text-center">
            © {new Date().getFullYear()} UnifyEdge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;