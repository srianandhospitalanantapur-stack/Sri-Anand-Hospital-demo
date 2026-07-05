import { useEffect } from 'react';
import { updatePageSEO } from '../utils/seo';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Bone, Stethoscope, Sparkles, AlertCircle, HeartPulse, ShieldCheck, 
  ChevronRight, Brain, Droplets, Smile, Ear, Dumbbell, Scissors, CheckSquare 
} from 'lucide-react';

export default function ServicesPage() {
  useEffect(() => {
    updatePageSEO('services');
    window.scrollTo(0, 0);
  }, []);

  const majorServices = [
    {
      title: "Acute & Complex Trauma Care",
      icon: AlertCircle,
      tag: "Available 24/7",
      desc: "Comprehensive critical trauma care specializing in high-velocity traffic accident injuries, polytrauma, multiple fractures, and complex compound injuries.",
      points: [
        "Rapid response and round-the-clock emergency surgical theater",
        "Minimally invasive fracture fixation using advanced locking compression plates",
        "Limb salvage surgeries for severe, complex injuries",
        "Immediate post-surgery critical care monitoring and stabilization"
      ],
      bg: "from-red-500/5 to-red-600/5",
      border: "border-red-100",
      accent: "text-red-600"
    },
    {
      title: "Joint Replacement Procedures",
      icon: Bone,
      tag: "High Success Rate",
      desc: "Restore pain-free movement with state-of-the-art total joint arthroplasty, addressing severe arthritis, joint degeneration, and age-related wear.",
      points: [
        "Total Knee Replacement (TKR) for advanced osteoarthritic knee pain",
        "Total Hip Replacement (THR) for avascular necrosis & hip joint damage",
        "Patient-specific implants and advanced alignment methodologies",
        "Rapid recovery program with early mobilization (walking within 24 hours)"
      ],
      bg: "from-amber-500/5 to-amber-600/5",
      border: "border-amber-100",
      accent: "text-amber-600"
    },
    {
      title: "Sports Injury & Arthroscopy",
      icon: HeartPulse,
      tag: "Minimally Invasive",
      desc: "Expert diagnosis and advanced keyhole surgeries to repair soft tissue damage, allowing athletes and individuals to return to active lives quickly.",
      points: [
        "Arthroscopic ACL, PCL, and collateral ligament reconstructions",
        "Meniscus repairs, suture anchor fixations, and cartilage debridement",
        "Shoulder arthroscopy for rotator cuff tears and recurrent shoulder instability",
        "Customized, phase-wise sports physiotherapy recovery modules"
      ],
      bg: "from-blue-500/5 to-blue-600/5",
      border: "border-blue-100",
      accent: "text-blue-600"
    },
    {
      title: "Pediatric Orthopedics",
      icon: ShieldCheck,
      tag: "Compassionate Care",
      desc: "Specialized diagnostics and rehabilitation for skeletal growth deformities, bone infections, and pediatric fractures in young children and infants.",
      points: [
        "Correction of congenital clubfoot (using non-surgical Ponseti casting)",
        "Management of pediatric fractures, bone cysts, and skeletal dysplasias",
        "Gait analysis and correction of bow legs or knock knees",
        "Gentle, specialized pediatric surgical care and customized immobilization"
      ],
      bg: "from-emerald-500/5 to-emerald-600/5",
      border: "border-emerald-100",
      accent: "text-emerald-600"
    }
  ];

  const secondarySpecialties = [
    { icon: Brain, title: "Neurosurgery", desc: "Expert intervention for complex brain tumors, spinal trauma, herniated discs, and stroke management." },
    { icon: Droplets, title: "Urology", desc: "Advanced solutions for kidney stones (endourology), prostate disorders, and urinary tract infections." },
    { icon: Smile, title: "Plastic Surgery", desc: "Reconstructive surgeries for accident scars, post-burn deformities, and cosmetic surgery options." },
    { icon: Ear, title: "ENT Specialties", desc: "Comprehensive management of hearing issues, sinus surgeries, tonsillitis, and ear/throat infections." },
    { icon: Dumbbell, title: "Physiotherapy & Rehab", desc: "Structured post-operative joint rehab, spine care programs, stroke recovery, and pain management." },
    { icon: Scissors, title: "General Surgery", desc: "Laparoscopic keyhole abdominal surgery, hernia repair, appendectomy, and routine minor surgeries." }
  ];

  return (
    <div className="pt-24 bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#1b2b3d] to-[#0f1b29] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url("https://res.cloudinary.com/dctf5un0g/image/upload/v1777024207/hospital.png_qshlpi.png")' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 px-4 py-1 rounded-full text-red-400 text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Sparkles size={14} /> Exceptional Healthcare
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-6"
          >
            Our medical <span className="text-red-500">Specialities</span> & Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            Discover state-of-the-art orthopedic interventions and multi-specialty clinical excellence located near RTC Bus Stand, Anantapur.
          </motion.p>
        </div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-600/15 rounded-full blur-3xl z-0"></div>
      </div>

      {/* Orthopedics Deep Dive (Major Services) */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-100 px-3 py-1 rounded-full">
              Core Specialization
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4">Advanced Orthopedic Clinical Care</h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
              We specialize in the full spectrum of musculoskeletal diagnosis, surgical treatment, and active rehabilitation in Anantapur.
            </p>
          </div>

          <div className="space-y-12">
            {majorServices.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`bg-white rounded-3xl p-8 lg:p-12 border ${service.border} shadow-xl shadow-gray-200/40 grid grid-cols-1 lg:grid-cols-12 gap-8`}
              >
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.bg} ${service.accent} shrink-0`}>
                      <service.icon size={28} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-red-600">{service.tag}</span>
                      <h3 className="text-2xl font-black text-gray-900 leading-tight">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{service.desc}</p>
                </div>

                <div className="lg:col-span-7 bg-gray-50 rounded-2xl p-6 lg:p-8 flex flex-col justify-center">
                  <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide border-b border-gray-200 pb-2">Treatment Overview & Benefits</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-600">
                        <ChevronRight className={`${service.accent} shrink-0 mt-0.5`} size={16} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Multi-Specialties Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-100 px-3 py-1 rounded-full">
              Full-Spectrum Healthcare
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4">Our Multi-Speciality Departments</h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
              In addition to Orthopedics, Sri Anand Hospital delivers dedicated multidisciplinary surgical and clinical treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secondarySpecialties.map((dept, idx) => (
              <motion.div
                key={dept.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col items-start"
              >
                <div className="bg-red-50 text-red-600 p-3.5 rounded-2xl mb-6">
                  <dept.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{dept.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-black">Need Professional Medical Consultation?</h2>
          <p className="text-red-100 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Call us directly or use our online request form to book a physical consult with Dr. Anand or any of our resident specialists in Anantapur.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a 
              href="tel:+916300882019"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold shadow-lg transition-all text-sm"
            >
              Call Hotline: +91 63008 82019
            </a>
            <Link 
              to="/contact"
              className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-4 rounded-xl font-bold transition-all text-sm flex items-center justify-center"
            >
              Request Appointment Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
