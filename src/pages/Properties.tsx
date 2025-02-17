import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bath, BedDouble, Building2, Download, Expand, MapPin, Ruler } from "lucide-react";
import { Link } from "react-router-dom";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  bedrooms?: number;
  bathrooms?: number;
  size: string;
  image: string;
  type: "residential" | "commercial" | "plot";
  description: string;
  features: string[];
}

const propertiesData: Property[] = [
  // Residential Properties
  {
    id: 1,
    title: "Luxury Villa",
    location: "Koregaon Park, Pune",
    price: "₹4.5 Cr",
    bedrooms: 5,
    bathrooms: 4,
    size: "4,200 sq ft",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    type: "residential",
    description: "Elegant villa with modern amenities and garden",
    features: ["Swimming Pool", "Garden", "Modular Kitchen", "Servant Quarter"]
  },
  {
    id: 2,
    title: "Premium Apartment",
    location: "Kalyani Nagar, Pune",
    price: "₹2.8 Cr",
    bedrooms: 3,
    bathrooms: 3,
    size: "2,100 sq ft",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    type: "residential",
    description: "High-rise luxury apartment with city views",
    features: ["24/7 Security", "Club House", "Gym", "Children's Play Area"]
  },
  // Commercial Properties
  {
    id: 3,
    title: "Office Complex",
    location: "Hinjewadi Phase 1, Pune",
    price: "₹12.5 Cr",
    size: "15,000 sq ft",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    type: "commercial",
    description: "Modern office space in IT hub",
    features: ["Parking", "24/7 Access", "Power Backup", "Conference Rooms"]
  },
  {
    id: 4,
    title: "Retail Space",
    location: "MG Road, Camp, Pune",
    price: "₹8.2 Cr",
    size: "8,500 sq ft",
    image: "https://images.unsplash.com/photo-1577760258779-e3cc2642b5d4",
    type: "commercial",
    description: "Prime retail space in shopping district",
    features: ["High Footfall", "Storage Area", "Display Windows", "Loading Zone"]
  },
  // Plots
  {
    id: 5,
    title: "NA Plot",
    location: "Wagholi, Pune",
    price: "₹1.8 Cr",
    size: "2,400 sq ft",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    type: "plot",
    description: "Ready for construction NA plot",
    features: ["Corner Plot", "Road Access", "All Utilities", "Clear Title"]
  },
  {
    id: 6,
    title: "Industrial Plot",
    location: "MIDC Chakan, Pune",
    price: "₹4.2 Cr",
    size: "5,000 sq ft",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    type: "plot",
    description: "Industrial zone plot with permissions",
    features: ["MIDC Zone", "Power Supply", "Water Connection", "Wide Road"]
  }
];

const Properties = () => {
  const [selectedType, setSelectedType] = useState<string>("all");

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1582407947304-fd86f028f716')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/80 to-[#FB923C]/60" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Properties</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover your perfect property from our exclusive collection in prime locations across Pune
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-gradient-to-r from-orange-50 to-orange-100/50">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            <select
              className="px-4 py-2 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring-orange-500 bg-white shadow-sm hover:border-orange-300 transition-colors"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="all">All Properties</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="plot">Plots</option>
            </select>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          {/* Residential Section */}
          {(selectedType === "all" || selectedType === "residential") && (
            <div className="mb-16">
              <div className="flex items-center gap-2 mb-8">
                <div className="h-8 w-2 bg-orange-600 rounded-full" />
                <h2 className="text-3xl font-bold text-gray-900">Residential Properties</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {propertiesData
                  .filter((property) => property.type === "residential")
                  .map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
              </div>
            </div>
          )}

          {/* Commercial Section */}
          {(selectedType === "all" || selectedType === "commercial") && (
            <div className="mb-16">
              <div className="flex items-center gap-2 mb-8">
                <div className="h-8 w-2 bg-orange-600 rounded-full" />
                <h2 className="text-3xl font-bold text-gray-900">Commercial Properties</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {propertiesData
                  .filter((property) => property.type === "commercial")
                  .map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
              </div>
            </div>
          )}

          {/* Plots Section */}
          {(selectedType === "all" || selectedType === "plot") && (
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="h-8 w-2 bg-orange-600 rounded-full" />
                <h2 className="text-3xl font-bold text-gray-900">Land/Plots</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {propertiesData
                  .filter((property) => property.type === "plot")
                  .map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

const PropertyCard = ({ property }: { property: Property }) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0">
      <div className="relative h-72">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <Button variant="secondary" size="icon" className="bg-white/90 hover:bg-white">
            <Download className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
            {property.title}
          </h3>
          <p className="flex items-center gap-2 text-white/90 mb-3">
            <MapPin className="w-4 h-4" />
            {property.location}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xl md:text-2xl font-bold text-orange-400">{property.price}</span>
            <div className="flex items-center gap-4 text-white/90">
              <span className="flex items-center gap-1">
                <BedDouble className="w-4 h-4" />
                {property.bedrooms}
              </span>
              <span className="flex items-center gap-1">
                <Bath className="w-4 h-4" />
                {property.bathrooms}
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
  );
};

export default Properties;
