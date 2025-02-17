
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Expand, MapPin, Download } from "lucide-react";
import { Link } from "react-router-dom";

interface CommercialProperty {
  id: number;
  title: string;
  location: string;
  price: string;
  size: string;
  image: string;
  description: string;
  features: string[];
  type: string;
}

const commercialProperties: CommercialProperty[] = [
  {
    id: 1,
    title: "Premium Office Space",
    location: "Hinjewadi Phase 1, Pune",
    price: "₹12.5 Cr",
    size: "15,000 sq ft",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    description: "Modern office space in Pune's premier IT hub with world-class amenities.",
    features: ["24/7 Access", "Parking Space", "Power Backup", "High-speed Internet"],
    type: "Office Space"
  },
  {
    id: 2,
    title: "Retail Complex",
    location: "MG Road, Camp, Pune",
    price: "₹8.2 Cr",
    size: "8,500 sq ft",
    image: "https://images.unsplash.com/photo-1577760258779-e3cc2642b5d4",
    description: "Prime retail space in the heart of Pune's shopping district.",
    features: ["High Footfall", "Display Windows", "Storage Space", "Loading Area"],
    type: "Retail"
  },
  {
    id: 3,
    title: "Industrial Warehouse",
    location: "Chakan MIDC, Pune",
    price: "₹15.8 Cr",
    size: "25,000 sq ft",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    description: "Spacious warehouse with modern facilities and excellent connectivity.",
    features: ["Loading Dock", "Security", "CCTV", "Worker Facilities"],
    type: "Industrial"
  }
];

const Commercial = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Properties</h1>
          <p className="text-xl text-white/90">Prime Commercial Spaces in Pune</p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialProperties.map((property) => (
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
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {property.type}
                    </span>
                  </div>
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
                    <div className="flex items-center gap-2 text-gray-600">
                      <Building2 className="h-4 w-4" />
                      <Expand className="h-4 w-4" />
                      {property.size}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feature, index) => (
                      <span key={index} className="text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                        {feature}
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

export default Commercial;
