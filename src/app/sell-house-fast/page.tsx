"use client";

import React from "react";
import NavBar from "../../components/NavBar";
import Banner from "@/components/Banner";
import WordOptions from "@/components/WordOptions";
import MobileNavBar from "@/components/MobileNavBar";

const page = () => {
  const sellHouseData = [
    {
      title: "Assisted House Sale",
      content:
        "Assisted house sales are often for properties that can't be sold on the open market. Estate agents will charge a fee to use their expertise to sell the property for a quick sale. However, this could result in a lower sale price, but can be useful if you need a fast sale.",
    },
    {
      title: "Auction",
      content:
        "A traditional auction house approach.\n\nProperty auctions can provide a fast sale (typically within 20-30 days of the successful auction). The property is put into an auction house and buyers bid on it.\n\nAuctions may achieve a high price but there is no guarantee and you may not get as much as you would if you sold through an estate agent.",
    },
    {
      title: "Estate Agents",
      content:
        "The traditional approach.\n\nThis is the most common method - especially if you're not in a rush to sell your property. Estate agents typically achieve the highest sale price.\n\nEstate agents charge a fee (usually between 1-3%) of the sale price, but this is only paid on completion.",
    },
    {
      title: "Online Property Portals",
      content:
        "The 'DIY' approach.\n\nYou can list and sell your property yourself using online portals like Rightmove, Zoopla and other marketing channels.\n\nThis can be cheaper than using an estate agent, but you'll need to manage viewings and handle negotiations yourself.\n\nThere are some online agents (known as 'hybrid agents') that sit in between full service and DIY options.",
    },
    {
      title: "Cash Buyers",
      content:
        "The quickest, most guaranteed approach.\n\nCash buying companies (like We Buy Any House) can often complete sales very quickly (sometimes within 7 days) and will usually buy any property, often for around 80-85% of market value.\n\nAs We Buy Any House, we offer competitive cash offers, cover all the legal fees, and handle everything for you to make the process as easy as possible for you as the home seller.",
    },
  ];

  const benefitsData = [
    {
      title: "Speed of Sale",
      content:
        "Our 7-day sale proposition is the fastest way to sell your house. By contrast, the average time taken to sell a property on the open market is 6 – 9 months! We can tailor our service to your chosen time frame and manage the entire process for you.",
    },
    {
      title: "No Hidden Fees",
      content:
        "Unlike traditional estate agents and online listing services, we don’t charge for cash offers or home valuations. We have no hidden fees or commission. Selling your home fast relieves you of current home costs.",
    },
    {
      title: "Guaranteed Cash Sale",
      content:
        "Unlike estate agents, online listing services, and auctions, we 100% guarantee a sale on your property. We don’t rely on third parties to buy your house, so we aren’t slowed down by mortgage lenders or property chains. We also guarantee a sale on the day of your choosing, with funds received immediately after.",
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

      <div className="bg-zinc-50 w-full flex">
        <div className="mx-5 md:mx-24 w-full h-full flex flex-col items-start py-24 gap-24">
          <div className="flex flex-col w-full items-center mb-16">
            <p className="font-satoshi font-bold text-4xl md:text-8xl text-logoGreen text-center">
              Sell house fast
            </p>
            <p className="text-xl md:text-3xl my-12 gap-6 font-satoshi font-bold text-darkGreen text-center">
              Receive funds within a week.
            </p>
          </div>
        </div>
      </div>
      <Banner />
      {/* Guide */}
      <div className="bg-zinc-50 w-full flex">
        <div className="mx-5 md:mx-24 w-full h-full flex flex-col items-start py-24 gap-24">
          <div className="flex flex-col w-full items-center">
            <p className="font-satoshi font-bold text-2xl md:text-6xl text-logoGreen">
              What To Consider Before You Sell Your House
            </p>
          </div>

          <WordOptions data={sellHouseData} />
        </div>
      </div>
      <Banner />

      {/* document needed */}
      <div className="bg-zinc-50 w-full flex md:h-[80vh] py-24">
        <div className="mx-5 md:mx-24 w-full h-full flex flex-col items-start py-24 gap-24">
          <div className="flex flex-col w-full items-center">
            <p className="font-satoshi font-bold text-2xl md:text-6xl text-logoGreen">
              Documents You Need for Your House Sale
            </p>
          </div>

          <WordOptions data={benefitsData} />
        </div>
      </div>
      <Banner />
    </div>
  );
};

export default page;
