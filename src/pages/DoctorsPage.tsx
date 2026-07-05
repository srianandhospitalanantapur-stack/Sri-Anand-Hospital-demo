import { useEffect } from 'react';
import { updatePageSEO } from '../utils/seo';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, Award, Stethoscope, Clock, ShieldCheck, Heart, 
  Linkedin, Calendar, Sparkles, MapPin 
} from 'lucide-react';

export default function DoctorsPage() {
  useEffect(() => {
    updatePageSEO('doctors');
    window.scrollTo(0, 0);
  }, []);

  const doctorPanel = [
    { 
      name: 'Dr. Mude Anand Babu Naik', 
      role: 'Orthopedic Surgeon & Managing Director', 
      image: 'https://res.cloudinary.com/dctf5un0g/image/upload/v1777024195/anand.png2_qsjwb0.png',
      initials: 'MA',
      education: 'MBBS (SVMC, Tirupati), MS Ortho (KMC, Kurnool)',
      experience: '19+ Years Experience',
      reg: 'APMC No. 47307',
      bio: 'Leading Orthopedic specialist in Rayalaseema, renowned for high-success complex trauma surgeries, total knee arthroplasty (TKR), and total hip arthroplasty (THR). Alumnus of Sri Venkateswara Medical College and Kurnool Medical College.',
      specialties: ['Complex Trauma Reconstruction', 'Total Knee & Hip Replacements', 'Keyhole Arthroscopy Surgeries']
    },
    { 
      name: 'Dr. Chandra Sekhar Nayak', 
      role: 'Consultant General & Laparoscopic Surgeon', 
      image: 'https://res.cloudinary.com/dctf5un0g/image/upload/v1777024341/DSC05689_osog6h.jpg',
      initials: 'CN',
      education: 'MBBS, MS (General Surgery)',
      experience: '12+ Years Experience',
      reg: 'APMC Registered Specialist',
      bio: 'Highly experienced general surgeon specializing in laparoscopic gallbladder extraction, hernia repairs, appendectomy, and comprehensive emergency open surgeries.',
      specialties: ['Laparoscopic Surgery', 'Hernia & Appendix Repairs', 'Emergency Abdominal Trauma']
    },
    { 
      name: 'Dr. Rajakullayappa', 
      role: 'Consultant Plastic & Reconstructive Surgeon', 
      image: 'https://res.cloudinary.com/dctf5un0g/image/upload/v1777024173/dr_raja_kullayappa_fe9kzd.jpg',
      initials: 'RK',
      education: 'MBBS, MS, MCh (Plastic Surgery)',
      experience: '10+ Years Experience',
      reg: 'APMC Registered Specialist',
      bio: 'Expert plastic and reconstructive surgeon specializing in microvascular reconstruction, post-accident scar management, burn contracture release, and aesthetic enhancements.',
      specialties: ['Microvascular Reconstruction', 'Burn Deformity Correction', 'Scar Revision & Cosmetic Surgery']
    },
    { 
      name: 'Dr. Jayachandra', 
      role: 'Consultant Neurosurgeon & Spine Specialist', 
      image: 'https://res.cloudinary.com/dctf5un0g/image/upload/v1777024182/dr_jayachandra_wzcenn.png',
      initials: 'JC',
      education: 'MBBS, MS, MCh (Neurosurgery)',
      experience: '11+ Years Experience',
      reg: 'APMC Registered Specialist',
      bio: 'Prominent neurosurgeon focusing on precision brain tumor resections, spinal fractures, herniated disc repairs, and complex neurological trauma management.',
      specialties: ['Brain Tumor Resections', 'Spinal Cord Injuries & Spine Fixation', 'Stroke & Head Injury Management']
    },
    { 
      name: 'Dr. Chandra Mohan', 
      role: 'Consultant Urologist & Andrologist', 
      image: 'https://res.cloudinary.com/dctf5un0g/image/upload/v1777024175/Dr_Chandra_mohan_ud5an6.jpg',
      initials: 'CM',
      education: 'MBBS, MS, MCh (Urology)',
      experience: '13+ Years Experience',
      reg: 'APMC Registered Specialist',
      bio: 'Leading urological surgeon highly skilled in endourology, laser kidney stone treatments, prostate resections, and reconstructive urology care.',
      specialties: ['Laser Kidney Stone Treatment', 'Prostate Resection (TURP)', 'Andrology & Reconstructive Urology']
    }
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
            <Sparkles size={14} /> Expert Clinical Team
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-6"
          >
            Our Expert <span className="text-red-500">Doctors</span> & Surgeons
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            Meet Rayalaseema's premier specialists delivering safe, ethical, and high-success clinical outcomes at Sri Anand Hospital, Anantapur.
          </motion.p>
        </div>
        <div className="absolute -top-12 -right-12 w-96 h-96 bg-red-600/10 rounded-full blur-3xl z-0"></div>
      </div>

      {/* Main Doctors Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Managing Director Dr. M. Anand - Featured Card */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-100 px-3 py-1 rounded-full">
                Medical Director & Founder
              </span>
              <h2 className="text-3xl font-black text-gray-900 mt-2">Featured Specialist</h2>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-8 md:p-12 border border-red-100 shadow-2xl shadow-red-900/5 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto"
            >
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative max-w-[280px] w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-red-50">
                  <img 
                    src={doctorPanel[0].image} 
                    alt={doctorPanel[0].name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-red-100 text-red-600 font-bold text-4xl">${doctorPanel[0].initials}</div>`;
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-950/80 to-transparent p-4 text-white">
                    <p className="font-bold text-sm">Managing Director</p>
                    <p className="text-[10px] text-red-400 font-bold uppercase tracking-widest">Sri Anand Hospital</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-6">
                <div>
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Orthopedic Specialist</span>
                  <h3 className="text-3xl font-black text-gray-900 mt-3 mb-1">{doctorPanel[0].name}</h3>
                  <p className="text-gray-500 font-semibold text-xs">{doctorPanel[0].education} | {doctorPanel[0].reg}</p>
                </div>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{doctorPanel[0].bio}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-red-50/50 p-4 rounded-2xl border border-red-100/50">
                    <Award className="text-red-600" size={24} />
                    <div>
                      <h5 className="font-bold text-gray-900 text-xs uppercase tracking-wider">Clinical Experience</h5>
                      <p className="text-sm font-bold text-gray-700">{doctorPanel[0].experience}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-red-50/50 p-4 rounded-2xl border border-red-100/50">
                    <GraduationCap className="text-red-600" size={24} />
                    <div>
                      <h5 className="font-bold text-gray-900 text-xs uppercase tracking-wider">Alumni Status</h5>
                      <p className="text-xs font-bold text-gray-700">SVMC Tirupati & KMC Kurnool</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-gray-900 text-sm mb-3">Key Focus Specialties:</h5>
                  <div className="flex flex-wrap gap-2">
                    {doctorPanel[0].specialties.map((spec) => (
                      <span key={spec} className="bg-gray-100 text-gray-700 font-medium text-xs px-3.5 py-1.5 rounded-xl border border-gray-200">
                        • {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Expert Surgeons list */}
          <div>
            <div className="text-center mb-16">
              <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-100 px-3 py-1 rounded-full">
                Multidisciplinary Panel
              </span>
              <h2 className="text-3xl font-black text-gray-900 mt-2">Specialist Consultant Panel</h2>
              <p className="text-gray-500 text-sm mt-2">Available for scheduled surgical consults and trauma emergencies</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {doctorPanel.slice(1).map((doctor, idx) => (
                <motion.div
                  key={doctor.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/30 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden bg-red-50 shrink-0">
                        {doctor.image ? (
                          <img 
                            src={doctor.image} 
                            alt={doctor.name} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.parentElement!.innerHTML = `<span class="text-2xl font-bold text-red-600">${doctor.initials}</span>`;
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-red-50">
                            <span className="text-2xl font-bold text-red-300">{doctor.initials}</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 leading-snug">{doctor.name}</h4>
                        <p className="text-red-600 text-xs font-semibold">{doctor.role}</p>
                        <p className="text-[10px] text-gray-400 font-medium">{doctor.education}</p>
                      </div>
                    </div>

                    <p className="text-gray-500 text-xs leading-relaxed">{doctor.bio}</p>

                    <div className="border-t border-gray-100 pt-4">
                      <h5 className="font-bold text-gray-900 text-xs mb-2">Primary Expertise:</h5>
                      <div className="flex flex-wrap gap-1.5">
                        {doctor.specialties.map((spec) => (
                          <span key={spec} className="bg-gray-50 text-gray-600 font-semibold text-[10px] px-2.5 py-1 rounded-lg border border-gray-100">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-6">
                    <span className="text-[10px] bg-red-50 text-red-600 font-black uppercase px-2.5 py-1 rounded-md">{doctor.experience}</span>
                    <Link 
                      to="/contact" 
                      className="text-xs font-bold text-gray-900 hover:text-red-600 flex items-center gap-1"
                    >
                      Book Consult <Calendar size={12} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-100 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-2xl text-red-600 shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm">Certified Specialists</h4>
                <p className="text-xs text-gray-500 leading-relaxed">All doctors hold board-certified postgraduate qualifications (MS, MCh) and state registry listings.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-2xl text-red-600 shrink-0">
                <Heart size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm">Compassionate Ethics</h4>
                <p className="text-xs text-gray-500 leading-relaxed">Absolute transparency in surgical procedures, diagnostic prescriptions, and clinical billing.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-2xl text-red-600 shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm">24/7 Availability</h4>
                <p className="text-xs text-gray-500 leading-relaxed">Accident trauma surgeons and emergency specialists are on rotational duty around the clock.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
