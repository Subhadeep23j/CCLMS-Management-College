import React, { useState } from 'react';
import { useRouter } from "next/navigation"; 
const AcademicPageContent = () => {
  // Added router for navigation
  const router = useRouter();
  
  // State for active tab, search query, and expanded card
  const [activeTab, setActiveTab] = useState('bba');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCardId, setExpandedCardId] = useState(null);
  
  // Programs data - restructured to separate each course type
  const programs = {
    bba: [
      { 
        id: 1, 
        name: 'Bachelor of Business Administration (BBA)', 
        duration: '3 Years', 
        details: 'Our flagship BBA program provides a comprehensive foundation in business fundamentals with specializations in Marketing, Finance, and Human Resources.',
        eligibility: '10+2 with minimum 50% marks in any stream',
        fees: '₹65,000 per year',
        career: 'Marketing Manager, Finance Analyst, HR Specialist, Business Consultant',
        applyLink: '/programs/bba' // Added link to BBA page
      }
    ],
    bca: [
      { 
        id: 2, 
        name: 'Bachelor of Computer Applications (BCA)', 
        duration: '3/4 Years', 
        details: 'The BCA program offers in-depth knowledge of programming, database management, and software development practices.',
        eligibility: '10+2 with minimum 50% marks, preferably with Mathematics',
        fees: '₹55,000 per year',
        career: 'Software Developer, Web Developer, Database Administrator, System Analyst',
        applyLink: '/programs/bca' // Added link to BCA page
      }
    ],
    bhm: [
      { 
        id: 3, 
        name: 'Bachelor of Hotel Management (BHM)',
        duration: '3 Years',
        details: 'The BHM program prepares students for a successful career in the hospitality industry, covering hotel operations, food and beverage management, and event planning.',
        eligibility: '10+2 with minimum 45% marks in Commerce stream',
        fees: '₹45,000 per year',
        career: 'Hotel Manager, Event Coordinator, Food and Beverage Manager, Front Office Executive',
        applyLink: '/programs/bhm' // Added link to BHM page
      }
    ],
    diploma: [
      { 
        id: 4, 
        name: 'Diploma in Digital Marketing', 
        duration: '1 Year', 
        details: 'Learn social media marketing, SEO, content marketing, and digital advertising strategies.',
        eligibility: '10+2 with minimum 45% marks in any stream',
        fees: '₹35,000 for the course',
        career: 'Digital Marketing Specialist, SEO Expert, Social Media Manager, Content Strategist',
        applyLink: '/programs/diploma/digital-marketing' // Added link to Digital Marketing page
      },
      { 
        id: 5, 
        name: 'Diploma in Financial Management', 
        duration: '1 Year', 
        details: 'Study financial planning, investment analysis, risk management, and corporate finance.',
        eligibility: '10+2 with minimum 45% marks in any stream',
        fees: '₹40,000 for the course',
        career: 'Financial Planner, Investment Advisor, Risk Analyst, Finance Administrator',
        applyLink: '/programs/diploma/financial-management' // Added link to Financial Management page
      }
    ]
  };

  // Handle search functionality
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter programs based on search query
  const filteredPrograms = programs[activeTab].filter(program => 
    program.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    program.details.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Toggle expanded card
  const toggleCard = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  // Handle navigation to program page
  const handleApplyNow = (link) => {
    router.push(link);
  };

  // Tab component
  const Tab = ({ name, id }) => (
    <button 
      className={`px-6 py-3 font-medium text-sm transition-colors duration-200 ${activeTab === id ? 'bg-white text-blue-700 shadow-md' : 'text-white hover:bg-blue-800'}`}
      onClick={() => setActiveTab(id)}
    >
      {name}
    </button>
  );

  // Program Card component with expanded view
  const ProgramCard = ({ program }) => {
    const isExpanded = expandedCardId === program.id;
    
    return (
      <div className="bg-white p-6 rounded-lg shadow-md mb-4 hover:shadow-lg transition-shadow duration-200">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">{program.name}</h3>
        <div className="text-sm text-gray-600 mb-2">Duration: {program.duration}</div>
        <p className="text-gray-700">{program.details}</p>
        
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="font-medium text-blue-600 mb-1">Eligibility</h4>
            <p className="text-gray-700 mb-3">{program.eligibility}</p>
            
            <h4 className="font-medium text-blue-600 mb-1">Course Fee</h4>
            <p className="text-gray-700 mb-3">{program.fees}</p>
            
            <h4 className="font-medium text-blue-600 mb-1">Career Opportunities</h4>
            <p className="text-gray-700">{program.career}</p>
          </div>
        )}
        
        <div className="mt-4 flex space-x-2">
          <button 
            onClick={() => toggleCard(program.id)} 
            className="bg-blue-700 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-800 transition-colors duration-200"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
          <button 
            onClick={() => handleApplyNow(program.applyLink)}
            className="border border-blue-700 text-blue-700 px-4 py-2 rounded cursor-pointer hover:bg-blue-200 transition-colors duration-200"
          >
            Apply Now
          </button>
        </div>
      </div>
    );
  };

  // Alert banner for application deadlines 
  const AlertBanner = () => (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
      <div className="flex">
        <div className="ml-3">
          <p className="text-sm text-yellow-700">
            <span className="font-bold">Important:</span> Admission open for 2025-26 academic year. Apply before May 31, 2025.
          </p>
        </div>
      </div>
    </div>
  );

  // Helper function to get tab title
  const getTabTitle = () => {
    const titles = {
      'bba': 'Bachelor of Business Administration',
      'bca': 'Bachelor of Computer Applications',
      'bhm': 'Bachelor of Hotel Management',
      'diploma': 'Diploma Courses'
    };
    return titles[activeTab] || 'Programs';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto">
        <AlertBanner />
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="bg-blue-700 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">Academic Programs</h2>
            <p className="text-blue-100">Discover our diverse range of academic offerings</p>
          </div>
          
          <div className="bg-blue-600 flex flex-wrap">
            <Tab name="BBA" id="bba" />
            <Tab name="BCA" id="bca" />
            <Tab name="BHM" id="bhm" />
            <Tab name="Diploma Courses" id="diploma" />
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search programs..."
                  className="w-full p-3 border border-gray-300 rounded-lg pl-10"
                  value={searchQuery}
                  onChange={handleSearch}
                />
                <div className="absolute left-3 top-3 text-gray-400">
                  🔍
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              {getTabTitle()}
            </h3>
            
            {filteredPrograms.length > 0 ? (
              <div className="grid md:grid-cols-1 gap-6">
                {filteredPrograms.map(program => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No programs found matching "{searchQuery}"</p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="mt-2 text-blue-700 underline cursor-pointer"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="bg-blue-700 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">Academic Calendar</h2>
            <p className="text-blue-100">Important dates for the academic year 2025-26</p>
          </div>
          
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-3 px-4 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Event</th>
                    <th className="py-3 px-4 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Date</th>
                    <th className="py-3 px-4 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-4 text-sm">Application Deadline</td>
                    <td className="py-4 px-4 text-sm">May 31, 2025</td>
                    <td className="py-4 px-4 text-sm">Last date to submit applications for all programs</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm">Entrance Exam</td>
                    <td className="py-4 px-4 text-sm">June 15, 2025</td>
                    <td className="py-4 px-4 text-sm">College entrance examination for all applicants</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm">Results Announcement</td>
                    <td className="py-4 px-4 text-sm">June 30, 2025</td>
                    <td className="py-4 px-4 text-sm">Admission results will be published on the college website</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm">Orientation Day</td>
                    <td className="py-4 px-4 text-sm">July 20, 2025</td>
                    <td className="py-4 px-4 text-sm">Mandatory orientation for all new students</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm">Classes Begin</td>
                    <td className="py-4 px-4 text-sm">August 1, 2025</td>
                    <td className="py-4 px-4 text-sm">First day of classes for all programs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-700 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">Academic Resources</h2>
            <p className="text-blue-100">Supporting your educational journey</p>
          </div>
          
          <div className="p-6 grid md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold mb-2 text-blue-700">Library</h3>
              <p className="text-gray-600">Access our extensive collection of books, journals, and digital resources.</p>
              <a href="#" className="block mt-3 text-blue-600 hover:underline">View Library Hours →</a>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold mb-2 text-blue-700">Student Handbook</h3>
              <p className="text-gray-600">Download the latest student handbook with all academic policies and procedures.</p>
              <a href="#" className="block mt-3 text-blue-600 hover:underline">Download PDF →</a>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold mb-2 text-blue-700">Faculty Office Hours</h3>
              <p className="text-gray-600">Find when your professors are available for consultation and guidance.</p>
              <a href="#" className="block mt-3 text-blue-600 hover:underline">View Schedule →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicPageContent;