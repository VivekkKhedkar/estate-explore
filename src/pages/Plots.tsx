
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Download, Ruler, CheckSquare } from "lucide-react";
import { Link } from "react-router-dom";

interface Plot {
  id: number;
  title: string;
  location: string;
  price: string;
  size: string;
  image: string;
  description: string;
  features: string[];
  approvals: string[];
}

const plots: Plot[] = [
  {
    id: 1,
    title: "Prime NA Plot",
    location: "Wagholi, Pune",
    price: "₹1.8 Cr",
    size: "2,400 sq ft",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    description: "Ready for construction NA plot with all approvals in place.",
    features: ["Corner Plot", "Ready Possession", "Road Access", "All Utilities"],
    approvals: ["NA Permission", "7/12 Extract", "Building Permission"]
  },
  {
    id: 2,
    title: "Commercial Plot",
    location: "MIDC Chakan, Pune",
    price: "₹4.2 Cr",
    size: "5,000 sq ft",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    description: "Industrial zone plot ideal for manufacturing unit.",
    features: ["Industrial Zone", "Wide Road", "Power Supply", "Water Connection"],
    approvals: ["MIDC Approval", "Environmental Clearance"]
  },
  {
    id: 3,
    title: "Residential Plot",
    location: "Manjri, Pune",
    price: "₹95 Lac",
    size: "1,200 sq ft",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    description: "Perfect plot for your dream home in upcoming area.",
    features: ["Gated Community", "Park View", "Security", "Club House Access"],
    approvals: ["NA Permission", "Society NOC"]
  }
];

const Plots = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">NA Plots</h1>
          <p className="text-xl text-white/90">Premium Plots in Prime Locations of Pune</p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plots.map((plot) => (
              <Card key={plot.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <img
                    src={plot.image}
                    alt={plot.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Button variant="secondary" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle>{plot.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {plot.location}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-4">{plot.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-600">{plot.price}</span>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Ruler className="h-4 w-4" />
                      {plot.size}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {plot.features.map((feature, index) => (
                          <span key={index} className="text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Approvals:</h4>
                      <div className="space-y-1">
                        {plot.approvals.map((approval, index) => (
                          <div key={index} className="flex items-center gap-2 text-gray-600">
                            <CheckSquare className="h-4 w-4 text-green-500" />
                            <span>{approval}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="justify-between">
                  <Button asChild>
                    <Link to={`/properties/${plot.id}`}>View Details</Link>
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

export default Plots;
