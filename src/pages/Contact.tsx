
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-white/90">Get in touch with our expert team in Pune</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  123 MG Road, Camp<br />
                  Pune, Maharashtra 411001<br />
                  India
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-blue-500" />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Phone: +91 98765 43210<br />
                  Landline: 020-12345678<br />
                  Toll Free: 1800-123-4567
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-blue-500" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  info@estateelegance.com<br />
                  sales@estateelegance.com<br />
                  support@estateelegance.com
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-center">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  ></textarea>
                </div>
                <Button className="w-full md:w-auto px-8">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          {/* Map */}
          <section className="h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.6810472754!2d73.72287834316403!3d18.524600882573357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709697436159!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Contact;
