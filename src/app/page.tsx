import Image from "next/image";

import "../app/page.css";
import SectionOne from "./sections/sectionOne";
import SectionTwo from "./sections/sectionTwo";
import SectionThree from "./sections/sectionThree";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </main>
  );
}
