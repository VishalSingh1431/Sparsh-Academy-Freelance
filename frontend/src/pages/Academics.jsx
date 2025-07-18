import React from 'react';

const Academics = () => {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">Academic</span> Excellence
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Our comprehensive K-8 curriculum builds strong foundations while preparing students for high school success
          </p>
        </div>

        {/* Curriculum Overview */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-20">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Curriculum Approach</h3>
              <p className="text-gray-600 mb-6">
                At Sparsh Academy, we follow a modified CBSE curriculum enhanced with innovative teaching methodologies 
                tailored for young learners from Kindergarten through 8th grade.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">Activity-based learning for Kindergarten to Grade 2</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">Progressive skill-building for Grades 3-5</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">Subject specialization and high school prep for Grades 6-8</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
              <img 
                src="/images/53.jpg" 
                alt="Sparsh Academy Curriculum" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Grade-Level Highlights */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Grade-Level Programs</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Primary School (K-2)",
                icon: "🧒",
                description: "Focus on foundational literacy, numeracy, and social skills through play-based learning",
                features: [
                  "Phonics reading program",
                  "Hands-on math activities",
                  "Social-emotional development"
                ],
                image: "/images/57.jpg"
              },
              {
                title: "Elementary (3-5)",
                icon: "👦",
                description: "Building independent learning skills with project-based approaches",
                features: [
                  "STEM introduction",
                  "Creative writing focus",
                  "Research skill development"
                ],
                image: "/images/44.jpg"
              },
              {
                title: "Middle School (6-8)",
                icon: "🧑",
                description: "Preparing for high school with specialized subject teachers",
                features: [
                  "Advanced math tracks",
                  "Science lab rotations",
                  "High school prep workshops"
                ],
                image: "/images/55.jpg"
              }
            ].map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-3">{program.icon}</div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h4>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Programs */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Special Academic Programs</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Reading Initiative",
                icon: "📚",
                description: "Daily DEAR (Drop Everything And Read) time and leveled libraries",
                image: "/images/5.jpg"
              },
              {
                title: "Math Masters",
                icon: "🧮",
                description: "Competency-based math program with manipulatives and real-world applications",
                image: "/images/28.jpg"
              },
              {
                title: "Young Scientists",
                icon: "🔬",
                description: "Hands-on experiments and annual science fair for all grades",
                image: "/images/47.jpg"
              },
              {
                title: "Digital Literacy",
                icon: "💻",
                description: "Age-appropriate technology integration starting from 1st grade",
                image: "/images/74.jpg"
              }
            ].map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <div className="text-3xl mb-3">{program.icon}</div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-900">{program.title}</h4>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Assessment Approach */}
        <div className="bg-blue-50 rounded-xl p-8 md:p-12 mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Assessment Philosophy</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                  Continuous Evaluation
                </h4>
                <p className="text-gray-600">
                  We use regular formative assessments to monitor progress and adapt instruction to student needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                  Portfolio Assessments
                </h4>
                <p className="text-gray-600">
                  Students compile work portfolios to demonstrate growth, especially in primary grades.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  Standardized Testing
                </h4>
                <p className="text-gray-600">
                  Grades 3-8 participate in benchmark assessments to ensure standards mastery.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Progress Reports
                </h4>
                <p className="text-gray-600">
                  Detailed quarterly reports with teacher narratives and growth metrics.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Faculty Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Academic Faculty</h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gray-100 p-8 flex items-center justify-center">
                  <img 
                    src="/images/26.jpg" 
                    alt="Sparsh Academy Faculty" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <p className="text-gray-600 mb-6">
                    Our teachers are specialists in elementary and middle school education, with 85% holding advanced degrees 
                    in their subject areas or education.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Professional Development</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Monthly training workshops</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Curriculum planning sessions</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Teaching Approach</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Differentiated instruction</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Student-centered classrooms</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Want to Learn More About Our Academics?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Download our detailed curriculum guide or schedule a meeting with our academic coordinator.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
              Download Curriculum
            </button>
            <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-lg shadow-md border border-blue-200 transition-all duration-300 transform hover:scale-105">
              Contact Academic Head
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;