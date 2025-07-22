import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Calculator, Plus, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface MaterialItem {
  id: string;
  name: string;
  type: 'fabric' | 'yarn' | 'trim' | 'accessory';
  quantity: number;
  unit: string;
  unitCost: number;
  totalCost: number;
}

const BOMCalculator = () => {
  const [materials, setMaterials] = useState<MaterialItem[]>([]);
  const [newMaterial, setNewMaterial] = useState({
    name: '',
    type: 'fabric' as MaterialItem['type'],
    quantity: 0,
    unit: 'meters',
    unitCost: 0
  });
  const [garmentDetails, setGarmentDetails] = useState({
    style: '',
    size: 'M',
    quantity: 100,
    cppFactor: 0.85 // Cutting Planning Percentage
  });
  const { toast } = useToast();

  const addMaterial = () => {
    if (!newMaterial.name || newMaterial.quantity <= 0 || newMaterial.unitCost <= 0) {
      toast({
        title: "Invalid Input",
        description: "Please fill all material details correctly",
        variant: "destructive"
      });
      return;
    }

    const totalCost = newMaterial.quantity * newMaterial.unitCost;
    const material: MaterialItem = {
      id: Date.now().toString(),
      ...newMaterial,
      totalCost
    };

    setMaterials([...materials, material]);
    setNewMaterial({
      name: '',
      type: 'fabric',
      quantity: 0,
      unit: 'meters',
      unitCost: 0
    });

    toast({
      title: "Material Added",
      description: `${material.name} added to BOM successfully`,
    });
  };

  const removeMaterial = (id: string) => {
    setMaterials(materials.filter(m => m.id !== id));
  };

  const calculateTotalCost = () => {
    return materials.reduce((sum, material) => sum + material.totalCost, 0);
  };

  const calculateCostPerPiece = () => {
    const totalCost = calculateTotalCost();
    return garmentDetails.quantity > 0 ? totalCost / garmentDetails.quantity : 0;
  };

  const calculateWithCPP = () => {
    const costPerPiece = calculateCostPerPiece();
    return costPerPiece * garmentDetails.cppFactor;
  };

  const getTypeColor = (type: MaterialItem['type']) => {
    switch (type) {
      case 'fabric': return 'bg-blue-100 text-blue-800';
      case 'yarn': return 'bg-green-100 text-green-800';
      case 'trim': return 'bg-purple-100 text-purple-800';
      case 'accessory': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Calculator className="h-10 w-10 text-primary" />
            BOM & Costing Calculator
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Calculate precise Bill of Materials and costing for your textile products. 
            Input materials, quantities, and get instant cost per item calculations.
          </p>
        </div>

        <Tabs defaultValue="calculator" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calculator">BOM Calculator</TabsTrigger>
            <TabsTrigger value="results">Cost Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="calculator" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Garment Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Garment Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="style">Style Name</Label>
                    <Input
                      id="style"
                      value={garmentDetails.style}
                      onChange={(e) => setGarmentDetails({...garmentDetails, style: e.target.value})}
                      placeholder="e.g., Men's Polo Shirt"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="size">Size</Label>
                      <Select value={garmentDetails.size} onValueChange={(value) => setGarmentDetails({...garmentDetails, size: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="XS">XS</SelectItem>
                          <SelectItem value="S">S</SelectItem>
                          <SelectItem value="M">M</SelectItem>
                          <SelectItem value="L">L</SelectItem>
                          <SelectItem value="XL">XL</SelectItem>
                          <SelectItem value="XXL">XXL</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="quantity">Order Quantity</Label>
                      <Input
                        id="quantity"
                        type="number"
                        value={garmentDetails.quantity}
                        onChange={(e) => setGarmentDetails({...garmentDetails, quantity: parseInt(e.target.value) || 0})}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="cpp">CPP Factor (Cutting Planning %)</Label>
                    <Input
                      id="cpp"
                      type="number"
                      step="0.01"
                      min="0"
                      max="1"
                      value={garmentDetails.cppFactor}
                      onChange={(e) => setGarmentDetails({...garmentDetails, cppFactor: parseFloat(e.target.value) || 0})}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Add Materials */}
              <Card>
                <CardHeader>
                  <CardTitle>Add Materials</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="materialName">Material Name</Label>
                    <Input
                      id="materialName"
                      value={newMaterial.name}
                      onChange={(e) => setNewMaterial({...newMaterial, name: e.target.value})}
                      placeholder="e.g., Cotton Fabric, Polyester Thread"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="materialType">Type</Label>
                      <Select value={newMaterial.type} onValueChange={(value: MaterialItem['type']) => setNewMaterial({...newMaterial, type: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fabric">Fabric</SelectItem>
                          <SelectItem value="yarn">Yarn/Thread</SelectItem>
                          <SelectItem value="trim">Trim</SelectItem>
                          <SelectItem value="accessory">Accessory</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="unit">Unit</Label>
                      <Select value={newMaterial.unit} onValueChange={(value) => setNewMaterial({...newMaterial, unit: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="meters">Meters</SelectItem>
                          <SelectItem value="yards">Yards</SelectItem>
                          <SelectItem value="pieces">Pieces</SelectItem>
                          <SelectItem value="kg">Kilograms</SelectItem>
                          <SelectItem value="grams">Grams</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="quantity">Quantity per Garment</Label>
                      <Input
                        id="quantity"
                        type="number"
                        step="0.01"
                        value={newMaterial.quantity}
                        onChange={(e) => setNewMaterial({...newMaterial, quantity: parseFloat(e.target.value) || 0})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="unitCost">Unit Cost ($)</Label>
                      <Input
                        id="unitCost"
                        type="number"
                        step="0.01"
                        value={newMaterial.unitCost}
                        onChange={(e) => setNewMaterial({...newMaterial, unitCost: parseFloat(e.target.value) || 0})}
                      />
                    </div>
                  </div>
                  <Button onClick={addMaterial} className="w-full gap-2">
                    <Plus className="h-4 w-4" />
                    Add Material
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Materials List */}
            {materials.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Materials List</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {materials.map((material) => (
                      <div key={material.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div className="flex items-center gap-4">
                          <Badge className={getTypeColor(material.type)}>
                            {material.type}
                          </Badge>
                          <div>
                            <h4 className="font-medium">{material.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {material.quantity} {material.unit} × ${material.unitCost.toFixed(2)}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-medium">${material.totalCost.toFixed(2)}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeMaterial(material.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="results">
            <Card>
              <CardHeader>
                <CardTitle>Cost Analysis & Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-6 border border-border rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-2">
                      ${calculateTotalCost().toFixed(2)}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Material Cost</div>
                  </div>
                  <div className="text-center p-6 border border-border rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-2">
                      ${calculateCostPerPiece().toFixed(2)}
                    </div>
                    <div className="text-sm text-muted-foreground">Cost Per Piece</div>
                  </div>
                  <div className="text-center p-6 border border-border rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-2">
                      ${calculateWithCPP().toFixed(2)}
                    </div>
                    <div className="text-sm text-muted-foreground">Cost with CPP</div>
                  </div>
                  <div className="text-center p-6 border border-border rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-2">
                      {materials.length}
                    </div>
                    <div className="text-sm text-muted-foreground">Materials Used</div>
                  </div>
                </div>

                {materials.length > 0 && (
                  <>
                    <Separator className="my-6" />
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Material Breakdown</h3>
                      <div className="space-y-2">
                        {materials.map((material) => (
                          <div key={material.id} className="flex justify-between items-center">
                            <span>{material.name}</span>
                            <span>${material.totalCost.toFixed(2)} ({((material.totalCost / calculateTotalCost()) * 100).toFixed(1)}%)</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default BOMCalculator;