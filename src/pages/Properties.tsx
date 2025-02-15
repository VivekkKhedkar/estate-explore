
import { useEffect } from "react";

const Properties = () => {
  useEffect(() => {
    console.log("Properties page mounted");
  }, []);

  return (
    <div className="section-padding">
      <h1 className="text-4xl font-bold mb-8">Our Properties</h1>
      <p>Properties listing page - Coming soon</p>
    </div>
  );
};

export default Properties;
