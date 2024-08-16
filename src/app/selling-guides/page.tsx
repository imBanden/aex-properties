"use client";

import React from "react";
import NavBar from "../../components/NavBar";
import Banner from "@/components/Banner";
import WordOptions from "@/components/WordOptions";
import { title } from "process";

const page = () => {
  const whatToConsiderData = [
    {
      title: "Figure out your finances",
      content:
        "The first step is to evaluate your financial situation, particularly your current mortgage. Firstly, check the end date of your current mortgage deal. Moving before this date might incur penalty fees. You're unlikely to face such penalties if you're on your lender's standard variable rate, typically applied after a fixed rate or tracker period. If you're within the introductory rate period of your mortgage, examine whether it's 'portable.' A portable mortgage allows you to transfer your current mortgage to a new property without additional costs. In cases where your mortgage is not portable and you're still within the introductory rate, be prepared for an early repayment charge from your lender. These charges range from 1 to 5% of your remaining mortgage debt.",
    },
    {
      title: "Determine your motivation to sell",
      content:
        "Many people sell their homes simply because they want to move areas or want more space. But for many others, selling is forced upon them by external factors. If this is you, selling is not a choice but a necessity. Reasons for selling can include: selling a house after a divorce, financial difficulties/repossession, selling probate property, moving house, or if a house sale fell through.",
    },
    {
      title: "Determine whether to rent or buy",
      content:
        "Deciding between renting and buying your next home involves an analysis of your circumstances and plans. Generally, there are three options: remain a homeowner by selling to buy immediately, move into temporary accommodation by selling to buy later, or leave homeownership altogether by selling with no view to buy. Each option has its own set of implications, including managing financial gains from your property sale and whether to eliminate the property chain and mortgage obligations.",
    },
  ];

  const documentData = [
    {
      title: "Get an EPC and other Surveys",
      content:
        "If you decide to sell your house, now is the time for you to get started on the dreaded paperwork, such as building surveys. There are several documents you will need to get.",
    },
    {
      title: "Gather Identity Verification Documents",
      content:
        "To ensure a smooth house-selling process, verifying your identity as the rightful property owner is essential. This is typically accomplished using: a valid passport, your driving license, or your birth certificate.",
    },
    {
      title: "Organising Title Deeds",
      content:
        "Title deeds are crucial in defining your ownership and the property's boundaries. These documents include: a detailed plan of the property's layout and land, a register indicating the property's last sale and the legal owner, and any restrictions or covenants affecting property modifications.",
    },
    {
      title: "Securing an Energy Performance Certificate (EPC)",
      content:
        "An EPC ranks your property's energy efficiency from A (most efficient) to G (least efficient). This certificate is a legal requirement for estate agents to include in property listings.",
    },
    {
      title: "Completing a Fittings and Contents Form",
      content:
        "To avoid post-sale disputes, detail what fixtures and items will remain or be removed from the property. This includes: built-in appliances and fixtures, permanent fittings like cabinetry and bathroom fixtures, and movable items included in the sale, like furniture.",
    },
    {
      title: "Filling Out a Property Information Form",
      content:
        "This form provides essential details to the buyer regarding the property's history and current state. It covers aspects like: boundaries, any disputes with neighbors, planning permissions, and information on services like drainage and water.",
    },
    {
      title: "Gathering Building Regulations Certificates",
      content:
        "If you've made structural changes or extensions to your property, ensure you have the relevant Building Regulations Certificates. These confirm that the work complies with safety standards.",
    },
    {
      title: "Conducting safety checks",
      content:
        "Ensure all safety aspects of the property are in order. This includes: gas safety checks, electrical safety certificates, and ensuring smoke alarms and carbon monoxide detectors are functional.",
    },
    {
      title: "Understanding the costs of necessary documents",
      content:
        "Be aware of the costs associated with obtaining the necessary documents for selling your home. This might include fees for surveys, legal documentation, and certificates, which can vary depending on the property's location and specifics.",
    },
  ];

  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="bg-zinc-50 w-full flex">
        <div className="mx-24 w-full h-full flex flex-col items-start py-24 gap-24">
          <div className="flex flex-col w-full items-center mb-16">
            <p className="font-satoshi font-bold text-8xl text-logoGreen">
              Selling guides
            </p>
          </div>

          {/* subtext */}
          <div className="flex flex-col text-3xl mx-12 gap-6 font-satoshi font-bold text-darkGreen">
            <p>
              Selling your home is a significant decision involving many steps,
              from pricing to legal considerations. Understanding the process
              helps you stay in control and reduce stress.
            </p>
            <p>
              Whether you&apos;re upgrading, downsizing, or seeking change, this
              guide will help you navigate the selling journey, from initiation
              to completion. Use it to make informed decisions that can impact
              your financial outcome.
            </p>
          </div>
        </div>
      </div>
      <Banner />
      {/* Guide */}
      <div className="bg-zinc-50 w-full flex">
        <div className="mx-24 w-full h-full flex flex-col items-start py-24 gap-24">
          <div className="flex flex-col w-full items-center">
            <p className="font-satoshi font-bold text-6xl text-logoGreen">
              What To Consider Before You Sell Your House
            </p>
          </div>

          <WordOptions data={whatToConsiderData} />
        </div>
      </div>
      <Banner />
      {/* document needed */}
      <div className="bg-zinc-50 w-full flex h-[80vh] py-24">
        <div className="mx-24 w-full h-full flex flex-col items-start py-24 gap-24">
          <div className="flex flex-col w-full items-center">
            <p className="font-satoshi font-bold text-6xl text-logoGreen">
              Documents You Need for Your House Sale
            </p>
          </div>

          <WordOptions data={documentData} />
        </div>
      </div>
      <Banner />
    </div>
  );
};

export default page;
