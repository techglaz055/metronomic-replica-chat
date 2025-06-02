
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onLoginClick: () => void;
}

const Navbar = ({ onLoginClick }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                NolanAI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === '/' 
                    ? 'text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/pricing" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === '/pricing' 
                    ? 'text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Pricing
              </Link>
              <Link 
                to="/features" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === '/features' 
                    ? 'text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Features
              </Link>
              <Link 
                to="/blog" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === '/blog' 
                    ? 'text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Blog
              </Link>
              <Link 
                to="/education" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === '/education' 
                    ? 'text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Education
              </Link>
              <Link 
                to="/enterprise" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === '/enterprise' 
                    ? 'text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Studios
              </Link>
            </div>
          </div>

          {/* Login Button - Improved visibility */}
          <div className="hidden md:block">
            <Button 
              onClick={onLoginClick}
              className="bg-white text-slate-900 hover:bg-gray-100 font-medium px-6 py-2 rounded-full border-2 border-white"
            >
              Log in
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 rounded-lg mt-2">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/pricing" 
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/features" 
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/education" 
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Education
              </Link>
              <Link 
                to="/enterprise" 
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Studios
              </Link>
              <Button 
                onClick={() => {
                  onLoginClick();
                  setIsMenuOpen(false);
                }}
                className="w-full mt-4 bg-white text-slate-900 hover:bg-gray-100 font-medium"
              >
                Log in
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
