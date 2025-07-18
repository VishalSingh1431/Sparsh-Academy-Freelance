import React from 'react';

const Landing = () => {
  return (
    <div className="flex flex-col bg-white">
      {/* Marquee Banner */}
      <div className="bg-blue-600 text-white overflow-hidden">
        <marquee 
          behavior="scroll" 
          direction="left" 
          className="text-xl md:text-2xl font-bold tracking-wide"
        >
          🎉 Admissions Open for 2025-26 Session | Limited Seats Available | Register Now 🎉
          &nbsp;&nbsp;&nbsp;&nbsp;
          🏫 Best Infrastructure in Maharajganj | Experienced Faculty | Modern Teaching Methods 🏫
        </marquee>
      </div>

      {/* Main Content */}
      <div className="  min-h-[80vh] flex flex-col justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex-1 flex flex-col md:flex-row items-center justify-between">
          {/* Text Content - Left Side */}
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-8 lg:pr-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              <span className="text-blue-600">SPARSH</span> ACADEMY
            </h1>
            
            <p className="text-2xl sm:text-3xl md:text-4xl text-gray-700 font-medium mb-6 md:mb-8">
              Partawal Bazar, Maharajganj
            </p>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 font-semibold mb-8">
              Premier Educational Institution in the Region
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
              Explore More
            </button>
          </div>

          {/* Image - Right Side */}
          <div className="md:w-1/2 flex justify-center px-4 sm:px-0">
            <div className="relative w-full max-w-xl">
              <img 
                src="/images/landing.jpg" 
                alt="Sparsh Academy Campus"
                className="w-full rounded-xl shadow-2xl border-4 border-white transform transition-all duration-500 hover:scale-102 hover:shadow-2xl"
              />
              <div className="absolute -inset-2 rounded-xl border-2 border-blue-200 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      {/* About School Section */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="/images/about.jpg" 
                alt="Sparsh Academy Building"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-600">Sparsh Academy</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                Established with a vision to provide quality education in Maharajganj, Sparsh Academy has grown to become a premier educational institution known for its academic excellence and holistic development programs.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Our state-of-the-art infrastructure, experienced faculty, and innovative teaching methodologies create an environment where students can thrive academically while developing essential life skills and values.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Director's Desk Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            From the <span className="text-blue-600">Director's Desk</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-100 shadow-xl">
                <img 
                  src="/images/raj.jpg" 
                  alt="Dr. Raj Kumar Singh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Dr. Raj Kumar Singh
              </h3>
              <p className="text-lg text-blue-600 font-medium mb-6">
                BDS (LKO), D.O. (IMS BHU), F.A.G.E. (Manipal), M.I.D.A.
              </p>
              
              <div className="prose max-w-none text-gray-700 mb-6">
                <p className="mb-4">
                  A distinguished dental professional, educator, and community leader with over 17 years of experience, Dr. Singh combines clinical excellence with leadership and education. His dedication has earned him multiple accolades, including five Excellence Awards and the prestigious Best Secretary Award by the Indian Dental Association.
                </p>
                <p className="mb-4">
                  As Director of Sparsh Academy, he brings the same commitment to excellence in education that has marked his healthcare career, ensuring our students receive world-class learning experiences.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <a href="tel:9935417930" className="flex items-center text-gray-700 hover:text-blue-600">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  9935417930 / 9839018770
                </a>
                
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Dental Surgeon</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Educator</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Community Leader</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">IDA Award Winner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;