import { motion } from 'motion/react';
import { PhoneCall, AlertTriangle } from 'lucide-react';

export default function Emergency() {
  return (
    <section id="emergency" className="py-20 bg-red-600 relative overflow-hidden">
      {/* Texture/Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
             <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
           </pattern>
           <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full font-bold">
              <AlertTriangle className="animate-pulse" size={20} />
              Emergency Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              24/7 Emergency Services Available
            </h2>
            <p className="text-xl text-red-50 opacity-90 leading-relaxed">
              Our emergency hospital near RTC Bus Stand, Anantapur is equipped for trauma, 
              accidents & critical care. Immediate medical attention guaranteed by our 
              dedicated trauma response team.
            </p>
            <motion.div 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="inline-block"
            >
              <a 
                href="tel:+917416626899"
                className="bg-white text-red-600 px-10 py-5 rounded-2xl flex items-center gap-4 text-2xl font-black shadow-2xl transition-all"
              >
                <PhoneCall size={32} />
                +91 74166 26899
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            {/* Using a placeholder ambulance if no image is provided, 
                or just an illustration if preferred. 
                I'll use a styled container and an icon if I don't have an image.
            */}
            <div className="relative">
               <img 
                 src="https://res.cloudinary.com/dctf5un0g/image/upload/v1777028612/Ambulance_irzaxo.png " 
                 alt="Ambulance Service" 
                 className="w-full max-w-lg h-auto object-cover rounded-3xl shadow-3xl"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-red-600/60 to-transparent rounded-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
