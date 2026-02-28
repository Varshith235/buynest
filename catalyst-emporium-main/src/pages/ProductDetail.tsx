import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Star, ShoppingCart, Zap, ArrowLeft, Truck, Shield, RotateCcw, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";
import { allProducts } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const demandData = [
  { month: "Sep", orders: 120 },
  { month: "Oct", orders: 180 },
  { month: "Nov", orders: 250 },
  { month: "Dec", orders: 310 },
  { month: "Jan", orders: 220 },
  { month: "Feb", orders: 280 },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = allProducts.find((p) => p.id === id);
  const [ordered, setOrdered] = useState(false);

  if (!product) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64">
          <p className="text-muted-foreground">Product not found</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </button>

        <AnimatePresence mode="wait">
          {ordered ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-display font-bold mb-2">Order Successfully Placed!</h2>
              <p className="text-muted-foreground mb-6">Thank You, Visit Again!</p>
              <Button onClick={() => navigate("/products")} className="gradient-primary text-primary-foreground">
                Continue Shopping
              </Button>
            </motion.div>
          ) : (
            <motion.div key="detail" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              {/* Main Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card rounded-xl overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
                </div>
                <div className="space-y-4">
                  <Badge variant="outline" className="text-xs">{product.category}</Badge>
                  <h1 className="text-2xl font-display font-bold">{product.name}</h1>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviews.toLocaleString()} reviews)</span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-display font-bold">${product.price}</span>
                    {product.originalPrice && (
                      <>
                        <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                        <Badge className="gradient-primary text-primary-foreground border-0">
                          Save ${(product.originalPrice - product.price).toFixed(0)}
                        </Badge>
                      </>
                    )}
                  </div>
                  <p className="text-muted-foreground">{product.description}</p>

                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" className="flex-1 h-11">
                      <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
                    </Button>
                    <Button onClick={() => setOrdered(true)} className="flex-1 h-11 gradient-primary text-primary-foreground">
                      <Zap className="w-4 h-4 mr-2" /> Buy Now
                    </Button>
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {[
                      { icon: Truck, label: "Free Delivery" },
                      { icon: Shield, label: "1 Year Warranty" },
                      { icon: RotateCcw, label: "30-Day Returns" },
                    ].map(({ icon: Icon, label }) => (
                      <div key={label} className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-secondary/50 text-center">
                        <Icon className="w-4 h-4 text-primary" />
                        <span className="text-xs text-muted-foreground">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Specs + Demand */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.specs && (
                  <div className="glass-card rounded-xl p-5">
                    <h3 className="font-display font-semibold mb-3">Specifications</h3>
                    <div className="space-y-2">
                      {Object.entries(product.specs).map(([key, val]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-border/30 last:border-0">
                          <span className="text-sm text-muted-foreground">{key}</span>
                          <span className="text-sm font-medium">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="glass-card rounded-xl p-5">
                  <h3 className="font-display font-semibold mb-3">Demand Trend</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={demandData}>
                      <XAxis dataKey="month" fontSize={12} stroke="hsl(220 10% 46%)" />
                      <YAxis fontSize={12} stroke="hsl(220 10% 46%)" />
                      <Tooltip contentStyle={{ background: "hsl(220 25% 9%)", border: "1px solid hsl(220 20% 16%)", borderRadius: "8px", color: "#fff" }} />
                      <Bar dataKey="orders" fill="hsl(25 95% 53%)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </DashboardLayout>
  );
};

export default ProductDetail;
