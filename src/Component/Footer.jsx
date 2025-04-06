import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <p className="text-sm">
            Our college is committed to providing quality education and empowering students with skills for the future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Courses</a></li>
            <li><a href="#" className="hover:underline">Admissions</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Important Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Student Portal</a></li>
            <li><a href="#" className="hover:underline">Library</a></li>
            <li><a href="#" className="hover:underline">Examinations</a></li>
            <li><a href="#" className="hover:underline">Alumni</a></li>
          </ul>
        </div>

        {/* Contact with Google Map */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <address className="not-italic text-sm">
            <p>Contai College of Learning & Management Science</p>
            <p>Padmapukhuria, Contai, Purba Medinipur</p>
            <p className="mt-2">Phone: +91-12345-67890</p>
            <p>Email: cclms@gamil.com</p>
          </address>

          {/* Google Map Embed */}
          <div className="mt-4">
            <iframe
              title="Contai College Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4616.63467125977!2d87.73476217602658!3d21.78469186138532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0326f87e6e8479%3A0xb610eefe9d9387c1!2sContai%20College%20of%20Learning%20%26%20Management%20Science!5e1!3m2!1sen!2sin!4v1743847890515!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md border-2 border-blue-700"
            ></iframe>
          </div>

          {/* Social Media Links */}
          <div className="mt-4 flex space-x-4 text-sm">
            <a href="#" className="hover:text-blue-200">Facebook</a>
            <a href="#" className="hover:text-blue-200">Twitter</a>
            <a href="#" className="hover:text-blue-200">Instagram</a>
            <a href="#" className="hover:text-blue-200">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm border-t border-blue-700 pt-4">
        &copy; {new Date().getFullYear()} Contai College of Learning & Management Science. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
