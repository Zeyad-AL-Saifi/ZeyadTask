import Image from "next/image";

interface CardTwoProps {
  number: number;
}
const CardTwo: React.FC<CardTwoProps> = ({ number }) => {
  return (
    <>
      <div className="bg-white p-6 rounded shadow-lg text-center card-two">
        <p className="text-black font-bold mb-2 ">
          <h1 className="text-beige-900 text-5xl number">{number}</h1>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          commodi, tempore maxime animi facere
        </p>
      </div>
    </>
  );
};
export default CardTwo;
