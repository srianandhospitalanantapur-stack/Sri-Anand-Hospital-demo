import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bone, Brain, Scissors, Droplets, Smile, Activity, Ear, Dumbbell, 
  X, Check, Phone, MessageCircle, CalendarDays, Award, ChevronRight 
} from 'lucide-react';

interface Specialty {
  icon: any;
  name: string;
  desc: string;
  color: string;
  accent: string;
  longName: string;
  tagline: string;
  image: string;
  careDetails: string;
  keyServices: string[];
  specialist: string;
}

const specialties: Specialty[] = [
  { 
    icon: Bone, 
    name: 'Orthopedics', 
    desc: 'Joint replacement, fracture care & spine surgery', 
    color: 'bg-red-500',
    accent: 'text-red-600',
    longName: 'Advanced Orthopedic & Joint Care at Sri Anand Hospital',
    tagline: 'Anantapur\'s Premier Joint Replacement and Complex Fracture Center',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
    careDetails: 'Under the renowned expertise of Dr. Mude Anand Babu Naik, Sri Anand Hospital stands as the top orthopedic hospital in Anantapur near RTC Bus Stand. We specialize in bringing immediate mobility back to accident trauma victims and chronic arthritis sufferers across Rayalaseema through state-of-the-art procedures.',
    keyServices: [
      'Total Knee Replacement (TKR) with rapid rehabilitation',
      'Total Hip Replacement (THR) for avascular necrosis',
      'Minimally invasive keyhole joint surgery (Arthroscopy)',
      '24/7 Multi-fragmentary accident fracture reconstruction'
    ],
    specialist: 'Dr. Mude Anand Babu Naik, MBBS, MS (Orthopedics) – 19+ Years Exp.'
  },
  { 
    icon: Brain, 
    name: 'Neurosurgery', 
    desc: 'Brain & spinal cord surgeries with precision', 
    color: 'bg-purple-500',
    accent: 'text-purple-600',
    longName: 'Neurosurgical Critical Care at Sri Anand Hospital',
    tagline: 'Advanced Brain and Spinal Trauma Microsurgery',
    image: 'https://images.unsplash.com/photo-1617791160536-598cf32026fb?auto=format&fit=crop&q=80&w=800',
    careDetails: 'Our high-end neurosurgery unit operates around the clock to handle head injuries, spinal cord shock, and critical brain vascular situations. Backed by top consulting surgeons, our ICU ensures strict post-surgical vigilance.',
    keyServices: [
      'Precision surgery for complex brain tumors & cysts',
      'Minimally invasive spine surgeries for sciatica & slip discs',
      'Immediate surgical response for stroke & brain hemorrhages',
      'Spinal hardware fixation for traumatic spinal fractures'
    ],
    specialist: 'Dr. Jayachandra, MBBS, MS, MCh (Neurosurgery) – Consultant Neurosurgeon'
  },
  { 
    icon: Scissors, 
    name: 'General Surgery', 
    desc: 'Laparoscopic & open surgical procedures', 
    color: 'bg-blue-500',
    accent: 'text-blue-600',
    longName: 'Laparoscopic & General Surgery at Sri Anand Hospital',
    tagline: 'Advanced Single-Incision Keyhole Abdominal Procedures',
    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800',
    careDetails: 'Our state-of-the-art operation theaters enable general surgeons to perform pain-free laparoscopic keyhole operations. This minimizes recovery times, keeps risk of infection extremely low, and ensures speedy discharges.',
    keyServices: [
      'Laparoscopic Keyhole Gallbladder Stones Removal (Cholecystectomy)',
      'Advanced single-incision Laparoscopic Hernia Repairs',
      'Keyhole Appendectomy & bowel obstruction treatments',
      'Ethical, modern procedures for Piles, Fissures, and Fistulas'
    ],
    specialist: 'Dr. Chandra Sekhar Nayak, MBBS, MS (General Surgery) – 12+ Years Exp.'
  },
  { 
    icon: Droplets, 
    name: 'Urology', 
    desc: 'Kidney, bladder & urinary tract treatments', 
    color: 'bg-cyan-500',
    accent: 'text-cyan-600',
    longName: 'Urology & Laser Kidney Care at Sri Anand Hospital',
    tagline: 'Modern Laser Lithotripsy for Painless Stone Removal',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800',
    careDetails: 'Our urology department provides prompt clinical diagnostics and pain-free solutions for kidney stones and bladder disorders. We use modern, bloodless laser surgeries to help patients avoid invasive open procedures.',
    keyServices: [
      'Painless URSL and PCNL laser kidney stone removal',
      'Laser Prostate Resection (TURP) for urinary blockages',
      'Treatment for chronic Urinary Tract Infections (UTI)',
      'Male fertility and advanced reconstructive urology'
    ],
    specialist: 'Dr. Chandra Mohan, MBBS, MS, MCh (Urology) – Consultant Urologist'
  },
  { 
    icon: Smile, 
    name: 'Plastic Surgery', 
    desc: 'Reconstructive & cosmetic surgery', 
    color: 'bg-pink-500',
    accent: 'text-pink-600',
    longName: 'Plastic & Reconstructive Micro-Surgery at Sri Anand Hospital',
    tagline: 'Restoring Form, Function, and Confidence Post-Accident',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    careDetails: 'Specializing in advanced microvascular reconstruction, our plastic surgery department plays an essential role in accident limb-salvage. We specialize in post-burn contracture releases and high-success skin grafts.',
    keyServices: [
      'Microvascular surgery for deep accident tissue wounds',
      'Surgical reconstruction of complex facial fractures and scars',
      'Release of post-burn contractures and functional skin grafting',
      'Aesthetic/cosmetic consulting and scar removal therapies'
    ],
    specialist: 'Dr. Rajakullayappa, MBBS, MS, MCh (Plastic Surgery) – 10+ Years Exp.'
  },
  { 
    icon: Activity, 
    name: 'Nephrology', 
    desc: 'Dialysis & kidney disease management', 
    color: 'bg-orange-500',
    accent: 'text-orange-600',
    longName: 'Nephrology & Renal Dialysis Unit at Sri Anand Hospital',
    tagline: 'Affordable, Patient-Centric 24/7 Hemodialysis Support',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800',
    careDetails: 'Sri Anand Hospital houses a highly sterile, continuous-monitoring Hemodialysis unit. We provide customized treatment plans for hypertension, diabetic nephropathy, and acute renal failure under expert clinical guidelines.',
    keyServices: [
      '24/7 Safe and highly sterile Hemodialysis cycles',
      'Chronic Kidney Disease (CKD) progression management',
      'Therapies for acute glomerulonephritis and severe swelling',
      'Expert AV-Fistula construction and catheter placements'
    ],
    specialist: 'Resident Nephrologists & Certified Dialysis Therapists'
  },
  { 
    icon: Ear, 
    name: 'ENT', 
    desc: 'Ear, nose & throat treatments', 
    color: 'bg-emerald-500',
    accent: 'text-emerald-600',
    longName: 'Ear, Nose & Throat (ENT) Care at Sri Anand Hospital',
    tagline: 'Micro-Surgical & Endoscopic Solutions for Hearing & Sinuses',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800',
    careDetails: 'Our ENT wing delivers diagnostic nasal endoscopies and micro-ear surgical reconstructions to treat hearing loss, chronic sinusitis, nasal polyps, and recurrent throat issues safely.',
    keyServices: [
      'Functional Endoscopic Sinus Surgery (FESS) for chronic sinusitis',
      'Micro-ear surgeries (Tympanoplasty) for chronic discharge',
      'Painless laser Tonsillectomy & Adenoidectomy in children',
      'Snoring, sleep apnea, and complex nasal allergy remedies'
    ],
    specialist: 'Consultant ENT Surgeons & Audiology Specialists'
  },
  { 
    icon: Dumbbell, 
    name: 'Physiotherapy', 
    desc: 'Rehabilitation & recovery programs', 
    color: 'bg-teal-500',
    accent: 'text-teal-600',
    longName: 'Physiotherapy & Physical Rehab at Sri Anand Hospital',
    tagline: 'Accelerating Restorative Mobility & Pain-Free Living',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    careDetails: 'An essential partner in our surgical success. Our physiotherapists design customized post-operative joint mobility exercises, helping fracture and knee replacement patients walk comfortably inside minimum timelines.',
    keyServices: [
      'Post-operative Knee and Hip Replacement rehabilitation',
      'Neurological rehabilitation for stroke, paralyses & sciatica',
      'Therapeutic pain relief for slip discs, neck stiffness & frozen shoulder',
      'Sports injury recovery, core alignment, and balance restoration'
    ],
    specialist: 'Senior Physical Therapy Specialists & Dynamic Rehab Panel'
  },
];

