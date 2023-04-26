"use client";

import RightArrow from "@/public/images/rightArrow.svg";
import RightArrowHover from "@/public/images/rightArrowHover.svg";
import classNames from "classnames";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useState } from "react";

interface IProps {
  title: string;
  location: string;
  company: string;
  image: StaticImageData;
  lastCard?: boolean;
}

const CaseCard = ({ title, location, company, image, lastCard }: IProps) => {
  const [visible, setVisible] = useState(false);
  return (
    <div
      className={classNames(
        "relative group 2xl:w-[32%] lg:w-[48%] w-full bg-white shadow-card hover:shadow-card-hover hover:bg-[#60ad58] transition-every ease-in-out duration-300 2xl:mt-0 mt-10 cursor-pointer",
        lastCard && "lg:hidden 2xl:block block"
      )}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <Image src={image} alt="" />
      <div className="w-full h-[20rem] px-10 pt-8">
        <p className="text-[#60ad58] xl:text-2xl text-xl font-bold group-hover:text-white">
          {location}
        </p>
        <h2 className="text-black xl:text-4xl text-3xl font-bold py-4 group-hover:text-white">
          {title}
        </h2>
        <p className=" text-gray-300 xl:text-xl text-lg group-hover:text-white">
          {company}
        </p>
      </div>
      <div className="absolute bottom-10 right-10 lg:w-[60px] lg:h-[60px] 2xl:w-[55px] 2xl:h-[55px] w-[55px] h-[55px] rounded-full bg-[#60ad58] group-hover:bg-white flex justify-center items-center">
        <Image src={visible ? RightArrowHover : RightArrow} alt="" width={10} />
      </div>
    </div>
  );
};

export default CaseCard;
