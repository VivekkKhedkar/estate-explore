
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bath, BedDouble, Download, Expand, MapPin } from "lucide-react";
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
}

const propertiesData: Property[] = [
  {
    id: 1,
    title: "Luxury Penthouse",
    location: "Beverly Hills, CA",
    price: "$2,500,000",
    bedrooms: 4,
    bathrooms: 3,
    size: "3,200 sq ft",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  {
    id: 2,
    title: "Modern Villa",
    location: "Malibu, CA",
    price: "$3,200,000",
    bedrooms: 5,
    bathrooms: 4,
    size: "4,100 sq ft",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
  },
  {
    id: 3,
    title: "Seaside Mansion",
    location: "Santa Monica, CA",
    price: "$4,800,000",
    bedrooms: 6,
    bathrooms: 5,
    size: "5,500 sq ft",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  }
];

const Properties = () => {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");

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
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Properties</h1>
          <p className="text-xl text-white/90">Discover your perfect home from our exclusive collection</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            <select
              className="px-4 py-2 rounded-lg border"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
            </select>
            <select
              className="px-4 py-2 rounded-lg border"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="all">All Prices</option>
              <option value="1000000">Under $1M</option>
              <option value="2000000">$1M - $2M</option>
              <option value="3000000">$2M - $3M</option>
              <option value="3000001">Above $3M</option>
            </select>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propertiesData.map((property) => (
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

export default Properties;
