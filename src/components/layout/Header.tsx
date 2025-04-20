
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-ivory shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="font-playfair font-bold text-2xl text-sage">StitchCraft</span>
          <span className="font-playfair font-light text-xl text-terracotta">Studio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="stitch-link font-medium text-charcoal hover:text-sage transition">Home</Link>
          <Link to="/shop" className="stitch-link font-medium text-charcoal hover:text-sage transition">Shop</Link>
          <Link to="/patterns" className="stitch-link font-medium text-charcoal hover:text-sage transition">Patterns</Link>
          <Link to="/studio" className="stitch-link font-medium text-charcoal hover:text-sage transition">Studio</Link>
          <Link to="/community" className="stitch-link font-medium text-charcoal hover:text-sage transition">Community</Link>
          <Link to="/about" className="stitch-link font-medium text-charcoal hover:text-sage transition">About</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative p-2 text-charcoal hover:text-sage transition">
            <ShoppingBag size={22} />
            <span className="absolute -top-1 -right-1 bg-terracotta text-ivory rounded-full w-5 h-5 flex items-center justify-center text-xs">
              0
            </span>
          </Link>
          <button 
            className="md:hidden text-charcoal focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-ivory absolute w-full shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium text-charcoal hover:text-sage transition px-2 py-3 border-b border-gray-100"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="font-medium text-charcoal hover:text-sage transition px-2 py-3 border-b border-gray-100"
              onClick={toggleMenu}
            >
              Shop
            </Link>
            <Link 
              to="/patterns" 
              className="font-medium text-charcoal hover:text-sage transition px-2 py-3 border-b border-gray-100"
              onClick={toggleMenu}
            >
              Patterns
            </Link>
            <Link 
              to="/studio" 
              className="font-medium text-charcoal hover:text-sage transition px-2 py-3 border-b border-gray-100"
              onClick={toggleMenu}
            >
              Studio
            </Link>
            <Link 
              to="/community" 
              className="font-medium text-charcoal hover:text-sage transition px-2 py-3 border-b border-gray-100"
              onClick={toggleMenu}
            >
              Community
            </Link>
            <Link 
              to="/about" 
              className="font-medium text-charcoal hover:text-sage transition px-2 py-3"
              onClick={toggleMenu}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
