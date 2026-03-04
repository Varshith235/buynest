import DashboardLayout from "@/components/DashboardLayout";
import { monthlySalesData, categoryPerformance } from "@/data/mockData";
import { motion } from "framer-motion";
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";

const COLORS = ["hsl(142, 95%, 53%)", "hsl(160 60% 45%)", "hsl(220 70% 55%)"];

const topProducts = [
  { name: "MacBook Pro 16\"", orders: 340, revenue: 849660 },
  { name: "Margherita Pizza", orders: 8900, revenue: 115611 },
  { name: "Mechanical Keyboard", orders: 1890, revenue: 281610 },
  { name: "Chicken Biryani", orders: 5600, revenue: 83944 },
  { name: "Mixed Nuts Premium", orders: 1500, revenue: 19485 },
];

const Analytics = () => (
  <DashboardLayout>
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold">Analytics</h1>
        <p className="text-sm text-muted-foreground">Sales trends and performance insights</p>
      </div>

      {/* Revenue Trend */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass-card rounded-xl p-5">
        <h3 className="font-display font-semibold mb-4">Monthly Revenue</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={monthlySalesData}>
            <defs>
              <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(64, 95%, 53%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(106, 95%, 53%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 13% 90%)" strokeOpacity={0.3} />
            <XAxis dataKey="name" fontSize={12} stroke="hsl(220 10% 46%)" />
            <YAxis fontSize={12} stroke="hsl(220 10% 46%)" tickFormatter={(v) => `$${v / 1000}k`} />
            <Tooltip contentStyle={{ background: "hsl(220 25% 9%)", border: "1px solid hsl(220 20% 16%)", borderRadius: "8px", color: "#fff" }} formatter={(v: number) => [`$${v.toLocaleString()}`, "Revenue"]} />
            <Area type="monotone" dataKey="revenue" stroke="hsl(166, 66%, 40%)" fill="url(#revGrad)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Performance */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card rounded-xl p-5">
          <h3 className="font-display font-semibold mb-4">Category Breakdown</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={categoryPerformance} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={4} dataKey="value" label={({ name, value }) => `${name} ${value}%`}>
                {categoryPerformance.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: "hsl(220 25% 9%)", border: "1px solid hsl(220 20% 16%)", borderRadius: "8px", color: "#fff" }} />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Top Products */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card rounded-xl p-5">
          <h3 className="font-display font-semibold mb-4">Most Ordered Products</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={topProducts} layout="vertical">
              <XAxis type="number" fontSize={12} stroke="hsl(220 10% 46%)" />
              <YAxis dataKey="name" type="category" fontSize={11} stroke="hsl(220 10% 46%)" width={120} />
              <Tooltip contentStyle={{ background: "hsl(220 25% 9%)", border: "1px solid hsl(220 20% 16%)", borderRadius: "8px", color: "#fff" }} />
              <Bar dataKey="orders" fill="hsl(160 60% 45%)" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  </DashboardLayout>
);

export default Analytics;
