import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a2b3c] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/Sri Anand Hospital logo.png" 
                alt="Sri Anand Hospital" 
                className="h-12 w-auto brightness-0 invert" 
                referrerPolicy="no-referrer"
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
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-red-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-red-400 transition-colors">About</a></li>
              <li><a href="#doctors" className="hover:text-red-400 transition-colors">Doctors</a></li>
              <li><a href="#specialties" className="hover:text-red-400 transition-colors">Specialties</a></li>
              <li><a href="#emergency" className="hover:text-red-400 transition-colors">Emergency</a></li>
              <li><a href="#contact" className="hover:text-red-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold text-white mb-6">Contact Info</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="text-red-400 mt-1 shrink-0" size={20} />
                <p className="text-sm">Near RTC Bus Stand, Anantapur, AP 515001</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-red-400 shrink-0" size={20} />
                <p className="text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-red-400 shrink-0" size={20} />
                <p className="text-sm">info@srianandhospital.com</p>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="text-red-400 shrink-0" size={20} />
                <p className="text-sm">Available on WhatsApp</p>
              </div>
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
