
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bath, BedDouble, Building2, DollarSign, Expand, HouseIcon, Layout, MapPin, Phone } from "lucide-react";
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
          <p className="text-lg md:text-xl mb-8 text-white">
            Explore our curated collection of premium properties
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/properties" className="flex items-center gap-2">
                <HouseIcon className="w-5 h-5" />
                View Properties
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-gray-100">
              <Link to="/contact" className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Browse by Property Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Luxury Apartments", count: 24, icon: Building2, image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00" },
              { title: "Modern Villas", count: 15, icon: HouseIcon, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750" },
              { title: "Penthouses", count: 8, icon: Building2, image: "https://images.unsplash.com/photo-1577495508326-b2c987fdb373" }
            ].map((type, i) => (
              <Card key={i} className="overflow-hidden group cursor-pointer">
                <div className="relative h-64">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center text-white">
                      <type.icon className="w-12 h-12 mb-4 mx-auto" />
                      <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                      <p>{type.count} Properties</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Luxury Villa",
                location: "Beverly Hills, CA",
                price: "$2,500,000",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
                beds: 4,
                baths: 3,
                size: "3,200 sq ft"
              },
              {
                title: "Modern Apartment",
                location: "Downtown LA",
                price: "$1,200,000",
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
                beds: 2,
                baths: 2,
                size: "1,800 sq ft"
              },
              {
                title: "Penthouse Suite",
                location: "Santa Monica",
                price: "$3,800,000",
                image: "https://images.unsplash.com/photo-1577495508326-b2c987fdb373",
                beds: 3,
                baths: 3.5,
                size: "2,500 sq ft"
              }
            ].map((property, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                    <p className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4" />
                      {property.location}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold">{property.price}</span>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <BedDouble className="w-4 h-4" />
                          {property.beds}
                        </span>
                        <span className="flex items-center gap-1">
                          <Bath className="w-4 h-4" />
                          {property.baths}
                        </span>
                        <span className="flex items-center gap-1">
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
            <Button asChild size="lg">
              <Link to="/properties">View All Properties</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Price Range Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Browse by Price Range</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { range: "Under $1M", icon: DollarSign, count: 45 },
              { range: "$1M - $2M", icon: DollarSign, count: 32 },
              { range: "$2M - $3M", icon: DollarSign, count: 18 },
              { range: "$3M+", icon: DollarSign, count: 12 }
            ].map((price, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="mx-auto p-3 rounded-full bg-blue-100 mb-4">
                    <price.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>{price.range}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{price.count} Properties</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Popular Floor Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { type: "Studio Apartment", size: "600-800 sq ft", price: "From $500,000" },
              { type: "2 Bedroom Suite", size: "1,200-1,400 sq ft", price: "From $1,200,000" },
              { type: "Penthouse", size: "2,500-3,000 sq ft", price: "From $2,500,000" }
            ].map((plan, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto p-3 rounded-full bg-gray-100 mb-4">
                    <Layout className="w-6 h-6 text-gray-600" />
                  </div>
                  <CardTitle>{plan.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">{plan.size}</p>
                  <p className="text-blue-600 font-semibold">{plan.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-8">
                Let us help you find your perfect home. Our expert team is ready to assist you
                with any questions you may have.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-gray-300">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="font-semibold">Visit Us</p>
                    <p className="text-gray-300">123 Real Estate Avenue, Beverly Hills, CA</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 rounded-lg border"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-2 rounded-lg border"
                      />
                    </div>
                    <div>
                      <textarea
                        rows={4}
                        placeholder="Your Message"
                        className="w-full px-4 py-2 rounded-lg border"
                      ></textarea>
                    </div>
                    <Button className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
