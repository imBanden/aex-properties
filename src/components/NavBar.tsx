"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import InputBox from "./InputBox";
import NavButtons from "./NavButtons";
import PrimaryButton from "./PrimaryButton";
import MaterialSymbolsMail from "@/icons/MaterialSymbolsMail";
import MaterialSymbolsCall from "@/icons/MaterialSymbolsCall";

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
    <div className="flex justify-between bg-zinc-50 p-8 sticky top-0 z-50">
      <div className="flex gap-16 items-center">
        <Image
          priority={true}
          alt="AEX Properties Logo image"
          width={300}
          height={100}
          src={"/images/AEX PROPERTIES/fulllogo_transparent_nobuffer.png"}
          className="object-contain cursor-pointer w-300 h-100"
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

      {/* <div className="flex flex-col justify-center text-logoGreen font-satoshi font-bold items-center">
        <p className="">Contact us</p>
        <div className="flex flex-col">
          <div className="flex items-center text-sm gap-4">
            <MaterialSymbolsCall className="text-xl" />
            <a target="_blank" href="tel:07375297745">
              <p className=" transition-all cursor-pointer">07375297745</p>
            </a>
          </div>
          <div className="flex items-center text-sm gap-4">
            <MaterialSymbolsMail className="text-xl" />
            <a
              target="_blank"
              href="mailto:info@aexproperties.co.uk footer-content"
            >
              <p className="transition-all cursor-pointer">
                info@aexproperties.co.uk
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex gap-8">
        <InputBox placeholder="Enter your postcode..."></InputBox>
        <PrimaryButton>Sell now</PrimaryButton>
      </div> */}

      <div className="flex justify-center text-logoGreen font-satoshi font-bold items-center gap-8">
        <p className="text-xl">Contact us</p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center text-sm gap-4">
            <MaterialSymbolsCall className="text-xl" />
            <a target="_blank" href="tel:07375297745">
              <p className=" transition-all cursor-pointer text-lg">
                07375297745
              </p>
            </a>
          </div>
          <div className="flex items-center text-sm gap-4">
            <MaterialSymbolsMail className="text-xl" />
            <a
              target="_blank"
              href="mailto:info@aexproperties.co.uk footer-content"
            >
              <p className="transition-all cursor-pointer text-lg">
                info@aexproperties.co.uk
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
