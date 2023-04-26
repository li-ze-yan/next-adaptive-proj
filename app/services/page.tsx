"use client";
import { Banner, Project } from "@/components";
import Image from "next/image";
import CoreLogo1 from "@/public/images/coreLogo1.svg";
import CoreLogo2 from "@/public/images/coreLogo2.svg";
import CoreLogo3 from "@/public/images/coreLogo3.svg";
import CoreLogo4 from "@/public/images/coreLogo4.svg";
import Right from "@/public/images/right.svg";
import { useState } from "react";
import classNames from "classnames";

const Services = () => {
  const [cores] = useState([
    {
      icon: CoreLogo1,
      title: "Go-to-market Communication Planning",
      backgroundColor: "bg-[#d3d9e6]",
      describe:
        "A great campaign is the sum of its parts - business plan, target audience, marketing plan and sales strategy. At Renaissance we’re proud to have a pool of talent we can call on across all disciplines, with a wealth of experience to ensure you’re in the right place to make the most of your communication strategy",
    },
    {
      icon: CoreLogo2,
      title: "Earned PR Campaign Planning",
      backgroundColor: "bg-[#ffffff]",
      describe:
        "Putting media and influencers in the best possible position to cover your game, making their job easier, delivering the right content to the right audience thanks to our relationship with the most influential media and content creators worldwide",
    },
    {
      icon: CoreLogo3,
      title: "Product Management & Support",
      backgroundColor: "bg-[#ddf1db]",
      describe:
        "First Party relationships, assets management and store page optimization as well as an eye to your production pipeline are vital to deliver a great communication campaign that delivers the engagement numbers you need",
    },
    {
      icon: CoreLogo4,
      title: "Paid & Organic Influencer Planning",
      backgroundColor: "bg-[#cde2e1]",
      describe:
        "Identifying the best audience for your product through both organic and paid campaign planning to reach your goals. Using the most advanced search tools available to us, combined with our invaluable market knowledge",
    },
  ]);
  const [services] = useState([
    {
      title: "Paid Media - Planning & Buying",
      describe:
        "Helping you to understand when, where and how to invest your marketing budget wisely",
    },
    {
      title: "Legal Services",
      describe:
        "Need legal a consultancy for anything related to the games industry? We know the right people",
    },
    {
      title: "Creative Services",
      describe:
        "Assets creation and production are vital for the success of a product and can often make all the difference in discoverability for your producte",
    },
    {
      title: "Social & Community",
      describe:
        "Fostering your community with information and increasing engagement is key to success and would be considered an absolute necessity in today’s marketplace",
    },
    {
      title: "Game Evaluation",
      describe:
        "Early mock reviews and assessment to manage expectations of the campaign from top evaluators around the world that do this as main job.",
    },
    {
      title: "Event Management & Production",
      describe:
        "Show presence, preview or launch events are a no brainer to make a statement about your game. Don’t know where to begin? Just brief us, we will take care of all the rest",
    },
  ]);
  return (
    <div className="w-full">
      {/* Banner */}
      <Banner
        titles={
          <div className="text-white h-[60vh] w-full lg:px-[8vw] bg-[#42827d] flex items-center flex-wrap">
            <div>
              <h2 className="text-[#bbe3b7] font-bold text-2xl mx-[3vw]">
                Services
              </h2>
              <p className="lg:leading-[4.5rem] leading-[3.5rem] lg:text-5xl text-4xl font-bold mt-10 mx-[3vw]">
                From small studios to international
              </p>
              <p className="lg:leading-[4.5rem] leading-[3.5rem] lg:text-5xl text-4xl font-bold mx-[3vw]">
                publishers, we deliver measurable results
              </p>
              <p className="lg:leading-[4.5rem] leading-[3.5rem] lg:text-5xl text-4xl font-bold mx-[3vw]">
                with no jargon.
              </p>
            </div>
          </div>
        }
      />
      {/* Core Services */}
      <div className="w-full lg:px-32 px-10 mt-0">
        <h2 className="xl:text-5xl text-3xl font-bold">Core Services</h2>
        <div className="flex flex-wrap mt-16">
          {cores.map((core, index) => (
            <div
              key={`services_core_${index}`}
              className={classNames(
                "xl:w-1/2 w-full xl:p-20 p-16",
                core.backgroundColor
              )}
            >
              <Image src={core.icon} alt="" />
              <h2 className="xl:text-5xl text-3xl font-bold my-10 xl:leading-[4.5rem] leading-[3.5rem]">
                {core.title}
              </h2>
              <p className="text-xl leading-[2.2rem]">{core.describe}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Other Services */}
      <div className="lg:flex block mt-32 w-full lg:p-32 p-10 bg-[#333] text-white">
        <div className="lg:w-[40vw] xl:w-[30vw] w-full">
          <h2 className="leading-[4.5rem] text-5xl font-bold">
            Other Services
          </h2>
          <p className="text-xl leading-[2.2rem] my-10">
            We are proud to offer the following services via our network of
            trusted partners.
          </p>
          <button className="text-white font-extrabold tracking-[2px] cursor-pointer rounded-[5px] lg:px-[1.6rem] px-[1.3rem] lg:py-[1.4rem] py-[1.1rem] bg-[#60ad58] hover:bg-[#42827d] transition ease-out duration-500">
            GET IN TOUCH
          </button>
        </div>
        <div className="lg:ml-10 lg:mt-0 mt-10">
          {services.map((service, index) => (
            <div key={`other_services_${index}`} className="py-5">
              <div className="hover:text-[#60ad58] flex items-center cursor-pointer transition ease-out duration-500">
                <div className="flex justify-center items-center lg:w-[64px] w-[45px] lg:h-[64px] h-[45px] rounded-full bg-white">
                  <Image src={Right} width={20} alt="" />
                </div>
                <span className="lg:text-2xl text-xl font-bold ml-10">
                  {service.title}
                </span>
              </div>
              <p className="mt-10 text-lg leading-[2.2rem]">
                {service.describe}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Project />
    </div>
  );
};
export default Services;
