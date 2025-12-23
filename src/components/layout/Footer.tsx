import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 relative overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background decorations */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-60 h-60 bg-accent/5 rounded-full blur-3xl" />

      <div className="container py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/4e048db8-c9bb-40ce-b177-127638a2a814.png" 
                alt="UnifyEdge" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Transforming textile manufacturing with cutting-edge ERP solutions. 
              Empowering businesses to streamline operations and drive growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:info@unifyedge.shop" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span>info@unifyedge.shop</span>
              </a>
              <a href="tel:+917009849965" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span>+91 7009849965</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span>Phase 9, Mohali, Punjab 160062</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a 
                href="https://www.instagram.com/unifyedge" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-full border border-border/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/unifyedge" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-full border border-border/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-display">Solutions</h3>
            <ul className="space-y-3">
              {[
                { label: "ERP System", path: "/solutions/erp" },
                { label: "BOM & Costing", path: "/solutions/bom" },
                { label: "Inventory Management", path: "/solutions/inventory" },
                { label: "Invoicing", path: "/solutions/invoicing" },
                { label: "Payment Reminder", path: "/solutions/payment-reminder" },
                { label: "Integrations", path: "/solutions/integrations" },
              ].map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-display">Company</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", path: "/company/about" },
                { label: "Our Team", path: "/company/team" },
                { label: "Careers", path: "/company/careers" },
                { label: "Contact", path: "/contact" },
                { label: "Pricing", path: "/pricing" },
              ].map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-display">Legal</h3>
            <ul className="space-y-3">
              {[
                { label: "Privacy Policy", path: "/legal/privacy" },
                { label: "Terms of Service", path: "/legal/terms" },
                { label: "Cookie Policy", path: "/legal/cookies" },
                { label: "Compliance", path: "/legal/compliance" },
              ].map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} UnifyEdge LLP. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Made with ❤️ in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;