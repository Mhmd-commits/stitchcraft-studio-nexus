import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import ProductCard, { ProductProps } from "@/components/shop/ProductCard";

// Updated products data with pinkish-toned images matching crochet categories better
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
    image: "https://images.unsplash.com/photo-1589652717521-46884f5d9bf8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // pinkish pink scarf image
    price: 34.99,
    category: "Wearables",
    customizable: true,
    slug: "cozy-winter-scarf"
  },
  {
    id: 3,
    title: "Cute Amigurumi Bear",
    image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // cute stuffed toy with slight pink background
    price: 29.99,
    category: "Amigurumi",
    customizable: false,
    slug: "cute-amigurumi-bear"
  },
  {
    id: 4,
    title: "Modern Wall Hanging",
    image: "https://images.unsplash.com/photo-1605909007005-4eda3bf61468?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // wall hanging with pink tones
    price: 69.99,
    category: "Home Décor",
    customizable: true,
    slug: "modern-wall-hanging"
  },
  {
    id: 5,
    title: "Hand-knit Beanie",
    image: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // pinkish knit beanie
    price: 27.99,
    category: "Wearables",
    customizable: true,
    slug: "hand-knit-beanie"
  },
  {
    id: 6,
    title: "Crochet Plant Hanger",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // plant hanger with soft pink background
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
