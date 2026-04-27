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
    <section id="about" className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-3"
          >
            About <span className="text-red-600">Sri Anand Hospital</span>
          </motion.h2>
          <div className="w-16 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-full flex items-center justify-center lg:justify-start"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl border-4 border-white max-w-md w-full">
              <img 
                src=" https://res.cloudinary.com/dctf5un0g/image/upload/v1777024195/anand.png2_qsjwb0.png  " 
                alt="Sri Anand Hospital Building" 
                className="w-full h-auto object-cover max-h-[450px]"
                onError={(e) => {
                   e.currentTarget.src = "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </div>
            {/* Decoration */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-full z-0 opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-50 rounded-full z-0 opacity-50"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 border-b-2 border-red-600 pb-2 inline-block">
                About <span className="text-red-600">Sri Anand Hospital</span>
              </h3>
              <div className="text-gray-600 leading-relaxed text-sm md:text-base space-y-4">
                <p>
                  Sri Anand Hospital, Anantapur, was founded in 2007 by <strong>Dr. M. Anand</strong>. It began as a small clinic with a vision to deliver quality orthopedic care. In 2009, the hospital expanded into a 50-bedded multi-speciality hospital, strengthening its ability to serve a larger community.
                </p>
                <p>
                  The hospital is committed to providing <strong>safe, ethical, and comprehensive</strong> healthcare services. Its primary focus is on building long-term trust and delivering reliable, patient-centered care, especially for economically weaker sections of society.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-red-600 mt-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Stethoscope size={18} className="text-red-600" />
                    Core Specialization
                  </h4>
                  <p className="text-sm mb-3">Specializing in diagnosis, treatment, and rehabilitation of musculoskeletal conditions:</p>
                  <div className="grid grid-cols-2 gap-y-1 gap-x-4 text-xs font-semibold text-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                      Bones
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                      Joints
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                      Ligaments
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                      Muscles
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                      Tendons
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                      Injuries
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="font-bold text-gray-900 mb-3">Key Services</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Award size={14} className="text-red-600" />
                      Acute & Complex Trauma Care
                    </li>
                    <li className="flex items-center gap-2">
                      <Award size={14} className="text-red-600" />
                      Sports Injury Management
                    </li>
                    <li className="flex items-center gap-2">
                      <Award size={14} className="text-red-600" />
                      Arthroscopy Surgeries
                    </li>
                    <li className="flex items-center gap-2">
                      <Award size={14} className="text-red-600" />
                      Joint Replacement Procedures
                    </li>
                    <li className="flex items-center gap-2">
                      <Award size={14} className="text-red-600" />
                      Pediatric Orthopedics
                    </li>
                  </ul>
                </div>

                <p className="italic text-gray-500 pt-4 border-t border-gray-100">
                  Advanced treatment approaches include the use of minimally invasive techniques to restore function, improve recovery, and enable early mobility.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Doctor Section */}
        <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Dr. Mude Anand Babu Naik</h3>
              <div className="inline-block px-6 py-2 bg-red-600 text-white rounded-full font-bold text-sm md:text-base uppercase tracking-widest mb-4">
                MBBS, MS (Ortho) — Managing Director
              </div>
              <p className="text-gray-400 text-sm font-medium">AP Medical Council Registration No.: 47307</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center group transition-all"
              >
                <div className="bg-red-50 p-4 rounded-2xl text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <GraduationCap size={32} />
                </div>
                <h4 className="font-bold text-gray-900 text-xl mb-4">Education</h4>
                <ul className="text-gray-600 space-y-2 text-sm md:text-base">
                  <li>MBBS – SVMC, Tirupati</li>
                  <li>MS (Orthopedics) – KMC, Kurnool</li>
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center group transition-all"
              >
                <div className="bg-red-50 p-4 rounded-2xl text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Stethoscope size={32} />
                </div>
                <h4 className="font-bold text-gray-900 text-xl mb-4">Expertise</h4>
                <ul className="text-gray-600 space-y-2 text-sm md:text-base">
                  <li>Complex Trauma Surgeries</li>
                  <li>Arthroscopy & Joint Replacement</li>
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center group transition-all"
              >
                <div className="bg-red-50 p-4 rounded-2xl text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Clock size={32} />
                </div>
                <h4 className="font-bold text-gray-900 text-xl mb-4">Experience</h4>
                <p className="text-gray-600 font-bold text-lg mb-2">19+ Years</p>
                <p className="text-gray-500 text-xs uppercase tracking-tighter">Specialized Orthopedic Care</p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Subtle background accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-100/30 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -ml-32 -mb-32"></div>
        </div>
      </div>
    </section>
  );
}
