import DashboardLayout from "@/components/DashboardLayout";
import ProductCard from "@/components/ProductCard";
import { hardwareProducts, foodProducts, groceryProducts } from "@/data/mockData";
import { Monitor, UtensilsCrossed, ShoppingBasket } from "lucide-react";

const sections = [
  { title: "Hardware & Electronics", icon: Monitor, products: hardwareProducts },
  { title: "Food & Beverages", icon: UtensilsCrossed, products: foodProducts },
  { title: "Groceries & Essentials", icon: ShoppingBasket, products: groceryProducts },
];

const Products = () => (
  <DashboardLayout>
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-display font-bold">Products</h1>
        <p className="text-sm text-muted-foreground">Browse all product categories</p>
      </div>

      {sections.map((section) => (
        <div key={section.title}>
          <div className="flex items-center gap-2 mb-4">
            <section.icon className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-display font-semibold">{section.title}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {section.products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </DashboardLayout>
);

export default Products;
