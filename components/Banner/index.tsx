"use client";

import Image from "next/image";
import Lightning from "@/public/images/lightning.svg";
import OtherLightning from "@/public/images/otherLighting.png";
import { FaTwitter } from "react-icons/fa";

import classNames from "classnames";
import { ReactElement } from "react";

interface IProps {
  titles?: ReactElement | string | number;
  showVideo?: boolean;
  article?: boolean;
}

const Banner = ({ showVideo, titles, article }: IProps) => {
  return (
    <div
      className={classNames(
        "relative overflow-hidden",
        showVideo === undefined ? "bg-[#fff] lg:pb-20 pb-24" : "h-[100vh]",
        article ? "xl:pb-64 pb-0" : "lg:pb-20 pb-24"
      )}
    >
      {showVideo && (
        <video
          controls={false}
          loop
          autoPlay
          muted
          poster="./images/banner.jpg"
          src="./videos/ornn.mp4"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:-mt-[4.5rem] -mt-[8rem] object-cover min-h-[100vh]"
        />
      )}
      {titles}
      {!article && (
        <Image
          src={showVideo ? Lightning : OtherLightning}
          alt=""
          className={classNames(
            showVideo
              ? "absolute z-10 2xl:right-12 md:right-16 right-[13vw] md:top-1/2 2xl:top-[45vh] top-1/3 -translate-y-1/2 w-[50%] md:scale-x-[1.2] md:scale-y-100 2xl:scale-x-110 2xl:scale-y-[0.8] scale-[1.5]"
              : "absolute lg:right-1 -right-16 bottom-0 lg:scale-100 scale-75"
          )}
        />
      )}
      {showVideo && (
        <div className="lg:flex lg:justify-around lg:items-center block text-white font-bold font-mont absolute md:bottom-0 bottom-[9.5vh] left-0 bg-[#42827d] w-full py-[2vh] lg:px-[3vw] px-[0.8rem]">
          <div>
            <div>
              <FaTwitter className="text-5xl inline-block mr-4" />
              <span className="text-sm tracking-[2px]">
                LATEST FROM TWITTER
              </span>
            </div>
            <div className="pt-4">
              <a
                href=""
                className="bg-[#ffffff80] font-extrabold tracking-[2px] px-6 py-3 text-xs rounded-md"
              >
                FOLLOW US
              </a>
            </div>
          </div>
          <div className="italic lg:text-2xl text-lg tracking-[1px] lg:max-w-[70vw] w-full">
            <p className="pt-8">
              Attention, damned souls: the Voodolls closed #beta sign up is now
              live! Starting on 19.01, you don’t want to miss out!
            </p>
            <p className="pt-12">
              Check out the newest trailer below, and sign up here:
              <a href="http://eepurl.com/ih1lKb" className="underline">
                http://eepurl.com/ih1lKb
              </a>{" "}
              Find Voodolls on Steam:
              <a href="http://bit.ly/3X9mHmN" className="underline">
                http://bit.ly/3X9mHmN
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
