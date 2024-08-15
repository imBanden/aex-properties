"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import InputBox from "./InputBox";
import NavButtons from "./NavButtons";
import PrimaryButton from "./PrimaryButton";

interface navItem {
  title: string;
  url: string;
}

const NavBar = () => {
  const router = useRouter();
  const navBar: navItem[] = [
    {
      title: "How It Works",
      url: "/how-it-works",
    },
    {
      title: "Sell House Fast",
      url: "/sell-house-fast",
    },
    {
      title: "Selling Guides",
      url: "/selling-guides",
    },
    {
      title: "FAQs",
      url: "/help",
    },
  ];
  return (
    <div className="flex justify-between bg-zinc-50 p-8 sticky top-0 z-20">
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
            <NavButtons key={index} handleClick={() => router.push(item.url)}>
              {item.title}
            </NavButtons>
          ))}
        </div>
      </div>
      <div className="flex gap-8">
        <InputBox placeholder="Enter your address..."></InputBox>
        <PrimaryButton>Sell now</PrimaryButton>
      </div>
    </div>
  );
};

export default NavBar;
