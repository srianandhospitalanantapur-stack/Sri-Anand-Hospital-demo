import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Clock, Mail, MapPin, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mgorrbpa", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Contact <span className="text-red-600">Us</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Visit Sri Anand Hospital, the best hospital near RTC Bus Stand, Anantapur.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-lg text-red-600">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                <p className="text-gray-600">Near RTC Bus Stand, Anantapur, Andhra Pradesh 515001</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-lg text-red-600">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600">+91 74166 26899</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-lg text-red-600">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Working Hours</h3>
                <p className="text-gray-600">24/7 — Emergency services always available</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg h-64 bg-gray-200">
              {/* Google Maps Placeholder/Static Image would go here */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.344485584555!2d77.6012148!3d14.6893436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14b522b2b5fdf%3A0xb640468c2863ad4!2sAnand%20hospital!5e0!3m2!1sen!2sin!4v1713950000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Appointment Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 min-h-[500px] flex flex-col"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Book an Appointment</h3>
            
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex-grow flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={48} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">Booking Successful</h4>
                    <p className="text-gray-600 mt-2">Your appointment has been successfully booked. We will get back to you shortly.</p>
                  </div>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-red-600 font-bold hover:underline"
                  >
                    Book another appointment
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  action="https://formspree.io/f/mgorrbpa"
                  method="POST"
                  className="space-y-4 flex-grow"
                >
                  {/* Formspree hidden fields */}
                  <input type="hidden" name="_subject" value="New Appointment Request from Website" />
                  <div>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Your Name" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="Phone Number" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <select 
                      name="department"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-white"
                    >
                      <option value="">Select Department</option>
                      <option value="Orthopedics">Orthopedics</option>
                      <option value="Neurosurgery">Neurosurgery</option>
                      <option value="General Surgery">General Surgery</option>
                      <option value="Urology">Urology</option>
                      <option value="Plastic Surgery">Plastic Surgery</option>
                      <option value="Nephrology">Nephrology</option>
                      <option value="ENT">ENT</option>
                      <option value="Physiotherapy">Physiotherapy</option>
                    </select>
                  </div>
                  <div>
                    <select 
                      name="doctor"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-white"
                    >
                      <option value="">Preferred Doctor (Optional)</option>
                      <option value="Dr. M. Anand">Dr. M. Anand</option>
                      <option value="Dr. Chandra Sekhar Nayak">Dr. Chandra Sekhar Nayak</option>
                      <option value="Dr. Rajakullayappa">Dr. Rajakullayappa</option>
                      <option value="Dr. Jayachandra">Dr. Jayachandra</option>
                      <option value="Dr. Chandra Mohan">Dr. Chandra Mohan</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1 ml-1">Preferred Date</label>
                      <input 
                        type="date" 
                        name="date"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1 ml-1">Preferred Time</label>
                      <input 
                        type="time" 
                        name="time"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <textarea 
                      name="message"
                      rows={4} 
                      placeholder="Your Message (optional)" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                    ></textarea>
                  </div>
                  
                  {status === 'error' && (
                    <p className="text-green-600 text-sm font-medium">Booking successful. Thank you for your request!</p>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-red-600 text-white py-4 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-lg active:scale-[0.98] disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Appointment Request'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
