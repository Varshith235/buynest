export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  stock: number;
  category: "hardware" | "food" | "grocery";
  description: string;
  specs?: Record<string, string>;
}

export interface Order {
  id: string;
  customer: string;
  product: string;
  quantity: number;
  status: "Delivered" | "Shipped" | "Processing" | "Cancelled";
  date: string;
  total: number;
}

export const hardwareProducts: Product[] = [
  { id: "h1", name: "MacBook Pro 16\"", price: 2499, originalPrice: 2799, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop", rating: 4.8, reviews: 2340, stock: 45, category: "hardware", description: "Apple M3 Pro chip, 18GB RAM, 512GB SSD", specs: { Processor: "M3 Pro", RAM: "18GB", Storage: "512GB SSD", Display: "16.2\" Liquid Retina XDR" } },
  { id: "h2", name: "Mechanical Keyboard RGB", price: 149, originalPrice: 199, image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=300&fit=crop", rating: 4.6, reviews: 1890, stock: 120, category: "hardware", description: "Cherry MX Blue switches, per-key RGB", specs: { Switches: "Cherry MX Blue", Layout: "Full-size", Backlight: "Per-key RGB" } },
  { id: "h3", name: "Wireless Gaming Mouse", price: 79, originalPrice: 99, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop", rating: 4.5, reviews: 3200, stock: 200, category: "hardware", description: "25K DPI sensor, 70h battery life", specs: { DPI: "25,600", Battery: "70 hours", Weight: "63g" } },
  { id: "h4", name: "4K Ultra Monitor 32\"", price: 599, originalPrice: 749, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop", rating: 4.7, reviews: 980, stock: 30, category: "hardware", description: "4K UHD, 144Hz, HDR600, USB-C", specs: { Resolution: "3840x2160", "Refresh Rate": "144Hz", Panel: "IPS" } },
  { id: "h5", name: "USB-C Hub 10-in-1", price: 49, image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=300&fit=crop", rating: 4.3, reviews: 4500, stock: 500, category: "hardware", description: "HDMI 4K, Ethernet, SD card, USB 3.0" },
];

export const foodProducts: Product[] = [
  { id: "f1", name: "Margherita Pizza", price: 12.99, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop", rating: 4.9, reviews: 8900, stock: 999, category: "food", description: "Fresh mozzarella, basil, tomato sauce" },
  { id: "f2", name: "Classic Cheeseburger", price: 9.99, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop", rating: 4.7, reviews: 6700, stock: 999, category: "food", description: "Angus beef, cheddar, lettuce, tomato" },
  { id: "f3", name: "Iced Caramel Latte", price: 5.49, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop", rating: 4.6, reviews: 3400, stock: 999, category: "food", description: "Espresso, milk, caramel drizzle, ice" },
  { id: "f4", name: "Chicken Biryani", price: 14.99, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop", rating: 4.8, reviews: 5600, stock: 999, category: "food", description: "Basmati rice, tender chicken, aromatic spices" },
  { id: "f5", name: "Fresh Fruit Smoothie", price: 7.99, image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop", rating: 4.5, reviews: 2100, stock: 999, category: "food", description: "Mango, strawberry, banana, yogurt blend" },
];

export const groceryProducts: Product[] = [
  { id: "g1", name: "Organic Avocados (6pk)", price: 6.99, image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=300&fit=crop", rating: 4.4, reviews: 1200, stock: 80, category: "grocery", description: "Ripe, organic Hass avocados" },
  { id: "g2", name: "Fresh Strawberries 1lb", price: 4.99, image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=300&fit=crop", rating: 4.6, reviews: 2300, stock: 150, category: "grocery", description: "Sweet, organic strawberries" },
  { id: "g3", name: "Whole Milk 1 Gallon", price: 3.99, image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop", rating: 4.5, reviews: 890, stock: 200, category: "grocery", description: "Farm fresh whole milk" },
  { id: "g4", name: "Artisan Sourdough Bread", price: 5.49, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop", rating: 4.7, reviews: 670, stock: 60, category: "grocery", description: "Freshly baked sourdough loaf" },
  { id: "g5", name: "Mixed Nuts Premium 1lb", price: 12.99, image: "https://images.unsplash.com/photo-1599599810694-b5b37304c041?w=400&h=300&fit=crop", rating: 4.8, reviews: 1500, stock: 300, category: "grocery", description: "Almonds, cashews, walnuts, pecans" },
];

export const allProducts = [...hardwareProducts, ...foodProducts, ...groceryProducts];

export const recentOrders: Order[] = [
  { id: "ORD-7821", customer: "Sarah Johnson", product: "MacBook Pro 16\"", quantity: 1, status: "Delivered", date: "2026-02-23", total: 2499 },
  { id: "ORD-7820", customer: "Mike Chen", product: "Mechanical Keyboard RGB", quantity: 2, status: "Shipped", date: "2026-02-22", total: 298 },
  { id: "ORD-7819", customer: "Emily Davis", product: "Margherita Pizza", quantity: 3, status: "Processing", date: "2026-02-22", total: 38.97 },
  { id: "ORD-7818", customer: "James Wilson", product: "4K Ultra Monitor 32\"", quantity: 1, status: "Delivered", date: "2026-02-21", total: 599 },
  { id: "ORD-7817", customer: "Ana Martinez", product: "Organic Avocados", quantity: 5, status: "Shipped", date: "2026-02-21", total: 34.95 },
  { id: "ORD-7816", customer: "Tom Anderson", product: "Classic Cheeseburger", quantity: 4, status: "Delivered", date: "2026-02-20", total: 39.96 },
  { id: "ORD-7815", customer: "Lisa Wang", product: "USB-C Hub 10-in-1", quantity: 1, status: "Cancelled", date: "2026-02-20", total: 49 },
  { id: "ORD-7814", customer: "David Brown", product: "Wireless Gaming Mouse", quantity: 2, status: "Processing", date: "2026-02-19", total: 158 },
];

export const salesData = [
  { name: "Mon", sales: 4200, orders: 45 },
  { name: "Tue", sales: 3800, orders: 38 },
  { name: "Wed", sales: 5100, orders: 52 },
  { name: "Thu", sales: 4600, orders: 48 },
  { name: "Fri", sales: 6200, orders: 64 },
  { name: "Sat", sales: 7800, orders: 82 },
  { name: "Sun", sales: 5400, orders: 55 },
];

export const monthlySalesData = [
  { name: "Jan", revenue: 45000, orders: 520 },
  { name: "Feb", revenue: 52000, orders: 610 },
  { name: "Mar", revenue: 48000, orders: 560 },
  { name: "Apr", revenue: 61000, orders: 710 },
  { name: "May", revenue: 55000, orders: 640 },
  { name: "Jun", revenue: 67000, orders: 780 },
  { name: "Jul", revenue: 72000, orders: 840 },
  { name: "Aug", revenue: 69000, orders: 800 },
  { name: "Sep", revenue: 78000, orders: 910 },
  { name: "Oct", revenue: 82000, orders: 950 },
  { name: "Nov", revenue: 95000, orders: 1100 },
  { name: "Dec", revenue: 110000, orders: 1280 },
];

export const categoryPerformance = [
  { name: "Hardware", value: 45, revenue: 342000 },
  { name: "Food", value: 35, revenue: 267000 },
  { name: "Grocery", value: 20, revenue: 152000 },
];