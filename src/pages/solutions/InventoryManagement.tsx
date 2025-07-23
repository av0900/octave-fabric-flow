import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Package, BarChart3, AlertTriangle, Truck, Zap, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Package className="h-6 w-6" />,
    title: "Real-Time Stock Tracking",
    description: "Monitor inventory levels across all locations with real-time updates and accurate stock counts."
  },
  {
    icon: <AlertTriangle className="h-6 w-6" />,
    title: "Smart Alerts & Notifications",
    description: "Automated alerts for low stock, reorder points, and expiry dates to prevent stockouts."
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Advanced Analytics",
    description: "Comprehensive analytics on stock movement, ABC analysis, and demand forecasting."
  },
  {
    icon: <Truck className="h-6 w-6" />,
    title: "Supply Chain Integration",
    description: "Seamless integration with suppliers for automated purchase orders and delivery tracking."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Automated Reordering",
    description: "Set up automatic reorder rules based on minimum stock levels and lead times."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Batch & Serial Tracking",
    description: "Complete traceability with batch numbers, serial numbers, and expiry date management."
  }
];

const inventoryTypes = [
  {
    category: "Raw Materials",
    description: "Fabrics, yarns, and basic materials",
    items: ["Cotton Fabric", "Polyester Yarn", "Dyes & Chemicals", "Accessories"],
    color: "bg-blue-100 text-blue-800"
  },
  {
    category: "Work in Progress",
    description: "Semi-finished goods in production",
    items: ["Cut Pieces", "Stitched Parts", "Quality Check Items", "Finishing Queue"],
    color: "bg-yellow-100 text-yellow-800"
  },
  {
    category: "Finished Goods",
    description: "Ready-to-ship products",
    items: ["Completed Garments", "Packed Items", "Quality Approved", "Ready Stock"],
    color: "bg-green-100 text-green-800"
  },
  {
    category: "Spare Parts",
    description: "Machine parts and maintenance items",
    items: ["Machine Needles", "Spare Parts", "Maintenance Tools", "Safety Equipment"],
    color: "bg-purple-100 text-purple-800"
  }
];

const warehouseFeatures = [
  {
    title: "Multi-Location Management",
    description: "Manage inventory across multiple warehouses and production facilities",
    features: ["Location-wise stock", "Inter-location transfers", "Centralized control", "Location analytics"]
  },
  {
    title: "Warehouse Operations",
    description: "Streamline receiving, storage, picking, and shipping operations",
    features: ["Barcode scanning", "Pick list generation", "Packing optimization", "Shipping integration"]
  },
  {
    title: "Quality Control",
    description: "Integrated quality checks and quarantine management",
    features: ["Inspection workflows", "Quality holds", "Defect tracking", "Approval processes"]
  }
];

const benefits = [
  { metric: "45%", description: "Reduction in carrying costs" },
  { metric: "90%", description: "Inventory accuracy" },
  { metric: "60%", description: "Faster order fulfillment" },
  { metric: "30%", description: "Reduction in stockouts" }
];

const InventoryManagement = () => {
  return (
    <Layout>
      <div className="pt-16 pb-24">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full">
                <Package className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Smart Inventory Management
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Take complete control of your inventory with real-time tracking, automated reordering, 
              and intelligent analytics. Optimize stock levels and reduce carrying costs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="px-4 py-2">
                <Package className="h-4 w-4 mr-2" />
                Real-Time Tracking
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Smart Alerts
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <BarChart3 className="h-4 w-4 mr-2" />
                Advanced Analytics
              </Badge>
            </div>
          </div>

          {/* Benefits Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 bg-gradient-to-br from-card to-secondary/50">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">{benefit.metric}</div>
                  <div className="text-muted-foreground">{benefit.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-secondary/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Inventory Types */}
          <Card className="mb-16 border-0 bg-gradient-to-r from-background to-secondary/30">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Complete Inventory Coverage</CardTitle>
              <p className="text-center text-muted-foreground">
                Track every type of inventory in your textile business
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {inventoryTypes.map((type, index) => (
                  <div key={index} className="p-6 border border-border rounded-lg bg-card">
                    <Badge className={type.color} variant="secondary">
                      {type.category}
                    </Badge>
                    <p className="text-muted-foreground my-3 text-sm">{type.description}</p>
                    <ul className="space-y-2">
                      {type.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-3 w-3 text-success" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Warehouse Features */}
          <Card className="mb-16 border-0 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Advanced Warehouse Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {warehouseFeatures.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="p-6 border border-border rounded-lg bg-card">
                      <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground mb-4 text-sm">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.features.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-success" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Smart Analytics */}
          <Card className="mb-16 border-0 bg-gradient-to-br from-accent/5 to-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl text-center flex items-center justify-center gap-3">
                <BarChart3 className="h-8 w-8 text-primary" />
                Inventory Analytics & Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Smart Analytics</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      <span>ABC Analysis for inventory prioritization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      <span>Demand forecasting and trend analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      <span>Stock aging and turnover reports</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      <span>Carrying cost optimization</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Automated Insights</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      <span>Reorder point recommendations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      <span>Optimal order quantity suggestions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      <span>Seasonal demand predictions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      <span>Cost-benefit analysis reports</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="border-0 bg-gradient-to-r from-primary/10 to-accent/10">
            <CardContent className="text-center py-12">
              <h3 className="text-3xl font-bold mb-4">
                Optimize Your Inventory Today
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                Stop losing money on excess inventory and stockouts. Start managing your 
                inventory intelligently with our advanced system.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/signup">
                  <Button size="lg" className="h-12 px-8">
                    Start Free Trial
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="h-12 px-8">
                    Schedule Demo
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default InventoryManagement;