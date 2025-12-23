import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "py-3 bg-background/95 backdrop-blur-lg shadow-soft border-b border-border/50" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img 
            src="/lovable-uploads/4e048db8-c9bb-40ce-b177-127638a2a814.png" 
            alt="UnifyEdge" 
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-6">
              {/* Solutions Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium underline-animation">
                    Solutions
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-[220px] p-2 bg-card/95 backdrop-blur-lg border-border/50">
                  <DropdownMenuItem asChild>
                    <Link to="/solutions/erp" className={cn("cursor-pointer rounded-md transition-colors", isActive("/solutions/erp") && "bg-primary/10 text-primary")}>
                      ERP System
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/solutions/bom" className={cn("cursor-pointer rounded-md transition-colors", isActive("/solutions/bom") && "bg-primary/10 text-primary")}>
                      BOM & Costing
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/solutions/inventory" className={cn("cursor-pointer rounded-md transition-colors", isActive("/solutions/inventory") && "bg-primary/10 text-primary")}>
                      Inventory Management
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/solutions/invoicing" className={cn("cursor-pointer rounded-md transition-colors", isActive("/solutions/invoicing") && "bg-primary/10 text-primary")}>
                      Invoicing
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/solutions/analytics" className={cn("cursor-pointer rounded-md transition-colors", isActive("/solutions/analytics") && "bg-primary/10 text-primary")}>
                      Analytics
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/solutions/integrations" className={cn("cursor-pointer rounded-md transition-colors", isActive("/solutions/integrations") && "bg-primary/10 text-primary")}>
                      Integrations
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/solutions/payment-reminder" className={cn("cursor-pointer rounded-md transition-colors", isActive("/solutions/payment-reminder") && "bg-primary/10 text-primary")}>
                      Payment Reminders
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Company Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium underline-animation">
                    Company
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-[200px] p-2 bg-card/95 backdrop-blur-lg border-border/50">
                  <DropdownMenuItem asChild>
                    <Link to="/company/about" className={cn("cursor-pointer rounded-md transition-colors", isActive("/company/about") && "bg-primary/10 text-primary")}>
                      About Us
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/company/team" className={cn("cursor-pointer rounded-md transition-colors", isActive("/company/team") && "bg-primary/10 text-primary")}>
                      Our Team
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/company/careers" className={cn("cursor-pointer rounded-md transition-colors", isActive("/company/careers") && "bg-primary/10 text-primary")}>
                      Careers
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link 
                to="/pricing" 
                className={cn(
                  "text-foreground hover:text-primary transition-colors font-medium underline-animation",
                  isActive("/pricing") && "text-primary"
                )}
              >
                Pricing
              </Link>

              <Link 
                to="/contact" 
                className={cn(
                  "text-foreground hover:text-primary transition-colors font-medium underline-animation",
                  isActive("/contact") && "text-primary"
                )}
              >
                Contact
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link to="/signup">
                <Button variant="outline" className="rounded-full hover:bg-primary/10 hover:border-primary transition-all duration-300">
                  Sign Up
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="rounded-full btn-gradient gap-2 group">
                  Request Demo 
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              className="text-foreground p-2 hover:bg-primary/10 rounded-full transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={cn(
            "fixed top-[72px] left-0 right-0 bottom-0 bg-background/98 backdrop-blur-lg z-50 transition-all duration-300 overflow-y-auto",
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          )}
        >
          <div className="container py-6 flex flex-col space-y-2 stagger-children">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium px-4 py-2">Solutions</p>
            <Link
              to="/solutions/erp"
              className={cn("px-4 py-3 rounded-lg transition-colors", isActive("/solutions/erp") ? "bg-primary/10 text-primary" : "hover:bg-secondary")}
              onClick={() => setIsMenuOpen(false)}
            >
              ERP System
            </Link>
            <Link
              to="/solutions/bom"
              className={cn("px-4 py-3 rounded-lg transition-colors", isActive("/solutions/bom") ? "bg-primary/10 text-primary" : "hover:bg-secondary")}
              onClick={() => setIsMenuOpen(false)}
            >
              BOM & Costing
            </Link>
            <Link
              to="/solutions/inventory"
              className={cn("px-4 py-3 rounded-lg transition-colors", isActive("/solutions/inventory") ? "bg-primary/10 text-primary" : "hover:bg-secondary")}
              onClick={() => setIsMenuOpen(false)}
            >
              Inventory Management
            </Link>
            <Link
              to="/solutions/analytics"
              className={cn("px-4 py-3 rounded-lg transition-colors", isActive("/solutions/analytics") ? "bg-primary/10 text-primary" : "hover:bg-secondary")}
              onClick={() => setIsMenuOpen(false)}
            >
              Analytics
            </Link>
            <Link
              to="/solutions/integrations"
              className={cn("px-4 py-3 rounded-lg transition-colors", isActive("/solutions/integrations") ? "bg-primary/10 text-primary" : "hover:bg-secondary")}
              onClick={() => setIsMenuOpen(false)}
            >
              Integrations
            </Link>
            <Link
              to="/solutions/payment-reminder"
              className={cn("px-4 py-3 rounded-lg transition-colors", isActive("/solutions/payment-reminder") ? "bg-primary/10 text-primary" : "hover:bg-secondary")}
              onClick={() => setIsMenuOpen(false)}
            >
              Payment Reminders
            </Link>

            <div className="h-px bg-border my-4" />
            
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium px-4 py-2">Company</p>
            <Link
              to="/company/about"
              className={cn("px-4 py-3 rounded-lg transition-colors", isActive("/company/about") ? "bg-primary/10 text-primary" : "hover:bg-secondary")}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/company/team"
              className={cn("px-4 py-3 rounded-lg transition-colors", isActive("/company/team") ? "bg-primary/10 text-primary" : "hover:bg-secondary")}
              onClick={() => setIsMenuOpen(false)}
            >
              Our Team
            </Link>
            <Link
              to="/company/careers"
              className={cn("px-4 py-3 rounded-lg transition-colors", isActive("/company/careers") ? "bg-primary/10 text-primary" : "hover:bg-secondary")}
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>

            <div className="h-px bg-border my-4" />
            
            <Link
              to="/pricing"
              className={cn("px-4 py-3 rounded-lg transition-colors", isActive("/pricing") ? "bg-primary/10 text-primary" : "hover:bg-secondary")}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className={cn("px-4 py-3 rounded-lg transition-colors", isActive("/contact") ? "bg-primary/10 text-primary" : "hover:bg-secondary")}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="pt-4 space-y-3 px-4">
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full rounded-full">Sign Up</Button>
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full rounded-full btn-gradient gap-2">
                  Request Demo <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;