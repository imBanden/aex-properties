"use client";

import React from "react";
import NavBar from "../../components/NavBar";

const page = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="bg-zinc-50 w-full flex">
        <div className="mx-24 w-full h-full flex flex-col items-start pt-24 gap-24">
          <div className="flex flex-col w-full items-center mb-16">
            <p className="font-satoshi font-bold text-8xl text-darkGreen mb-16">
              Sell house fast
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
