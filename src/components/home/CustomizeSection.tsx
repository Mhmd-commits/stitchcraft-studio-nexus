
import { Link } from 'react-router-dom';

const CustomizeSection = () => {
  const yarnColors = [
    { id: 1, name: 'Sage Green', color: '#8AA29E' },
    { id: 2, name: 'Terracotta', color: '#D77A61' },
    { id: 3, name: 'Cream', color: '#F5F3ED' },
    { id: 4, name: 'Navy Blue', color: '#22333B' },
    { id: 5, name: 'Dusty Rose', color: '#C08497' },
    { id: 6, name: 'Mustard', color: '#E2B33C' },
  ];

  return (
    <section className="py-16 bg-sage bg-opacity-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="section-title mb-6">Customize Your Own Crochet Piece</h2>
            <p className="text-lg mb-6">
              Choose your favorite style, select from our premium yarn colors, and add personalized 
              touches. We'll handcraft a unique piece just for you.
            </p>
            <div className="mb-8">
              <h3 className="font-medium text-xl mb-4">Select Your Yarn Color:</h3>
              <div className="flex flex-wrap gap-3">
                {yarnColors.map((yarn) => (
                  <button
                    key={yarn.id}
                    className="w-12 h-12 rounded-full border-2 border-white shadow-sm hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-terracotta"
                    style={{ backgroundColor: yarn.color }}
                    aria-label={yarn.name}
                    title={yarn.name}
                  ></button>
                ))}
              </div>
            </div>
            <Link 
              to="/shop/custom" 
              className="btn-secondary inline-block"
            >
              Start Your Custom Order
            </Link>
          </div>
          <div className="lg:w-1/2 max-w-md mx-auto">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Custom crochet item" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-ivory rounded-lg shadow-lg p-4 w-40">
                <div className="font-playfair text-xl text-sage mb-1">Made For You</div>
                <div className="text-sm text-charcoal">100% Handcrafted with Love</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizeSection;
