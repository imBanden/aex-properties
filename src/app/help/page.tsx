"use client";

import React from "react";
import NavBar from "../../components/NavBar";
import FAQsContainer from "../../components/FAQsContainer";
import Banner from "@/components/Banner";

const page = () => {
  const FAQs = [
    {
      title: "How long will it take you to make an offer on my home?",
      ans: "We offer a free instant online house valuation to give you an immediate idea of how much your house is worth. Should you wish to get an official quote, we will complete a full, in-depth valuation over the phone and provide you with a formal, no obligation offer within 24 hours, so you can get the process of selling your house started as quickly as possible.",
    },
    {
      title: "How quickly can you buy my home?",
      ans: "We can complete the purchase of your home in as little as seven days. However, we're always happy to work to your timescale and have the capability to fit the purchase around your priorities.",
    },
    {
      title: "How can you buy so quickly?",
      ans: "Unlike other fast house buyers, we're a genuine cash buyer using our own pre-allocated funds to make the purchase, meaning there's no waiting around for us to get a mortgage or sell on the property so we can buy another. This means we're able to buy your home within any time frame you need us to - whether that's seven days or seven weeks. We use our unique advantages to provide complete flexibility when buying houses for cash. If you want to sell your house fast, we can go from initial valuation to completion in just a week.",
    },
    {
      title: "How long will the funds take to be in my account?",
      ans: "We typically deposit funds within seven days of your valuation being completed. And once a sale is agreed, we deposit your account within 24 hours.",
    },
    {
      title: "How much will I have to pay to use your service?",
      ans: "Our offer for your home is the amount you'll receive upon completion. There are no hidden fees to using our service. Our cash offers and valuations carry no charges. The only cost you'll be responsible for is a solicitor to complete the sale.",
    },
    {
      title: "Do you really buy any house?",
      ans: "Providing we can agree on a price, yes! We want to make it as easy as possible for anyone to see their home - no matter the age or condition.",
    },
    {
      title: "Where do you operate?",
      ans: "We operate across the British Isles and can buy your house fast whether you're in the northernmost parts of Scotland or enjoying life on the beaches on the south coast.",
    },
    {
      title: "What if I decide not to sell my house?",
      ans: "That's fine! We understand not everything is within your control and circumstances related to your house sale can change in an instant. All our offers have zero obligation attached, meaning you have complete freedom to hold off until you're sure you want to sell. And if you decide you want to sell your house fast in the future, we can pick up right where we left off!",
    },
    {
      title: "What makes you different from high street estate agents?",
      ans: "Unlike high street estate agents, we buy your home directly from you and therefore offer a guaranteed sale which we're able to complete in any time you need us to. Also unlike high street estate agents, we don't charge any fees or take any commission.",
    },
  ];
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="bg-zinc-50 w-full flex">
        <div className="mx-24 w-full h-full flex flex-col items-start pt-24 gap-24">
          <div className="flex flex-col w-full items-center mb-16">
            <p className="font-satoshi font-bold text-8xl text-darkGreen mb-16">
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
