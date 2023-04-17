import { useState } from "react";
import { useDrop } from "react-dnd";
import { MaterialCard } from "./Material";

export default function RequiredMaterialsPanel() {
  const [requiredMaterials, setRequiredMaterials] = useState([]);
  const [{ isOver }, dropRef] = useDrop({
    accept: "material",
    drop: (item) =>
      setRequiredMaterials((requiredMaterials) => [...requiredMaterials, item]),
  });

  return (
    <section
      ref={dropRef}
      className="overflow-y-scroll flex flex-wrap justify-evenly gap-5 p-4 max-h-0 min-h-full bg-neutral-900 shadow-md shadow-black rounded-xl"
    >
      {requiredMaterials.map((item) => (
        <MaterialCard key={item.id} materialInfo={item} /> // Add a unique key prop for each MaterialCard
      ))}
    </section>
  );
}
