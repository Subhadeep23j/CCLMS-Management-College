import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; // ✅ Only this is required

import hp from '../assets/hp.jpg'
import ms from '../assets/ms.jpg'
import pp from '../assets/pp.jpg'
import amazon from '../assets/amazon.jpg'
import facebook from '../assets/facebook.jpg'
import google from '../assets/google.png'
import pic1 from '../assets/re-image.jpg'
import pic2 from '../assets/seminar1.jpg'
import pic3 from '../assets/sports.jpg'
import mainBuilding from '../assets/main-bulding.jpg'
import clg2 from '../assets/clg-2.jpg'
import alldep from '../assets/alldep.jpg'
const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample carousel slides
  const slides = [
    {
      id: 1,
      image:mainBuilding,
      title: "Welcome to Contai College of Learning & Management Science", 
      subtitle: "Shaping Tomorrow's Leaders Today",
      buttonText: "Apply Now"
    },
    {
      id: 2,
      image: clg2,
      title: "World-Class Research Opportunities",
      subtitle: "Making breakthroughs that change the world",
      buttonText: "Apply Now"
    },
    {
      id: 3,
      image: alldep,
      title: "Vibrant Campus Life",
      subtitle: "Join a community of passionate learners",
      buttonText: "Apply Now"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative overflow-hidden h-screen max-h-96 lg:max-h-screen">
      {/* Carousel Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            
            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
                {slide.subtitle}
              </p>
              
              <Link to='/apply'><button className="bg-blue-700 hover:bg-blue-800 cursor-pointer text-white px-6 py-3 rounded-md font-medium text-lg transition-colors">
                {slide.buttonText}
              </button></Link>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

// Featured Content Section
const FeaturedContent = () => {
  const features = [
    {
      title: "Academic Excellence",
      description: "Discover our prestigious programs taught by world-class faculty",
      icon: "🎓",
    },
    {
      title: "Research Opportunities",
      description: "Engage in groundbreaking research across all disciplines",
      icon: "🔬",
    },
    { 
      title: "Global Community",
      description: "Join students from over all states of India",
      icon: "🌎",
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose CCLMS Management College</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide an exceptional educational experience that prepares you for success in an ever-changing world.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="bg-blue-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// News Section
const NewsSection = () => {
  const news = [
    {
      title: "Intra College Hackathon",
      date: "April 05, 2025",
      excerpt: "Wellcome to CCLMS inter college Hackathon Season 1",
      image: pic1
    },
    {
      title: "Seminar on reactjs",
      date: "March 15, 2025",
      excerpt: "Construction of our state-of-the-art student center is on schedule and will open for the Fall 2025 semester.",
      image: pic2
    },
    {
      title: "Anual Sports",
      date: "March 10, 2025",
      excerpt: "Our men's basketball team has advanced to the national championship finals for the first time in university history.",
      image: pic3
    }
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest CCLMS News</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings around our campus
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {news.map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-blue-600 mb-2">{item.date}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <a href="#" className="text-blue-700 font-medium hover:text-blue-800">
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CompanyCarousel = () => {
  const logos = [hp, ms, pp, amazon, google, facebook];

  return (
    <div className="bg-transparent py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-10">Top Recruiters</h2>
        <div className="relative w-full">
          <div className="flex w-max animate-scroll space-x-8 md:space-x-16">
            {logos.concat(logos).map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Company ${index + 1}`}
                className="h-16 md:h-24 w-auto object-contain hover:grayscale-0 transition duration-300 bg-red-100 h-24"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// placement carasoul
// PlacementCarousel.jsx

const placements = [
  {
    studentImg: 'https://randomuser.me/api/portraits/men/32.jpg',
    companyImg: 'https://www.svgrepo.com/show/303108/google-icon-logo.svg',
    studentName: 'Pritam Das',
    companyName: 'Google',
  },
  {
    studentImg: 'https://randomuser.me/api/portraits/men/32.jpg',
    companyImg: 'https://www.svgrepo.com/show/303110/apple-black-logo.svg',
    studentName: 'Subhadeep Maity',
    companyName: 'Apple',
  },
  {
    studentImg: 'https://randomuser.me/api/portraits/women/55.jpg',
    companyImg: 'https://www.svgrepo.com/show/473655/ibm.svg',
    studentName: 'Priyanka Jana',
    companyName: 'IBM',
  },
  {
    studentImg: 'https://randomuser.me/api/portraits/men/65.jpg',
    companyImg: 'https://www.svgrepo.com/show/475634/amazon-color.svg',
    studentName: 'Snatu Sau',
    companyName: 'Amazon',
  },
  {
    studentImg: 'https://randomuser.me/api/portraits/women/61.jpg',
    companyImg: 'https://www.svgrepo.com/show/330695/infosys.svg',
    studentName: 'Shreya Ghosh',
    companyName: 'Infosys',
  },
  {
    studentImg: 'https://randomuser.me/api/portraits/women/61.jpg',
    companyImg: 'https://www.svgrepo.com/show/330695/infosys.svg',
    studentName: 'Jhumpa Bera',
    companyName: 'Infosys',
  },
];

const PlacementCarousel = () => {
  return (
    <div className="py-10 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Recent Placements</h2>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        modules={[Autoplay]}
        className="max-w-7xl mx-auto"
      >
        {placements.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center justify-center text-center hover:shadow-xl transition">
              <img
                src={item.studentImg}
                alt={item.studentName}
                className="h-20 w-20 rounded-full object-cover border-2 border-gray-300 mb-4"
              />
              <h3 className="font-semibold text-lg">{item.studentName}</h3>
              <div className="w-16 h-16 mt-3">
                <img
                  src={item.companyImg}
                  alt={item.companyName}
                  className="object-contain w-full h-full"
                />
              </div>
              <p className="text-sm mt-2 text-gray-600">{item.companyName}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};



// Complete Home Page
const HomePage = () => {
  return (
    <div>
      {/* Navbar would be imported here */}
      <HeroCarousel />
      <FeaturedContent />
      <NewsSection />
      <CompanyCarousel />
      <PlacementCarousel />
      {/* Footer would be imported here */}
    </div>
  );
};

export default HomePage;