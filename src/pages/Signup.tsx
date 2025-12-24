import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { UserPlus, Mail, Lock, User, Building, Phone, ArrowRight, CheckCircle2, Shield, Zap, Users } from "lucide-react";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
    phone: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive"
      });
      return;
    }

    if (formData.password.length < 8) {
      toast({
        title: "Weak Password",
        description: "Password must be at least 8 characters long.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account Created Successfully!",
        description: "Welcome to UnifyEdge. You can now explore our pricing plans.",
      });
      window.location.href = "/pricing";
    }, 2000);
  };

  const benefits = [
    { icon: Shield, text: "Enterprise-grade security" },
    { icon: Zap, text: "Lightning fast performance" },
    { icon: Users, text: "Unlimited team members" },
    { icon: CheckCircle2, text: "24/7 dedicated support" },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="flex min-h-screen">
          {/* Left Panel - Branding */}
          <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80">
            {/* Decorative Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="h-full w-full" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }} />
            </div>

            <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20 text-white">
              <div className="mb-8">
                <Link to="/" className="inline-flex items-center gap-2 mb-12">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">U</span>
                  </div>
                  <span className="text-2xl font-bold">UnifyEdge</span>
                </Link>
                
                <h1 className="text-4xl xl:text-5xl font-bold leading-tight mb-6">
                  Transform Your<br />
                  <span className="text-white/90">Textile Business</span>
                </h1>
                <p className="text-lg text-white/80 max-w-md leading-relaxed">
                  Join thousands of textile manufacturers who trust UnifyEdge to streamline their operations and boost productivity.
                </p>
              </div>

              <div className="space-y-4 mt-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 text-white/90 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center">
                      <benefit.icon className="w-5 h-5" />
                    </div>
                    <span className="text-lg">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-8 border-t border-white/20">
                <p className="text-white/60 text-sm">Trusted by 500+ textile companies worldwide</p>
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/30" />
                    ))}
                  </div>
                  <span className="text-white/80 text-sm ml-2">+2,000 happy users</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
            <div className="w-full max-w-md">
              {/* Mobile Logo */}
              <div className="lg:hidden mb-8 text-center">
                <Link to="/" className="inline-flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                    <span className="text-xl font-bold text-primary-foreground">U</span>
                  </div>
                  <span className="text-xl font-bold text-foreground">UnifyEdge</span>
                </Link>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">Create Account</h2>
                <p className="text-muted-foreground">
                  Get started with your free trial. No credit card required.
                </p>
              </div>

              <form onSubmit={handleSignup} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</Label>
                    <div className="relative group">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="pl-10 h-12 bg-secondary/50 border-border/50 focus:border-primary focus:bg-background transition-all"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</Label>
                    <div className="relative group">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="pl-10 h-12 bg-secondary/50 border-border/50 focus:border-primary focus:bg-background transition-all"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</Label>
                  <div className="relative group">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="pl-10 h-12 bg-secondary/50 border-border/50 focus:border-primary focus:bg-background transition-all"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium text-foreground">Company</Label>
                    <div className="relative group">
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        required
                        className="pl-10 h-12 bg-secondary/50 border-border/50 focus:border-primary focus:bg-background transition-all"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground">Phone</Label>
                    <div className="relative group">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="pl-10 h-12 bg-secondary/50 border-border/50 focus:border-primary focus:bg-background transition-all"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-foreground">Password</Label>
                  <div className="relative group">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="pl-10 h-12 bg-secondary/50 border-border/50 focus:border-primary focus:bg-background transition-all"
                      placeholder="Minimum 8 characters"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">Confirm Password</Label>
                  <div className="relative group">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      required
                      className="pl-10 h-12 bg-secondary/50 border-border/50 focus:border-primary focus:bg-background transition-all"
                      placeholder="Re-enter password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-base font-semibold group relative overflow-hidden"
                  disabled={isLoading}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Creating Account...
                      </>
                    ) : (
                      <>
                        Create Account
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </Button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary hover:text-primary/80 font-semibold transition-colors">
                    Sign in
                  </Link>
                </p>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  By creating an account, you agree to our{" "}
                  <Link to="/legal/terms" className="text-primary hover:underline">Terms</Link>
                  {" "}and{" "}
                  <Link to="/legal/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
