"use client";

import NavBar from "@/components/NavBar";
import React from "react";
import { useRouter } from "next/navigation";
import MobileNavBar from "@/components/MobileNavBar";

const SentPage = () => {
  const router = useRouter();
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
        <div className="mx-5 md:mx-24 w-full h-full flex flex-col items-center py-24 gap-16">
          <div className="flex flex-col w-full items-center">
            <p className="font-satoshi font-bold text-4xl md:text-8xl text-darkGreen mb-16 text-center">
              We&apos;ll be in touch shortly
            </p>
            <p className="font-satoshi font-bold text-xl md:text-4xl text-darkGreen mb-16 text-center">
              Our agents is currently reviewing your enquire and will contact
              you once the review is done.
            </p>
          </div>

          <button
            className="bg-logoGreen text-zinc-50 w-fit font-bold rounded-xl px-6 py-3 text-lg hover:bg-green-900 transition-all h-fit flex justify-center"
            onClick={() => router.push("/")}
          >
            Back to home
          </button>
        </div>
      </div>
    </div>
  );
};

export default SentPage;
