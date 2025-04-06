import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, BookOpen, Monitor, Code, Database, ChevronLeft, Star, Users, Briefcase } from 'lucide-react';

const BHMCoursePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-advance carousel
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % placementData.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Placement testimonials and company data
  const placementData = [
    {
      name: "Saharukh Khan",
      role: "Front Office Manager",
      quote: "Big Hotel",
      company: "Taj Hotel",
      package: "₹8.5 LPA"
    },
    {
        name: "Saharukh Khan",
        role: "Front Office Manager",
        quote: "Big Hotel",
        company: "Taj Hotel",
        package: "₹8.5 LPA"
    },
    {
        name: "Saharukh Khan",
        role: "Front Office Manager",
        quote: "Big Hotel",
        company: "Taj Hotel",
        package: "₹8.5 LPA"
    }
  ];

  // Handle carousel navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % placementData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + placementData.length) % placementData.length);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Hero Section with Background Image */}
      <div 
        className={`relative overflow-hidden rounded-xl mb-12 bg-blue-900 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        style={{
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.85), rgba(30, 64, 175, 0.95))`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent opacity-90"></div>
        <div className="relative z-10 px-8 py-16 md:py-24 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bachelor of Hotel Management (BHM)</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">Grow your career in Hotel Industry</p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock size={18} className="mr-2 text-blue-700" />
              <span class='text-blue-700 font-bold text-center'>Duration: 3/4 Years</span>
            </div>
            <div className="flex items-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm px-4 py-2 rounded-full">
              <Calendar size={18} className="mr-2 text-blue-700" />
              <span class='text-blue-700 font-bold'>Intake: January & July</span>
            </div>
            <div className="flex items-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm px-4 py-2 rounded-full">
              <BookOpen size={18} className="mr-2 text-blue-700" />
              <span class='text-blue-700 font-bold'>120 Credits</span>
            </div>
          </div>
          
          {/* <div className="mt-8">
            <button className="bg-white text-blue-800 hover:bg-blue-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300 mr-4">
              Apply Now
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              Program Details
            </button>
          </div> */}
        </div>
        
        {/* Floating image grid */}
        {/* <div className="hidden md:block absolute right-8 top-1/2 transform -translate-y-1/2 grid grid-cols-2 gap-4 w-64">
          <div className="bg-gray-200 rounded-lg overflow-hidden h-32">
            <img src="/api/placeholder/200/150" alt="Student coding" className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden h-32">
            <img src="/api/placeholder/200/150" alt="Computer lab" className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden h-32">
            <img src="/api/placeholder/200/150" alt="Group project" className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden h-32">
            <img src="/api/placeholder/200/150" alt="Student presentation" className="w-full h-full object-cover" />
          </div>
        </div> */}
      </div>
      
      {/* Program Overview with Image */}
      <div className={`mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Program Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              The BCA program offers in-depth knowledge of programming, database management, and software development practices. You'll learn practical skills that prepare you for a career in the rapidly evolving tech industry.
            </p>
            <p className="text-gray-600 mb-4">
              With a focus on hands-on learning, our curriculum is designed in collaboration with industry experts to ensure you graduate with the most relevant skills demanded by employers.
            </p>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <Users className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">Student-focused learning</h3>
                  <p className="text-sm text-gray-500">20:1 student to faculty ratio</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <Briefcase className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">Industry Internships</h3>
                  <p className="text-sm text-gray-500">Mandatory 6-month internship program</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <Star className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">Placement Success</h3>
                  <p className="text-sm text-gray-500">95% placement rate in leading tech companies</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md h-64 md:h-auto">
            <img src="/api/placeholder/600/400" alt="BCA Students working on projects" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      
      {/* Core Subjects */}
      <div className={`mb-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Core Subjects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="mb-4 rounded-lg overflow-hidden h-40">
              <img src="/api/placeholder/400/300" alt="Computer Architecture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <Monitor className="text-blue-500 w-8 h-8 mb-2 group-hover:text-blue-600 transition-colors duration-300" />
            <h3 className="text-xl font-semibold mb-2">Food and</h3>
            <p className="text-gray-600">Learn about the fundamental building blocks of computing systems and their organization.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="mb-4 rounded-lg overflow-hidden h-40">
              <img src="/api/placeholder/400/300" alt="Programming Languages" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <Code className="text-blue-500 w-8 h-8 mb-2 group-hover:text-blue-600 transition-colors duration-300" />
            <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
            <p className="text-gray-600">Master multiple programming paradigms including object-oriented, functional, and procedural.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="mb-4 rounded-lg overflow-hidden h-40">
              <img src="/api/placeholder/400/300" alt="Database Management" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <Database className="text-blue-500 w-8 h-8 mb-2 group-hover:text-blue-600 transition-colors duration-300" />
            <h3 className="text-xl font-semibold mb-2">Database Management</h3>
            <p className="text-gray-600">Design, implement and query databases using modern DBMS tools and SQL.</p>
          </div>
        </div>
      </div>
      
      {/* Placement Carousel */}
      <div className={`mb-12 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Placement Success Stories</h2>
        
        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Carousel Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100 transition-colors duration-300"
          >
            <ChevronLeft size={24} className="text-blue-600" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100 transition-colors duration-300"
          >
            <ChevronRight size={24} className="text-blue-600" />
          </button>
          
          {/* Carousel Content */}
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {placementData.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0 p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <img src="/api/placeholder/128/128" alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-600 italic mb-4 text-lg">"{item.quote}"</blockquote>
                    
                    <div className="mt-4">
                      <h3 className="font-bold text-xl">{item.name}</h3>
                      <p className="text-blue-600">{item.role}</p>
                      <div className="flex items-center mt-2">
                        <div className="bg-gray-200 w-8 h-8 rounded-full overflow-hidden mr-2">
                          <img src="/api/placeholder/32/32" alt={item.company} className="w-full h-full object-cover" />
                        </div>
                        <span className="text-gray-500">Package: {item.package}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center p-4 gap-2">
            {placementData.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Campus Life Gallery */}
      <div className={`mb-12 transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Campus Life</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="overflow-hidden rounded-lg h-40 md:h-64 shadow-md hover:shadow-lg transition-all duration-300 group">
            <img src="/api/placeholder/400/300" alt="Computer Lab" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="overflow-hidden rounded-lg h-40 md:h-64 shadow-md hover:shadow-lg transition-all duration-300 group">
            <img src="/api/placeholder/400/300" alt="Student Event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="overflow-hidden rounded-lg h-40 md:h-64 shadow-md hover:shadow-lg transition-all duration-300 group">
            <img src="/api/placeholder/400/300" alt="Hackathon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="overflow-hidden rounded-lg h-40 md:h-64 shadow-md hover:shadow-lg transition-all duration-300 group">
            <img src="/api/placeholder/400/300" alt="Graduation Ceremony" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>
      
      {/* CTA */}
      {/* <div className={`bg-blue-600 text-white p-8 rounded-lg shadow-lg text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Tech Journey?</h2>
        <p className="text-lg mb-6">Applications for the next intake are now open. Join our vibrant community of future tech professionals.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
            Apply Now
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
            Download Brochure
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default BHMCoursePage;