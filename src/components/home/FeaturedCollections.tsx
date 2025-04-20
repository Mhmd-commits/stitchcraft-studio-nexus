
import { Link } from 'react-router-dom';

const collections = [
  {
    id: 1,
    title: 'Home Décor',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Beautiful crochet pieces to elevate your living space',
    link: '/shop/home-decor'
  },
  {
    id: 2,
    title: 'Wearables',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Cozy, stylish crochet garments and accessories',
    link: '/shop/wearables'
  },
  {
    id: 3,
    title: 'Amigurumi',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Adorable crocheted stuffed animals and figures',
    link: '/shop/amigurumi'
  }
];

const FeaturedCollections = () => {
  return (
    <section className="py-16 bg-ivory">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div key={collection.id} className="group">
              <Link to={collection.link} className="block overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition duration-300">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.title} 
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="font-playfair text-2xl font-semibold text-ivory mb-2">{collection.title}</h3>
                    <p className="text-ivory text-opacity-90 mb-4 line-clamp-2">{collection.description}</p>
                    <span className="inline-block text-terracotta bg-ivory bg-opacity-90 px-4 py-2 rounded font-medium transition-all duration-300 group-hover:bg-opacity-100">
                      Shop Collection
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
