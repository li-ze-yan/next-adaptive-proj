"use client";

import Image from "next/image";
import HeaderLogo from "@/public/images/headerLogo.png";
import HeaderLittleLogo from "@/public/images/headerLittleLogo.png";
import MobileHeaderLogo from "@/public/images/mobileHeaderLogo.png";
import FoldingLogo from "@/public/images/foldingLogo.png";
import MenuLogo from "@/public/images/menu.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import classNames from "classnames";

interface Menu {
  label: string;
  link: string;
}

interface IProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const Header = ({ visible, setVisible }: IProps) => {
  const [show, setShow] = useState(false);
  const [headerFlag, setHeaderFlag] = useState(true);
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

  useEffect(() => {
    window.addEventListener("wheel", (e: any) => {
      // console.log(window.pageYOffset, "window.pageYOffset ");
      // console.log(
      //   document.documentElement.scrollTop,
      //   "document.documentElement.scrollTop"
      // );
      if (e.deltaY > 0) {
        setShow(true);
      } else {
        setShow(false);
      }
      if (window.pageYOffset === 0) {
        setHeaderFlag(true);
      } else {
        setHeaderFlag(false);
      }
    });
    return () => {
      window.removeEventListener("wheel", () => {
        console.log("remove");
      });
    };
  }, []);
  return (
    <header
      className={classNames(
        "xl:fixed block w-full z-[999] transition ease-out duration-500",
        show ? "xl:-translate-y-[150px]" : "xl:translate-y-[0]",
        headerFlag ? "xl:bg-transparent" : "xl:bg-white"
      )}
    >
      <div className="xl:py-5 py-4 xl:px-0 px-5 xl:bg-transparent bg-white flex justify-between items-center flex-nowrap">
        <Link href="/" className="xl:block hidden max-w-full pl-6">
          <Image
            src={headerFlag ? HeaderLogo : HeaderLittleLogo}
            alt=""
            className={headerFlag ? "w-[360px]" : "w-[45px]"}
          />
        </Link>
        <Link href="/" className="xl:hidden block max-w-[10rem]">
          <Image src={MobileHeaderLogo} alt="" />
        </Link>
        <ul
          className={classNames(
            "xl:flex hidden font-bold font-mont bg-transparent text-xl",
            headerFlag ? "text-white" : "text-[#42827d]"
          )}
        >
          {menu.map((item, index) => (
            <li
              key={`menu_web_${item.link}`}
              className="xl:px-8 lg:px-2 ml:px-3 block relative after:block after:absolute after:w-full after:h-0 after:-bottom-8 after:left-0 after:bg-[#60ad58] after:transition-height after:duration-200 after:ease-in-out hover:after:h-1.5"
            >
              <Link href={`/${item.link}`}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <Image
          src={MenuLogo}
          className={classNames(
            visible ? "hidden" : "block",
            "xl:hidden cursor-pointer w-[25px] h-[25px] text-right leading-[4px]"
          )}
          onClick={() => setVisible(true)}
          alt=""
        />
      </div>
      <div
        className={classNames(
          visible ? "right-0" : "-right-[290px]",
          "xl:hidden block fixed backfaceVisibility-hidden bg-white w-[280px] h-screen z-[9999] shadow-silder overflow-x-hidden overflow-y-auto top-0 transition-right duration-500 ease-in-out"
        )}
      >
        <div className="w-full m-[15px]">
          <Link href="/">
            <Image src={FoldingLogo} alt="" className="max-w-[60px]" />
          </Link>
        </div>
        <ul className="mt-[30px] border-gray-100 border-t-[1px] border-solid">
          {menu.map((item, index) => (
            <li
              key={`menu_phone_${item.link}`}
              className="border-[#f6f6f6] border-b-[1px] border-solid px-[45px] py-[25px]"
              onClick={() => setVisible(false)}
            >
              <Link
                href={`/${item.link}`}
                className=" font-mont font-bold align-middle text-[#111]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
