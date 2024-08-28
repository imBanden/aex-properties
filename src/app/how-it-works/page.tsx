"use client";

import React from "react";
import NavBar from "../../components/NavBar";
import MaterialSymbolsArrowDownward from "../../icons/MaterialSymbolsArrowDownward";
import MaterialSymbolsEditDocument from "../../icons/MaterialSymbolsEditDocument";
import MaterialSymbolsHandshake from "../../icons/MaterialSymbolsHandshake";
import MaterialSymbolsPhoneInTalk from "../../icons/MaterialSymbolsPhoneInTalk";
import Image from "next/image";
import Banner from "../../components/Banner";
import MobileNavBar from "@/components/MobileNavBar";
import MaterialSymbolsArrowForward from "@/icons/MaterialSymbolsArrowForward";

const page = () => {
  const journeyTexts = [
    {
      text: "Complete the enquiry form online.",
      positionLeft: true,
    },
    {
      text: "A representative will call you to discuss your details and give you a cash offer.",
      positionLeft: false,
    },
    {
      text: "You decide if you would like to proceed and complete simple paperwork.",
      positionLeft: true,
    },
    {
      text: "We instruct qualified valuers to assess your property.",
      positionLeft: false,
    },
    {
      text: "Final price set after valuation and legal check. and you'll confirm a suitable completion date.",
      positionLeft: true,
    },
    {
      text: "Sale completes and you receive the funds.",
      positionLeft: false,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Nav Bar */}
      <div className="sticky top-0">
        {/* For screens md: and above */}
        <div className="hidden md:block">
          <NavBar />
        </div>

        {/* For screens smaller than md: */}
        <div className="block md:hidden">
          <MobileNavBar />
        </div>
      </div>

      {/* how it works */}
      <div className="flex justify-center items-center h-[80vh] bg-zinc-50 py-24">
        <div className="mx-24 w-full h-full flex flex-col items-center justify-center gap-8">
          <div className="flex-1 flex flex-col gap-12 h-full justify-center items-center">
            <p className="font-satoshi font-bold text-4xl md:text-8xl text-darkGreen text-center">
              How it works
            </p>
            <p className="font-satoshi font-bold text-1xl md:text-4xl text-darkGreen text-center">
              We&apos;re completely{" "}
              <span className="bg-gradient-to-r from-logoGreen to-logoYellow text-transparent bg-clip-text">
                transparent
              </span>{" "}
              throughout the process of buying your home.
            </p>
          </div>

          <div className="gap-6 md:gap-12 items-center flex w-full">
            <div className="flex flex-col gap-3 md:gap-6 items-center flex-[3_1_0%]">
              <div className="bg-lightGreen rounded-full flex justify-center items-center w-fit p-4">
                <MaterialSymbolsEditDocument className="text-darkGreen h-6 w-6 md:h-12 md:w-12" />
              </div>
              <p className="text-[12px] md:text-xl text-darkGreen">
                Fill in the online form
              </p>
            </div>
            <MaterialSymbolsArrowForward className="text-darkGreen h-8 w-8 md:h-16 md:w-16" />

            <div className="flex flex-col gap-3 md:gap-6 items-center flex-[3_1_0%]">
              <div className="bg-lightGreen rounded-full flex justify-center items-center w-fit p-4">
                <MaterialSymbolsPhoneInTalk className="text-darkGreen h-6 w-6 md:h-12 md:w-12" />
              </div>
              <p className="text-[12px] md:text-xl text-darkGreen">
                Receive offer
              </p>
            </div>

            <MaterialSymbolsArrowForward className="text-darkGreen h-8 w-8 md:h-16 md:w-16" />

            <div className="flex flex-col gap-3 md:gap-6 items-center flex-[3_1_0%]">
              <div className="bg-lightGreen rounded-full flex justify-center items-center w-fit p-4">
                <MaterialSymbolsHandshake className="text-darkGreen h-6 w-6 md:h-12 md:w-12" />
              </div>
              <p className="text-[12px] md:text-xl text-darkGreen">
                Sale agreed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Journey */}
      <div className="bg-zinc-50 w-full flex">
        <div className="mx-5 md:mx-24 w-full h-full flex flex-col items-start py-12 md:py-24 gap-12 md:gap-24">
          <div className="flex flex-col w-full items-center md:mb-16 gap-12 green">
            <Image
              priority={true}
              alt="AEX Properties logo"
              width={500}
              height={500}
              src={"/images/AEX PROPERTIES/icononly_transparent_nobuffer.png"}
              className="object-cover max-w-[100px] w-[100px] h-[100px] md:max-w-[150px] md:w-[150px] md:h-[150px] flex flex-1"
            />
            <p className="font-satoshi font-bold text-4xl md:text-8xl text-darkGreen mb-16 text-center">
              The{" "}
              <span className="bg-gradient-to-r from-logoGreen to-logoYellow text-transparent bg-clip-text pl-1">
                journey
              </span>{" "}
              to sell your house
            </p>
          </div>

          {journeyTexts.map((item, index) => (
            <div
              key={index}
              className="flex w-full font-satoshi font-bold text-[100px] md:text-[400px] leading-none bg-darkGreen bg-clip-content text-zinc-50 items-center justify-start gap-10 rounded-3xl shadow-[2px_4px_32px_rgba(0,0,0,0.48)]"
            >
              {item.positionLeft && (
                <p className="px-4 md:px-16 py-8">{index + 1}</p>
              )}
              <div className="text-xl md:text-6xl text-logoYellow w-full px-4 md:px-16 py-8">
                {item.text}
              </div>
              {!item.positionLeft && (
                <p className="px-4 md:px-16 py-8">{index + 1}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <Banner />
    </div>
  );
};

export default page;
