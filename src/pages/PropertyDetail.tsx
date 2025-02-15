
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PropertyDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log("Property detail page mounted for id:", id);
  }, [id]);

  return (
    <div className="section-padding">
      <h1 className="text-4xl font-bold mb-8">Property Details</h1>
      <p>Property detail page for ID: {id} - Coming soon</p>
    </div>
  );
};

export default PropertyDetail;
