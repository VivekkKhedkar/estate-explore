
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bath, BedDouble, Expand, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface Property {
  title: string;
  location: string;
  price: string;
  image: string;
  beds: number;
  baths: number;
  size: string;
  featured: boolean;
}

const featuredProperties: Property[] = [
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
];

export const FeaturedProperties = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Featured Properties</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of premium properties in the most desirable locations of Pune
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featuredProperties.map((property, i) => (
            <PropertyCard key={i} property={property} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="bg-white hover:bg-gray-50">
            <Link to="/properties" className="text-lg">View All Properties</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const PropertyCard = ({ property }: { property: Property }) => {
  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0">
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
  );
};
