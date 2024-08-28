"use client";
import LogosFacebook from "@/icons/LogosFacebook";
import LogosInstagramIcon from "@/icons/LogosInstagramIcon";
import { MaterialSymbolsCall } from "@/icons/MaterialSymbolsCall";
import MaterialSymbolsMail from "@/icons/MaterialSymbolsMail";
import React from "react";
import IconBadge from "./IconBadge";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
  const footer = [
    { title: "Home", link: "/" },
    { title: "How It Works", link: "/how-it-works" },
    { title: "Sell House Fast", link: "/sell-house-fast" },
    { title: "Selling Guides", link: "/selling-guides" },
    { title: "FAQs", link: "/help" },
    { title: "Enquire", link: "/enquire" },
  ];

  //   const sellHouseFooter = [
  //     "We Buy Any Home",
  //     "Sell House Fast",
  //     "Cash House Buyers",
  //     "Sell Flat Fast",
  //     "Sell With Tenants",
  //     "Sell Commercial Property",
  //   ];

  //   const generalFooter = [
  //     "Our Company",
  //     "How It Works",
  //     "Meet the Team",
  //     "Blog",
  //     "Reviews",
  //     "Contact Us",
  //     "Privacy",
  //     "Complaints",
  //   ];

  //   const offersFooter = [
  //     "Sell House After Divorce",
  //     "Sell Probate Property",
  //     "Stop House Repossession",
  //     "House Sale Fall Through",
  //     "Moving House",
  //     "Get A Free Cash Offer",
  //   ];

  const router = useRouter();

  return (
    <footer className="flex justify-center items-center bg-lightGreen pb-12">
      <div className="mx-24 w-full h-full flex flex-col items-start pt-24 gap-24">
        <div className="flex gap-12 w-full flex-wrap">
          <div className="flex flex-1  flex-col text-darkGreen px-8 gap-6">
            <p className="font-satoshi font-bold footer-heads">Socials</p>
            <div className="flex flex-col gap-8 w-fit">
              <div className="flex items-center text-base text-darkGreen gap-4">
                <MaterialSymbolsCall className="text-3xl" />
                <a target="_blank" href="tel:07375297745">
                  <p className="hover:font-bold transition-all cursor-pointer">
                    07375297745
                  </p>
                </a>
              </div>
              <div className="flex items-center text-base text-darkGreen gap-4">
                <MaterialSymbolsMail className="text-3xl" />
                <a
                  target="_blank"
                  href="mailto:info@aexproperties.co.uk footer-content"
                >
                  <p className="hover:font-bold transition-all cursor-pointer footer-content">
                    info@aexproperties.co.uk
                  </p>
                </a>
              </div>

              <div className="flex items-center gap-4">
                <a
                  target="_blank"
                  href="https://www.instagram.com/accounts/login/?hl=en"
                >
                  <IconBadge>
                    <LogosInstagramIcon className="text-3xl" />
                  </IconBadge>
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/?locale=en_GB"
                >
                  <IconBadge>
                    <LogosFacebook className="text-4xl" />
                  </IconBadge>
                </a>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-1  flex-col text-darkGreen px-8 gap-6">
          <p className="font-satoshi font-bold footer-heads">
            Sell House
          </p>
          <div className="flex flex-col gap-3 w-full">
            {sellHouseFooter.map((items, index) => (
              <div
                className="cursor-pointer text-darkGreen hover:font-bold transition-all footer-content"
                key={index}
              >
                {items}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1  flex-col text-darkGreen px-8 gap-6">
          <p className="font-satoshi font-bold footer-heads">General</p>
          <div className="flex flex-col gap-3 w-full">
            {generalFooter.map((items, index) => (
              <div
                className="cursor-pointer font text-darkGreen hover:font-bold transition-all footer-content"
                key={index}
              >
                {items}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1  flex-col text-darkGreen px-8 gap-6">
          <p className="font-satoshi font-bold footer-heads">Offers</p>
          <div className="flex flex-col gap-3 w-full">
            {offersFooter.map((items, index) => (
              <div
                className="cursor-pointer font text-darkGreen hover:font-bold transition-all footer-content"
                key={index}
              >
                {items}
              </div>
            ))}
          </div>
        </div> */}

          <div className="flex flex-1  flex-col text-darkGreen px-8 gap-6">
            <p className="font-satoshi font-bold footer-heads">Footer</p>
            <div className="flex flex-col gap-3 w-full">
              {footer.map((item, index) => (
                <div
                  className="cursor-pointer font text-darkGreen hover:font-bold transition-all footer-content"
                  key={index}
                  onClick={() => router.push(item.link)}
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col text-darkGreen text-[10px] md:text-sm">
          <p>Registered company name: AEX PROPERTIES LIMITED</p>
          <p>Registered company number: 15897278</p>
          <p>
            Registered office address: 70 Leybourne Road, Uxbridge, England,
            UB10 9HF
          </p>
        </div>

        <div className="flex justify-center items-center w-full">
          <Image
            priority={true}
            alt="AEX Properties Logo image"
            width={2000}
            height={1000}
            src={"/images/AEX PROPERTIES/footer_darkgreen.png"}
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
