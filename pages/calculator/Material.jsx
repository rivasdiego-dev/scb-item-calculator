import { useDrag } from "react-dnd";

export const MaterialCard = ({materialInfo}) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'material',
        item: {id: materialInfo.id, name: materialInfo.name, url_image: materialInfo.url_image}
    })


  return (
    <div ref={dragRef} className="bg-neutral-800 h-fit text-center p-4 rounded-md shadow-md shadow-black">
      <img
        className="h-20 w-20 m-auto"
        src={materialInfo.url_image}
        alt={`${materialInfo.name}_image`}
      />
      <p> {materialInfo.name} </p>
    </div>
  );
};
