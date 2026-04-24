import { motion } from 'motion/react';

const doctors = [
  { 
    name: 'Dr. M. Anand', 
    role: 'Orthopedic Surgeon & Managing Director', 
    image: 'https://res.cloudinary.com/dctf5un0g/image/upload/v1777024195/anand.png2_qsjwb0.png ',
    initials: 'MA'
  },
  { 
    name: 'Dr. Chandra Sekhar Nayak', 
    role: 'General Surgeon', 
    image: 'https://res.cloudinary.com/dctf5un0g/image/upload/v1777024341/DSC05689_osog6h.jpg',
    initials: 'CN'
  },
  { 
    name: 'Dr. Rajakullayappa', 
    role: 'Plastic Surgeon', 
    image: 'https://res.cloudinary.com/dctf5un0g/image/upload/v1777024173/dr_raja_kullayappa_fe9kzd.jpg',
    initials: 'RK'
  },
  { 
    name: 'Dr. Jayachandra', 
    role: 'Neurosurgeon', 
    image: 'https://res.cloudinary.com/dctf5un0g/image/upload/v1777024182/dr_jayachandra_wzcenn.png ',
    initials: 'JC'
  },
  { 
    name: 'Dr. Chandra Mohan', 
    role: 'Urologist', 
    image: 'https://res.cloudinary.com/dctf5un0g/image/upload/v1777024175/Dr_Chandra_mohan_ud5an6.jpg ',
    initials: 'CM'
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our <span className="text-red-600">Expert Doctors</span>
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the top specialists at Sri Anand Hospital, Anantapur
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {doctors.map((doctor, idx) => (
            <motion.div 
              key={doctor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center"
            >
              <div className="aspect-[4/5] rounded-xl mb-4 overflow-hidden bg-red-50 flex items-center justify-center">
                {doctor.image ? (
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<span class="text-4xl font-bold text-red-600">${doctor.initials}</span>`;
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-red-50">
                    <span className="text-4xl font-bold text-red-300">{doctor.initials}</span>
                  </div>
                )}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">{doctor.name}</h3>
              <p className="text-sm text-gray-500">{doctor.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
