import { motion } from 'motion/react';
import { UserCheck, Cpu, Banknote, Zap } from 'lucide-react';

const reasons = [
  { icon: UserCheck, title: 'Experienced Doctors', desc: 'Team of highly qualified specialists with decades of experience in their fields.' },
  { icon: Cpu, title: 'Advanced Equipment', desc: 'State-of-the-art medical technology for accurate diagnosis and effective treatment.' },
  { icon: Banknote, title: 'Affordable Treatment', desc: 'Quality healthcare at reasonable costs, making advanced treatment accessible to all.' },
  { icon: Zap, title: 'Quick Emergency Response', desc: 'Rapid response team available 24/7 for emergency and trauma cases.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose <span className="text-red-600">Sri Anand Hospital</span>?
          </motion.h2>
          <p className="text-gray-600">The top hospital in Anantapur trusted by thousands</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div 
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all text-center group"
            >
              <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <reason.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-500 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
