
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import ProductCard, { ProductProps } from "@/components/shop/ProductCard";

// Images sourced to visually match the Sweet Softies craft-fair crochet types, with a pinkish vibe
const products: ProductProps[] = [
  {
    id: 1,
    title: "Hand-crafted Throw Pillow",
    // Sweet Softies: https://www.sweetsofties.com/2022/03/craft-fair-roundup.html (crochet pillows)
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sat=100&hue=330", // pastel/pink overlay, soft-by-proxy
    price: 49.99,
    category: "Home Décor",
    customizable: true,
    slug: "hand-crafted-throw-pillow"
  },
  {
    id: 2,
    title: "Cozy Winter Scarf",
    // Sweet Softies: pastel pink scarf example
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sat=100&hue=330",
    price: 34.99,
    category: "Wearables",
    customizable: true,
    slug: "cozy-winter-scarf"
  },
  {
    id: 3,
    title: "Cute Amigurumi Bear",
    // Sweet Softies: amigurumi animals, lots of pink and pastel toys
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sat=120&hue=330",
    price: 29.99,
    category: "Amigurumi",
    customizable: false,
    slug: "cute-amigurumi-bear"
  },
  {
    id: 4,
    title: "Modern Wall Hanging",
    // Sweet Softies: wall hangings/macrame, pinkish version
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sat=100&hue=330",
    price: 69.99,
    category: "Home Décor",
    customizable: true,
    slug: "modern-wall-hanging"
  },
  {
    id: 5,
    title: "Hand-knit Beanie",
    // Sweet Softies: beanies in blush/pastel
    image: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sat=100&hue=330",
    price: 27.99,
    category: "Wearables",
    customizable: true,
    slug: "hand-knit-beanie"
  },
  {
    id: 6,
    title: "Crochet Plant Hanger",
    // Sweet Softies: plant hangers, add a pink "look" for theme consistency
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sat=70&hue=330",
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

