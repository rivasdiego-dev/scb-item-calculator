import { Roboto_Condensed, Ubuntu_Condensed } from "next/font/google";
import AllMaterialsPanel from "./AllMaterialsPanel";
import RequiredMaterialsPanel from "./RequiredMaterialsPanel";
import { useState } from "react";

const roboto_c = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});
const ubuntu_c = Ubuntu_Condensed({
  weight: ["400"],
  subsets: ["latin"],
});


function total_materials_required(materials_requested) {
  return materials_requested.reduce((acc, element) => {
    const costs = element.cost;
    for (const key in costs)
      acc[key] ? acc[key] += costs[key] : acc[key] = costs[key];
    return acc;
  }, {});
}

export default function Home() {
  
  const [array_of_required_materials, setRequiredMaterialsArray] = useState([]);
  console.log(array_of_required_materials, total_materials_required(array_of_required_materials));

  return (
    <main className="relative min-h-screen bg-[url(/bg.jpg)] bg-cover bg-center">
      <span className="absolute h-full w-full p-12 backdrop-brightness-[0.2] backdrop-blur-sm">
        <header>
          <h1
            className={`${ubuntu_c.className} text-6xl bg-transparent text-center p-4`}
          >
            Resource Calculator
          </h1>
        </header>
        <section className="grid gap-12 h-4/5 p-4 grid-cols-2 max-h-full">
          
          <div id="Building" className="row-span-2 min-h-full">
            <div className={`p-1 ${roboto_c.className} flex items-center`}>
              <p>Building Materials</p>
              <img
                className="h-6 mx-2"
                alt="industry-icon"
                src={"/commercial.webp"}
              />
            </div>            
              <AllMaterialsPanel />
          </div>

          <div id="Required" className="row-span-1 min-h-full">
            <div className={`p-1 ${roboto_c.className} flex items-center`}>
              <p>Building Materials Required to Upgrade</p>
              <img
                className="h-6 mx-2"
                alt="industry-icon"
                src={"/upgrade.webp"}
              />
            </div>
            <RequiredMaterialsPanel setRequiredMaterialsArray={setRequiredMaterialsArray}/>
          </div>

          <div id="Result" className="row-span-1 min-h-full">
            <div className={`p-1 ${roboto_c.className} flex items-center`}>
              <p>Industrial Materials Needed</p>
              <img
                className="h-6 mx-2"
                alt="industry-icon"
                src={"/industrial.webp"}
              />
            </div>
            <section className="h-full bg-neutral-900 shadow-md shadow-black rounded-xl"></section>
          </div>
        </section>
      </span>
    </main>
  );
}
