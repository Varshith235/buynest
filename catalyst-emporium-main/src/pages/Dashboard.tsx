import { DollarSign, ShoppingCart, Package, AlertTriangle, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { salesData, recentOrders, allProducts } from "@/data/mockData";
import DashboardLayout from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";

const stats = [
  { title: "Total Revenue", value: "$761,000", change: "+12.5%", icon: DollarSign, color: "text-primary" },
  { title: "Total Orders", value: "8,940", change: "+8.2%", icon: ShoppingCart, color: "text-chart-2" },
  { title: "Total Products", value: "15", change: "+3", icon: Package, color: "text-chart-3" },
  { title: "Low Stock", value: "2", change: "Alert", icon: AlertTriangle, color: "text-warning" },
];

const statusColor: Record<string, string> = {
  Delivered: "bg-success/10 text-success border-success/20",
  Shipped: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  Processing: "bg-warning/10 text-warning border-warning/20",
  Cancelled: "bg-destructive/10 text-destructive border-destructive/20",
};

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

const Dashboard = () => (
  <DashboardLayout>
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Welcome back! Here's what's happening.</p>
      </div>

      {/* Stats */}
      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <motion.div key={s.title} variants={item} className="glass-card rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">{s.title}</span>
              <s.icon className={`w-5 h-5 ${s.color}`} />
            </div>
            <p className="text-2xl font-display font-bold">{s.value}</p>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3 text-success" />
              <span className="text-xs text-success">{s.change}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Chart + Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <motion.div variants={item} initial="hidden" animate="show" className="lg:col-span-3 glass-card rounded-xl p-5">
          <h3 className="font-display font-semibold mb-4">Weekly Sales</h3>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={salesData}>
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(25 95% 53%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(25 95% 53%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 13% 90%)" strokeOpacity={0.3} />
              <XAxis dataKey="name" fontSize={12} stroke="hsl(220 10% 46%)" />
              <YAxis fontSize={12} stroke="hsl(220 10% 46%)" />
              <Tooltip
                contentStyle={{ background: "hsl(220 25% 9%)", border: "1px solid hsl(220 20% 16%)", borderRadius: "8px", color: "#fff" }}
              />
              <Area type="monotone" dataKey="sales" stroke="hsl(25 95% 53%)" fill="url(#grad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div variants={item} initial="hidden" animate="show" className="lg:col-span-2 glass-card rounded-xl p-5">
          <h3 className="font-display font-semibold mb-4">Recent Orders</h3>
          <div className="space-y-3 max-h-[260px] overflow-auto">
            {recentOrders.slice(0, 6).map((o) => (
              <div key={o.id} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
                <div>
                  <p className="text-sm font-medium">{o.customer}</p>
                  <p className="text-xs text-muted-foreground">{o.id}</p>
                </div>
                <Badge variant="outline" className={statusColor[o.status]}>{o.status}</Badge>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Low Stock */}
      <motion.div variants={item} initial="hidden" animate="show" className="glass-card rounded-xl p-5">
        <h3 className="font-display font-semibold mb-4">Low Stock Alerts</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {allProducts.filter(p => p.stock < 50).map(p => (
            <div key={p.id} className="flex items-center gap-3 p-3 rounded-lg bg-warning/5 border border-warning/20">
              <img src={p.image} alt={p.name} className="w-10 h-10 rounded-lg object-cover" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{p.name}</p>
                <p className="text-xs text-warning">{p.stock} units left</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </DashboardLayout>
);

export default Dashboard;
