import { useDrag } from "react-dnd";
import { Josefin_Sans } from "next/font/google";

const dongle = Josefin_Sans({ weight: ["400"], subsets: ["latin"] });

export const MaterialCard = ({ materialInfo }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "material",
    item: {
      id: materialInfo.id,
      name: materialInfo.name,
      url_image: materialInfo.url_image,
      is_primitive: materialInfo.is_primitive,
      cost: materialInfo.cost,
    },
  });

  return (
    <div
      ref={dragRef}
      className="bg-neutral-800 h-fit text-center p-4 rounded-md shadow-md shadow-black hover:cursor-grab"
    >
      <img
        className="h-20 w-20 m-auto"
        src={materialInfo.url_image}
        alt={`${materialInfo.name}_image`}
      />
      <p className={`${dongle.className} text-lg pt-2`}> {materialInfo.name} </p>
    </div>
  );
};
