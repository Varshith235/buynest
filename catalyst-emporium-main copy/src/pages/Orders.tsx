import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { recentOrders } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const statusColor: Record<string, string> = {
  Delivered: "bg-success/10 text-success border-success/20",
  Shipped: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  Processing: "bg-warning/10 text-warning border-warning/20",
  Cancelled: "bg-destructive/10 text-destructive border-destructive/20",
};

const Orders = () => {
  const [search, setSearch] = useState("");
  const filtered = recentOrders.filter(
    (o) =>
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.toLowerCase().includes(search.toLowerCase()) ||
      o.product.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-display font-bold">Orders</h1>
            <p className="text-sm text-muted-foreground">{recentOrders.length} total orders</p>
          </div>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search orders..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 bg-secondary/50"
              maxLength={100}
            />
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  {["Order ID", "Customer", "Product", "Qty", "Status", "Date", "Total"].map((h) => (
                    <th key={h} className="text-left text-xs font-medium text-muted-foreground px-4 py-3">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((o) => (
                  <tr key={o.id} className="border-b border-border/20 hover:bg-secondary/30 transition-colors">
                    <td className="px-4 py-3 text-sm font-mono font-medium">{o.id}</td>
                    <td className="px-4 py-3 text-sm">{o.customer}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{o.product}</td>
                    <td className="px-4 py-3 text-sm">{o.quantity}</td>
                    <td className="px-4 py-3">
                      <Badge variant="outline" className={statusColor[o.status]}>{o.status}</Badge>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{o.date}</td>
                    <td className="px-4 py-3 text-sm font-semibold">${o.total.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Orders;
