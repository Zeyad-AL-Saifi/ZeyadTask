import Image from "next/image";
import CardOne from "./cardOne";
import CardTwo from "./cardTow";

export default function SectionThree() {
  return (
    <>
      <div className="bg-greydark-50 p-20 mt-20  text-center container-three">
        <div className="mt-20 ">
          <h1 className="text-3xl font-bold ">Title Goes Here</h1>
          <p className="mt-5 text-section-three">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            commodi, tempore maxime animi facere asperiores possimus, laboriosam
            et hic veniam voluptates. Tempora unde perspiciatis optio ad
            molestiae maiores nesciunt ea! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Ratione commodi, tempore maxime animi
            facere asperiores possimus, laboriosam et hic veniam voluptates.
            Tempora unde perspiciatis optio ad molestiae maiores nesciunt ea!
          </p>
        </div>

        <div className="card-two-container">
          <div className="rel-one">
            <CardTwo number={1} />
            <CardTwo number={3} />
          </div>
          <div className="rel-two">
            <CardTwo number={2} />
            <CardTwo number={4} />
          </div>
        </div>
      </div>
    </>
  );
}
