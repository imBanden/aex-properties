import React from "react";
import MaterialSymbolsInHomeMode from "../icons/MaterialSymbolsInHomeMode";
import InputBox from "./InputBox";
import PrimaryButton from "./PrimaryButton";

const Banner = () => {
  return (
    <div className="flex bg-darkGreen w-full">
      <div className="mx-0 md:mx-24 w-full h-full flex items-center justify-center md:justify-between p-4 md:p-8 flex-wrap gap-4">
        <div className="flex gap-4 md:gap-8 items-center">
          <MaterialSymbolsInHomeMode className="text-lightGreen h-12 w-12" />
          <p className="text-zinc-50 text-lg md:text-3xl font-satoshi font-bold">
            Get your house valuated. Fast. Fair. Cash.
          </p>
        </div>
        <div className="flex gap-2 md:gap-8">
          <InputBox placeholder="Enter your postcode..."></InputBox>
          <PrimaryButton>Sell now</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
