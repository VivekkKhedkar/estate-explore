
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">Estate Elegance</h3>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner in finding the perfect home. With years of excellence in real estate.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors p-2 bg-gray-800/50 rounded-full">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors p-2 bg-gray-800/50 rounded-full">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors p-2 bg-gray-800/50 rounded-full">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors p-2 bg-gray-800/50 rounded-full">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/properties" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full group-hover:w-3 transition-all"></span>
                  Properties
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full group-hover:w-3 transition-all"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/search" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full group-hover:w-3 transition-all"></span>
                  Search
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-400">Contact Info</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>123 Real Estate Avenue</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>info@estateelegance.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-400">Newsletter</h3>
            <p className="text-gray-300">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800/50 text-white border border-gray-700 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors"
              />
              <Button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Estate Elegance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
