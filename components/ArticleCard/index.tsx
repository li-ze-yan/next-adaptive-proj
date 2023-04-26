"use client";

import RightArrow from "@/public/images/rightArrow.svg";
import RightArrowHover from "@/public/images/rightArrowHover.svg";
import classNames from "classnames";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IProps {
  picture: StaticImageData;
  type: string;
  title: string;
  developer: string;
  releaseTime: string;
}

const ArticleCard = ({
  title,
  picture,
  type,
  developer,
  releaseTime,
}: IProps) => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  return (
    <div
      className="relative group 2xl:w-[30%] lg:w-[47.8%] w-full lg:h-[60vh] bg-white shadow-card hover:shadow-card-hover hover:bg-[#60ad58] transition-every ease-in-out duration-300 cursor-pointer md:mb-0 mb-10"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={() => router.push(`/case/${title.replaceAll(" ", "-")}`)}
    >
      <Image src={picture} alt="" />
      <div className="w-full h-[20rem] px-10 pt-8">
        <p className="text-[#60ad58] xl:text-2xl text-xl font-bold group-hover:text-white">
          {type}
        </p>
        <h2 className="text-black xl:text-4xl text-3xl font-bold py-4 group-hover:text-white">
          {title}
        </h2>
        <p className=" text-[#ccc] xl:text-xl text-lg group-hover:text-white">
          {developer}
        </p>
        <p className=" text-[#ebebeb] text-sm group-hover:text-white">
          {releaseTime}
        </p>
      </div>
      <div className="absolute bottom-10 right-10 lg:w-[60px] lg:h-[60px] 2xl:w-[55px] 2xl:h-[55px] w-[55px] h-[55px] rounded-full bg-[#60ad58] group-hover:bg-white flex justify-center items-center">
        <Image src={visible ? RightArrowHover : RightArrow} alt="" width={10} />
      </div>
    </div>
  );
};

export default ArticleCard;
