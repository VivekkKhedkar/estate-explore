
import { useEffect } from "react";

const Search = () => {
  useEffect(() => {
    console.log("Search page mounted");
  }, []);

  return (
    <div className="section-padding">
      <h1 className="text-4xl font-bold mb-8">Search Properties</h1>
      <p>Search page - Coming soon</p>
    </div>
  );
};

export default Search;
