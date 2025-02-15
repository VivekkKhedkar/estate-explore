
import { Button } from "@/components/ui/button";
import { HouseIcon, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Your Dream Home
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Explore our curated collection of premium properties
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/properties" className="flex items-center gap-2">
                <HouseIcon className="w-5 h-5" />
                View Properties
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link to="/contact" className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="property-card">
                <div className="relative h-64">
                  <img
                    src={`https://images.unsplash.com/photo-148${i}938289607-e9573fc25ebb`}
                    alt={`Featured Property ${i}`}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-semibold mb-2">Luxury Villa {i}</h3>
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Beverly Hills, CA
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/properties">View All Properties</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
