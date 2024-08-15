"use client";

import Image from "next/image";
import NavButtons from "./components/NavButtons";
import { useRouter } from "next/navigation";
import IconBadge from "./components/IconBadge";
import LogosYoutubeIcon from "./icons/LogosYoutubeIcon";
import LogosInstagramIcon from "./icons/LogosInstagramIcon";
import LogosSpotifyIcon from "./icons/LogosSpotifyIcon";
import LogosLinkedinIcon from "./icons/LogosLinkedinIcon";
import LogosTwitter from "./icons/LogosTwitter";
import MaterialSymbolsEditDocument from "./icons/MaterialSymbolsEditDocument";
import MaterialSymbolsPhoneInTalk from "./icons/MaterialSymbolsPhoneInTalk";
import MaterialSymbolsHandshake from "./icons/MaterialSymbolsHandshake";
import MaterialSymbolsArrowDownward from "./icons/MaterialSymbolsArrowDownward";
import PrimaryButton from "./components/PrimaryButton";
import InputBox from "./components/InputBox";

interface navItem {
  title: string;
  url: string;
}

export default function Home() {
  const router = useRouter();
  const navBar: navItem[] = [
    {
      title: "How It Works",
      url: "",
    },
    {
      title: "Services",
      url: "",
    },
    {
      title: "Selling Guides",
      url: "",
    },
    {
      title: "About Us",
      url: "",
    },
    {
      title: "Contact Us",
      url: "",
    },
  ];

  const sellHouseFooter = [
    "We Buy Any Home",
    "Sell House Fast",
    "Cash House Buyers",
    "Sell Flat Fast",
    "Sell With Tenants",
    "Sell Commercial Property",
  ];

  const generalFooter = [
    "Our Company",
    "How It Works",
    "Meet the Team",
    "Blog",
    "Reviews",
    "Contact Us",
    "Privacy",
    "Complaints",
  ];

  const offersFooter = [
    "Sell House After Divorce",
    "Sell Probate Property",
    "Stop House Repossession",
    "House Sale Fall Through",
    "Moving House",
    "Get A Free Cash Offer",
  ];
  return (
    <div className="flex flex-col">
      {/* // hero section */}
      <div className="flex justify-center items-center h-screen bg-lightGreen">
        <div className="flex flex-col gap-6 justify-center items-center">
          <p className="font-satoshi font-bold text-8xl text-logoGreen">
            We Buy any Home.
          </p>
          <p className="font-satoshi font-bold text-6xl text-darkGreen">
            A guaranteed sale in a time that suits you.
          </p>
          <div className="flex gap-8 mt-12">
            <InputBox placeholder="Enter your address"></InputBox>
            <PrimaryButton>Sell now</PrimaryButton>
          </div>
        </div>
      </div>

      {/* nav bar */}
      <div className="flex justify-between bg-zinc-50 p-8 sticky top-0 z-20">
        <div className="flex gap-16 items-center">
          <Image
            priority={true}
            alt="AEX Properties Logo image"
            width={300}
            height={100}
            src={"/images/AEX PROPERTIES/fulllogo_transparent_nobuffer.png"}
            className="object-contain cursor-pointer w-auto h-auto"
            onClick={() => router.push("/")}
          />
          <div className="flex items-center gap-3">
            {navBar.map((item, index) => (
              <NavButtons key={index}>{item.title}</NavButtons>
            ))}
          </div>
        </div>
        <div className="flex gap-8">
          <InputBox placeholder="Enter your address"></InputBox>
          <PrimaryButton>Sell now</PrimaryButton>
        </div>
      </div>

      {/* main section */}

      {/* how it works */}
      <div className="flex justify-center items-center  bg-zinc-50">
        <div className="mx-24 w-full h-full flex flex-col items-center justify-center pt-24 gap-8">
          <div className="flex-1 flex flex-col gap-12 h-full justify-center items-center">
            <p className="font-satoshi font-bold text-8xl text-darkGreen">
              How it works
            </p>
            <p className="font-satoshi font-bold text-4xl text-darkGreen">
              We&apos;re completely{" "}
              <span className="bg-gradient-to-r from-logoGreen to-logoYellow text-transparent bg-clip-text">
                transparent
              </span>{" "}
              throughout the process of buying your home.
            </p>
          </div>

          <div className="flex-1 gap-12 items-center flex">
            <div className="flex flex-col gap-6 items-center p-20">
              <div className="bg-lightGreen rounded-full flex justify-center items-center w-fit p-4">
                <MaterialSymbolsEditDocument className="text-darkGreen h-12 w-12" />
              </div>
              <p className="text-xl">Fill in the online form</p>
            </div>
            <MaterialSymbolsArrowDownward className="text-darkGreen h-16 w-16 -rotate-90 -z-0" />

            <div className="flex flex-col gap-6 items-center p-20">
              <div className="bg-lightGreen rounded-full flex justify-center items-center w-fit p-4">
                <MaterialSymbolsPhoneInTalk className="text-darkGreen h-12 w-12" />
              </div>
              <p className="text-xl">Receive offer</p>
            </div>

            <MaterialSymbolsArrowDownward className="text-darkGreen h-16 w-16 -rotate-90" />

            <div className="flex flex-col gap-6 items-center p-20">
              <div className="bg-lightGreen rounded-full flex justify-center items-center w-fit p-4">
                <MaterialSymbolsHandshake className="text-darkGreen h-12 w-12" />
              </div>
              <p className="text-xl">Sale agreed</p>
            </div>
          </div>
        </div>
      </div>

      {/* trust */}

      <div className="flex justify-center items-center h-screen bg-darkGreen">
        <div className="mx-24 w-full h-full flex items-center justify-center pt-24 gap-8">
          <Image
            priority={true}
            alt="New Couple Moving in new house image"
            width={500}
            height={500}
            src={"/images/couple-moving-in-new-house.webp"}
            className="object-cover cursor-pointer w-[500px] h-[500px] flex flex-1 rounded-2xl"
          />
          <div className="flex flex-col flex-1 justify-center">
            <p className="font-satoshi font-bold text-6xl text-zinc-50 p-16">
              <span className="bg-gradient-to-r from-logoYellow to-lightGreen text-transparent bg-clip-text">
                Over 25,000
              </span>{" "}
              people a year trust our team of experts with their house sale.
            </p>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="flex justify-center items-center bg-lightGreen pb-12">
        <div className="mx-24 w-full h-full flex flex-col items-start pt-24 gap-24">
          <div className="flex gap-12 w-full">
            <div className="flex flex-1  flex-col text-darkGreen px-8 gap-6">
              <p className="font-satoshi font-bold text-3xl">Socials</p>
              <div className="flex flex-col gap-3 w-fit">
                <IconBadge>
                  <LogosYoutubeIcon className="text-2xl" />
                </IconBadge>
                <IconBadge>
                  <LogosInstagramIcon className="text-3xl" />
                </IconBadge>
                <IconBadge>
                  <LogosSpotifyIcon className="text-3xl" />
                </IconBadge>
                <IconBadge>
                  <LogosLinkedinIcon className="text-3xl" />
                </IconBadge>
                <IconBadge>
                  <LogosTwitter className="text-2xl" />
                </IconBadge>
              </div>
            </div>

            <div className="flex flex-1  flex-col text-darkGreen px-8 gap-6">
              <p className="font-satoshi font-bold text-3xl">Sell House</p>
              <div className="flex flex-col gap-3 w-full">
                {sellHouseFooter.map((items, index) => (
                  <div
                    className="cursor-pointer font text-darkGreen hover:bg-green-400 transition-all text-sm"
                    key={index}
                  >
                    {items}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-1  flex-col text-darkGreen px-8 gap-6">
              <p className="font-satoshi font-bold text-3xl">General</p>
              <div className="flex flex-col gap-3 w-full">
                {generalFooter.map((items, index) => (
                  <div
                    className="cursor-pointer font text-darkGreen hover:bg-green-400 transition-all text-sm"
                    key={index}
                  >
                    {items}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-1  flex-col text-darkGreen px-8 gap-6">
              <p className="font-satoshi font-bold text-3xl">Offers</p>
              <div className="flex flex-col gap-3 w-full">
                {offersFooter.map((items, index) => (
                  <div
                    className="cursor-pointer font text-darkGreen hover:bg-green-400 transition-all text-sm"
                    key={index}
                  >
                    {items}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center w-full">
            <Image
              priority={true}
              alt="AEX Properties Logo image"
              width={2000}
              height={1000}
              src={"/images/AEX PROPERTIES/footer_darkgreen.png"}
              className="object-contain cursor-pointer w-full h-auto"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
