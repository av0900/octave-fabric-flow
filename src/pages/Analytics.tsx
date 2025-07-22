import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { BarChart3, TrendingUp, Users, Package, DollarSign, Clock } from "lucide-react";

const Analytics = () => {
  return (
    <Layout>
      <div className="pt-16 pb-24">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Analytics & Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Gain deep insights into your textile operations with real-time analytics, 
              production metrics, and business intelligence.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Revenue</p>
                    <p className="text-2xl font-bold">$1.2M</p>
                    <div className="flex items-center mt-1">
                      <TrendingUp className="h-4 w-4 text-success mr-1" />
                      <span className="text-sm text-success">+12%</span>
                    </div>
                  </div>
                  <DollarSign className="h-10 w-10 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Orders</p>
                    <p className="text-2xl font-bold">324</p>
                    <div className="flex items-center mt-1">
                      <TrendingUp className="h-4 w-4 text-success mr-1" />
                      <span className="text-sm text-success">+8%</span>
                    </div>
                  </div>
                  <Package className="h-10 w-10 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Production Efficiency</p>
                    <p className="text-2xl font-bold">94%</p>
                    <div className="flex items-center mt-1">
                      <Badge variant="secondary" className="bg-success/20 text-success">Excellent</Badge>
                    </div>
                  </div>
                  <BarChart3 className="h-10 w-10 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Team Members</p>
                    <p className="text-2xl font-bold">47</p>
                    <div className="flex items-center mt-1">
                      <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                      <span className="text-sm text-muted-foreground">42 active</span>
                    </div>
                  </div>
                  <Users className="h-10 w-10 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Analytics Tabs */}
          <Tabs defaultValue="production" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="production">Production</TabsTrigger>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="financial">Financial</TabsTrigger>
            </TabsList>

            <TabsContent value="production" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Production Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>Daily Target</span>
                          <span>87%</span>
                        </div>
                        <Progress value={87} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>Weekly Target</span>
                          <span>92%</span>
                        </div>
                        <Progress value={92} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>Monthly Target</span>
                          <span>78%</span>
                        </div>
                        <Progress value={78} />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quality Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>First Pass Yield</span>
                        <Badge className="bg-success/20 text-success">96.5%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Defect Rate</span>
                        <Badge variant="secondary">2.1%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Rework Rate</span>
                        <Badge variant="secondary">1.4%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Customer Satisfaction</span>
                        <Badge className="bg-success/20 text-success">4.8/5</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="inventory" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Stock Levels</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>Cotton Fabric</span>
                          <span className="text-destructive">Low Stock</span>
                        </div>
                        <Progress value={15} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>Polyester Thread</span>
                          <span className="text-success">Good</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>Buttons & Accessories</span>
                          <span className="text-success">Good</span>
                        </div>
                        <Progress value={65} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Inventory Turnover</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Average Turnover</span>
                        <span className="font-semibold">6.2x</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Days in Inventory</span>
                        <span className="font-semibold">59 days</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Dead Stock Value</span>
                        <span className="font-semibold">$12,450</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="orders" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Order Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Pending</span>
                        <Badge variant="secondary">45</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>In Production</span>
                        <Badge className="bg-blue-100 text-blue-800">127</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Ready to Ship</span>
                        <Badge className="bg-green-100 text-green-800">89</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipped</span>
                        <Badge className="bg-purple-100 text-purple-800">234</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Delivery Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>On-Time Delivery</span>
                          <span>94%</span>
                        </div>
                        <Progress value={94} />
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Average Delivery Time</p>
                        <p className="text-2xl font-bold">12.5 days</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Top Customers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Fashion Corp</span>
                        <span className="font-semibold">$125K</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Style Plus</span>
                        <span className="font-semibold">$98K</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Trend Setters</span>
                        <span className="font-semibold">$87K</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Global Apparel</span>
                        <span className="font-semibold">$76K</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="financial" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Monthly Revenue</span>
                        <span className="font-semibold">$485,200</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>YTD Revenue</span>
                        <span className="font-semibold">$4,127,850</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Profit Margin</span>
                        <Badge className="bg-success/20 text-success">18.4%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Cost Reduction</span>
                        <Badge className="bg-success/20 text-success">-7.2%</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Cost Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>Raw Materials</span>
                          <span>45%</span>
                        </div>
                        <Progress value={45} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>Labor</span>
                          <span>32%</span>
                        </div>
                        <Progress value={32} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>Overhead</span>
                          <span>18%</span>
                        </div>
                        <Progress value={18} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>Other</span>
                          <span>5%</span>
                        </div>
                        <Progress value={5} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;