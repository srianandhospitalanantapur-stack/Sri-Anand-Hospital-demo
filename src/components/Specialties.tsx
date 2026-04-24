import { motion } from 'motion/react';
import { Bone, Brain, Scissors, Droplets, Smile, Activity, Ear, Dumbbell } from 'lucide-react';

const specialties = [
  { icon: Bone, name: 'Orthopedics', desc: 'Joint replacement, fracture care & spine surgery', color: 'bg-red-500' },
  { icon: Brain, name: 'Neurosurgery', desc: 'Brain & spinal cord surgeries with precision', color: 'bg-purple-500' },
  { icon: Scissors, name: 'General Surgery', desc: 'Laparoscopic & open surgical procedures', color: 'bg-blue-500' },
  { icon: Droplets, name: 'Urology', desc: 'Kidney, bladder & urinary tract treatments', color: 'bg-cyan-500' },
  { icon: Smile, name: 'Plastic Surgery', desc: 'Reconstructive & cosmetic surgery', color: 'bg-pink-500' },
  { icon: Activity, name: 'Nephrology', desc: 'Dialysis & kidney disease management', color: 'bg-orange-500' },
  { icon: Ear, name: 'ENT', desc: 'Ear, nose & throat treatments', color: 'bg-emerald-500' },
  { icon: Dumbbell, name: 'Physiotherapy', desc: 'Rehabilitation & recovery programs', color: 'bg-teal-500' },
];

export default function Specialties() {
  return (
    <section id="specialties" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our <span className="text-red-600">Specialties</span>
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive multi-specialty care at the top hospital in Anantapur
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 tracking-tight">
          {specialties.map((item, idx) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                {item.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
