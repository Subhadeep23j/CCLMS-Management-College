import React, { useState } from 'react';
import clgAdmissionPhoto from '../assets/clg-admission.jpg'; // Adjust the path as necessary
function AdmissionTabs() {
  const [activeTab, setActiveTab] = useState('online');

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">Admission Process</h3>
          
          <div className="flex border-b border-gray-200 mb-6">
            <button 
              onClick={() => setActiveTab('online')}
              className={`py-2 px-4 font-medium text-lg ${
                activeTab === 'online' 
                  ? 'border-b-2 border-blue-600 text-blue-600' 
                  : 'text-gray-500 hover:text-blue-600'
              }`}
            >
              Online Application
            </button>
            <button 
              onClick={() => setActiveTab('offline')}
              className={`py-2 px-4 font-medium text-lg ${
                activeTab === 'offline' 
                  ? 'border-b-2 border-blue-600 text-blue-600' 
                  : 'text-gray-500 hover:text-blue-600'
              }`}
            >
              Offline Application
            </button>
            <button 
              onClick={() => setActiveTab('bank')}
              className={`py-2 px-4 font-medium text-lg ${
                activeTab === 'bank' 
                  ? 'border-b-2 border-blue-600 text-blue-600' 
                  : 'text-gray-500 hover:text-blue-600'
              }`}
            >
              Payment Details
            </button>
          </div>
          
          {activeTab === 'online' && (
            <div>
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2">Online Application Process:</h4>
                <ol className="list-decimal ml-6 text-gray-700">
                  <li className="mb-2">Visit the official website of Contai College of Learning & Management Science (www.cclms.edu.in)</li>
                  <li className="mb-2">Click on the "Apply Now" button on the homepage</li>
                  <li className="mb-2">Register with your email ID and mobile number</li>
                  <li className="mb-2">Fill in all required personal and academic details</li>
                  <li className="mb-2">Upload scanned copies of the following documents (max file size: 500KB each):
                    <ul className="list-disc ml-6 mt-2">
                      <li>Passport-sized photograph</li>
                      <li>Signature</li>
                      <li>10th Mark Sheet</li>
                      <li>12th Mark Sheet</li>
                      <li>ID Proof (Aadhar Card/Voter ID)</li>
                      <li>Category Certificate (if applicable)</li>
                    </ul>
                  </li>
                  <li className="mb-2">Pay the application fee of ₹500 online through Credit Card/Debit Card/Net Banking/UPI</li>
                  <li className="mb-2">Submit the application and note down your Application ID</li>
                  <li className="mb-2">Download the acknowledgment receipt for future reference</li>
                </ol>
              </div>

              <form className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">Full Name<span className='text-red-600'>*</span></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email Address<span className='text-red-600'>*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number<span className='text-red-600'>*</span></label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="course">Preferred Course<span className='text-red-600'>*</span></label>
                    <select
                      id="course"
                      name="course"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select a course</option>
                      <option value="bba">Bachelor of Business Administration (BBA)</option>
                      <option value="bca">Bachelor of Computer Applications (BCA)</option>
                      <option value="bcom">Bachelor of Commerce (B.Com)</option>
                      <option value="mba">Master of Business Administration (MBA)</option>
                    </select>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2" htmlFor="address">Address<span className='text-red-600'>*</span></label>
                    <textarea
                      id="address"
                      name="address"
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2">
                    Upload Aadhar Card/ID Proof <span className='text-red-600'>*</span>
                    </label>
                    <input
                      type="file"
                      multiple
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-sm text-gray-500 mt-1">Max file size: 500KB per document. Accepted formats: PDF, JPG, PNG</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2">
                    Passport Size Photo <span className='text-red-600'>*</span>
                    </label>
                    <input
                      type="file"
                      multiple
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-sm text-gray-500 mt-1">Max file size: 500KB per document. Accepted formats: PDF, JPG, PNG</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2">
                    10th Marksheet <span className='text-red-600'>*</span>0
                    </label>
                    <input
                      type="file"
                      multiple
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-sm text-gray-500 mt-1">Max file size: 500KB per document. Accepted formats: PDF, JPG, PNG</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2">
                      12th Marksheet<span className='text-red-600'>*</span>
                    </label>
                    <input
                      type="file"
                      multiple
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-sm text-gray-500 mt-1">Max file size: 500KB per document. Accepted formats: PDF, JPG, PNG</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button
                    type="submit"
                    className="bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'offline' && (
            <div>
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2">Offline Application Process:</h4>
                <ol className="list-decimal ml-6 text-gray-700">
                  <li className="mb-3">
                    <strong>Visit the College:</strong> Come to our Admissions Office at Contai College of Learning & Management Science, Main Campus, Contai, West Bengal.
                  </li>
                  <li className="mb-3">
                    <strong>Collect Application Form:</strong> Purchase the application form from the admissions counter for ₹500/-.
                  </li>
                  <li className="mb-3">
                    <strong>Fill the Application Form:</strong> Complete all details in the application form with blue/black pen only.
                  </li>
                  <li className="mb-3">
                    <strong>Attach Required Documents:</strong>
                    <ul className="list-disc ml-6 mt-2">
                      <li>10th Mark Sheet (Original + 2 photocopies)</li>
                      <li>12th Mark Sheet (Original + 2 photocopies)</li>
                      <li>Character Certificate</li>
                      <li>4 passport-sized photographs</li>
                      <li>ID Proof (Aadhar Card/Voter ID)</li>
                      <li>Domicile Certificate (if applicable)</li>
                      <li>Category Certificate (SC/ST/OBC/EWS) if applicable</li>
                    </ul>
                  </li>
                  <li className="mb-3">
                    <strong>Submit Application:</strong> Hand over the completed form with all documents to the Admissions Office.
                  </li>
                  <li className="mb-3">
                    <strong>Pay Application Fee:</strong> Pay ₹500/- as processing fee at the accounts counter.
                  </li>
                  <li className="mb-3">
                    <strong>Receive Acknowledgement:</strong> Collect your acknowledgement receipt with application number.
                  </li>
                </ol>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                <div className="flex">
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-yellow-800">Office Hours</h3>
                    <div className="mt-2 text-yellow-700">
                      <p>Monday to Friday: 10:00 AM to 4:00 PM</p>
                      <p>Saturday: 10:00 AM to 1:00 PM</p>
                      <p>Closed on Sundays and Public Holidays</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-2">Download Application Form:</h4>
                <p className="mb-4">You can also download the application form, fill it out, and bring it with you to the college.</p>
                <a 
                  href="#" 
                  className="bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition inline-block"
                >
                  Download Application Form (PDF)
                </a>
              </div>
            </div>
          )}

          {activeTab === 'bank' && (
            <div>
              <h4 className="text-xl font-semibold mb-4">Bank Account Details for Fee Payment</h4>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600">Account Name</p>
                    <p className="font-semibold">Contai College of Learning & Management Science</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Bank Name</p>
                    <p className="font-semibold">State Bank of India</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Account Number</p>
                    <p className="font-semibold">3219587645210</p>
                  </div>
                  <div>
                    <p className="text-gray-600">IFSC Code</p>
                    <p className="font-semibold">SBIN0010237</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Branch</p>
                    <p className="font-semibold">Contai Main Branch</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Account Type</p>
                    <p className="font-semibold">Current Account</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Other Payment Methods</h4>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-md">
                    <h5 className="font-semibold text-blue-800">Online Payment Options</h5>
                    <ul className="list-disc ml-6 mt-2 text-blue-700">
                      <li>Credit Card / Debit Card</li>
                      <li>Net Banking</li>
                      <li>UPI (Scan QR code at the counter)</li>
                      <li>Payment Gateway on College Website</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-md">
                    <h5 className="font-semibold text-blue-800">Demand Draft</h5>
                    <p className="mt-2 text-blue-700">
                      DD should be drawn in favor of "Contai College of Learning & Management Science" payable at Contai.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-md">
                    <h5 className="font-semibold text-blue-800">Cash Payment</h5>
                    <p className="mt-2 text-blue-700">
                      Cash payments are accepted at the college's accounts office during working hours.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8">
                <div className="flex">
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-yellow-800">Important Note</h3>
                    <div className="mt-2 text-yellow-700">
                      <p>After making payment via NEFT/RTGS/IMPS, please email the transaction details to <strong>admissions@cclms.edu.in</strong> along with your:</p>
                      <ul className="list-disc ml-6 mt-2">
                        <li>Application ID</li>
                        <li>Student Name</li>
                        <li>Course Applied For</li>
                        <li>UTR/Reference Number</li>
                        <li>Transaction Date</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* table section */}
              {/* <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Fee Structure</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-3 px-4 text-left border-b">Course</th>
                        <th className="py-3 px-4 text-left border-b">Application Fee</th>
                        <th className="py-3 px-4 text-left border-b">Admission Fee</th>
                        <th className="py-3 px-4 text-left border-b">Tuition Fee (per year)</th>
                        <th className="py-3 px-4 text-left border-b">Total (First Year)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-3 px-4 border-b">BBA</td>
                        <td className="py-3 px-4 border-b">₹500</td>
                        <td className="py-3 px-4 border-b">₹5,000</td>
                        <td className="py-3 px-4 border-b">₹40,000</td>
                        <td className="py-3 px-4 border-b">₹45,500</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b">BCA</td>
                        <td className="py-3 px-4 border-b">₹500</td>
                        <td className="py-3 px-4 border-b">₹5,000</td>
                        <td className="py-3 px-4 border-b">₹45,000</td>
                        <td className="py-3 px-4 border-b">₹50,500</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b">B.Com</td>
                        <td className="py-3 px-4 border-b">₹500</td>
                        <td className="py-3 px-4 border-b">₹4,000</td>
                        <td className="py-3 px-4 border-b">₹35,000</td>
                        <td className="py-3 px-4 border-b">₹39,500</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b">MBA</td>
                        <td className="py-3 px-4 border-b">₹500</td>
                        <td className="py-3 px-4 border-b">₹10,000</td>
                        <td className="py-3 px-4 border-b">₹75,000</td>
                        <td className="py-3 px-4 border-b">₹85,500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div> */}
            </div>
          )}
        </div>
        
        {/* Marketing Photo Section - Added to the right side */}
        <div className="w-full md:w-64 lg:w-80 flex flex-col items-center">
          <div className="rounded-lg overflow-hidden shadow-md border border-gray-200 w-full">
            <img src={clgAdmissionPhoto} alt="Students on campus" className="w-full h-auto" />
            <div className="p-4 bg-blue-700 text-white">
              <h4 className="font-bold text-lg mb-2">Shape Your Future</h4>
              <p className="text-sm">Join Contai College and benefit from our world-class facilities and expert faculty.</p>
            </div>
          </div>
          
          <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100 w-full">
            <h4 className="font-semibold text-blue-800 mb-2">Upcoming Admissions</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-blue-700">
                <span className="w-2 h-2 bg-blue-700 rounded-full mr-2"></span>
                <span>Last date: May 30, 2025</span>
              </li>
              <li className="flex items-center text-blue-700">
                <span className="w-2 h-2 bg-blue-700 rounded-full mr-2"></span>
                <span>Limited seats available</span>
              </li>
              <li className="flex items-center text-blue-700">
                <span className="w-2 h-2 bg-blue-700 rounded-full mr-2"></span>
                <span>Merit scholarships open</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-100 w-full">
            <h4 className="font-semibold text-yellow-800 mb-2">Need Help?</h4>
            <p className="text-yellow-800 mb-3">Our admission counselors are here to guide you through the process.</p>
            <div className="bg-blue-700 text-white text-center py-2 px-4 rounded-md hover:bg-blue-800 transition cursor-pointer">
              Contact Advisor
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdmissionTabs;