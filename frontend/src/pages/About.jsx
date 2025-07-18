import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Sparsh Academy</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* School Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Established in 2010, Sparsh Academy has been a beacon of quality education in Maharajganj, 
            nurturing young minds with modern teaching methodologies and state-of-the-art infrastructure.
            We are committed to providing holistic education that balances academic excellence with 
            character development and extracurricular growth.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Vision Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 text-lg">
              To create a transformative educational experience that empowers students to become 
              innovative thinkers, ethical leaders, and responsible global citizens.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 text-lg">
              To provide holistic education through innovative pedagogy, value-based learning, 
              and world-class infrastructure that fosters academic excellence and character development.
            </p>
          </div>
        </div>

        {/* School History */}
        <div className="mt-20 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h3>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-blue-200 before:bg-opacity-30">
                {[
                  {year: "2010", event: "Founded with 120 students and 8 teachers"},
                  {year: "2014", event: "First batch of Class X students achieved 100% results"},
                  {year: "2017", event: "Expanded to include Senior Secondary classes"},
                  {year: "2020", event: "Digital classrooms and smart boards installed"},
                  {year: "2023", event: "Recognized as Best School in District"}
                ].map((item, index) => (
                  <div key={index} className="relative flex items-center">
                    <div className="absolute left-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold z-10">
                      {item.year}
                    </div>
                    <div className="ml-16">
                      <p className="text-lg font-medium text-gray-700">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
              <img 
                src="/images/46.jpg" 
                alt="Sparsh Academy Building" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Leadership</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Raj Kumar Singh",
                role: "Principal",
                bio: "With 25+ years in education, Dr. Sharma holds a PhD in Educational Leadership and has transformed our academic programs.",
                img: "/images/.jpg"
              },
              {
                name: "Ms. Priya Singh",
                role: "Head of Academics",
                bio: "Specialized in curriculum development with 15 years experience in CBSE pattern education.",
                img: "/images/.jpg"
              },
              {
                name: "Mr. Amit Patel",
                role: "Administrative Head",
                bio: "Oversees school operations and infrastructure development with expertise in educational management.",
                img: "/images/.jpg"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Sparsh Academy?</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {icon: '🏫', title: 'Modern Infrastructure', desc: 'Smart classrooms & well-equipped labs'},
              {icon: '👩‍🏫', title: 'Expert Faculty', desc: 'Highly qualified and experienced teachers'},
              {icon: '📚', title: 'Comprehensive Curriculum', desc: 'CBSE with value-added programs'},
              {icon: '🏆', title: 'Proven Results', desc: 'Consistent 100% board results'},
              {icon: '⚽', title: 'Sports Facilities', desc: 'Basketball, cricket, football grounds'},
              {icon: '🎨', title: 'Arts Programs', desc: 'Music, dance, drama and fine arts'},
              {icon: '🔬', title: 'STEM Labs', desc: 'Advanced science and computer labs'},
              {icon: '🌍', title: 'Global Exposure', desc: 'International exchange programs'}
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities Gallery */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Facilities</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {title: "Classrooms", img: "/images/55.jpg"},
              {title: "Science Lab", img: "/images/6.jpg"},
              {title: "Library", img: "/images/73.jpg"},
              {title: "Playground", img: "/images/86.jpg"},
              {title: "Computer Lab", img: "/images/73.jpg"},
              {title: "Auditorium", img: "/images/49.jpg"},
              {title: "Art Room", img: "/images/76.jpg"},
              {title: "Cafeteria", img: "/images/17.jpg"}
            ].map((facility, index) => (
              <div key={index} className="group relative rounded-lg overflow-hidden shadow-md h-48">
                <img 
                  src={facility.img} 
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-bold text-lg">{facility.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20 bg-blue-50 rounded-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">What Parents Say</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Sparsh Academy has provided my child with excellent academic foundation and confidence.",
                name: "Mrs. Anjali Gupta",
                role: "Parent of Class VII student"
              },
              {
                quote: "The teachers go above and beyond to ensure each child's success. Truly remarkable!",
                name: "Mr. Sanjay Verma",
                role: "Parent of Class X student"
              },
              {
                quote: "The balance of academics and extracurriculars is perfect. My daughter loves going to school.",
                name: "Dr. Neha Sharma",
                role: "Parent of Class V student"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <svg className="w-8 h-8 text-blue-400 mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                </svg>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Join Our Community?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how Sparsh Academy can help your child achieve their full potential.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
              Schedule a Campus Tour
            </button>
            <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-lg shadow-md border border-blue-200 transition-all duration-300 transform hover:scale-105">
              Contact Admissions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;