import { motion } from 'motion/react';
import { Award, Users, Stethoscope, HeartPulse } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Years Experience', value: '19+', color: 'text-red-600', bg: 'bg-red-50' },
  { icon: Users, label: 'Patients Treated', value: '50,000+', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Stethoscope, label: 'Surgeries Done', value: '10,000+', color: 'text-green-600', bg: 'bg-green-50' },
  { icon: HeartPulse, label: 'Emergency Care', value: '24/7', color: 'text-purple-600', bg: 'bg-purple-50' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              {/* Assuming the first image in the set is Dr. M. Anand */}
              <img 
                src="https://ais-dev-e2lznh4vutqlruyqhe37ba-756291966100.asia-east1.run.app/assets/dr_m_anand.png" 
                alt="Dr. M. Anand" 
                className="w-full h-auto object-cover"
                onError={(e) => {
                   // Fallback if the path is wrong - I'll use a placeholder or try to infer from common behavior
                   // but usually users upload them as artifacts
                   e.currentTarget.src = "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </div>
            {/* Decoration */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-100 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-50 rounded-full z-0"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">
                Led by <span className="text-red-600">Dr. M. Anand</span>
              </h3>
              <p className="text-red-600 font-semibold text-lg flex items-center gap-2">
                MBBS, MS (Ortho) — Managing Director
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Sri Anand Hospital is one of the best hospitals in Anantapur, Andhra Pradesh. 
                Established with a vision to provide world-class healthcare, we combine 
                experienced doctors, advanced medical equipment, and compassionate patient care 
                to deliver outstanding treatment outcomes.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our multi-specialty facility near RTC Bus Stand serves as a trusted emergency 
                hospital in Anantapur with round-the-clock critical care services.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className={`${stat.bg} ${stat.color} w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm`}>
                    <stat.icon size={28} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
