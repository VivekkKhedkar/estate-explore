
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    console.log("Contact page mounted");
  }, []);

  return (
    <div className="section-padding">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <p>Contact page - Coming soon</p>
    </div>
  );
};

export default Contact;
