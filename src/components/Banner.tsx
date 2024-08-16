import React from "react";
import MaterialSymbolsInHomeMode from "../icons/MaterialSymbolsInHomeMode";
import InputBox from "./InputBox";
import PrimaryButton from "./PrimaryButton";

const Banner = () => {
  return (
    <div className="flex bg-darkGreen w-full z-10">
      <div className="mx-24 w-full h-full flex  items-center justify-between p-8">
        <div className="flex gap-8 items-center">
          <MaterialSymbolsInHomeMode className="text-lightGreen h-12 w-12" />
          <p className="text-zinc-50 text-3xl font-satoshi font-bold">
            Get your house valuated. Fast. Fair. Cash.
          </p>
        </div>
        <div className="flex gap-8">
          <InputBox placeholder="Enter your postcode..."></InputBox>
          <PrimaryButton>Sell now</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