export default function Specialties() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);

  return (
    <section id="specialties" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background visual decorations */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-red-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-3">
          <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-100 px-3.5 py-1 rounded-full">
            Clinical Centers of Excellence
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight"
          >
            Our Medical <span className="text-red-600">Specialties</span>
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base font-light">
            Providing high-success, ethical healthcare in Anantapur near RTC Bus Stand. Click on any department to view full specialized details and care options.
          </p>
        </div>

        {/* Interactive Specialties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 tracking-tight">
          {specialties.map((item, idx) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedSpecialty(item)}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all border border-gray-100/80 cursor-pointer group flex flex-col justify-between"
              id={`specialty-card-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div>
                <div className={`${item.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                  <item.icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 uppercase tracking-wider group-hover:underline mt-2">
                Explore Care <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dynamic Detail Modal */}
      <AnimatePresence>
        {selectedSpecialty && (
          <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
            {/* Modal Overlay backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSpecialty(null)}
              className="fixed inset-0 bg-gray-950/70 backdrop-blur-sm transition-opacity"
            />

            <div className="flex min-h-full items-center justify-center p-4 sm:p-6 lg:p-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative transform overflow-hidden rounded-[2.5rem] bg-white text-left shadow-2xl transition-all w-full max-w-4xl border border-gray-100 flex flex-col lg:flex-row"
                id="specialty-detail-modal"
              >
                {/* Left Side: Medical Image Accent */}
                <div className="lg:w-5/12 relative bg-gray-50 min-h-[250px] lg:min-h-[480px]">
                  <img 
                    src={selectedSpecialty.image} 
                    alt={selectedSpecialty.longName}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/30 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="inline-flex items-center gap-1 bg-red-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md tracking-wider w-max mb-2">
                      <Award size={12} /> Specialized Unit
                    </span>
                    <h4 className="text-xl font-black leading-tight">{selectedSpecialty.name} Care</h4>
                    <p className="text-xs text-gray-300 font-light mt-1">Sri Anand Hospital, Anantapur</p>
                  </div>

                  {/* Close button for Mobile */}
                  <button 
                    onClick={() => setSelectedSpecialty(null)}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur text-gray-900 hover:bg-white p-2 rounded-full shadow-lg lg:hidden"
                    aria-label="Close modal"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Right Side: Detailed Medical Information */}
                <div className="lg:w-7/12 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                  {/* Header */}
                  <div className="space-y-2 relative">
                    {/* Close button for Desktop */}
                    <button 
                      onClick={() => setSelectedSpecialty(null)}
                      className="absolute -top-4 -right-4 bg-gray-100 hover:bg-red-50 hover:text-red-600 text-gray-500 p-2.5 rounded-full transition-colors hidden lg:block"
                      aria-label="Close modal"
                      id="close-specialty-modal"
                    >
                      <X size={18} />
                    </button>

                    <span className="text-red-600 font-bold text-xs uppercase tracking-widest block">
                      {selectedSpecialty.tagline}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-tight pr-6">
                      {selectedSpecialty.longName}
                    </h3>
                  </div>

                  {/* Narrative Body with Local SEO optimization */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">
                    {selectedSpecialty.careDetails}
                  </p>

                  {/* Specialty Treatments Bullet List */}
                  <div className="space-y-3 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h5 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-2 border-b border-gray-200 pb-2">
                      Primary Procedures & Care Offered:
                    </h5>
                    <ul className="space-y-2">
                      {selectedSpecialty.keyServices.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                          <span className={`p-0.5 rounded bg-emerald-100 ${selectedSpecialty.accent} text-emerald-800 shrink-0 mt-0.5`}>
                            <Check size={12} className="stroke-[3]" />
                          </span>
                          <span className="font-medium">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Doctor Profile Banner */}
                  <div className="flex items-center gap-3 bg-red-50/50 p-3.5 rounded-xl border border-red-100/50">
                    <div className="bg-red-100 text-red-600 p-2 rounded-lg">
                      <Bone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider">Assigned Clinical Specialist</p>
                      <p className="text-xs font-bold text-gray-800">{selectedSpecialty.specialist}</p>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a 
                      href="tel:+916300882019"
                      className="bg-red-600 hover:bg-red-700 text-white text-center py-3.5 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-all text-xs shadow-md shadow-red-900/10 shrink-0"
                    >
                      <Phone size={14} /> Emergency Helpline
                    </a>
                    <a 
                      href="https://wa.me/916300882019"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-emerald-500 hover:bg-emerald-600 text-white text-center py-3.5 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-all text-xs shadow-md shadow-emerald-900/10 grow"
                    >
                      <MessageCircle size={14} /> Book OPD Consultation via WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
