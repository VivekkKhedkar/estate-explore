
import { Button } from "@/components/ui/button";
import { HouseIcon, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative h-[90vh] md:h-[95vh] flex items-center justify-center">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center animate-fade-in"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1582407947304-fd86f028f716')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/80 to-[#FB923C]/60 backdrop-blur-[2px]" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in [--animation-delay:200ms]">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white leading-tight drop-shadow-lg">
            Find Your Perfect <span className="text-orange-200">Property</span>
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-white/90 font-light drop-shadow-lg">
            Discover exclusive properties in prime locations across Pune
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="w-full sm:w-auto text-lg bg-orange-600 hover:bg-orange-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/properties" className="flex items-center gap-2">
                <HouseIcon className="w-5 h-5" />
                Explore Properties
              </Link>
            </Button>
            <Button 
              asChild 
              variant="secondary" 
              size="lg" 
              className="w-full sm:w-auto text-lg bg-white/90 hover:bg-white text-black shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/contact" className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <StatsBar />
    </section>
  );
};

const StatsBar = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md">
      <div className="container mx-auto py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center text-white px-4">
          <StatItem value="200+" label="Properties Sold" />
          <StatItem value="95%" label="Happy Clients" />
          <StatItem value="15+" label="Years Experience" />
          <StatItem value="100+" label="Active Listings" />
        </div>
      </div>
    </div>
  );
};

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div>
    <p className="text-2xl md:text-3xl font-bold mb-1">{value}</p>
    <p className="text-sm">{label}</p>
  </div>
);
