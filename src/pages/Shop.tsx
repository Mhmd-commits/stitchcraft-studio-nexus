
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import ProductCard, { ProductProps } from "@/components/shop/ProductCard";

// New product list: Crochet items w/ photos matching types & pinkish theme
const products: ProductProps[] = [
  {
    id: 1,
    title: "Crochet Flower Pillow",
    // soft pink crochet flower pillow
    image: "https://images.pexels.com/photos/8692516/pexels-photo-8692516.jpeg?auto=compress&w=800&q=80",
    price: 44.99,
    category: "Home Décor",
    customizable: true,
    slug: "crochet-flower-pillow"
  },
  {
    id: 2,
    title: "Pastel Crochet Scarf",
    // pink pastels and soft crochet yarn, best match for scarf
    image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&w=800&q=80",
    price: 32.99,
    category: "Wearables",
    customizable: true,
    slug: "pastel-crochet-scarf"
  },
  {
    id: 3,
    title: "Amigurumi Bunny Plush",
    // pink amigurumi crochet bunny
    image: "https://images.pexels.com/photos/1637894/pexels-photo-1637894.jpeg?auto=compress&w=800&q=80",
    price: 27.99,
    category: "Amigurumi",
    customizable: false,
    slug: "amigurumi-bunny-plush"
  },
  {
    id: 4,
    title: "Macramé Wall Hanging",
    // pink pastel wall hanging (crochet/macrame)
    image: "https://images.pexels.com/photos/1108097/pexels-photo-1108097.jpeg?auto=compress&w=800&q=80",
    price: 59.99,
    category: "Home Décor",
    customizable: true,
    slug: "macrame-wall-hanging"
  },
  {
    id: 5,
    title: "Chunky Crochet Beanie",
    // knit/crochet beanie in blush/pink
    image: "https://images.pexels.com/photos/3746225/pexels-photo-3746225.jpeg?auto=compress&w=800&q=80",
    price: 24.99,
    category: "Wearables",
    customizable: true,
    slug: "chunky-crochet-beanie"
  },
  {
    id: 6,
    title: "Crochet Plant Hanger",
    // pinkish yarn plant hanger, best match available
    image: "https://images.pexels.com/photos/1108104/pexels-photo-1108104.jpeg?auto=compress&w=800&q=80",
    price: 21.99,
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
