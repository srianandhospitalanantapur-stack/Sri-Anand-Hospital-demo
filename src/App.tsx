/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import Doctors from './components/Doctors';
import WhyChooseUs from './components/WhyChooseUs';
import Emergency from './components/Emergency';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-red-100 selection:text-red-900">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <About />
        <Specialties />
        <Emergency />
        <Doctors />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
