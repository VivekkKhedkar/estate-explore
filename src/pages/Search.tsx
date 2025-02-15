import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bath, BedDouble, Expand, MapPin, Search as SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("all");
  const [propertyType, setPropertyType] = useState("all");

  const properties = [
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

  return (
    <div className="section-padding animate-fade-in">
      <div className="container mx-auto">
        {/* Search Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Search Properties</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Location</label>
                  <input
                    type="text"
                    placeholder="Enter location"
                    className="w-full px-4 py-2 rounded-lg border"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Price Range</label>
                  <select
                    className="w-full px-4 py-2 rounded-lg border"
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
                <div>
                  <label className="block text-sm font-medium mb-1">Property Type</label>
                  <select
                    className="w-full px-4 py-2 rounded-lg border"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                  >
                    <option value="all">All Types</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <Button className="w-full">
                    <SearchIcon className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <Link to={`/properties/${property.id}`}>
                <div className="relative h-48">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                  <p className="text-gray-600 flex items-center gap-1 mb-2">
                    <MapPin className="h-4 w-4" />
                    {property.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600">{property.price}</span>
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
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
