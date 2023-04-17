export const MaterialCard = ({ name, url }) => {

    let id = 2, materialName = 'Wood';

  return (
    <div className="bg-neutral-800 h-fit text-center p-4 rounded-md shadow-md shadow-black">
      <img
        className="border h-20 w-20 m-auto"
        src={`/materials/industrial/${id}.jpg`}
        alt="Image"
      />
      <p> {materialName} </p>
    </div>
  );
};
