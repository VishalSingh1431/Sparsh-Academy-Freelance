// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Slider from './components/Slider';
import About from './pages/About';
import Academics from './pages/Academics';
import Gallery from './pages/Gallery';
import ContactUs from './pages/Contact_Us';
import NotFound from './components/NotFound';
import WhyChooseUs from './pages/Why_Choose_Us';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        <ScrollToTop />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Landing />
                <Slider />
              </>
            } 
          />
          
          <Route path="/about" element={<About />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
          
          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;