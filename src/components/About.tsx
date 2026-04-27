import { motion } from 'motion/react';
import { Award, Users, Stethoscope, HeartPulse, GraduationCap, Clock } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Years Experience', value: '19+', color: 'text-red-600', bg: 'bg-red-50' },
  { icon: Users, label: 'Patients Treated', value: '50,000+', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Stethoscope, label: 'Surgeries Done', value: '10,000+', color: 'text-green-600', bg: 'bg-green-50' },
  { icon: HeartPulse, label: 'Emergency Care', value: '24/7', color: 'text-purple-600', bg: 'bg-purple-50' },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            About <span className="text-red-600">Sri Anand Hospital</span>
          </motion.h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white max-w-md mx-auto">
              <img 
                src="https://res.cloudinary.com/dctf5un0g/image/upload/v1777024195/anand.png2_qsjwb0.png" 
                alt="Sri Anand Hospital Building" 
                className="w-full h-auto object-contain"
                onError={(e) => {
                   e.currentTarget.src = "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-100 rounded-full z-0 opacity-50"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-50 rounded-full z-0 opacity-50"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-gray-600 leading-relaxed text-sm md:text-base space-y-4">
              <p>
                Sri Anand Hospital, Anantapur, was founded in 2007 by <strong>Dr. M. Anand</strong>. It began as a small clinic with a vision to deliver quality orthopedic care. In 2009, the hospital expanded into a 50-bedded multi-speciality hospital, strengthening its ability to serve a larger community.
              </p>
              <p>
                The hospital is committed to providing <strong>safe, ethical, and comprehensive</strong> healthcare services. Its primary focus is on building long-term trust and delivering reliable, patient-centered care, especially for economically weaker sections of society.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-red-600">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Stethoscope size={20} className="text-red-600" />
                  Core Specialization
                </h4>
                <p className="text-sm mb-3">Diagnosis, treatment, and rehabilitation of musculoskeletal conditions:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 text-xs font-bold text-gray-700">
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>Bones</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>Joints</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>Ligaments</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>Muscles</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>Tendons</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>Injuries</div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3">Key Services</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center gap-2"><Award size={16} className="text-red-600 shrink-0" /> Acute & Complex Trauma Care</li>
                  <li className="flex items-center gap-2"><Award size={16} className="text-red-600 shrink-0" /> Sports Injury Management</li>
                  <li className="flex items-center gap-2"><Award size={16} className="text-red-600 shrink-0" /> Arthroscopy Surgeries</li>
                  <li className="flex items-center gap-2"><Award size={16} className="text-red-600 shrink-0" /> Joint Replacement Procedures</li>
                </ul>
              </div>

              <p className="italic text-gray-500 text-sm pt-4 border-t border-gray-100">
                Advanced treatment approaches include minimally invasive techniques to restoration function, improve recovery, and enable early mobility.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Doctor Section */}
        <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Dr. Mude Anand Babu Naik</h3>
              <div className="inline-block px-6 py-2 bg-red-600 text-white rounded-full font-bold text-sm md:text-base uppercase tracking-widest mb-4 shadow-lg shadow-red-200">
                MBBS, MS (Ortho) — Managing Director
              </div>
              <p className="text-gray-400 text-sm font-medium">AP Medical Council Registration No.: 47307</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-white flex flex-col items-center text-center group transition-all"
              >
                <div className="bg-red-50 p-5 rounded-2xl text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                  <GraduationCap size={36} />
                </div>
                <h4 className="font-bold text-gray-900 text-xl mb-4">Education</h4>
                <ul className="text-gray-600 space-y-2 text-sm md:text-base">
                  <li>MBBS – SVMC, Tirupati</li>
                  <li>MS (Orthopedics) – KMC, Kurnool</li>
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-white flex flex-col items-center text-center group transition-all"
              >
                <div className="bg-red-50 p-5 rounded-2xl text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all transform group-hover:-rotate-6">
                  <Stethoscope size={36} />
                </div>
                <h4 className="font-bold text-gray-900 text-xl mb-4">Expertise</h4>
                <ul className="text-gray-600 space-y-2 text-sm md:text-base">
                  <li>Complex Trauma Surgeries</li>
                  <li>Arthroscopy & Joint Replacement</li>
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-white flex flex-col items-center text-center group transition-all"
              >
                <div className="bg-red-50 p-5 rounded-2xl text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                  <Clock size={36} />
                </div>
                <h4 className="font-bold text-gray-900 text-xl mb-4">Experience</h4>
                <p className="text-gray-600 font-bold text-2xl mb-1">19+ Years</p>
                <p className="text-gray-400 text-xs uppercase tracking-widest font-black">Specialized Care</p>
              </motion.div>
            </div>
          </motion.div>
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-100/40 rounded-full blur-3xl -mr-40 -mt-40"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl -ml-40 -mb-40"></div>
        </div>
      </div>
    </section>
  );
}
