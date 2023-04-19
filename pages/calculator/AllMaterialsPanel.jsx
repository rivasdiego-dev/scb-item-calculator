import { useEffect, useState } from "react";
import { MaterialCard } from "./Material";

export default function AllMaterialsPanel(props) {
  const [materialsData, setMaterialsData] = useState([]); // Initialize state for all the items

  useEffect(() => {
    // Getting the industrial items as an array of objects
    fetch("materials/material-info.json")
      .then((response) => response.json())
      .then((data) => {setMaterialsData(data);props.setAllMaterialsArray(data)})
      .catch((error) => console.error("Error fetching items data:", error));
  }, []); // Empty array as second argument to useEffect to run only once on component mount

  return (
    <section className="overflow-y-scroll flex flex-wrap justify-evenly gap-5 p-4 max-h-full min-h-full bg-neutral-900 shadow-md shadow-black rounded-xl">
      {/* Map over each item in the array fetched to render in MaterialCard components */}
      {materialsData.map((item) => (
        <MaterialCard key={item.id} materialInfo={item} />
      ))}
    </section>
  );
}
