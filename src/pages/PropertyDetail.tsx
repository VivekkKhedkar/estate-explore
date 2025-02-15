
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Bath, BedDouble, Calendar, Download, Expand, MapPin, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PropertyDetail = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);

  const property = {
    title: "Luxury Penthouse",
    location: "Beverly Hills, CA",
    price: "$2,500,000",
    description: "Experience luxury living at its finest in this stunning penthouse with breathtaking views of the city. This exceptional property features high-end finishes, spacious living areas, and world-class amenities.",
    details: {
      bedrooms: 4,
      bathrooms: 3,
      size: "3,200 sq ft",
      year: 2022,
      garage: "2 Cars",
      type: "Penthouse"
    },
    features: [
      "Floor-to-ceiling windows",
      "Private elevator",
      "Gourmet kitchen",
      "Smart home technology",
      "24/7 security",
      "Rooftop terrace"
    ],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    ],
    floorPlan: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
  };

  return (
    <div className="animate-fade-in">
      {/* Image Gallery */}
      <section className="relative h-[60vh] bg-gray-100">
        <img
          src={property.images[activeImage]}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {property.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`w-3 h-3 rounded-full ${
                activeImage === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Property Details */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-4xl font-bold mb-2">{property.title}</h1>
                  <p className="text-gray-600 flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    {property.location}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Share2 className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Download className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <BedDouble className="h-5 w-5 text-gray-600" />
                  <span>{property.details.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-gray-600" />
                  <span>{property.details.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Expand className="h-5 w-5 text-gray-600" />
                  <span>{property.details.size}</span>
                </div>
              </div>

              {/* Description */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{property.description}</p>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 gap-4">
                    {property.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-blue-600 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Floor Plan */}
              <Card>
                <CardHeader>
                  <CardTitle>Floor Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={property.floorPlan}
                    alt="Floor Plan"
                    className="w-full h-auto rounded-lg"
                  />
                  <Button className="mt-4" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Floor Plan
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div>
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-blue-600">
                    {property.price}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full">Schedule a Visit</Button>
                  <Button variant="outline" className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Request Info
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetail;
