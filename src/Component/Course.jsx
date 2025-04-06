// ... other imports
import { ChevronLeft, ChevronRight, Users, Clock, Calendar, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import pic1 from '../assets/BCA.jpg'
import pic2 from '../assets/BHM.jpg'
import pic3 from '../assets/BBA.jpg'

const CourseComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const carouselRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const navigate = useNavigate();

  const categories = ["All Courses", "Undergraduate", "Diploma", "Certificate"];
  const [activeCategory, setActiveCategory] = useState("All Courses");

  const coursesData = [
    {
      id: 1,
      title: "Bachelor of Computer Applications (BCA)",
      category: "Undergraduate",
      duration: "3 Years",
      startDate: "August 2025",
      students: 120,
      rating: 4.8,
      image: pic1,
      description: "Develop skills in computer applications, programming, and software development with our comprehensive BCA program.",
      highlights: ["Modern Curriculum", "Industry Partnerships", "Hands-on Projects", "Career Support"],
      featured: true
    },
    {
      id: 2,
      title: "Bachelor of Hotel Management (BHM)",
      category: "Undergraduate",
      duration: "4 Years",
      startDate: "September 2025",
      students: 85,
      rating: 4.6,
      image: pic2,
      description: "Prepare for leadership roles in the hospitality industry with our internationally recognized BHM program.",
      highlights: ["Industry Internships", "State-of-art Facilities", "Expert Faculty", "Global Exposure"],
      featured: true
    },
    {
      id: 3,
      title: "Bachelor of Business Administration (BBA)",
      category: "Undergraduate",
      duration: "3 Years",
      startDate: "August 2025",
      students: 150,
      rating: 4.7,
      image: pic3,
      description: "Gain comprehensive knowledge in business management, strategy, and leadership for a successful corporate career.",
      highlights: ["Specializations Available", "Case-based Learning", "Business Competitions", "Networking Events"],
      featured: true
    },
    {
      id: 4,
      title: "Advanced Diploma in Hotel Management (ADHM)",
      category: "Diploma",
      duration: "6 Months",
      startDate: "Monthly Intake",
      students: 200,
      rating: 4.7,
      image: "/api/placeholder/600/400",
      description: "Master digital marketing strategies, tools, and techniques with this industry-recognized certificate program.",
      highlights: ["Hands-on Training", "Real Campaign Experience", "Industry Tools Access", "Portfolio Development"],
      featured: false
    },
    {
      id: 5,
      title: "Digital Marketing Certificate",
      category: "Certificate",
      duration: "6 Months",
      startDate: "Monthly Intake",
      students: 200,
      rating: 4.7,
      image: "/api/placeholder/600/400",
      description: "Master digital marketing strategies, tools, and techniques with this industry-recognized certificate program.",
      highlights: ["Hands-on Training", "Real Campaign Experience", "Industry Tools Access", "Portfolio Development"],
      featured: false
    }
  ];

  const filteredCourses = activeCategory === "All Courses"
    ? coursesData
    : coursesData.filter(course => course.category === activeCategory);

  const featuredCourses = coursesData.filter(course => course.featured);

  useEffect(() => {
    let interval;
    if (!autoplayPaused) {
      interval = setInterval(() => {
        if (!isAnimating) {
          handleNext();
        }
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [activeIndex, isAnimating, autoplayPaused]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(prev => (prev === 0 ? featuredCourses.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(prev => (prev === featuredCourses.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setAutoplayPaused(true);
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const touchDiff = touchStartX.current - touchEndX.current;
    if (touchDiff > 50) handleNext();
    else if (touchDiff < -50) handlePrev();
    setTimeout(() => setAutoplayPaused(false), 5000);
  };

  const handleApplyNow = (courseId) => {
    // if (courseId === 1) {
    //   navigate("/courses/bca");
    
    // }
    // else if (courseId === 2) {
    //   navigate("/courses/bhm");
    // }
    // else {
    //   navigate(`/courses/${courseId}`);
    // }
    navigate(`/courses/${courseId}`);
  };

  return (
    <div className="bg-gray-50 py-16">
      <style>{`
        @keyframes zoomIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-zoomIn { animation: zoomIn 0.6s ease forwards; }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Featured Courses</h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {featuredCourses.map((course) => (
              <div key={course.id} className="min-w-full p-6 animate-zoomIn">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <img src={course.image} alt={course.title} className="rounded-lg mb-4 w-full h-64 object-cover" />
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span><Calendar className="inline w-4 h-4 mr-1" /> {course.startDate}</span>
                    <span><Clock className="inline w-4 h-4 mr-1" /> {course.duration}</span>
                    <span><Users className="inline w-4 h-4 mr-1" /> {course.students} Students</span>
                    <span><Star className="inline w-4 h-4 mr-1 text-yellow-400" /> {course.rating}</span>
                  </div>
                  <button
                    onClick={() => handleApplyNow(course.id)}
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
                  >
                    Know more
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white shadow p-2 rounded-full"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white shadow p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseComponent;
