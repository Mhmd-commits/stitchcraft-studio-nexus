
import MainLayout from "@/components/layout/MainLayout";
import { Link } from "react-router-dom";

const CommunityProjects = [
  {
    id: 1,
    title: "Rainbow Granny Square Blanket",
    author: "CrochetLover42",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    likes: 42,
    comments: 12
  },
  {
    id: 2,
    title: "Amigurumi Fox Family",
    author: "YarnWhisperer",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    likes: 38,
    comments: 9
  },
  {
    id: 3,
    title: "Modern Wall Hanging",
    author: "StitchNinety9",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    likes: 27,
    comments: 5
  }
];

const Community = () => {
  return (
    <MainLayout>
      <section className="bg-sage bg-opacity-10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="section-title">StitchCraft Community</h1>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Join our growing community of crochet enthusiasts to share your projects, 
              get inspired, and connect with fellow makers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3">
              <h2 className="section-subtitle mb-8">Community Showcase</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {CommunityProjects.map((project) => (
                  <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-playfair text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">By {project.author}</p>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>{project.likes} Likes</span>
                        <span>{project.comments} Comments</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <button className="btn-outline">View More Projects</button>
              </div>
            </div>
            
            <div className="md:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="font-playfair text-xl font-semibold mb-4">Join The Discussion</h2>
                <div className="space-y-4 mb-6">
                  <div className="bg-sage bg-opacity-10 p-4 rounded">
                    <h3 className="font-medium mb-2">Monthly Challenge</h3>
                    <p className="text-gray-700 text-sm mb-2">
                      April's theme: "Spring Garden Inspirations"
                    </p>
                    <Link to="#" className="text-terracotta text-sm hover:underline">
                      See Entries →
                    </Link>
                  </div>
                  
                  <div className="bg-sage bg-opacity-10 p-4 rounded">
                    <h3 className="font-medium mb-2">Technique Talk</h3>
                    <p className="text-gray-700 text-sm mb-2">
                      This week: "Mastering the Magic Circle"
                    </p>
                    <Link to="#" className="text-terracotta text-sm hover:underline">
                      Join Discussion →
                    </Link>
                  </div>
                  
                  <div className="bg-sage bg-opacity-10 p-4 rounded">
                    <h3 className="font-medium mb-2">Pattern Help</h3>
                    <p className="text-gray-700 text-sm mb-2">
                      Need help with a tricky pattern? Ask here!
                    </p>
                    <Link to="#" className="text-terracotta text-sm hover:underline">
                      Ask Question →
                    </Link>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-medium mb-4">Coming Soon!</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Our full community platform is under development. Sign up to be notified when it launches!
                  </p>
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="w-full px-4 py-2 rounded border border-gray-300 mb-3 focus:outline-none focus:border-sage"
                  />
                  <button className="w-full btn-primary">
                    Notify Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Community;
