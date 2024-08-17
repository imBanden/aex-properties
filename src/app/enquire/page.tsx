"use client";

import NavBar from "@/components/NavBar";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import MobileNavBar from "@/components/MobileNavBar";

interface FormData {
  date: string;
  title: string;
  firstName: string;
  lastName: string;
  address: string;
  propertyDescriptions: string;
  phone: string;
  email: string;
  reasonForSelling: string;
  timeframeToSell: string;
  purchaseTime: string;
  propertyWorthAndMortgage: string;
  agreeToTerms: boolean;
}

const EnquirePage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<FormData>({
    date: new Date().toString(),
    title: "",
    firstName: "",
    lastName: "",
    address: "",
    propertyDescriptions: "",
    phone: "",
    email: "",
    reasonForSelling: "",
    timeframeToSell: "",
    purchaseTime: "",
    propertyWorthAndMortgage: "",
    agreeToTerms: false,
  });

  const handleChange = (e: any) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setData({ ...data, [e.target.name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzCESHdPhkaxaRA7giDqicg-zRPe3oELvnZNdBLMEPBR61BfNU4U6Y-H3QKQAe048Q/exec",
        {
          redirect: "follow",
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
        }
      );
      if (res.ok) {
        const result = await res.json();
        if (result.result === "success") {
          console.log("Data sent to Google Sheets successfully");
          // Reset form or show success message

          setIsLoading(false);

          setData({
            date: new Date().toString(),
            title: "",
            firstName: "",
            lastName: "",
            address: "",
            propertyDescriptions: "",
            phone: "",
            email: "",
            reasonForSelling: "",
            timeframeToSell: "",
            purchaseTime: "",
            propertyWorthAndMortgage: "",
            agreeToTerms: false,
          });

          router.push("/enquire/sent");
        } else {
          setIsLoading(false);
          console.error("Error sending data to Google Sheets");
        }
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  console.log(data);
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

      {/* title */}
      <div className="bg-zinc-50 w-full flex">
        <div className="mx-5 md:mx-24 w-full h-full flex flex-col items-start pt-24 gap-24">
          <div className="flex flex-col w-full items-center mb-16">
            <p className="font-satoshi font-bold text-4xl md:text-8xl text-darkGreen mb-16">
              Enquire
            </p>
          </div>
        </div>
      </div>

      {/* form */}

      <div className="bg-zinc-50 w-full flex">
        <div className="mx-5 md:mx-24 w-full h-full flex flex-col items-center py-8 md:py-24 gap-24">
          <form
            style={{ maxWidth: 500, margin: "auto" }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 md:gap-0"
          >
            <div className="mb-3 flex flex-col gap-2">
              <label className="font-satoshi font-bold text-lg">Title *</label>
              <input
                type="text"
                className="border-2 border-zinc-400 rounded-lg p-2 bg-zinc-50 outline-none"
                placeholder="Mr"
                name="title"
                value={data.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3 flex flex-col gap-2">
              <label className="font-satoshi font-bold text-lg">
                First Name *
              </label>
              <input
                type="text"
                className="border-2 border-zinc-400 rounded-lg p-2 bg-zinc-50 outline-none"
                placeholder="John"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3 flex flex-col gap-2">
              <label className="font-satoshi font-bold text-lg">
                Last Name *
              </label>
              <input
                type="text"
                className="border-2 border-zinc-400 rounded-lg p-2 bg-zinc-50 outline-none"
                placeholder="Doe"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3 flex flex-col gap-2">
              <label className="font-satoshi font-bold text-lg">
                Address *
              </label>
              <input
                type="text"
                className="border-2 border-zinc-400 rounded-lg p-2 bg-zinc-50 outline-none"
                placeholder="SW1A 1AA"
                name="address"
                value={data.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3 flex flex-col gap-2">
              <label className="font-satoshi font-bold text-lg">
                Property Descriptions *
              </label>
              <textarea
                name="propertyDescriptions"
                rows={3}
                className="border-2 border-zinc-400 rounded-lg p-2 bg-zinc-50 outline-none"
                placeholder="e.g. 3 beds, 2 Toilets, 1 Living Room, Garage etc."
                value={data.propertyDescriptions}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3 flex flex-col gap-2">
              <label className="font-satoshi font-bold text-lg">Phone *</label>
              <input
                type="tel"
                className="border-2 border-zinc-400 rounded-lg p-2 bg-zinc-50 outline-none"
                placeholder="XXXX XXX XXXX"
                name="phone"
                value={data.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3 flex flex-col gap-2">
              <label className="font-satoshi font-bold text-lg">Email *</label>
              <input
                type="email"
                className="border-2 border-zinc-400 rounded-lg p-2 bg-zinc-50 outline-none"
                placeholder="john24doe@gmail.com"
                name="email"
                value={data.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3 flex flex-col gap-2">
              <label className="font-satoshi font-bold text-lg">
                What&apos;s the reason for selling? *
              </label>
              <select
                className="border-2 border-zinc-400 rounded-lg p-2 bg-zinc-50 outline-none"
                name="reasonForSelling"
                value={data.reasonForSelling}
                onChange={handleChange}
                required
              >
                <option value="">Select a reason</option>
                <option value="buyer_withdrawn">Buyer has withdrawn</option>
                <option value="divorce_separation">Divorce / Separation</option>
                <option value="estate_agent_not_delivering">
                  Estate Agent Not delivering
                </option>
                <option value="inherited_property">Inherited a property</option>
                <option value="moving_home">Moving home</option>
                <option value="surplus_second_property">
                  Surplus or second property
                </option>
                <option value="buying_new_build">
                  Buying a new build property
                </option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-3 flex flex-col gap-2">
              <label className="font-satoshi font-bold text-lg">
                How quickly are you looking to sell? *
              </label>
              <select
                className="border-2 border-zinc-400 rounded-lg p-2 bg-zinc-50 outline-none"
                name="timeframeToSell"
                value={data.timeframeToSell}
                onChange={handleChange}
                required
              >
                <option value="">Select a timeframe</option>
                <option value="1_to_2_weeks">1 to 2 weeks</option>
                <option value="2_to_4_weeks">2 to 4 weeks</option>
                <option value="1_to_2_months">1 to 2 months</option>
                <option value="2_months_or_more">2 months or more</option>
                <option value="just_wanting_valuation">
                  Just wanting valuation
                </option>
                <option value="no_specific_timing">No specific timing</option>
              </select>
            </div>

            <div className="mb-3 flex flex-col gap-2">
              <label className="font-satoshi font-bold text-lg">
                How long ago this property was purchased *
              </label>
              <select
                className="border-2 border-zinc-400 rounded-lg p-2 bg-zinc-50 outline-none"
                name="purchaseTime"
                value={data.purchaseTime}
                onChange={handleChange}
                required
              >
                <option value="">Select a time period</option>
                <option value="less_than_5_years">Less than 5 years</option>
                <option value="5_to_10_years">5 to 10 years</option>
                <option value="11_to_20_years">11 to 20 years</option>
                <option value="21_to_30_years">21 to 30 years</option>
                <option value="more_than_30_years">More than 30 years</option>
              </select>
            </div>

            <div className="mb-3 flex flex-col gap-2">
              <label className="font-satoshi font-bold text-lg">
                How much do you think your property worth and what&apos;s your
                outstanding mortgage? *
              </label>
              <textarea
                rows={3}
                className="border-2 border-zinc-400 rounded-lg p-2 bg-zinc-50 outline-none"
                placeholder="e.g. Estimated value: $500,000, Outstanding mortgage: $300,000"
                name="propertyWorthAndMortgage"
                value={data.propertyWorthAndMortgage}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3 flex items-center gap-2">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={data.agreeToTerms}
                onChange={handleChange}
                className="cursor-pointer"
                required
              />
              <label className="font-satoshi text-sm">
                I agree to{" "}
                <a href="#" className="text-blue-500">
                  terms & conditions
                </a>{" "}
                provided by the company. By providing my phone number, I agree
                to receive text messages from the business.
              </label>
            </div>

            <button
              className="bg-logoGreen text-zinc-50 w-full font-bold rounded-xl px-6 py-3 text-lg hover:bg-green-900 transition-all h-fit flex justify-center"
              //   onClick={() => setIsLoading(true)}
            >
              {isLoading ? (
                <div className="rounded-full w-7 h-7 border-2 border-zinc-400 border-t-zinc-50 animate-spin" />
              ) : (
                "Get Valuation"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquirePage;
