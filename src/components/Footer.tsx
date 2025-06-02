
import { Instagram, Youtube } from 'lucide-react';
import { FaXTwitter, FaDiscord } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left side - Logo and Copyright */}
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                NOLAN
              </span>
            </div>
            <span className="text-gray-400 text-sm">© NolanAI, Inc. 2025</span>
          </div>

          {/* Center - Links */}
          <div className="flex flex-wrap items-center space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Testimonials
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Referral Program
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Releases
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              FAQ
            </a>
          </div>

          {/* Right side - Social Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaXTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Youtube size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaDiscord size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
