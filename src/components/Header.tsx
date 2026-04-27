import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Specialties', href: '#specialties' },
    { name: 'Emergency', href: '#emergency' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://res.cloudinary.com/dctf5un0g/image/upload/v1777024186/logo.png_ys4iva.png" 
              alt="Sri Anand Hospital Logo" 
              className="h-20 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">Sri Anand Hospital</h1>
              <p className="hidden sm:block text-xs italic text-gray-500">You Are in Safe Hands</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+917416626899"
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
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-gray-700 hover:text-red-600 font-medium border-b border-gray-50"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:+917416626899"
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
