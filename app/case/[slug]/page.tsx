"use client";
import { Banner } from "@/components";
import { NextPage } from "next";
import RightArrow from "@/public/images/rightArrow.svg";
import RightArrowHover from "@/public/images/rightArrowHover.svg";
import Image from "next/image";
import Facebook from "@/public/images/facebook.svg";
import Twitter from "@/public/images/twitter.svg";
import CasePic2 from "@/public/images/casePic2.jpg";
import { ParsedUrlQuery } from "querystring";
import ClientCurvedigital from "@/public/images/client-curvedigital.jpg";
import { useState } from "react";

interface Params extends ParsedUrlQuery {
  slug: string;
}

type Props = {
  params: Params;
};

const CoreDetail: NextPage<Props> = ({ params }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="w-full relative pb-32">
      {/* Banner */}
      <Banner
        article={true}
        titles={
          <div className="relative xl:h-[50vh] xl:bg-[#42827d]">
            <Image
              src={CasePic2}
              alt=""
              className="xl:absolute xl:w-[60%] w-full xl:top-1/4 xl:left-0"
            />
            <div className="xl:absolute xl:left-[68vw] xl:top-full pt-10 px-4">
              <p className="text-[#60ad58] xl:text-xl text-xl font-bold">
                UK-CAMPAIGNS
              </p>
              <h2 className="text-black xl:text-4xl text-3xl font-bold py-2">
                The Outer Worlds
              </h2>
              <p className="text-[#ccc] xl:text-xl text-lg mb-6">
                Private Division
              </p>
              <p className="flex">
                <Image src={Facebook} alt="" width={54} />
                <Image src={Twitter} alt="" width={54} className="ml-3" />
              </p>
            </div>
          </div>
        }
      />
      {/* picture */}
      <div className="w-full xl:mt-20 mt-0 xl:flex xl:px-32 px-4">
        <div className="xl:w-[55vw] w-full xl:mr-[6vw]">
          <p className="text-xl leading-[2.2rem] mb-10">
            Renaissance, in partnership with Curve Digital, were the lead PR
            agency in bringing the captivating and unique colonisation and
            coding game, Autonauts, to market.
          </p>
          <p className="text-xl leading-[2.2rem] mb-10">
            Starting with announcement in July 2019 to launch in October. This
            short campaign had a laser focus, targeting specialist and
            mainstream media that would give this unique premise a chance with
            cover features in Wireframe Magazine (UK), lead review in The
            Guardian newspaper’s weekly G2 supplement (including online), as
            well as regular coverage on Eurogamer (UK), Polygon (NA), Rock Paper
            Shotgun (UK) and other opinion-leading outlets.
          </p>
          <p className="text-xl leading-[2.2rem]">
            Over 300 articles worldwide from notable media were achieved
            worldwide during the campaign including 50+ reviews culminating in a
            Metacritic score of 80.
          </p>
        </div>
        <div className="xl:w-[25vw] w-full xl:mt-0 mt-10">
          <div className="bg-[#4e638d] p-8 text-white">
            <p className="font-lato italic text-2xl leading-[2.5rem]">
              Renaissance provide fantastic bespoke PR plans suiting the
              individual needs of the product and provide a unique care unlike
              any other
            </p>
            <Image
              src={ClientCurvedigital}
              alt=""
              width={64}
              className="mt-8 mb-5 rounded-full"
            />
            <p className="text-xl font-bold">Michael Fisher</p>
            <p className="text-xl">Product Manager of Curve Digital</p>
          </div>
        </div>
      </div>
      <div
        className="w-full bg-[#333] relative z-0 cursor-pointer group mt-32"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <div
          className="w-full blur-[10x] opacity-[0.6] bg-cover bg-no-repeat bg-half text-center h-[42vh]"
          style={{
            backgroundImage: 'url("/images/casePic2.jpg")',
          }}
        ></div>
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-[#60ad58] xl:text-xl text-xl font-bold z-10">
            UK-CAMPAIGNS
          </p>
          <h2 className="text-white xl:text-5xl text-4xl font-bold py-2">
            The Outer Worlds
          </h2>
          <p className="text-white xl:text-xl text-lg mb-6">Private Division</p>
          <div className="mx-auto lg:w-[60px] lg:h-[60px] 2xl:w-[55px] 2xl:h-[55px] w-[55px] h-[55px] rounded-full bg-[#60ad58] group-hover:bg-white flex justify-center items-center">
            <Image
              src={visible ? RightArrowHover : RightArrow}
              alt=""
              width={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreDetail;
