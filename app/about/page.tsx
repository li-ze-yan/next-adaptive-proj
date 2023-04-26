"use client";
import Image from "next/image";
import { Banner, Project } from "@/components";
import AboutIcon from "@/public/images/aboutIcon.svg";
import Founder from "@/public/images/founder.jpg";
import KeithAndrew from "@/public/images/keithAndrew.jpg";
import AaronSeaman from "@/public/images/aaronSeaman.jpg";
import GregJones from "@/public/images/gregJones.jpg";
import Analysis from "@/public/images/analysis.svg";
import Brainstorm from "@/public/images/brainstorm.svg";
import AboutIconScalable from "@/public/images/aboutIconScalable.svg";
import AboutIconClientorienteated from "@/public/images/aboutIconClientorienteated.svg";
import AboutIconKpi from "@/public/images/aboutIconKpi.svg";
import AndyGriffiths from "@/public/images/andyGriffiths.jpg";

import Values from "@/public/images/values.jpg";
import { useState } from "react";
import classNames from "classnames";

const About = () => {
  const [team] = useState([
    {
      picture: Founder,
      name: "Stefano Petrullo",
      position: "Founder",
      describe: [
        "Stefano Petrullo is a multi award-winning games industry professional with over 25 years’ experience in planning and implementing communication campaigns for some of the world’s biggest entertainment brands, including: Watch Dogs, Assassin’s Creed, Far Cry, Yooka Laylee, The Outer Worlds, Battalion 1944, Forgotton Anne amongst others …",
        "UKIE and BAFTA member, Videogame Ambassador and renown international speaker, Stefano is an optimist, extrovert communication veteran always looking at way to innovate.",
      ],
    },
    {
      picture: KeithAndrew,
      name: "Keith Andrew",
      position: "Media Relations",
      describe: [
        "Setting out into the world of journalism back in 2005, Keith spent a large chunk of writing career covering the rise of smartphone games during the App Store boom in the late noughties, eventually serving as the Editor of Pocket Gamer’s industry-focused spin off.",
        "In 2014, Keith went fully freelance, writing for a whole host of publications including Edge, GamesTM, GamesMaster, Rolling Stone, Digital Spy, Gamesradar Lad Bible, Official Xbox Magazine, GamesIndustry.biz, Trusted Reviews, MCV, and many others.",
        "Keith joined Renaissance in late 2016 and has both worked on and led a diverse range of projects; from small indie games through to big IP across a wide range of genres.",
      ],
    },
    {
      picture: AaronSeaman,
      name: "Aaron Seaman",
      position: "Media Relations",
      describe: [
        "Since early 2018, Aaron joined Renaissance PR as fresh face to the UK games industry. As a former teacher, he used his previous management skills to quickly grasp the inner workings of essential PR processes.",
        "He is now a fully fledged member of the team and an executive across a wide variety of clients, having had an integral part in the launches of such titles as Telltale’s: The Walking Dead, The Outer Worlds, Beamdog’s Enhanced Editions (Baldur’s Gate etc) and Ancestors: The Humankind Odyssey.",
        "A gaming fanatic and an incredibly driven individual, Aaron has proven his skill set with what he has achieved so far.",
      ],
    },
    {
      picture: GregJones,
      name: "Greg Jones",
      position: "Influencer & Media Relations",
      describe: [
        "A mainstay of the UK Games PR scene for over 18 years, our Senior Consultant, Greg Jones, has held communications positions with some of the biggest names in the business from Microsoft Xbox, THQ and Warner Bros to 505 Games, SEGA UK and Disney Interactive. With a career including AAA title launches across the WWE, Dawn of War and Payday series’ plus indie titles including the BAFTA winning Brothers: a Tale of Two Sons, Terraria and Abzu, Greg brings a wealth of cross-genre experience to the team as well as an understanding of media and content creators which allows him to identify the right targets, for the right titles no matter the scope of the project. A life long and passionate fan of all things games related, Greg has been a part of the Renaissance team since early 2018.",
      ],
    },
    {
      picture: AndyGriffiths,
      name: "Andy Griffiths",
      position: "Influencer & Media Relations",
      describe: [
        "An industry all-rounder who has worked in the field of influencer relations, community management, press relations and marketing for big international conglomerates as well as small independent studios..",
        "Andy’s bread and butter is the PC platform and optimising awareness for games as a service titles. He’s previously worked on WildStar, Guild Wars 2, Robocraft, Autonauts and many more commercially and critically acclaimed hits.",
      ],
    },
  ]);
  const [catgories] = useState([
    {
      icon: Analysis,
      title: "Strategic",
      info: "Everything we do is planned around achieving specific, measurable goals before the campaign starts.",
    },
    {
      icon: Brainstorm,
      title: "Creative",
      info: "We tailor our actions to the client’s needs - we’re not just a press office or a glorified mailing list.",
    },
    {
      icon: AboutIconScalable,
      title: "Scalable",
      info: "Whether a short local burst or a long term worldwide campaign, we cater for all offering different solutions",
    },
    {
      icon: AboutIconClientorienteated,
      title: "Client-orientated",
      info: "We build all around your development timeline, not vice versa!",
    },
    {
      icon: AboutIconKpi,
      title: "Measurable",
      info: "Everything we do is measurable, every activity rationalized with you at the planning stage and executed accordingly",
    },
  ]);
  return (
    <div className="w-full">
      {/* Banner */}
      <Banner
        titles={
          <div className="text-white h-[70vh] w-full bg-[#42827d] lg:px-[8vw] flex items-center flex-wrap">
            <div>
              <h2 className="text-[#bbe3b7] text-2xl font-bold mx-[3vw]">
                About
              </h2>
              <p className="lg:leading-[4.5rem] leading-[3.5rem] lg:text-5xl text-4xl  font-bold mt-10 mx-[3vw]">
                We believe in ethical communications,
              </p>
              <p className="lg:leading-[4.5rem] leading-[3.5rem] lg:text-5xl text-4xl font-bold mx-[3vw]">
                working with the client to ensure their
              </p>
              <p className="lg:leading-[4.5rem] leading-[3.5rem] lg:text-5xl text-4xl font-bold mx-[3vw]">
                creativity is experienced by the right
              </p>
              <p className="lg:leading-[4.5rem] leading-[3.5rem] lg:text-5xl text-4xl font-bold mx-[3vw]">
                people at the right time.
              </p>
            </div>
          </div>
        }
      />
      {/* Our Mission */}
      <div className="w-full lg:mt-10 mt-0 lg:flex block lg:justify-between lg:px-32 px-4">
        <Image src={AboutIcon} className="lg:w-[38%] w-1/2 mx-auto" alt="" />
        <div className="lg:w-[50%] w-full lg:text-left text-center lg:mt-0 mt-20">
          <h2 className="lg:text-5xl text-4xl font-bold text-[#60ad58]">
            Our Mission
          </h2>
          <p className="mt-20 lg:text-3xl text-2xl font-bold text-[#1c1c1c] lg:leading-[3.5rem] leading-[2.5rem] tracking-wider">
            To create the best conditions for your project, product or corporate
            activities to succeed through strategic planning, delivering
            measurable results without unnecessary jargon
          </p>
        </div>
      </div>
      {/* Our Values */}
      <div className="w-full relative z-0 mt-32 lg:flex block lg:justify-between lg:px-32 px-4 lg:py-32 pt-10 pb-64 bg-[#4e638d]">
        <div className="lg:w-1/2 w-full">
          <h2 className="lg:text-5xl text-4xl font-bold text-[#60ad58]">
            Our Values
          </h2>
          <p className="mt-20 lg:text-4xl text-2xl font-bold text-white lg:leading-[3.5rem] leading-[2.5rem] tracking-wider">
            Renaissance is a firm believer in ethical communication &
            transparency in the interests of all parties - both in terms of our
            clients, and the media they want to talk to. We are active in
            educating the industry in best practices through seminars and talks.
          </p>
        </div>
        <div className="relative z-0 after:content-none after:absolute after:top-1/2 after:z-50 after:bg-shield-pattern after:bg-no-repeat after:bg-cover after:w-[241px] after:h-[100rem] w-[50rem]">
          <Image src={Values} alt="" fill className=" opacity-0" />
        </div>
        <div className="" />
      </div>
      {/* About the Founder */}
      <div className="w-full relative z-0 mt-32 lg:flex block lg:justify-between lg:px-32 px-4 lg:py-32 pt-10">
        <Image src={Founder} className="lg:w-[38%] w-full mx-auto" alt="" />
        <div className="lg:w-[50%] w-full lg:text-left text-center lg:mt-0 mt-20">
          <h2 className="lg:text-5xl text-4xl font-bold text-black">
            About the Founder
          </h2>
          <p className="lg:text-2xl text-xl font-bold text-[#60ad58] mt-5 mb-10">
            Stefano Petrullo
          </p>
          <p className="mb-10 text-lg">
            A passionate, optimistic, extroverted observer of the media
            landscape.
          </p>
          <p className="mb-10 text-lg">
            Stefano Petrullo is a multi award-winning games industry
            professional with over 25 years’ experience in planning and
            implementing communication campaigns for some of the world’s biggest
            entertainment brands, including:
          </p>
          <p className="mb-10 text-lg">
            Watch Dogs, Assassin’s Creed, Far Cry, Yooka Laylee, The Outer
            Worlds, Battalion 1944, Forgotton Anne amongst others …
          </p>
          <p className="mb-10 text-lg">
            UKIE and BAFTA member and juror, Videogame Ambassador and renown
            international speaker, Stefano is a communication veteran always
            looking at way to innovate.
          </p>
        </div>
      </div>
      {/* The Team */}
      <div className="w-full relative z-0 mt-32 lg:px-32 px-4 lg:py-32 pt-10 pb-10 bg-[#333] text-white">
        <div className="lg:w-1/2 w-full mb-20">
          <h2 className="lg:text-5xl text-4xl font-bold mb-10">The Team</h2>
          <p className="lg:text-xl text-lg lg:leading-[2.5rem] leading-[2rem]">
            Renaissance is built around a core team of contributing consultants
            who collectively have more than 50 years’ experience across the
            games industry; in marketing, PR, and product management, spanning
            the AAA and Indie sectors.
          </p>
        </div>
        <div className="lg:pl-[20vw] w-full">
          <h2 className="lg:text-4xl text-3xl font-bold mb-10">Core team</h2>

          <div className="flex-wrap content-start grid xl:grid-cols-3 grid-cols-2 gap-10">
            {
              // Team Members
              team.map((item, index) => (
                <div
                  key={`about_team_${index}`}
                  // className="lg:w-[30%] w-[45%] "
                >
                  <Image src={item.picture} className="w-full mx-auto" alt="" />
                  <h2 className="lg:text-3xl text-2xl font-bold lg:leading-[4rem] leading-[3rem] text-[#60ad58]">
                    {item.name}
                  </h2>
                  <p className="mb-10">{item.position}</p>
                  {item.describe.map((describe, _count) => (
                    <p
                      className="lg:text-lg mb-10"
                      key={`about_team_${item.name}_${describe}`}
                    >
                      {describe}
                    </p>
                  ))}
                </div>
              ))
            }
          </div>
        </div>
      </div>
      {/* why choose Renaissance */}
      <div className="w-full text-center pt-32 lg:px-[30vw] px-4">
        <h2 className="lg:text-5xl text-4xl font-bold mb-10">
          … so, why choose Renaissance?
        </h2>
        <p className="lg:text-xl text-lg lg:leading-[2.5rem] leading-[2rem]">
          Our approach focuses on building our plans around key pillars that are
          always simple for the client to understand, integrated to the rest of
          the channels and measurable from the very beginning! You never pay for
          our time, you pay for delivering the plan and the KPI we present to
          you
        </p>
      </div>
      <div className="pt-32 md:flex block md:flex-wrap md:px-0 px-4">
        {catgories.map((item, index) => (
          <div
            key={`about_catgories_${index}`}
            className={classNames(
              "xl:w-[20%] md:w-[33.3%] w-full h-[42vh] lg:p-10 md:p-4 p-10",
              (index + 1) % 2 !== 0
                ? "text-white bg-[#60ad58]"
                : "text-black bg-white"
            )}
          >
            <Image src={item.icon} alt="" />
            <h2 className="lg:text-3xl font-extrabold md:text-2xl text-3xl mt-10">
              {item.title}
            </h2>
            <p className="lg:text-lg text-base mt-10">{item.info}</p>
          </div>
        ))}
      </div>
      <Project />
    </div>
  );
};
export default About;
