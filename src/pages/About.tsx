
import MainLayout from "@/components/layout/MainLayout";
import StoryTimeline from "@/components/about/StoryTimeline";

const About = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-24 bg-sage bg-opacity-5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="section-title mb-6">About StitchCraft Studio</h1>
            <p className="text-xl text-gray-700 mb-8">
              Handmade Wonders, Crafted Your Way. A passion for crochet turned into a mission 
              to create beautiful, personalized pieces that bring joy.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="StitchCraft Studio workspace"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="section-subtitle mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                StitchCraft Studio was born from a lifelong passion for creating. What started as 
                a hobby quickly blossomed into something more as friends and family began requesting 
                custom pieces.
              </p>
              <p className="text-gray-700 mb-4">
                Each piece is thoughtfully designed and meticulously handcrafted using premium 
                materials. We believe that handmade items carry a special energy and connection 
                that mass-produced products simply cannot match.
              </p>
              <p className="text-gray-700">
                Our mission is simple: to create beautiful, functional crochet pieces that bring 
                joy and warmth to your home and life. Whether it's a custom-designed throw pillow 
                or a cozy winter scarf, each StitchCraft creation is made with love and attention 
                to detail.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <StoryTimeline />
      
      {/* Philosophy Section */}
      <section className="py-16 bg-sage bg-opacity-5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-subtitle mb-6">Our Philosophy</h2>
            <p className="text-xl text-gray-700 mb-8">
              We believe in the power of handmade goods to bring warmth, character, and uniqueness 
              to everyday life. Every stitch tells a story.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-sage text-3xl mb-4">❈</div>
                <h3 className="font-playfair text-xl font-semibold mb-3">Quality Materials</h3>
                <p className="text-gray-700">
                  We carefully select premium yarns that are soft, durable, and designed to last.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-sage text-3xl mb-4">❈</div>
                <h3 className="font-playfair text-xl font-semibold mb-3">Handmade with Love</h3>
                <p className="text-gray-700">
                  Each piece is thoughtfully created by hand, with careful attention to every detail.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-sage text-3xl mb-4">❈</div>
                <h3 className="font-playfair text-xl font-semibold mb-3">Personalized Touch</h3>
                <p className="text-gray-700">
                  Custom orders are our specialty. We love bringing your unique vision to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
