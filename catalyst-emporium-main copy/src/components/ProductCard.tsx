import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Product } from "@/data/mockData";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
    >
      <Link
        to={`/products/${product.id}`}
        className="glass-card rounded-xl overflow-hidden block group hover:shadow-xl hover:border-primary/30 transition-all duration-300"
      >
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {product.originalPrice && (
            <span className="absolute top-2 right-2 gradient-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-md">
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-sm truncate">{product.name}</h3>
          <p className="text-xs text-muted-foreground mt-1 truncate">{product.description}</p>
          <div className="flex items-center gap-1 mt-2">
            <Star className="w-3.5 h-3.5 fill-primary text-primary" />
            <span className="text-xs font-medium">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviews.toLocaleString()})</span>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-display font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xs text-muted-foreground line-through">${product.originalPrice}</span>
              )}
            </div>
            <span className={`text-xs font-medium ${product.stock > 50 ? "text-success" : product.stock > 10 ? "text-warning" : "text-destructive"}`}>
              {product.stock > 50 ? "In Stock" : product.stock > 0 ? `${product.stock} left` : "Out of Stock"}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
