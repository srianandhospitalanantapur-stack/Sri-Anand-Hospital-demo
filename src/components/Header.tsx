import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Doctors', path: '/doctors' },
    { name: 'Contact & Map', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="https://res.cloudinary.com/dctf5un0g/image/upload/v1777024186/logo.png_ys4iva.png" 
              alt="Sri Anand Hospital Logo" 
              className="h-20 w-auto object-contain transition-transform group-hover:scale-105"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">Sri Anand Hospital</h1>
              <p className="hidden sm:block text-xs italic text-gray-500">You Are in Safe Hands</p>
            </div>
          </Link>
 
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`font-semibold text-sm transition-colors ${
                    isActive ? 'text-red-600 border-b-2 border-red-600 pb-1' : 'text-gray-700 hover:text-red-600'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <a 
              href="tel:+916300882019"
              className="bg-red-600 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-bold hover:bg-red-700 transition-all shadow-md active:scale-95"
            >
              <Phone size={18} />
              Call Now
            </a>
          </nav>
 
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-gray-700" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
 
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 font-semibold border-b border-gray-50 ${
                      isActive ? 'text-red-600 pl-2 border-l-2 border-red-600' : 'text-gray-700 hover:text-red-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <a 
                href="tel:+916300882019"
                className="w-full bg-red-600 text-white px-5 py-4 rounded-lg flex justify-center items-center gap-2 font-bold mt-4"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
