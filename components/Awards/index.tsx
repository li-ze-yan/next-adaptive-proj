"use client";
import Image from "next/image";
import AwardMcv2016 from "@/public/images/awardMcv2016.jpg";
import AwardMcv2017 from "@/public/images/awardMcv2017.jpg";
import AwardMcv2018 from "@/public/images/awardMcv2018.jpg";
import AwardMcv2019 from "@/public/images/awardMcv2019.jpg";
import AwardMcv2020 from "@/public/images/awardMcv2020.jpg";
import AwardMcv2022 from "@/public/images/awardMcv2022.jpg";
import AwardHolder from "@/public/images/awardHolder.jpg";
import AwardFinalist2022 from "@/public/images/awardFinalist2022.jpg";
import { motion } from "framer-motion";
import { slideIn } from "@/app/utils/motion";
const Awards = () => {
  return (
    <motion.div
      variants={slideIn("down", "tween", 0.1, 1)}
      initial="hidden"
      whileInView="show"
      className="w-full text-[#1c1c1c] font-mont text-center max-w-[85vw] mx-auto my-36"
    >
      <h1 className="mb-[1.7rem] text-4xl font-semibold">Awards</h1>
      <p className="mb-[1.7rem] leading-[1.6] lg:w-[42vw] w-[76vw] mx-auto lg:text-lg text-[16px]">
        Renaissance has been proud to be finalist at every MCV Awards since 2015
        as Best PR Agency. In 2019, Renaissance was named as MCV&apos;s Boutique
        PR Agency of the Year, the first time this category has been included in
        the annual awards to go back as 2020 finalist as PR Agency of the year
        and win again in 2022 as Best PR Campaign of the year when the MCV
        Awards came back post a forced paused due to COVID. Still in 2022
        Renaissance has been nominated as Best Service Provided in the TIGA
        Awards
      </p>
      <div className="flex justify-center items-center flex-wrap">
        <Image
          src={AwardMcv2016}
          alt=""
          className="lg:mx-12 lg:my-4 m-4 lg:w-[140px] w-[80px]"
        />
        <Image
          src={AwardMcv2017}
          alt=""
          className="lg:mx-12 lg:my-4 m-4 lg:w-[140px] w-[80px]"
        />
        <Image
          src={AwardMcv2018}
          alt=""
          className="lg:mx-12 lg:my-4 m-4 lg:w-[140px] w-[80px]"
        />
        <Image
          src={AwardMcv2019}
          alt=""
          className="lg:mx-12 lg:my-4 m-4 lg:w-[140px] w-[80px]"
        />
        <Image
          src={AwardMcv2020}
          alt=""
          className="lg:mx-12 lg:my-4 m-4 lg:w-[140px] w-[80px]"
        />
        <Image
          src={AwardHolder}
          alt=""
          className="lg:mx-12 lg:my-4 m-4 lg:w-[140px] w-[80px]"
        />
        <Image
          src={AwardMcv2022}
          alt=""
          className="lg:mx-12 lg:my-4 m-4 lg:w-[140px] w-[80px]"
        />
        <Image
          src={AwardFinalist2022}
          alt=""
          width={140}
          className="mx-12 my-4"
        />
      </div>
    </motion.div>
  );
};

export default Awards;
