
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bath, BedDouble, Expand, MapPin, Download } from "lucide-react";
import { Link } from "react-router-dom";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  image: string;
  description: string;
  amenities: string[];
}

const residentialProperties: Property[] = [
  {
    id: 1,
    title: "Premium 4BHK Villa",
    location: "Koregaon Park, Pune",
    price: "₹5.8 Cr",
    bedrooms: 4,
    bathrooms: 4,
    size: "4,200 sq ft",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    description: "Luxurious villa with modern amenities, landscaped garden, and premium finishes.",
    amenities: ["Swimming Pool", "Gym", "Club House", "24x7 Security", "Servant Quarter"]
  },
  {
    id: 2,
    title: "Luxury Apartment",
    location: "Kalyani Nagar, Pune",
    price: "₹3.2 Cr",
    bedrooms: 3,
    bathrooms: 3,
    size: "2,100 sq ft",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    description: "High-rise apartment with stunning city views and premium facilities.",
    amenities: ["Terrace Garden", "Modern Kitchen", "Reserved Parking", "Power Backup"]
  },
  {
    id: 3,
    title: "Garden Bungalow",
    location: "Baner, Pune",
    price: "₹4.5 Cr",
    bedrooms: 5,
    bathrooms: 5,
    size: "3,800 sq ft",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    description: "Spacious bungalow with large garden space and modern interiors.",
    amenities: ["Large Garden", "Modular Kitchen", "Solar Power", "Rain Water Harvesting"]
  }
];

const Residential = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Residential Properties</h1>
          <p className="text-xl text-white/90">Discover Your Dream Home in Pune</p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Button variant="secondary" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle>{property.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {property.location}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-4">{property.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-600">{property.price}</span>
                    <div className="flex items-center gap-4 text-gray-600">
                      <span className="flex items-center gap-1">
                        <BedDouble className="h-4 w-4" />
                        {property.bedrooms}
                      </span>
                      <span className="flex items-center gap-1">
                        <Bath className="h-4 w-4" />
                        {property.bathrooms}
                      </span>
                      <span className="flex items-center gap-1">
                        <Expand className="h-4 w-4" />
                        {property.size}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.map((amenity, index) => (
                      <span key={index} className="text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="justify-between">
                  <Button asChild>
                    <Link to={`/properties/${property.id}`}>View Details</Link>
                  </Button>
                  <Button variant="outline">Schedule Visit</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Residential;
