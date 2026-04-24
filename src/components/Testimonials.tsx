import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ramesh Kumar',
    text: '"Sri Anand Hospital is the best hospital in Anantapur. Dr. Anand performed my knee replacement surgery and I\'m walking perfectly now. Highly recommended!"',
    stars: 5
  },
  {
    name: 'Lakshmi Devi',
    text: '"Excellent emergency care! When my father had an accident, they responded immediately. The trauma care team saved his life. Forever grateful."',
    stars: 5
  },
  {
    name: 'Suresh Reddy',
    text: '"Very professional and caring doctors. The facilities are top-notch and treatment costs are reasonable. Best hospital experience in Anantapur."',
    stars: 5
  },
  {
    name: 'Priya Sharma',
    text: '"Dr. Jayachandra\'s neurosurgery expertise is outstanding. My mother\'s brain surgery was successful. The nursing staff was very supportive throughout."',
    stars: 4
  },
  {
    name: 'Abdul Kareem',
    text: '"Affordable treatment with world-class quality. The hospital near RTC Bus Stand is very accessible. I recommend Sri Anand Hospital to everyone."',
    stars: 5
  }
];

export default function Testimonials() {
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
            Patient <span className="text-red-600">Testimonials</span>
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What our patients say about us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < t.stars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                  />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 flex-grow">{t.text}</p>
              <div className="font-bold text-gray-900">— {t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
