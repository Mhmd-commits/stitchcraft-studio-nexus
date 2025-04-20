
import { Link } from 'react-router-dom';
import { Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sage text-ivory">
      {/* Newsletter */}
      <div className="bg-terracotta py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <h3 className="font-playfair text-2xl font-semibold mb-4">Join Our Crochet Community</h3>
            <p className="mb-6">Sign up for our newsletter to receive patterns, tips, and exclusive offers.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta"
              />
              <button className="bg-charcoal hover:bg-opacity-80 px-6 py-2 rounded transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="font-playfair font-bold text-2xl">StitchCraft</span>
              <span className="font-playfair font-light text-xl">Studio</span>
            </div>
            <p className="text-ivory text-opacity-80 mb-6">
              Handmade wonders, crafted your way. Beautiful, custom crochet creations for you and your home.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-ivory hover:text-terracotta transition" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-ivory hover:text-terracotta transition" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="mailto:hello@stitchcraftstudio.com" className="text-ivory hover:text-terracotta transition" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop/home-decor" className="hover:text-terracotta transition">Home Décor</Link></li>
              <li><Link to="/shop/wearables" className="hover:text-terracotta transition">Wearables</Link></li>
              <li><Link to="/shop/amigurumi" className="hover:text-terracotta transition">Amigurumi</Link></li>
              <li><Link to="/shop/custom" className="hover:text-terracotta transition">Custom Orders</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Learn</h4>
            <ul className="space-y-2">
              <li><Link to="/patterns" className="hover:text-terracotta transition">Free Patterns</Link></li>
              <li><Link to="/tutorials" className="hover:text-terracotta transition">Video Tutorials</Link></li>
              <li><Link to="/blog" className="hover:text-terracotta transition">Blog</Link></li>
              <li><Link to="/community" className="hover:text-terracotta transition">Community</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Help</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-terracotta transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-terracotta transition">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-terracotta transition">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-terracotta transition">Shipping & Returns</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ivory border-opacity-20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-ivory text-opacity-80">
            &copy; {new Date().getFullYear()} StitchCraft Studio. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-ivory text-opacity-80 hover:text-opacity-100">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-ivory text-opacity-80 hover:text-opacity-100">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
