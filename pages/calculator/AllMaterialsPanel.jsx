import { MaterialCard } from "./Material";

export default function AllMaterialsPanel() {

  return (
    <section className="overflow-y-scroll flex flex-wrap justify-evenly gap-5 p-4 max-h-full min-h-full bg-neutral-900 shadow-md shadow-black rounded-xl">
      <MaterialCard/>
      <MaterialCard/>
      <MaterialCard/>
    </section>
  );
}
