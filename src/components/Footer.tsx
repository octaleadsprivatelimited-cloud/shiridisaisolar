import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sun className="h-6 w-6 text-yellow-500" />
                <span className="text-lg lg:text-xl font-bold">Sri Shiridi Sai Solar</span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Leading solar energy solutions provider based in Vijayawada, Andhra Pradesh - serving Krishna, Guntur, and Visakhapatnam districts.
                Professional solar panel installation with government subsidy assistance and PM solar scheme benefits.
              </p>
            </div>

            {/* Quick Links and Services - Side by side on mobile */}
            <div className="grid grid-cols-2 gap-6 md:col-span-1 lg:col-span-2">
              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/" className="text-gray-300 hover:text-yellow-500 transition-colors">Home</Link></li>
                  <li><Link to="/services" className="text-gray-300 hover:text-yellow-500 transition-colors">Services</Link></li>
                  <li><Link to="/about" className="text-gray-300 hover:text-yellow-500 transition-colors">About</Link></li>

                  <li><Link to="/blog" className="text-gray-300 hover:text-yellow-500 transition-colors">Blog</Link></li>
                </ul>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Services</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/services" className="text-gray-300 hover:text-yellow-500 transition-colors">Residential Solar</Link></li>
                  <li><Link to="/services" className="text-gray-300 hover:text-yellow-500 transition-colors">Commercial Solar</Link></li>
                  <li><Link to="/services" className="text-gray-300 hover:text-yellow-500 transition-colors">Industrial Solar</Link></li>
                  <li><Link to="/services" className="text-gray-300 hover:text-yellow-500 transition-colors">Solar Maintenance</Link></li>
                  <li><Link to="/solar-calculator" className="text-gray-300 hover:text-yellow-500 transition-colors">Solar Calculator</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <Phone className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <a href="tel:+919063758507" className="text-gray-300 hover:text-yellow-500 transition-colors">+91 90637 58507</a>
                    <br />
                    <a href="tel:+919490872456" className="text-gray-300 hover:text-yellow-500 transition-colors">+91 94908 72456</a>
                    <p className="text-gray-400 text-xs mt-1">24/7 Support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">info@shiridisaisolars.com</p>
                    <p className="text-gray-400 text-xs">Email Support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <a 
                      href="https://maps.google.com/maps?q=16.5062,80.6480&z=17&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-yellow-500 transition-colors cursor-pointer block"
                    >
                      <p>Plot No 21, CTO Colony</p>
                      <p>Vijayawada, Krishna District</p>
                      <p>Andhra Pradesh - 520001</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-4 lg:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © 2024 Sri Shiridi Sai Solar. All rights reserved. | Developed by{' '}
                <a 
                  href="https://www.octaleads.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:text-yellow-400 transition-colors font-medium"
                >
                  OctaLeads
                </a>
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-yellow-500 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-yellow-500 transition-colors">Terms of Service</Link>
              <Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
