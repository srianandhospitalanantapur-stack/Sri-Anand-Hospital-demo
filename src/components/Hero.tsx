import { motion } from 'motion/react';
import { Phone, Calendar, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{ 
          backgroundImage: 'url("https://res.cloudinary.com/dctf5un0g/image/upload/v1777024207/hospital.png_qshlpi.png")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0,0,0,0.4)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-white text-sm font-medium mb-8 backdrop-blur-md"
          >
             <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
             Trusted Multi-Specialty Care in Anantapur
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter text-white"
          >
            Best Healthcare <br />
            Hospital in <span className="text-red-500 relative">
              Anantapur
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-red-500/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-2xl font-light"
          >
            Providing world-class medical excellence with compassionate care. 
            24/7 Emergency & Trauma center located near RTC Bus Stand.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a 
              href="tel:+919876543210"
              className="bg-red-600 hover:bg-red-500 text-white px-10 py-5 rounded-2xl flex items-center justify-center gap-3 font-bold transition-all shadow-[0_10px_30px_rgba(220,38,38,0.3)] hover:-translate-y-1 active:scale-95 group"
            >
              <Phone className="group-hover:animate-bounce" size={22} />
              Emergency Call
            </a>
            <a 
              href="#contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-lg px-10 py-5 rounded-2xl flex items-center justify-center gap-3 font-bold transition-all hover:-translate-y-1 active:scale-95"
            >
              <Calendar size={22} />
              Book Appointment
            </a>
            <a 
              href="https://wa.me/919876543210"
              className="bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-5 rounded-2xl flex items-center justify-center gap-3 font-bold transition-all shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:-translate-y-1 active:scale-95 group"
            >
              <MessageCircle className="group-hover:rotate-12" size={22} />
              WhatsApp Now
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
          <div className="w-1 h-2 bg-white/40 rounded-full"></div>
        </div>
      </div>

      {/* Shapes for Decoration */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-red-600/10 blur-[120px] rounded-full -mr-20 -mb-20"></div>
    </section>
  );
}
