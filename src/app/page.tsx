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
          <p className="font-satoshi font-bold text-6xl text-zinc-950">
            A guaranteed sale in a time that suits you.
          </p>
          <div className="flex gap-8 mt-12">
            <input
              type="text"
              placeholder="Enter your address..."
              className="rounded-xl border-2 border-logoGreen px-3 outline-none text-logoGreen placeholder-logoGreen text-lg bg-zinc-50"
            ></input>
            <button className="bg-logoGreen text-zinc-50 font-bold rounded-xl px-6 py-3 text-lg hover:bg-darkGreen transition-all">
              Sell now
            </button>
          </div>
        </div>
      </div>

      {/* nav bar */}
      <div className="flex justify-between bg-zinc-50 p-8 sticky top-0">
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
        <button className="bg-logoGreen text-zinc-50 font-bold rounded-xl px-6 py-3 text-lg hover:bg-darkGreen transition-all">
          Sell now
        </button>
      </div>

      {/* main section */}

      <div className="flex justify-center items-center h-screen bg-zinc-50"></div>

      {/* footer */}
      <footer className="flex justify-center items-center h-screen bg-lightGreen">
        <div className="mx-24 w-full h-full flex flex-col items-start pt-24">
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

          {/* <div>
            <Image
              priority={true}
              alt="AEX Properties Logo image"
              width={500}
              height={1000}
              src={"/images/AEX PROPERTIES/icononly_transparent_nobuffer.png"}
              className="object-contain cursor-pointer w-auto h-auto"
            />
          </div> */}
        </div>
      </footer>
    </div>
  );
}
