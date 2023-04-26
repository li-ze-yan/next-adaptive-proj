"use client";

import Container from "../Container";
import Image from "next/image";
import FooterLogo from "@/public/images/footerLogo.png";
import Facebook from "@/public/images/facebook.svg";
import Twitter from "@/public/images/twitter.svg";
import Link from "next/link";
import { useState } from "react";

interface Menu {
  label: string;
  link: string;
}

const Footer = () => {
  const [menu] = useState<Menu[]>([
    {
      label: "Services",
      link: "services",
    },
    {
      label: "Case Studies",
      link: "case",
    },
    {
      label: "About",
      link: "about",
    },
    {
      label: "Clients",
      link: "clients",
    },
    {
      label: "Contact",
      link: "contact",
    },
    {
      label: "Register",
      link: "register",
    },
  ]);
  return (
    <div className="relative z-0 w-full font-mont text-[#1c1c1c] py-8 border-t border-[#ccc]">
      <Container>
        <div className="flex w-full flex-wrap md:pt-10 pt-0">
          <Link href="/" className="md:w-1/2 lg:w-1/4 w-full">
            <Image
              src={FooterLogo}
              alt=""
              width={86}
              className="md:my-0 my-8"
            />
          </Link>
          <ul className="mb-12 md:w-1/2 lg:w-1/4 w-full">
            {menu.map((item, index) => (
              <li
                key={`footer_${item.label}`}
                className="font-bold align-middle mb-5 md:text-xl text-lg"
              >
                <Link href={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <ul className="md:block flex mb-12 md:w-1/2 lg:w-1/4 w-full">
            <li className="w-1/2">
              <p className="text-[#60ad58] font-bold md:text-lg text-sm mb-8">
                TELEPHONE
              </p>
              <p>+44(0)7828 692315</p>
            </li>
            <li className="w-1/2 md:mt-8">
              <p className="text-[#60ad58] font-bold md:text-lg text-sm mb-8">
                EMAIL
              </p>
              <p>stefano@renaissancepr.biz</p>
            </li>
          </ul>
          <ul className="md:w-1/2 lg:w-1/4 w-full">
            <li className="mb-12">
              <p className="text-[#60ad58] font-bold md:text-lg text-sm mb-8">
                ADDRESS
              </p>
              <p>
                <span>
                  6 Corunna Court,
                  <br />
                </span>
                <span>
                  Corunna Road,
                  <br />
                </span>
                <span>
                  Warwick,
                  <br />
                </span>
                <span>
                  England,
                  <br />
                </span>
                <span>CV34 5HQ</span>
              </p>
            </li>

            <li>
              <p className="text-[#60ad58] font-bold md:text-lg text-sm mb-8">
                SOCIAL MEDIA
              </p>
              <p className="flex">
                <Image src={Facebook} alt="" width={54} />
                <Image src={Twitter} alt="" width={54} className="ml-3" />
              </p>
            </li>
          </ul>
        </div>
        <div className="mt-12">
          <div>
            <p className=" font-thin text-sm">
              Renaissance PR LTD | Company Registration: 09861822 | VAT: GB
              214562233 | Information Commissioner’s Officer reg: ZA349529
            </p>
          </div>
          <div className="md:flex md:justify-between md:items-center block">
            <p className="text-[#42827d] hover:text-[#60ad58] py-4">
              <Link href="/privacy">Privacy Policy</Link>
            </p>
            <p>
              Website by&nbsp;
              <a href="" className="text-[#42827d] hover:text-[#60ad58] py-4">
                Biff New Media
              </a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
