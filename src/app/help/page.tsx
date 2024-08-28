"use client";

import React from "react";
import NavBar from "../../components/NavBar";
import FAQsContainer from "../../components/FAQsContainer";
import Banner from "@/components/Banner";
import MobileNavBar from "@/components/MobileNavBar";

const page = () => {
  // const FAQs = [
  //   {
  //     title: "How long will it take you to make an offer on my home?",
  //     ans: "We offer a free instant online house valuation to give you an immediate idea of how much your house is worth. Should you wish to get an official quote, we will complete a full, in-depth valuation over the phone and provide you with a formal, no obligation offer within 24 hours, so you can get the process of selling your house started as quickly as possible.",
  //   },
  //   {
  //     title: "How quickly can you buy my home?",
  //     ans: "We can complete the purchase of your home in as little as seven days. However, we're always happy to work to your timescale and have the capability to fit the purchase around your priorities.",
  //   },
  //   {
  //     title: "How can you buy so quickly?",
  //     ans: "Unlike other fast house buyers, we're a genuine cash buyer using our own pre-allocated funds to make the purchase, meaning there's no waiting around for us to get a mortgage or sell on the property so we can buy another. This means we're able to buy your home within any time frame you need us to - whether that's seven days or seven weeks. We use our unique advantages to provide complete flexibility when buying houses for cash. If you want to sell your house fast, we can go from initial valuation to completion in just a week.",
  //   },
  //   {
  //     title: "How long will the funds take to be in my account?",
  //     ans: "We typically deposit funds within seven days of your valuation being completed. And once a sale is agreed, we deposit your account within 24 hours.",
  //   },
  //   {
  //     title: "How much will I have to pay to use your service?",
  //     ans: "Our offer for your home is the amount you'll receive upon completion. There are no hidden fees to using our service. Our cash offers and valuations carry no charges. The only cost you'll be responsible for is a solicitor to complete the sale.",
  //   },
  //   {
  //     title: "Do you really buy any house?",
  //     ans: "Providing we can agree on a price, yes! We want to make it as easy as possible for anyone to see their home - no matter the age or condition.",
  //   },
  //   {
  //     title: "Where do you operate?",
  //     ans: "We operate across the British Isles and can buy your house fast whether you're in the northernmost parts of Scotland or enjoying life on the beaches on the south coast.",
  //   },
  //   {
  //     title: "What if I decide not to sell my house?",
  //     ans: "That's fine! We understand not everything is within your control and circumstances related to your house sale can change in an instant. All our offers have zero obligation attached, meaning you have complete freedom to hold off until you're sure you want to sell. And if you decide you want to sell your house fast in the future, we can pick up right where we left off!",
  //   },
  //   {
  //     title: "What makes you different from high street estate agents?",
  //     ans: "Unlike high street estate agents, we buy your home directly from you and therefore offer a guaranteed sale which we're able to complete in any time you need us to. Also unlike high street estate agents, we don't charge any fees or take any commission.",
  //   },
  // ];

  const FAQs = [
    {
      title: "How fast can my house be purchased?",
      ans: "Subject to a satisfactory valuation, we will aim to complete within four weeks. We have a highly experience team that works rapidly, and we have investors who are ready to buy your house immediately.",
    },
    {
      title: "Will I get a good price for my property?",
      ans: "Yes, because we will always give you the highest CASH offer based on its location and condition of your property. Remember that there are no additional costs, and you won't be required to pay agent fees.",
    },
    {
      title: "Why should I sell to you?",
      ans: "Our team have years of experience in real estate, and we have helped hundreds of customers to sell their homes. When selling to us, you will NOT pay any fees which is why we are different from Estate agent.",
    },
    {
      title: "What's the catch?",
      ans: "There is no catch because our aim is to provide the best solution for your situation, whether it's a cash offer for a quick completion or an alternative solution to help you move on. While we may not be able to give you full market value for your property, we are completely transparent in our offer and we take the stress out of selling your home by ensuring a fast and smooth transaction throughout.",
    },
  ];
  return (
    <div className="flex flex-col">
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

      <div className="bg-zinc-50 w-full flex">
        <div className="mx-5 md:mx-24 w-full h-full flex flex-col items-start pt-24 gap-24">
          <div className="flex flex-col w-full items-center mb-16">
            <p className="font-satoshi font-bold text-4xl md:text-8xl text-darkGreen mb-16">
              FAQs
            </p>

            {FAQs.map((question, index) => (
              <FAQsContainer key={index} title={question.title}>
                {question.ans}
              </FAQsContainer>
            ))}
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};

export default page;
