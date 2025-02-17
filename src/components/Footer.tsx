
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-400">
              <Building2 className="w-8 h-8" />
              Prime9 Realty
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Pune Property Experts 🎖️<br />
              NA Plots | Residential & Commercial properties<br />
              ✨ Dream it, Own it, Rent it 💫
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/prime9_realty/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition-colors p-3 bg-gray-800/50 rounded-xl group"
              >
                <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="hover:text-blue-400 transition-colors p-3 bg-gray-800/50 rounded-xl group"
              >
                <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="hover:text-blue-400 transition-colors p-3 bg-gray-800/50 rounded-xl group"
              >
                <Twitter className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="hover:text-blue-400 transition-colors p-3 bg-gray-800/50 rounded-xl group"
              >
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <div className="mt-4 p-4 bg-gray-800/50 rounded-lg">
              <p className="font-medium mb-2">Prime9 Realty on Instagram</p>
              <div className="text-sm text-gray-300 space-y-1">
                <p>41 posts • 8,977 followers • 33 following</p>
                <p>📩 DM for inquiries: +91 76662 48250</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-400">Properties</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/properties/residential" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full group-hover:w-3 transition-all"></span>
                  Residential Properties
                </Link>
              </li>
              <li>
                <Link 
                  to="/properties/commercial" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full group-hover:w-3 transition-all"></span>
                  Commercial Properties
                </Link>
              </li>
              <li>
                <Link 
                  to="/properties/plots" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full group-hover:w-3 transition-all"></span>
                  NA Plots
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-400">Contact Info</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-blue-400" />
                <span>Koregaon Park, Pune</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-blue-400" />
                <span>Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-blue-400" />
                <span>+91 76662 48250</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-blue-400" />
                <span>contact@prime9realty.in</span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="space-y-4">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl text-blue-400">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700/50 text-white border border-gray-600 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700/50 text-white border border-gray-600 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors"
                  />
                  <select
                    className="w-full px-4 py-2 rounded-lg bg-gray-700/50 text-white border border-gray-600 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors"
                  >
                    <option value="">Interest In</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="plots">NA Plots</option>
                  </select>
                  <Button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                  >
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Prime9 Realty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
