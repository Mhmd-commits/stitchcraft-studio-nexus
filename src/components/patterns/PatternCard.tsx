
import { Link } from 'react-router-dom';
import { Yarn, BookHeart, Star, Flower, Heart, BookOpen } from "lucide-react";

export interface PatternProps {
  id: number;
  title: string;
  image: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  timeEstimate: string;
  isFree: boolean;
  slug: string;
  tip?: string;
}

const patternIcon = (title: string) => {
  // Pick an icon to match pattern based on its name
  if (title.toLowerCase().includes('fox')) return <BookHeart className="text-terracotta" />;
  if (title.toLowerCase().includes('blanket')) return <Yarn className="text-sage" />;
  if (title.toLowerCase().includes('shawl')) return <Star className="text-yellow-600" />;
  if (title.toLowerCase().includes('pillow')) return <Flower className="text-pink-400" />;
  if (title.toLowerCase().includes('hat')) return <Heart className="text-pink-400" />;
  return <BookOpen className="text-sage" />;
};

const PatternCard = ({ pattern }: { pattern: PatternProps }) => {
  const difficultyColor = () => {
    switch (pattern.difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Pick a background gradient
  const pastelGradient =
    pattern.id % 2 === 0
      ? 'linear-gradient(135deg, #ffd5ec 0%, #ffeeb7 100%)'
      : 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)';

  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl relative"
      style={{
        backgroundImage: `url('/images/yarn-texture.png'), ${pastelGradient}`,
        backgroundSize: 'cover, cover',
        backgroundBlendMode: 'overlay',
      }}
    >
      <Link to={`/patterns/${pattern.slug}`} className="block h-full">
        <div className="relative flex justify-center items-center aspect-square min-h-[240px]">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <span className="mb-2">{patternIcon(pattern.title)}</span>
            <span className="font-playfair text-xl font-semibold text-charcoal mb-1 group-hover:text-sage transition-colors text-center">
              {pattern.title}
            </span>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${difficultyColor()}`}>
                {pattern.difficulty}
              </span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-gray-100 text-gray-800">
                {pattern.timeEstimate}
              </span>
            </div>
          </div>
          {pattern.isFree && (
            <div className="absolute top-3 right-3 bg-terracotta text-white text-sm font-medium py-1 px-3 rounded shadow">
              Free
            </div>
          )}
        </div>
        <div className="p-5 pt-3">
          {/* Bonus tip/quote */}
          {pattern.tip && (
            <div className="mb-2 italic text-base text-terracotta font-medium font-playfair" style={{ fontFamily: "'Playfair Display', cursive, serif" }}>
              “{pattern.tip}”
            </div>
          )}
          <div className="mt-3 flex justify-between items-center">
            <span className="text-sage font-medium">View Pattern</span>
            <span className="text-terracotta group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PatternCard;

