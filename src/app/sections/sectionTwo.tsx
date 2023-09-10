import Image from "next/image";
import CardOne from "./cardOne";

export default function SectionTwo() {
  return (
    <>
      <div className="bg-greydark-50 p-20 mt-20 mb-20 text-center container-two">
        <h1 className="text-3xl font-bold ">Title Goes Here</h1>
        <p className="mt-5" style={{ textAlign: "left" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          commodi, tempore maxime animi facere asperiores possimus, laboriosam
          et hic veniam voluptates. Tempora unde perspiciatis optio ad molestiae
          maiores nesciunt ea! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Ratione commodi, tempore maxime animi facere
          asperiores possimus, laboriosam et hic veniam voluptates. Tempora unde
          perspiciatis optio ad molestiae maiores nesciunt ea!
        </p>

        <div className="card-container">
          <CardOne />
          <CardOne />
          <CardOne />
          <CardOne />
        </div>
      </div>
    </>
  );
}
