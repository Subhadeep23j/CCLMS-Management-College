import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useParams } from 'react-router-dom';

import Loader from './Component/Loader.jsx';
import Navbar from './Component/Navbar';
import HomePage from './Component/Hero';
import CourseComponent from './Component/Course';
import AdmissionsPage from './Component/Admission';
import Footer from './Component/Footer';
import AboutPage from './Component/About';
import GalleryPage from './Component/Gallery';
import ContactPage from './Component/Contact';
import BCACoursePage from './Component/course-component/Bca-course';
import BHMCoursePage from './Component/course-component/Bhm-course';
import BBACoursePage from './Component/course-component/Bba-course';

const LoginPage = () => (
  <div className="min-h-screen bg-gray-50 pt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-blue-700 mb-6">Login</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
);

const ApplyPage = () => (
  <div className="min-h-screen bg-gray-50 pt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-blue-700 mb-6">Apply Now</h1>
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Admission Open for 2025-26</h1>
        <p className="text-gray-700 mb-6">Complete the form below to start your application process.</p>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="firstName">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="lastName">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2" htmlFor="program">Program of Interest</label>
              <select 
                id="program" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a program</option>
                <option value="bca">Bachelor of Computer Applications (BCA)</option>
                <option value="bhm">Bachelor of Hotel Management (BHM)</option>
                <option value="bba">Bachelor of Business Administration (BBA)</option>
                <option value="mca">Master of Computer Applications (MCA)</option>
                <option value="mba">MBA in Hospitality Management</option>
              </select>
            </div>
          </div>
          <button 
            type="submit" 
            className="bg-blue-700 text-white py-2 px-6 rounded-md hover:bg-blue-800 transition-colors"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  </div>
);

const CourseDetails = () => {
  const { courseId } = useParams();

  switch (courseId) {
    case '1':
      return <BCACoursePage />;
    case '2':
      return <BHMCoursePage />;
    case '3':
      return <BBACoursePage />;
    default:
      return (
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold text-red-600">Course Not Found</h2>
        </div>
      );
  }
};


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CourseComponent />} />
            <Route path="/courses/:courseId" element={<CourseDetails />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/apply" element={<ApplyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
