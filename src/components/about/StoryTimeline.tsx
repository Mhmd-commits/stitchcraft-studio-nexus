
const timelineEvents = [
  {
    year: '2018',
    title: 'First Stitch',
    description: "Discovered the joy of crochet through a beginner's workshop.",
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    year: '2019',
    title: 'Learning & Growing',
    description: 'Mastered advanced techniques and created my first original designs.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    year: '2020',
    title: 'First Commissions',
    description: 'Started creating custom pieces for family and friends.',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    year: '2022',
    title: 'StitchCraft Studio',
    description: 'Officially launched StitchCraft Studio to share my creations with the world.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];

const StoryTimeline = () => {
  return (
    <section className="py-16 bg-ivory">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Our Journey</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-sage bg-opacity-30"></div>
          
          {/* Timeline items */}
          <div className="relative">
            {timelineEvents.map((event, index) => (
              <div 
                key={index} 
                className={`mb-16 relative flex ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                } items-center`}
              >
                {/* Year bubble */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-terracotta rounded-full flex items-center justify-center text-white font-semibold z-10">
                  {event.year}
                </div>
                
                {/* Content */}
                <div className="w-full md:w-5/12">
                  <div className={`mb-8 md:mb-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <h3 className="font-playfair text-2xl font-semibold text-sage mb-2">{event.title}</h3>
                    <p className="text-charcoal">{event.description}</p>
                  </div>
                </div>
                
                {/* Spacer for the middle line and bubble */}
                <div className="hidden md:block w-2/12"></div>
                
                {/* Image */}
                <div className="w-full md:w-5/12">
                  <div className={`mt-8 md:mt-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryTimeline;
