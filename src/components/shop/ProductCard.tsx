
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export interface ProductProps {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  customizable: boolean;
  slug: string;
}

const ProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <Link to={`/shop/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
          />
          {product.customizable && (
            <div className="absolute top-3 right-3 bg-sage text-white text-sm font-medium py-1 px-3 rounded">
              Customizable
            </div>
          )}
        </div>
        <div className="p-5">
          <h3 className="font-playfair text-xl font-semibold text-charcoal mb-2 group-hover:text-sage transition-colors">
            {product.title}
          </h3>
          <div className="text-sm text-gray-600 mb-3">
            {product.category}
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-lg font-medium">${product.price.toFixed(2)}</span>
            <button className="bg-terracotta text-white p-2 rounded-full transition-all duration-300 transform group-hover:scale-110">
              <ShoppingBag size={18} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
