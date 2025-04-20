
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PatternCard, { PatternProps } from "@/components/patterns/PatternCard";

// Patterns data with tips (no images, just yarn texture and pastel gradient in card)
const patterns: PatternProps[] = [
  {
    id: 1,
    title: "Summer Garden Tote Bag",
    image: "", // unused now
    difficulty: "Beginner",
    timeEstimate: "2-3 hours",
    isFree: true,
    slug: "summer-garden-tote",
    tip: "Perfect for freshening up your summer outfits!"
  },
  {
    id: 2,
    title: "Cozy Chevron Blanket",
    image: "",
    difficulty: "Intermediate",
    timeEstimate: "10-15 hours",
    isFree: false,
    slug: "cozy-chevron-blanket",
    tip: "Great for cozy nights in."
  },
  {
    id: 3,
    title: "Woodland Fox Amigurumi",
    image: "",
    difficulty: "Intermediate",
    timeEstimate: "5-6 hours",
    isFree: true,
    slug: "woodland-fox-amigurumi",
    tip: "Kids adore this cuddly woodland friend!"
  },
  {
    id: 4,
    title: "Modern Farmhouse Pillow",
    image: "",
    difficulty: "Beginner",
    timeEstimate: "3-4 hours",
    isFree: true,
    slug: "modern-farmhouse-pillow",
    tip: "Adds a handmade touch to any space."
  },
  {
    id: 5,
    title: "Vintage Lace Shawl",
    image: "",
    difficulty: "Advanced",
    timeEstimate: "20+ hours",
    isFree: false,
    slug: "vintage-lace-shawl",
    tip: "Chic, elegant, and timeless."
  },
  {
    id: 6,
    title: "Chunky Bobble Hat",
    image: "",
    difficulty: "Beginner",
    timeEstimate: "2-3 hours",
    isFree: true,
    slug: "chunky-bobble-hat",
    tip: "A quick, warm project—great for gifts."
  }
];

const Patterns = () => {
  const [difficulty, setDifficulty] = useState<string | null>(null);
  const [freeOnly, setFreeOnly] = useState(false);

  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredPatterns = patterns.filter(pattern => {
    if (difficulty && difficulty !== "All" && pattern.difficulty !== difficulty) return false;
    if (freeOnly && !pattern.isFree) return false;
    return true;
  });

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="section-title">Crochet Patterns & Tutorials</h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Browse our collection of crochet patterns for every skill level. From simple beginner 
            projects to intricate advanced designs.
          </p>
        </div>
        
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="font-medium mb-3">Difficulty Level:</h3>
              <div className="flex flex-wrap gap-2">
                {difficulties.map(level => (
                  <button
                    key={level}
                    className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                      difficulty === level || (level === "All" && !difficulty)
                        ? "bg-sage text-white"
                        : "bg-gray-100 text-charcoal hover:bg-gray-200"
                    }`}
                    onClick={() => setDifficulty(level === "All" ? null : level)}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="md:border-l md:pl-6 flex items-center">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={freeOnly}
                  onChange={() => setFreeOnly(!freeOnly)}
                />
                <div className={`w-10 h-5 rounded-full transition-colors ${freeOnly ? 'bg-sage' : 'bg-gray-300'}`}>
                  <div className={`transform h-5 w-5 rounded-full bg-white shadow-md transition-transform ${freeOnly ? 'translate-x-5' : 'translate-x-0'}`}></div>
                </div>
                <span className="ml-3 text-sm">Free patterns only</span>
              </label>
            </div>
          </div>
        </div>
        
        {/* Patterns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPatterns.map(pattern => (
            <PatternCard key={pattern.id} pattern={pattern} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Patterns;
