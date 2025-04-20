
import MainLayout from "@/components/layout/MainLayout";
import { Link } from "react-router-dom";

const Studio = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="section-title">3D Preview Studio</h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-600 mb-8">
            Coming Soon! Our interactive 3D preview studio will allow you to visualize your custom crochet designs
            before ordering.
          </p>
          <div className="bg-sage bg-opacity-10 p-8 rounded-lg max-w-4xl mx-auto">
            <div className="text-6xl mb-6">🧶</div>
            <h2 className="font-playfair text-2xl font-medium text-sage mb-4">Under Development</h2>
            <p className="text-gray-700 mb-6">
              We're working hard to bring you an amazing 3D preview experience. With our studio, you'll be able to:
            </p>
            <ul className="text-left max-w-md mx-auto mb-8 space-y-2">
              <li className="flex items-start">
                <span className="text-terracotta mr-2">✓</span>
                <span>Rotate and examine your custom design in real-time</span>
              </li>
              <li className="flex items-start">
                <span className="text-terracotta mr-2">✓</span>
                <span>Toggle between different stitch types and patterns</span>
              </li>
              <li className="flex items-start">
                <span className="text-terracotta mr-2">✓</span>
                <span>Test different yarn colors with realistic rendering</span>
              </li>
              <li className="flex items-start">
                <span className="text-terracotta mr-2">✓</span>
                <span>Export your design as a high-resolution mockup</span>
              </li>
            </ul>
            <Link to="/shop/custom" className="btn-secondary inline-block">
              Place a Custom Order Now
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Studio;
