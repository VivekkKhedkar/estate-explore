
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, HouseIcon, MapPin, Phone, Search, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: 'Home', path: '/', icon: <HouseIcon className="w-5 h-5" /> },
    { label: 'Properties', path: '/properties', icon: <MapPin className="w-5 h-5" /> },
    { label: 'Contact', path: '/contact', icon: <Phone className="w-5 h-5" /> },
    { label: 'Search', path: '/search', icon: <Search className="w-5 h-5" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-semibold flex items-center gap-2">
            <Building2 className="w-8 h-8 text-orange-600" />
            <span className="text-orange-600">Prime9 Realty</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-orange-600" /> : <Menu className="w-6 h-6 text-orange-600" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`nav-menu ${
          isOpen ? 'open' : 'closed'
        } md:hidden`}
      >
        <div className="py-6 px-4 space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center space-x-2 py-2 text-gray-600 hover:text-orange-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
          
          {/* Mobile Phone Number inside menu */}
          <a 
            href="tel:+917666248250" 
            className="flex items-center space-x-2 py-2 text-orange-600 font-medium border-t mt-4 pt-4"
          >
            <Phone className="w-5 h-5" />
            <span>+91 76662 48250</span>
          </a>
        </div>

        {/* Close button for mobile menu */}
        <Button
          variant="ghost"
          className="absolute top-4 right-4 p-2"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <X className="w-6 h-6 text-orange-600" />
        </Button>
      </div>
    </nav>
  );
};
