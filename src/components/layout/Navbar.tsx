import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="py-4 border-b border-border">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">UnifyEdge</h1>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-6">
              {/* Solutions Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                    Solutions
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-[200px]">
                  <DropdownMenuItem asChild>
                    <Link to="/solutions/erp" className="cursor-pointer">
                      ERP System
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/solutions/bom" className="cursor-pointer">
                      BOM & Costing
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/solutions/inventory" className="cursor-pointer">
                      Inventory Management
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/solutions/analytics" className="cursor-pointer">
                      Analytics
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/solutions/integrations" className="cursor-pointer">
                      Integrations
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Company Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                    Company
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-[200px]">
                  <DropdownMenuItem asChild>
                    <Link to="/company/about" className="cursor-pointer">
                      About Us
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/company/team" className="cursor-pointer">
                      Our Team
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/company/careers" className="cursor-pointer">
                      Careers
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/pricing" className="text-foreground hover:text-primary transition-colors">
                Pricing
              </Link>

              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/contact">
                <Button>Request Demo</Button>
              </Link>
            </div>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            className="text-foreground p-2"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={cn(
            "absolute top-[72px] left-0 right-0 bg-background border-b border-border z-50 transition-all duration-300",
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          )}
        >
          <div className="container py-4 flex flex-col space-y-4">
            <Link
              to="/solutions/erp"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ERP System
            </Link>
            <Link
              to="/solutions/bom"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              BOM & Costing
            </Link>
            <Link
              to="/solutions/inventory"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Inventory Management
            </Link>
            <Link
              to="/solutions/analytics"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Analytics
            </Link>
            <Link
              to="/solutions/integrations"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Integrations
            </Link>
            <Link
              to="/pricing"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full">Request Demo</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;