
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 bg-charcoal text-ivory">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6">
              Ready to Create Something Special?
            </h2>
            <p className="text-lg mb-8 text-ivory text-opacity-90">
              Whether you're looking for a unique handcrafted item or want to learn 
              to crochet yourself, StitchCraft Studio has something for you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/shop" 
                className="bg-terracotta hover:bg-opacity-90 text-white py-3 px-8 rounded-md shadow-md transition duration-300"
              >
                Shop Collection
              </Link>
              <Link 
                to="/patterns" 
                className="border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-white py-3 px-8 rounded-md transition duration-300"
              >
                Browse Patterns
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-sage bg-opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10">
                <div className="text-8xl mb-4">🧶</div>
                <div className="text-xl font-playfair text-center">Handmade with Love</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
