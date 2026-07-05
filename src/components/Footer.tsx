import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1a2b3c] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://res.cloudinary.com/dctf5un0g/image/upload/v1777024186/logo.png_ys4iva.png" 
                alt="Sri Anand Hospital" 
                className="h-12 w-auto brightness-0 invert" 
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div>
                <h3 className="text-xl font-bold text-white">Sri Anand Hospital</h3>
                <p className="text-xs italic text-red-400">You Are in Safe Hands</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Leading multi-specialty hospital in Anantapur providing world-class 
              healthcare with compassion and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm font-semibold">
              <li><Link to="/" className="hover:text-red-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-red-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-red-400 transition-colors">Services</Link></li>
              <li><Link to="/doctors" className="hover:text-red-400 transition-colors">Our Doctors</Link></li>
              <li><Link to="/contact" className="hover:text-red-400 transition-colors">Contact & Map</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe for healthcare tips and hospital updates.</p>
            <form 
              action=" https://formspree.io/f/mgorrbpa " 
              method="POST"
              className="flex flex-col gap-2"
            >
              <input type="hidden" name="_subject" value="Newsletter Subscription" />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                required
                className="bg-gray-800 border-none rounded-lg px-4 py-2 text-sm text-white focus:ring-2 focus:ring-red-600 outline-none w-full"
              />
              <button 
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors w-full"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Info</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="text-red-400 mt-1 shrink-0" size={20} />
                <p className="text-sm">Near RTC Bus Stand, Anantapur, AP 515001</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-red-400 shrink-0" size={20} />
                <p className="text-sm">+91 63008 82019</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-red-400 shrink-0" size={20} />
                <p className="text-sm break-all">srianandhospitalanantapur@gmail.com</p>
              </div>
              <a 
                href="https://wa.me/916300882019" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-3 hover:text-red-400 transition-colors"
              >
                <MessageCircle className="text-red-400 shrink-0" size={20} />
                <p className="text-sm">Available on WhatsApp</p>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-xs">
          <p>© 2026 Sri Anand Hospital, Anantapur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
