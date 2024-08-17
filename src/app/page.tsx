"use client";

import Image from "next/image";
import NavButtons from "../components/NavButtons";
import MaterialSymbolsEditDocument from "../icons/MaterialSymbolsEditDocument";
import MaterialSymbolsPhoneInTalk from "../icons/MaterialSymbolsPhoneInTalk";
import MaterialSymbolsHandshake from "../icons/MaterialSymbolsHandshake";
import MaterialSymbolsArrowDownward from "../icons/MaterialSymbolsArrowDownward";
import PrimaryButton from "../components/PrimaryButton";
import InputBox from "../components/InputBox";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import MobileNavBar from "@/components/MobileNavBar";

export default function Home() {
  return (
    <div className="flex flex-col relative">
      {/* // hero section */}
      <div className="flex justify-center items-center h-screen bg-lightGreen">
        <div className="flex flex-col gap-6 justify-center items-center">
          <p className="font-satoshi font-bold text-4xl md:text-8xl text-logoGreen">
            We Buy any Home.
          </p>
          <p className="font-satoshi font-bold text-xl md:text-6xl text-darkGreen text-center">
            A guaranteed sale in a time that suits you.
          </p>
          <div className="flex gap-4 md:gap-8 mt-12">
            <InputBox placeholder="Enter your postcode..."></InputBox>
            <PrimaryButton>Sell now</PrimaryButton>
          </div>
        </div>
      </div>

      {/* nav bar */}
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

      {/* main section */}

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
            <MaterialSymbolsArrowDownward className="text-darkGreen h-8 w-8 md:h-16 md:w-16 -rotate-90 -z-0" />

            <div className="flex flex-col gap-3 md:gap-6 items-center flex-[3_1_0%]">
              <div className="bg-lightGreen rounded-full flex justify-center items-center w-fit p-4">
                <MaterialSymbolsPhoneInTalk className="text-darkGreen h-6 w-6 md:h-12 md:w-12" />
              </div>
              <p className="text-[12px] md:text-xl text-darkGreen">
                Receive offer
              </p>
            </div>

            <MaterialSymbolsArrowDownward className="text-darkGreen h-8 w-8 md:h-16 md:w-16 -rotate-90" />

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

      {/* trust */}

      <div className="flex justify-center items-center md:h-screen bg-darkGreen">
        <div className="mx-5 md:mx-24 w-full h-full flex items-center justify-center pt-24 gap-4 md:gap-8 flex-wrap">
          <div className="flex flex-1 justify-center">
            <Image
              priority={true}
              alt="New Couple Moving in new house image"
              width={200}
              height={200}
              src={"/images/couple-moving-in-new-house.webp"}
              className="object-cover w-[250px] h-[200px] max-w-[250px] md:max-w-[500px] md:w-[500px] md:h-[500px] flex flex-1 rounded-2xl"
            />
          </div>

          <div className="flex flex-col flex-1 justify-center">
            <p className="font-satoshi font-bold text-2xl md:text-6xl text-zinc-50 p-16">
              <span className="bg-gradient-to-r from-logoYellow to-lightGreen text-transparent bg-clip-text">
                Over 25,000
              </span>{" "}
              people a year trust our team of experts with their house sale.
            </p>
          </div>
        </div>
      </div>

      {/* explore options */}
      <div className="flex justify-center items-center md:h-screen bg-zinc-100 pb-12 md:pb-0">
        <div className="mx-5 md:mx-24 w-full h-full flex flex-col items-center justify-center pt-24 gap-32 px-12">
          <div className="flex flex-col gap-8">
            <p className="font-satoshi font-bold text-4xl md:text-8xl text-logoGreen">
              Explore your options
            </p>
            <div className="flex flex-col gap-4">
              <p className="font-satoshi font-bold text-xl md:text-4xl">
                Stuck with a property you need to sell?
              </p>
              <p className="font-satoshi font-bold text-xl md:text-4xl">
                We offer fair cash prices for any home, fast &ndash; even with
                tenants.
              </p>
              <p className="font-satoshi font-bold text-xl md:text-4xl">
                <span className="bg-logoYellow">No hassle, no delays.</span>
              </p>
            </div>
          </div>

          <div className="flex w-full gap-12 flex-wrap">
            <div className="flex flex-1 flex-col gap-6 p-4 rounded-xl bg-zinc-50 shadow-[2px_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[2px_4px_16px_rgba(0,0,0,0.16)] hover:scale-[1.01] transition-all duration-500">
              <p className="font-satoshi text-darkGreen font-bold text-3xl">
                Sell House Fast
              </p>
              <p className="text-darkGreen text-sm">
                We specialise in quick property sales and are the most efficient
                and effective solution for people looking to sell their house
                quickly.
              </p>
              <NavButtons>Learn more</NavButtons>
            </div>
            <div className="flex flex-1 flex-col gap-6 p-4 rounded-xl bg-zinc-50 shadow-[2px_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[2px_4px_16px_rgba(0,0,0,0.16)] hover:scale-[1.01] transition-all duration-500">
              <p className="font-satoshi text-darkGreen font-bold text-3xl">
                Cash House Buyers
              </p>
              <p className="text-darkGreen text-sm">
                Our team of cash-buying experts are able to purchase properties
                quickly and transparently. We can help you get the most money
                for your property, and we&apos;ll take care of all of the
                paperwork and closing costs.
              </p>
              <NavButtons>Learn more</NavButtons>
            </div>
            <div className="flex flex-1 flex-col gap-6 p-4 rounded-xl bg-zinc-50 shadow-[2px_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[2px_4px_16px_rgba(0,0,0,0.16)] hover:scale-[1.01] transition-all duration-500">
              <p className="font-satoshi text-darkGreen font-bold text-3xl">
                Sell Flat Fast
              </p>
              <p className="text-darkGreen text-sm">
                Our team of experts can help you sell your flat fast. Despite
                the difficulties than can accompany selling a flat in the UK,
                we&apos;re prepared to get you the best price for your property,
                fast.
              </p>
              <NavButtons>Learn more</NavButtons>
            </div>
            <div className="flex flex-1 flex-col gap-6 p-4 rounded-xl bg-zinc-50 shadow-[2px_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[2px_4px_16px_rgba(0,0,0,0.16)] hover:scale-[1.01] transition-all duration-500">
              <p className="font-satoshi text-darkGreen font-bold text-3xl">
                Sell With Tenants
              </p>
              <p className="text-darkGreen text-sm">
                We can still help you sell your home if you have tenants.
                We&apos;ll work with you to determine the best course of action
                and ensure that everyone is taken care of throughout the
                process.
              </p>
              <NavButtons>Learn more</NavButtons>
            </div>
          </div>
        </div>
      </div>

      {/* Banner */}
      <Banner />
    </div>
  );
}
