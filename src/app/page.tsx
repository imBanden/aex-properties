"use client";

import Image from "next/image";
import NavButtons from "./components/NavButtons";
import { useRouter } from "next/navigation";

interface navItem {
  title: string;
  url: string;
}

export default function Home() {
  const router = useRouter();
  const navBar: navItem[] = [
    {
      title: "How It Works",
      url: "",
    },
    {
      title: "Services",
      url: "",
    },
    {
      title: "Selling Guides",
      url: "",
    },
    {
      title: "About Us",
      url: "",
    },
    {
      title: "Contact Us",
      url: "",
    },
  ];
  return (
    <div className="flex flex-col">
      {/* // hero section */}
      <div className="flex justify-center items-center h-screen bg-lightGreen">
        <div className="flex flex-col gap-6 justify-center items-center">
          <p className="font-satoshi font-bold text-8xl text-logoGreen">
            We Buy any Home.
          </p>
          <p className="font-satoshi font-bold text-6xl text-zinc-950">
            A guaranteed sale in a time that suits you.
          </p>
        </div>
      </div>

      {/* nav bar */}
      <div className="flex justify-between bg-zinc-50 p-8 sticky top-0">
        <div className="flex gap-16 items-center">
          <Image
            priority={true}
            alt="AEX Properties Logo image"
            width={300}
            height={100}
            src={"/images/AEX PROPERTIES/fulllogo_transparent_nobuffer.png"}
            className="object-contain cursor-pointer w-auto h-auto"
            onClick={() => router.push("/")}
          />
          <div className="flex items-center gap-3">
            {navBar.map((item, index) => (
              <NavButtons key={index}>{item.title}</NavButtons>
            ))}
          </div>
        </div>
        <button className="bg-logoGreen text-zinc-50 font-bold rounded-xl px-6 py-3 text-lg">
          Sell now
        </button>
      </div>

      {/* main section */}

      <div className="flex justify-center items-center h-screen bg-zinc-50"></div>
    </div>
  );
}
