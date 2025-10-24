import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton'; // Changed from ScrollToTop

function App() {
  return (
    <div className="relative w-full overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton /> {/* Changed from ScrollToTop */}
    </div>
  );
}

export default App;
