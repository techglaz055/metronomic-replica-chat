
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onLoginClick: () => void;
}

const Navbar = ({ onLoginClick }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                NolanAI
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                About Us
              </a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Pricing
              </a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Blog
              </a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Education
              </a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Studios
              </a>
            </div>
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <Button 
              onClick={onLoginClick}
              variant="outline" 
              className="border-slate-700 text-white hover:bg-slate-800"
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
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
                About Us
              </a>
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
                Pricing
              </a>
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
                Features
              </a>
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
                Blog
              </a>
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
                Education
              </a>
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
                Studios
              </a>
              <Button 
                onClick={onLoginClick}
                variant="outline" 
                className="w-full mt-4 border-slate-700 text-white hover:bg-slate-800"
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
