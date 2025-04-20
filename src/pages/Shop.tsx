
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import ProductCard, { ProductProps } from "@/components/shop/ProductCard";

// Mock products data
const products: ProductProps[] = [
  {
    id: 1,
    title: "Hand-crafted Throw Pillow",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 49.99,
    category: "Home Décor",
    customizable: true,
    slug: "hand-crafted-throw-pillow"
  },
  {
    id: 2,
    title: "Cozy Winter Scarf",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 34.99,
    category: "Wearables",
    customizable: true,
    slug: "cozy-winter-scarf"
  },
  {
    id: 3,
    title: "Cute Amigurumi Bear",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 29.99,
    category: "Amigurumi",
    customizable: false,
    slug: "cute-amigurumi-bear"
  },
  {
    id: 4,
    title: "Modern Wall Hanging",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 69.99,
    category: "Home Décor",
    customizable: true,
    slug: "modern-wall-hanging"
  },
  {
    id: 5,
    title: "Hand-knit Beanie",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 27.99,
    category: "Wearables",
    customizable: true,
    slug: "hand-knit-beanie"
  },
  {
    id: 6,
    title: "Crochet Plant Hanger",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 19.99,
    category: "Home Décor",
    customizable: false,
    slug: "crochet-plant-hanger"
  }
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = ["All", "Home Décor", "Wearables", "Amigurumi"];
  
  const filteredProducts = selectedCategory && selectedCategory !== "All" 
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="section-title">Shop Our Handmade Collection</h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Each piece is carefully hand-crafted with love and attention to detail. 
            Browse our collection or request a custom order.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full border transition-all ${
                selectedCategory === category || (category === "All" && !selectedCategory)
                  ? "bg-sage text-white border-sage"
                  : "bg-white text-charcoal border-gray-200 hover:border-sage"
              }`}
              onClick={() => setSelectedCategory(category === "All" ? null : category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Shop;
