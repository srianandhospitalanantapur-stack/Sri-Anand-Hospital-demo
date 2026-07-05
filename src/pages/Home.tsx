import { useEffect } from 'react';
import { updatePageSEO } from '../utils/seo';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import Specialties from '../components/Specialties';
import Emergency from '../components/Emergency';
import Testimonials from '../components/Testimonials';
import { motion } from 'motion/react';
import { Bone, Stethoscope, Clock, ShieldAlert, Award } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    updatePageSEO('home');
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <WhyChooseUs />
      
      {/* Localized SEO Keyword section for Google optimization */}
      <section className="py-16 bg-red-50/50 border-y border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-100 px-3 py-1 rounded-full">
                Top Rated Orthopedic Hospital in Anantapur
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                Get World-Class <span className="text-red-600">Orthopedic & Joint Surgery</span> Care in Anantapur
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Sri Anand Hospital is highly recommended for advanced fracture care, complex trauma management, and successful knee & hip joint replacements. Centrally located near the RTC Bus Stand, we serve patients across Anantapur with a focus on affordable and high-success clinical outcomes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold text-gray-800 pt-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600"></span>
                  Best Joint Replacement Specialist Dr. Anand
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600"></span>
                  24/7 Advanced Accident & Trauma Center
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600"></span>
                  Modern Arthroscopy & Sports Injury Clinic
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600"></span>
                  Ethical Treatment for Economically Weaker Sections
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-red-100 shadow-xl shadow-red-900/5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-2.5 rounded-xl text-red-600">
                    <ShieldAlert size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Emergency Hotline</h4>
                    <p className="text-xs text-gray-400">Immediate trauma & accident response</p>
                  </div>
                </div>
                <p className="text-2xl font-black text-gray-900">+91 63008 82019</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Call our 24/7 helpline for quick ambulance dispatch or emergency trauma admission in Anantapur.
                </p>
              </div>
              <a 
                href="tel:+916300882019" 
                className="mt-6 bg-red-600 text-white text-center py-3.5 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-md text-sm"
              >
                Call Emergency Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Specialties />
      <Emergency />
      <Testimonials />
    </div>
  );
}
