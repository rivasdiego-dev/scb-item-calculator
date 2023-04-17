import { useEffect, useState } from "react";
import { MaterialCard } from "./Material";

export default function AllMaterialsPanel() {
  const [materialData, setMaterialData] = useState([]); // Initialize state for material data

  useEffect(() => {
    // Fetch data and update state
    fetch("materials/industrial.json")
      .then((response) => response.json())
      .then((data) => setMaterialData(data))
      .catch((error) => console.error("Error fetching material data:", error));
  }, []); // Empty array as second argument to useEffect to run only once on component mount

  return (
    <section className="overflow-y-scroll flex flex-wrap justify-evenly gap-5 p-4 max-h-full min-h-full bg-neutral-900 shadow-md shadow-black rounded-xl">
      {/* Map over materialData to render MaterialCard components */}
      {materialData.map((item) => (
        <MaterialCard key={item.id} materialInfo={item} /> // Add a unique key prop for each MaterialCard
      ))}
    </section>
  );
}
