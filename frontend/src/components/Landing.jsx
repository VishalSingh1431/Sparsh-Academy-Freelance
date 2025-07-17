import React from 'react';

const Landing = () => {
  return (
    <div className="min-h-[80vh] flex flex-col bg-white">
      {/* Marquee Banner */}
      <div className="bg-blue-600 text-white py-3 overflow-hidden">
        <marquee 
          behavior="scroll" 
          direction="left" 
          className="text-xl md:text-2xl font-bold tracking-wide"
        >
          🎉 Admissions Open for 2025-26 Session | Limited Seats Available | Register Now 🎉
          &nbsp;&nbsp;&nbsp;&nbsp; {/* Spacer */}
          🏫 Best Infrastructure in Maharajganj | Experienced Faculty | Modern Teaching Methods 🏫
        </marquee>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex-1 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content - Left Side */}
        <div className="md:w-1/2 mb-12 md:mb-0 md:pr-8 lg:pr-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-6 leading-tight">
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
  );
};

export default Landing;