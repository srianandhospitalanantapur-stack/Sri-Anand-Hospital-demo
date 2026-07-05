import { useEffect } from 'react';
import { updatePageSEO } from '../utils/seo';
import Contact from '../components/Contact';
import { motion } from 'motion/react';
import { 
  Sparkles, MapPin, Phone, Mail, Clock, MessageCircle, Navigation, 
  Compass, ShieldAlert 
} from 'lucide-react';

export default function ContactPage() {
  useEffect(() => {
    updatePageSEO('contact');
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#1a2b3c] to-[#0f1b29] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url("https://res.cloudinary.com/dctf5un0g/image/upload/v1777024207/hospital.png_qshlpi.png")' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 px-4 py-1 rounded-full text-red-400 text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Sparkles size={14} /> 24/7 Patient Assistance
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Get in <span className="text-red-500">Touch</span> with Us
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed">
            Locate Sri Anand Hospital easily in the heart of Anantapur. Reach out for consultations, treatments, or ambulance dispatches.
          </p>
        </div>
        <div className="absolute -top-12 -right-12 w-96 h-96 bg-red-600/10 rounded-full blur-3xl z-0"></div>
      </div>

      {/* Main Form & Information Section */}
      <Contact />

      {/* Getting Here (Location & Transit SEO Booster) */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-100 px-3 py-1 rounded-full">
              Directions & Landmark Info
            </span>
            <h2 className="text-3xl font-black text-gray-900 mt-4">How to Reach Sri Anand Hospital</h2>
            <p className="text-gray-500 text-xs md:text-sm mt-2">
              Centrally situated in Anantapur town, making access extremely swift for trauma emergencies and scheduled patient transits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* By Bus */}
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-4">
              <div className="bg-red-100 text-red-600 p-3 rounded-2xl w-12 h-12 flex items-center justify-center">
                <Navigation size={22} />
              </div>
              <h4 className="text-lg font-bold text-gray-900">From RTC Bus Stand</h4>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                Sri Anand Hospital is located <strong>nearly adjacent/opposite to the RTC Bus Stand</strong> in Anantapur. Simply take a 2-minute walk or auto-rickshaw to find us immediately.
              </p>
            </div>

            {/* By Train */}
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-4">
              <div className="bg-red-100 text-red-600 p-3 rounded-2xl w-12 h-12 flex items-center justify-center">
                <Compass size={22} />
              </div>
              <h4 className="text-lg font-bold text-gray-900">From Anantapur Railway Station</h4>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                We are situated roughly 2.5 km from the Railway Station (ATP). Auto-rickshaws and cabs are readily available 24/7 to transport you directly to the hospital within 8 minutes.
              </p>
            </div>

            {/* Helpline */}
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-4">
              <div className="bg-red-100 text-red-600 p-3 rounded-2xl w-12 h-12 flex items-center justify-center">
                <ShieldAlert size={22} />
              </div>
              <h4 className="text-lg font-bold text-gray-900">Accident Emergency</h4>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                For ambulance dispatch or quick trauma admission, dial <strong>+91 63008 82019</strong>. Our surgical trauma response unit will remain prepped for immediate patient arrival.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contacts Banner */}
      <section className="bg-[#1a2b3c] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-black">Looking for direct WhatsApp inquiry?</h3>
            <p className="text-gray-400 text-sm mt-1">Get immediate answers regarding OPD timings and specialist availability.</p>
          </div>
          <a
            href="https://wa.me/916300882019"
            target="_blank"
            rel="noreferrer"
            className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all hover:-translate-y-1"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
