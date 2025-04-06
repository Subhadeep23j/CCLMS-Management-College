import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import clg_logo from '../assets/clg_logo.webp';

const ContactPage = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for any inquiries, support, or feedback. We’d love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center">
            <Mail size={32} className="text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600">info@college.edu</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center">
            <Phone size={32} className="text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center">
            <MapPin size={32} className="text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-600">123, College Road, City, India</p>
          </div>
        </div>

        <div className="mt-12">
          <iframe
            className="w-full h-64 rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4616.63467125977!2d87.73476217602658!3d21.78469186138532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0326f87e6e8479%3A0xb610eefe9d9387c1!2sContai%20College%20of%20Learning%20%26%20Management%20Science!5e1!3m2!1sen!2sin!4v1743847890515!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="mt-12 max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold text-center mb-4">Send Us a Message</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md" required />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md" required />
            <textarea placeholder="Your Message" className="w-full p-3 border rounded-md" rows="4" required></textarea>
            <button type="submit" className="w-full bg-blue-700 text-white p-3 rounded-md hover:bg-blue-800">Send</button>
          </form>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Follow Us on:-</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <Facebook size={32} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              <Twitter size={32} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
              <Instagram size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;