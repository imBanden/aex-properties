import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MaterialSymbolsMenu from "@/icons/MaterialSymbolsMenu";

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navBar = [
    { title: "How It Works", url: "/how-it-works" },
    { title: "Sell House Fast", url: "/sell-house-fast" },
    { title: "Selling Guides", url: "/selling-guides" },
    { title: "FAQs", url: "/help" },
  ];

  return (
    <div className="bg-zinc-50 p-4 sticky top-0 z-20 flex justify-between items-center">
      <div className="cursor-pointer" onClick={() => router.push("/")}>
        <Image
          priority={true}
          alt="AEX Properties Logo image"
          width={150}
          height={50}
          src={"/images/AEX PROPERTIES/fulllogo_transparent_nobuffer.png"}
          className="object-contain"
        />
      </div>
      <MaterialSymbolsMenu onClick={toggleMenu} />

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-zinc-50 shadow-md">
          {navBar.map((item, index) => (
            <div
              key={index}
              className="p-4 border-b cursor-pointer hover:bg-gray-100"
              onClick={() => {
                router.push(item.url);
                toggleMenu(); // Close the menu after clicking
              }}
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNavBar;
