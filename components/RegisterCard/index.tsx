"use client";
import Image from "next/image";
import { useState } from "react";

interface IProps {
  title: string;
  description: string;
  image: string;
  imageHover: string;
}

const RegisterCard = ({ title, description, image, imageHover }: IProps) => {
  const [visible, setVisible] = useState(false);
  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="group lg:w-[46%] lg:mt-0 mt-10 w-full shadow-card hover:shadow-card-hover hover:bg-[#60ad58] transition-every ease-in-out duration-300 bg-white text-[#1c1c1c] font-mont pb-16 px-10"
    >
      <div className="min-h-[240px] flex justify-center items-center">
        <Image src={visible ? imageHover : image} alt="" />
      </div>
      <p className=" group-hover:text-white text-[#60ad58] text-2xl font-bold">
        REGISTRATION
      </p>
      <p className="text-4xl font-bold mb-14">{title}</p>
      <p className=" group-hover:text-white leading-10 text-xl mb-12">
        {description}
      </p>
      <button className="text-white text-lg font-bold tracking-[2px] cursor-pointer rounded-[5px] px-[2.5rem] py-[2rem] bg-[#60ad58] group-hover:bg-white group-hover:text-[#60ad58]">
        REGISTER NOW!
      </button>
    </div>
  );
};

export default RegisterCard;
