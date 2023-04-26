"use client";
import { Banner, Container, Project } from "@/components";
import Image from "next/image";
import ClientsIcon1 from "@/public/images/clientsIcon1.webp";
import ClientsIcon2 from "@/public/images/clientsIcon2.webp";
import ClientsIcon3 from "@/public/images/clientsIcon3.webp";
import ClientsIcon4 from "@/public/images/clientsIcon4.webp";
import ClientsIcon5 from "@/public/images/clientsIcon5.webp";
import ClientsIcon6 from "@/public/images/clientsIcon6.webp";
import ClientsIcon7 from "@/public/images/clientsIcon7.webp";
import ClientsIcon8 from "@/public/images/clientsIcon8.webp";
import ClientsIcon9 from "@/public/images/clientsIcon9.webp";
import ClientsIcon10 from "@/public/images/clientsIcon10.webp";
import ClientsIcon11 from "@/public/images/clientsIcon11.webp";
import ClientsIcon12 from "@/public/images/clientsIcon12.webp";
import ClientsIcon13 from "@/public/images/clientsIcon13.webp";
import ClientsIcon14 from "@/public/images/clientsIcon14.webp";
import ClientsIcon15 from "@/public/images/clientsIcon15.webp";
import ClientsIcon16 from "@/public/images/clientsIcon16.webp";
import ClientsIcon17 from "@/public/images/clientsIcon17.webp";
import ClientsIcon18 from "@/public/images/clientsIcon18.webp";
import ClientsIcon19 from "@/public/images/clientsIcon19.webp";
import ClientsIcon20 from "@/public/images/clientsIcon20.webp";
import ClientsIcon21 from "@/public/images/clientsIcon21.webp";
import ClientsIcon22 from "@/public/images/clientsIcon22.webp";
import ClientsIcon23 from "@/public/images/clientsIcon23.webp";
import ClientsIcon24 from "@/public/images/clientsIcon24.webp";
import ClientsIcon25 from "@/public/images/clientsIcon25.webp";
import ClientsIcon26 from "@/public/images/clientsIcon26.webp";
import ClientsIcon27 from "@/public/images/clientsIcon27.webp";
import ClientsIcon28 from "@/public/images/clientsIcon28.webp";
import ClientsIcon29 from "@/public/images/clientsIcon29.webp";
import ClientsIcon30 from "@/public/images/clientsIcon30.webp";
import ClientsIcon31 from "@/public/images/clientsIcon31.webp";
import ClientsIcon32 from "@/public/images/clientsIcon32.webp";
import ClientsIcon33 from "@/public/images/clientsIcon33.webp";
import ClientsIcon34 from "@/public/images/clientsIcon34.webp";
import ClientsIcon35 from "@/public/images/clientsIcon35.webp";
import ClientsIcon36 from "@/public/images/clientsIcon36.webp";
import ClientsIcon37 from "@/public/images/clientsIcon37.webp";
import ClientsIcon38 from "@/public/images/clientsIcon38.webp";
import ClientsIcon39 from "@/public/images/clientsIcon39.webp";
import ClientsIcon40 from "@/public/images/clientsIcon40.webp";
import ClientsIcon41 from "@/public/images/clientsIcon41.webp";
import ClientsIcon42 from "@/public/images/clientsIcon42.webp";
import ClientsIcon43 from "@/public/images/clientsIcon43.webp";
import ClientsIcon44 from "@/public/images/clientsIcon44.webp";
import ClientsIcon45 from "@/public/images/clientsIcon45.webp";
import ClientsIcon46 from "@/public/images/clientsIcon46.webp";
import { useState } from "react";

const Clients = () => {
  const [clients] = useState([
    ClientsIcon1,
    ClientsIcon2,
    ClientsIcon3,
    ClientsIcon4,
    ClientsIcon5,
    ClientsIcon6,
    ClientsIcon7,
    ClientsIcon8,
    ClientsIcon9,
    ClientsIcon10,
    ClientsIcon11,
    ClientsIcon12,
    ClientsIcon13,
    ClientsIcon14,
    ClientsIcon15,
    ClientsIcon16,
    ClientsIcon17,
    ClientsIcon18,
    ClientsIcon19,
    ClientsIcon20,
    ClientsIcon21,
    ClientsIcon22,
    ClientsIcon23,
    ClientsIcon24,
    ClientsIcon25,
    ClientsIcon26,
    ClientsIcon27,
    ClientsIcon28,
    ClientsIcon29,
    ClientsIcon30,
    ClientsIcon31,
    ClientsIcon32,
    ClientsIcon33,
    ClientsIcon34,
    ClientsIcon35,
    ClientsIcon36,
    ClientsIcon37,
    ClientsIcon38,
    ClientsIcon39,
    ClientsIcon40,
    ClientsIcon41,
    ClientsIcon42,
    ClientsIcon43,
    ClientsIcon44,
    ClientsIcon45,
    ClientsIcon46,
  ]);
  return (
    <div className="w-full">
      {/* Banner */}
      <Banner
        titles={
          <div className="text-white md:h-[70vh] h-[90vh] w-full bg-[#42827d] lg:px-[8vw] flex items-center flex-wrap">
            <div>
              <h2 className="text-[#bbe3b7] text-2xl font-bold mx-[3vw] ">
                Our Clients
              </h2>
              <p className="lg:leading-[4.5rem] leading-[3.5rem] lg:text-5xl text-4xl  font-bold mt-10 mx-[3vw] ">
                Since our inception in 2015 we’ve been
              </p>
              <p className="lg:leading-[4.5rem] leading-[3.5rem] mx-[3vw] lg:text-5xl text-4xl  font-bold">
                fortunate to work with a wide array of
              </p>
              <p className="lg:leading-[4.5rem] leading-[3.5rem] lg:text-5xl text-4xl font-bold mx-[3vw] ">
                different clients, over 90% of whom we’re
              </p>
              <p className="lg:leading-[4.5rem] leading-[3.5rem] lg:text-5xl text-4xl font-bold mx-[3vw] ">
                proud to say are still valued partner today.
              </p>
            </div>
          </div>
        }
      />
      {/* clients */}
      <div className="w-full text-center lg:mt-10 mt-0">
        <div className="flex justify-center items-center flex-wrap mt-6">
          {clients.map((item, index) => (
            <Image
              key={`clients_${index}`}
              src={item}
              alt=""
              width={200}
              className="lg:mx-10 mx-8 my-6"
            />
          ))}
        </div>
      </div>
      <Project />
    </div>
  );
};
export default Clients;
