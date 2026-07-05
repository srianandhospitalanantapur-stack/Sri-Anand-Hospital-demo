import { useEffect } from 'react';
import { updatePageSEO } from '../utils/seo';
import { motion } from 'motion/react';
import { GraduationCap, Stethoscope, Clock, ShieldCheck, HeartPulse, Sparkles, Building, Target } from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    updatePageSEO('about');
    window.scrollTo(0, 0);
  }, []);

  const milestones = [
    { year: "2007", title: "Inception", desc: "Founded as a specialized orthopedic clinic in Anantapur by Dr. M. Anand with a goal to bring advanced joint and bone care to the local community." },
    { year: "2009", title: "Multi-Specialty Expansion", desc: "Upgraded into a full-fledged 50-bedded multi-speciality hospital, incorporating urology, general surgery, neurosurgery, ENT, and plastic surgery." },
    { year: "2015", title: "Advanced Trauma Center", desc: "Established a dedicated 24/7 emergency accident and trauma center, bringing world-class orthopedic critical care with immediate response." },
    { year: "Present", title: "Top Ranked Orthopedic Center", desc: "Recognized as the premier clinic for complex trauma care, knee/hip replacements, and minimally invasive surgeries in Anantapur district." },
  ];

  return (
    <div className="pt-24 bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#1a2b3c] to-[#0f1b29] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url("https://res.cloudinary.com/dctf5un0g/image/upload/v1777024207/hospital.png_qshlpi.png")' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 px-4 py-1 rounded-full text-red-400 text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Sparkles size={14} /> Our Legacy & Leadership
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-6"
          >
            About <span className="text-red-500">Sri Anand Hospital</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            Delivering trust, ethical healthcare, and premium medical specialties in Anantapur since 2007.
          </motion.p>
        </div>
        {/* Background blobs */}
        <div className="absolute -top-12 -right-12 w-96 h-96 bg-red-600/10 rounded-full blur-3xl z-0"></div>
      </div>

      {/* Hospital Narrative & Legacy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-w-md mx-auto">
                <img 
                  src="https://res.cloudinary.com/dctf5un0g/image/upload/v1777024195/anand.png2_qsjwb0.png" 
                  alt="Sri Anand Hospital Building and Leadership" 
                  className="w-full h-auto object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                     e.currentTarget.src = "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-red-100 rounded-full blur-2xl z-0 opacity-60"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-100 rounded-full blur-2xl z-0 opacity-60"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-black text-gray-900 leading-tight">
                Anantapur's Pioneer in <span className="text-red-600">Patient-First Orthopedics</span> & Multispecialty Care
              </h2>
              <div className="text-gray-600 space-y-4 leading-relaxed">
                <p>
                  Sri Anand Hospital, Anantapur, was founded in 2007 by the visionary and highly skilled orthopedic specialist, <strong>Dr. M. Anand</strong>. Initially started as a dedicated clinical practice, our foundational principle was simple: offer accurate, high-quality, and deeply empathetic bone and joint healthcare to patients in Anantapur and surrounding rural areas.
                </p>
                <p>
                  In 2009, matching the growing healthcare requirements of the local community, the clinic expanded into a robust <strong>50-bedded multi-speciality hospital</strong>. This milestone empowered us to provide comprehensive clinical care spanning multi-discipline surgical categories including Neurosurgery, Plastic Surgery, General Laparoscopic Surgery, and Urology.
                </p>
                <p>
                  We are deeply committed to providing <strong>safe, ethical, and accessible</strong> healthcare services. At Sri Anand Hospital, we believe in building unbreakable, long-term bonds of trust with our patients. Our team takes special pride in delivering high-success orthopedic interventions, especially designed for the economically weaker sections of society.
                </p>
              </div>

              {/* Vision and Mission Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="bg-gray-50 p-6 rounded-2xl border-t-4 border-red-600">
                  <div className="bg-red-100 w-10 h-10 rounded-xl flex items-center justify-center text-red-600 mb-4">
                    <Target size={20} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Our Mission</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">To provide state-of-the-art medical and trauma care using advanced technology while maintaining affordable cost and uncompromising medical ethics.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border-t-4 border-blue-600">
                  <div className="bg-blue-100 w-10 h-10 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                    <HeartPulse size={20} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Our Vision</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">To be the most trusted, patient-centric, and premier multi-specialty healthcare destination in Rayalaseema, known for restorative clinical excellence.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctor Detailed Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-100 px-3 py-1 rounded-full">
                Managing Director & Founder
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 mb-4">Meet Dr. Mude Anand Babu Naik</h2>
              <p className="text-red-600 font-bold text-base md:text-lg tracking-wider uppercase">
                MBBS, MS (Ortho) — Registration No.: 47307 (AP Medical Council)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group transition-all"
              >
                <div className="bg-red-50 p-4 rounded-2xl text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <GraduationCap size={32} />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">Distinguished Education</h4>
                <ul className="text-gray-500 space-y-1 text-xs leading-relaxed">
                  <li><strong>MBBS</strong> – Sri Venkateswara Medical College (SVMC), Tirupati</li>
                  <li><strong>MS (Orthopedics)</strong> – Kurnool Medical College (KMC), Kurnool</li>
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group transition-all"
              >
                <div className="bg-red-50 p-4 rounded-2xl text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Stethoscope size={32} />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">Core Clinical Expertise</h4>
                <ul className="text-gray-500 space-y-1 text-xs leading-relaxed">
                  <li>Complex Orthopedic Trauma & Accident Surgeries</li>
                  <li>Total Knee & Hip Joint Replacements (Arthroplasty)</li>
                  <li>Minimally Invasive Joint Keyhole Surgeries (Arthroscopy)</li>
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group transition-all"
              >
                <div className="bg-red-50 p-4 rounded-2xl text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Clock size={32} />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">Medical Experience</h4>
                <p className="text-2xl font-black text-gray-900 mb-1">19+ Years</p>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">of Specialized Orthopedic Care</p>
              </motion.div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-6">
              <div className="bg-red-100 text-red-600 p-4 rounded-full hidden sm:block shrink-0">
                <ShieldCheck size={32} />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                With over 19 years of dedicated practice, Dr. Anand has successfully operated on thousands of complex orthopedic cases. His surgical expertise spans major trauma reconstruction and keyhole surgeries. Under his medical leadership, Sri Anand Hospital maintains a near 100% safety and success rate, providing hope and mobility to the citizens of Anantapur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Our Growth Timeline</h2>
            <p className="text-gray-500 mt-2 text-sm">How we evolved to become Anantapur's best orthopedic and multi-speciality landmark</p>
          </div>

          <div className="relative border-l-2 border-red-200 ml-4 md:ml-32">
            {milestones.map((item, idx) => (
              <div key={item.year} className="mb-10 ml-6 relative">
                {/* Dots */}
                <span className="absolute -left-[31px] top-1.5 bg-red-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border-4 border-white shadow-md"></span>
                <span className="hidden md:block absolute -left-36 top-1 font-black text-red-600 text-xl w-24 text-right">
                  {item.year}
                </span>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <span className="inline-block md:hidden font-black text-red-600 text-sm mb-1">{item.year}</span>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
