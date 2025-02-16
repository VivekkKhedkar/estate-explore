import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bath, BedDouble, Building2, Expand, HouseIcon, Mail, MapPin, Phone, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Estate Elegance - Luxury Homes in Pune";
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Section with Dynamic Background */}
      <section className="relative h-[90vh] md:h-[95vh] flex items-center justify-center">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center animate-fade-in"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in [--animation-delay:200ms]">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white leading-tight drop-shadow-lg">
              Find Your Perfect <span className="text-blue-400">Luxury Home</span>
            </h1>
            <p className="text-lg md:text-2xl mb-8 text-white/90 font-light drop-shadow-lg">
              Discover exclusive properties in prime locations across Pune
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="w-full sm:w-auto text-lg bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
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

        {/* Stats Section */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md">
          <div className="container mx-auto py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center text-white px-4">
              <div>
                <p className="text-2xl md:text-3xl font-bold mb-1">200+</p>
                <p className="text-sm">Properties Sold</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold mb-1">95%</p>
                <p className="text-sm">Happy Clients</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold mb-1">15+</p>
                <p className="text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold mb-1">100+</p>
                <p className="text-sm">Active Listings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Featured Properties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked selection of premium properties in the most desirable locations of Pune
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Luxury Villa",
                location: "Koregaon Park",
                price: "₹4.5 Cr",
                image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
                beds: 5,
                baths: 4,
                size: "4,200 sq ft",
                featured: true
              },
              {
                title: "Premium Apartment",
                location: "Kalyani Nagar",
                price: "₹2.8 Cr",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
                beds: 3,
                baths: 3,
                size: "2,800 sq ft",
                featured: true
              },
              {
                title: "Garden Home",
                location: "Baner",
                price: "₹3.2 Cr",
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
                beds: 4,
                baths: 4,
                size: "3,500 sq ft",
                featured: true
              },
            ].map((property, i) => (
              <Card key={i} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0">
                <div className="relative h-72">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {property.featured && (
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {property.title}
                    </h3>
                    <p className="flex items-center gap-2 text-white/90 mb-3">
                      <MapPin className="w-4 h-4" />
                      {property.location}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl md:text-2xl font-bold text-blue-400">{property.price}</span>
                      <div className="flex items-center gap-4 text-white/90">
                        <span className="flex items-center gap-1">
                          <BedDouble className="w-4 h-4" />
                          {property.beds}
                        </span>
                        <span className="flex items-center gap-1">
                          <Bath className="w-4 h-4" />
                          {property.baths}
                        </span>
                        <span className="hidden md:flex items-center gap-1">
                          <Expand className="w-4 h-4" />
                          {property.size}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="bg-white hover:bg-gray-50">
              <Link to="/properties" className="text-lg">View All Properties</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Luxury Living Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-black">Experience Luxury Living</h2>
              <p className="text-gray-600 mb-8 text-lg">
                We offer an exclusive collection of premium properties in the most sought-after locations. 
                Our expertise in luxury real estate ensures you find the perfect home that matches your lifestyle.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Premium Locations", value: "20+ Areas" },
                  { title: "Luxury Properties", value: "100+ Listings" },
                  { title: "Happy Clients", value: "500+" },
                  { title: "Expert Agents", value: "30+" }
                ].map((stat, i) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</p>
                    <p className="text-gray-600">{stat.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
                alt="Luxury Interior"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3"
                alt="Modern Architecture"
                className="rounded-lg w-full h-48 object-cover translate-y-8"
              />
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Elegant Design"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1600573472592-401b489a3cdc"
                alt="Premium Living"
                className="rounded-lg w-full h-48 object-cover -translate-y-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Find Your Dream Home?</h2>
            <p className="text-gray-300 text-lg">
              Contact our team of experts to start your journey towards luxury living
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-0">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-4 mx-auto">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-center text-white">Call Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300">(555) 123-4567</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-0">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-4 mx-auto">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-center text-white">Visit Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300">123 Luxury Avenue, Beverly Hills</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-0">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-4 mx-auto">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-center text-white">Email Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300">info@luxuryestates.com</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
