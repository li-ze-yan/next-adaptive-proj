"use client";

import RightArrow from "@/public/images/rightArrow.svg";
import RightArrowHover from "@/public/images/rightArrowHover.svg";
import classNames from "classnames";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface IProps {
  picture: string;
  type: string;
  title: string;
  developer: string;
  releaseTime: string;
}

const ArticleFullCard = ({
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
      className="relative group 2xl:w-[63%] w-full h-[60vh] shadow-card hover:shadow-card-hover hover:bg-[#60ad58] transition-every ease-in-out duration-300 cursor-pointer bg-contain bg-center"
      style={{ background: `url(${picture})` }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={() => router.push(`/case/${title.replaceAll(" ", "-")}`)}
    >
      <div className="absolute bottom-10 left-10">
        <p className="text-[#60ad58] text-lg font-bold group-hover:text-white mb-1">
          {type}
        </p>
        <h2 className="text-white xl:text-4xl text-3xl font-bold mb-3 group-hover:text-white">
          {title}
        </h2>
        <p className="text-[#ccc] xl:text-xl text-lg group-hover:text-white mb-1">
          {developer}
        </p>
        <p className="text-[#ccc] text-sm group-hover:text-white">
          {releaseTime}
        </p>
      </div>
      <div className="absolute bottom-10 right-10 lg:w-[60px] lg:h-[60px] 2xl:w-[55px] 2xl:h-[55px] w-[55px] h-[55px] rounded-full bg-[#60ad58] group-hover:bg-white flex justify-center items-center">
        <Image src={visible ? RightArrowHover : RightArrow} alt="" width={10} />
      </div>
    </div>
  );
};

export default ArticleFullCard;
