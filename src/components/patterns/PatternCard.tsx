
import { Link } from 'react-router-dom';

export interface PatternProps {
  id: number;
  title: string;
  image: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  timeEstimate: string;
  isFree: boolean;
  slug: string;
}

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

  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <Link to={`/patterns/${pattern.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={pattern.image}
            alt={pattern.title}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
          />
          {pattern.isFree && (
            <div className="absolute top-3 right-3 bg-terracotta text-white text-sm font-medium py-1 px-3 rounded">
              Free
            </div>
          )}
        </div>
        <div className="p-5">
          <h3 className="font-playfair text-xl font-semibold text-charcoal mb-2 group-hover:text-sage transition-colors">
            {pattern.title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${difficultyColor()}`}>
              {pattern.difficulty}
            </span>
            <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-gray-100 text-gray-800">
              {pattern.timeEstimate}
            </span>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-sage font-medium">View Pattern</span>
            <span className="text-terracotta group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PatternCard;
