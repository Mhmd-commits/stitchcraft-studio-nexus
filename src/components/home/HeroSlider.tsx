
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: 'Handcrafted Crochet Wonders',
    description: 'Unique, Beautiful & Made Just For You',
    action: 'Shop Collection',
    link: '/shop'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: 'Custom Orders Welcome',
    description: 'Your Vision, Our Expertise',
    action: 'Order Custom',
    link: '/shop/custom'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: 'Learn to Crochet',
    description: 'Free Patterns & Video Tutorials',
    action: 'Start Learning',
    link: '/patterns'
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-charcoal bg-opacity-30"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center max-w-3xl">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory mb-4 drop-shadow-md">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-ivory mb-8 drop-shadow-md">
                {slide.description}
              </p>
              <Link 
                to={slide.link} 
                className="inline-block bg-terracotta hover:bg-opacity-90 text-ivory py-3 px-8 rounded-md text-lg shadow-md transition duration-300"
              >
                {slide.action}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-ivory bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 text-white transition"
        onClick={goToPreviousSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-ivory bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 text-white transition"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-terracotta w-6' : 'bg-ivory bg-opacity-50'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
