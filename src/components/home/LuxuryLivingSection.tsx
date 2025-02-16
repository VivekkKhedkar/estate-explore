
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const LuxuryLivingSection = () => {
  const features = [
    "Prime locations in Pune's most prestigious neighborhoods",
    "World-class amenities and modern infrastructure",
    "Smart home technology integration",
    "24/7 security and concierge services",
    "Spacious layouts with premium finishes",
    "Sustainable and eco-friendly design",
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Luxury Living in Pune</h2>
            <p className="text-gray-600 mb-8">
              Discover a lifestyle of unparalleled luxury in India's most vibrant city. Our properties 
              combine traditional elegance with modern comfort.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Luxury Living"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg md:max-w-[200px]">
              <p className="text-2xl font-bold text-blue-600 mb-2">15+</p>
              <p className="text-gray-600 text-sm">Years of Excellence in Luxury Real Estate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
