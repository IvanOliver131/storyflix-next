import Image from "next/image";
import backgrounImage from "../assets/background.png";

export default function Home() {
  return (
    <main className="flex h-screen w-screen">
      <Image src={backgrounImage} alt="background" className="flex-1" />
      <section className="w-[460px] bg-gray-900">Form</section>
    </main>
  );
}
