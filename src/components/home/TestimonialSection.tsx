
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "The custom baby blanket I ordered was absolutely gorgeous! The attention to detail and quality of work exceeded my expectations. It's now a treasured keepsake in our family.",
    author: "Sarah M.",
    location: "Portland, OR"
  },
  {
    id: 2,
    quote: "I'm so glad I found StitchCraft Studio! The crochet patterns are easy to follow, even for a beginner like me. The video tutorials were incredibly helpful too.",
    author: "Michael T.",
    location: "Chicago, IL"
  },
  {
    id: 3,
    quote: "I ordered a custom throw pillow with my daughter's name, and it's the perfect addition to her nursery. The craftsmanship is impeccable, and it was delivered exactly when promised.",
    author: "Jessica K.",
    location: "Denver, CO"
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-sage bg-opacity-5">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">What Our Customers Say</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <div className="text-terracotta text-5xl mb-6">"</div>
                    <p className="text-lg mb-6 italic text-charcoal">
                      {testimonial.quote}
                    </p>
                    <div className="font-medium text-sage">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white rounded-full shadow-md p-3 text-sage hover:text-terracotta transition-colors"
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white rounded-full shadow-md p-3 text-sage hover:text-terracotta transition-colors"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === activeIndex ? 'bg-terracotta' : 'bg-gray-300'
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
