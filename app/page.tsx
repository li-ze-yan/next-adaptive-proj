"use client";
import {
  Awards,
  Banner,
  CaseCard,
  Container,
  Project,
  Register,
} from "@/components";
import { motion } from "framer-motion";
import Image from "next/image";
import CoreLogo1 from "@/public/images/coreLogo1.svg";
import CoreLogo2 from "@/public/images/coreLogo2.svg";
import CoreLogo3 from "@/public/images/coreLogo3.svg";
import CoreLogo4 from "@/public/images/coreLogo4.svg";
import CasePic1 from "@/public/images/casePic1.jpg";
import CasePic2 from "@/public/images/casePic2.jpg";
import CasePic3 from "@/public/images/casePic3.jpg";
import Client1 from "@/public/images/client1.webp";
import Client2 from "@/public/images/client2.webp";
import Client3 from "@/public/images/client3.webp";
import Client4 from "@/public/images/client4.webp";
import Client5 from "@/public/images/client5.webp";
import Client6 from "@/public/images/client6.webp";
import Client7 from "@/public/images/client7.webp";
import Client8 from "@/public/images/client8.webp";
import Client9 from "@/public/images/client9.webp";
import Client10 from "@/public/images/client10.webp";
import Client11 from "@/public/images/client11.webp";
import Client12 from "@/public/images/client12.webp";
import Client13 from "@/public/images/client13.webp";
import Client14 from "@/public/images/client14.webp";
import Client15 from "@/public/images/client15.webp";
import Client16 from "@/public/images/client16.webp";
import Client17 from "@/public/images/client17.webp";
import Client18 from "@/public/images/client18.webp";
import Client19 from "@/public/images/client19.webp";
import Client20 from "@/public/images/client20.webp";
import Game1 from "@/public/images/game1.webp";
import Game2 from "@/public/images/game2.webp";
import Game3 from "@/public/images/game3.webp";
import Game4 from "@/public/images/game4.webp";
import Game5 from "@/public/images/game5.webp";
import Game6 from "@/public/images/game6.webp";
import Game7 from "@/public/images/game7.webp";
import Game8 from "@/public/images/game8.webp";
import Game9 from "@/public/images/game9.webp";
import Game10 from "@/public/images/game10.jpg";
import Game11 from "@/public/images/game11.webp";
import Game12 from "@/public/images/game12.webp";
import Game13 from "@/public/images/game13.webp";
import Game14 from "@/public/images/game14.webp";
import Game15 from "@/public/images/game15.webp";
import Game16 from "@/public/images/game16.webp";
import Game17 from "@/public/images/game17.webp";
import Game18 from "@/public/images/game18.webp";
import Game19 from "@/public/images/game19.webp";
import Game20 from "@/public/images/game20.webp";
import Game21 from "@/public/images/game21.png";
import TestimonialIcon from "@/public/images/testimonialIcon.png";
import ClientCurvedigital from "@/public/images/client-curvedigital.jpg";
import { useState } from "react";
import classNames from "classnames";
import { home } from "@/constants";
import { fadeIn, slideIn } from "./utils/motion";

export default function Home() {
  const [visible, setVisible] = useState(true);
  const [client] = useState([
    Client1,
    Client2,
    Client3,
    Client4,
    Client5,
    Client6,
    Client7,
    Client8,
    Client9,
    Client10,
    Client11,
    Client12,
    Client13,
    Client14,
    Client15,
    Client16,
    Client17,
    Client18,
    Client19,
    Client20,
  ]);
  const [game1] = useState([
    Game1,
    Game2,
    Game3,
    Game4,
    Game5,
    Game6,
    Game7,
    Game8,
    Game9,
    Game10,
    Game11,
    Game12,
  ]);
  const [game2] = useState([
    Game13,
    Game14,
    Game15,
    Game16,
    Game17,
    Game18,
    Game19,
    Game20,
    Game21,
  ]);
  return (
    <div className="w-full">
      {/* Banner */}
      <Banner
        titles={
          <div className="absolute z-20 md:top-[30vh] 2xl:top-[22rem] top-[18vh] -translate-y-1/2 left-[8vw] text-white xl:text-7xl md:text-5xl text-4xl font-bold">
            <p>{home.bannerText.title}</p>
            <p>
              {home.bannerText.subTitle.split("the").map((item, index) => {
                if (index === 1) {
                  return (
                    <span key={`banner_${item}`} className="text-[#bbe3b7]">
                      the {item}
                    </span>
                  );
                }
                return item;
              })}
            </p>
          </div>
        }
        showVideo={true}
      />
      {/* Core Services */}
      <Container>
        <div className="text-[#1c1c1c] lg:flex lg:justify-between block md:mt-32 -mt-10">
          <div className="lg:w-[42%] w-full">
            <motion.p
              variants={slideIn("left", "tween", 0.1, 1)}
              initial="hidden"
              whileInView="show"
              className="xl:text-5xl text-3xl font-bold xl:leading-[4.5rem] leading-tight border-l-[5px] lg:text-right border-r-0 lg:border-r-[5px] lg:border-l-0 md:pl-10 md:pr-[20vw] lg:pr-10 lg:pl-0 xl:pl-[2vw] px-10 border-[#60ad58] border-solid mb-10"
            >
              How can we help your business?
            </motion.p>
            <motion.p
              variants={slideIn("left", "tween", 0.1, 1)}
              initial="hidden"
              whileInView="show"
              className="lg:text-2xl text-xl lg:leading-[2.6rem] leading-[2.2rem] lg:text-right"
            >
              Renaissance believes in working in an integrated fashion to
              support the bespoke needs of your business, making sure we target
              the right media mix for your project&apos;s needs. It&apos;s not
              about aimlessly shouting about your game to anyone willing to lend
              their ear: We&apos;re here to take your creativity and make sure
              right people hears about it in the right way, at the right time,
              in the right place
            </motion.p>
            <motion.button
              variants={slideIn("left", "tween", 0.1, 1)}
              initial="hidden"
              whileInView="show"
              className="lg:float-right mt-10 text-white text-base font-bold tracking-[2px] cursor-pointer rounded-[5px]   lg:px-[2.2rem] px-[1.9rem] lg:py-[1.3rem] py-[1rem] bg-[#60ad58] hover:bg-[#42827d] transition ease-out duration-500"
            >
              ALL OUR SERVICES
            </motion.button>
          </div>
          <div className="lg:w-[42%] w-full lg:mt-0 mt-20">
            <motion.p
              variants={fadeIn("top", "", 0.1, 3)}
              initial="hidden"
              whileInView="show"
              className="xl:text-5xl text-3xl font-bold xl:leading-[4.5rem] leading-tight mb-10"
            >
              Core Services
            </motion.p>
            <div className="mb-10">
              <motion.div
                variants={slideIn("right", "tween", 0.1, 1)}
                initial="hidden"
                whileInView="show"
              >
                <Image src={CoreLogo1} alt="" />
              </motion.div>

              <motion.h2
                variants={slideIn("right", "tween", 0.1, 1)}
                initial="hidden"
                whileInView="show"
                className="xl:text-3xl text-2xl font-bold xl:leading-[4.5rem] leading-tight lg:my-6 my-10"
              >
                Earned PR Campaign Planning
              </motion.h2>
              <motion.p
                variants={slideIn("right", "tween", 0.1, 1)}
                initial="hidden"
                whileInView="show"
                className="text-xl leading-[2.2rem]"
              >
                Putting media and influencers in the best possible position to
                cover your game, making their job easier, delivering the right
                content to the right audience thanks to our relationship with
                the most influential media and content creator worldwide
              </motion.p>
            </div>
            <div className="mb-10">
              <motion.div
                variants={slideIn("right", "tween", 0.1, 1)}
                initial="hidden"
                whileInView="show"
              >
                <Image src={CoreLogo2} alt="" />
              </motion.div>

              <motion.h2
                variants={slideIn("right", "tween", 0.1, 1)}
                initial="hidden"
                whileInView="show"
                className="xl:text-3xl text-2xl font-bold xl:leading-[4.5rem] leading-tight lg:my-6 my-10"
              >
                Paid & Organic Influencer Planning
              </motion.h2>
              <motion.p
                variants={slideIn("right", "tween", 0.1, 1)}
                initial="hidden"
                whileInView="show"
                className="text-xl leading-[2.2rem]"
              >
                Identifying the best audience for your product through both
                organic and paid campaign planning to reach your goals. Using
                the most advanced search tools available, combined with our
                invaluable market knowledge of our team we always keep in mind
                the best ROI
              </motion.p>
            </div>
            <div className="mb-10">
              <motion.div
                variants={slideIn("right", "tween", 0.1, 1)}
                initial="hidden"
                whileInView="show"
              >
                <Image src={CoreLogo3} alt="" />
              </motion.div>
              <motion.h2
                variants={slideIn("right", "tween", 0.1, 1)}
                initial="hidden"
                whileInView="show"
                className="xl:text-3xl text-2xl font-bold xl:leading-[4.5rem] leading-tight lg:my-6 my-10"
              >
                Product Management & Support
              </motion.h2>
              <motion.p
                variants={slideIn("right", "tween", 0.1, 1)}
                initial="hidden"
                whileInView="show"
                className="text-xl leading-[2.2rem]"
              >
                First Party relationship, assets management and store page
                optimization as well as an eye to your production pipeline are
                vital to deliver a great communication campaign that delivers
                the engagement numbers you need
              </motion.p>
            </div>
            <div>
              <motion.div
                variants={slideIn("right", "tween", 0.1, 1)}
                initial="hidden"
                whileInView="show"
              >
                <Image src={CoreLogo4} alt="" />
              </motion.div>

              <motion.h2
                variants={slideIn("right", "tween", 0.1, 1)}
                initial="hidden"
                whileInView="show"
                className="xl:text-3xl text-2xl font-bold xl:leading-[4.5rem] leading-tight lg:my-6 my-10"
              >
                Go-to-market Communication Planning
              </motion.h2>
              <motion.p
                variants={slideIn("right", "tween", 0.1, 1)}
                initial="hidden"
                whileInView="show"
                className="text-xl leading-[2.2rem]"
              >
                A great campaign is the sum of its parts - business plan, target
                audience, marketing plan and sales strategy. At Renaissance
                we’re proud to have a pool of talent we can call on across all
                disciplines, with a wealth of experience to ensure you’re in the
                right place to make the most of your communication strategy
              </motion.p>
            </div>
          </div>
        </div>
      </Container>
      {/* Case Studies */}
      <div className="relative z-0 w-full bg-[#4e638d] text-white py-36 mt-32">
        <Container>
          <h2 className="xl:text-5xl text-3xl font-bold 2xl:mb-16 mb-6">
            Case Studies
          </h2>
          <div className="lg:flex lg:justify-between lg:flex-wrap block">
            <CaseCard
              title="The Ascent"
              location="WORLDWIDE-CAMPAIGNS"
              company="Curve Digital"
              image={CasePic1}
            />
            <CaseCard
              title="The Ascent"
              location="WORLDWIDE-CAMPAIGNS"
              company="Curve Digital"
              image={CasePic2}
            />
            <CaseCard
              title="The Ascent"
              location="WORLDWIDE-CAMPAIGNS"
              company="Curve Digital"
              image={CasePic3}
              lastCard={true}
            />
          </div>
          <div className="w-fulL flex justify-center mt-32">
            <button className="text-white font-extrabold tracking-[2px] cursor-pointer rounded-[5px] lg:px-[1.6rem] px-[1.3rem] lg:py-[1.4rem] py-[1.1rem] bg-[#60ad58] hover:bg-[#42827d] transition ease-out duration-500">
              ALL CASE STUDIES
            </button>
          </div>
        </Container>
      </div>
      {/* Some of Our Clients */}
      <motion.div
        variants={fadeIn("top", "", 0.1, 2)}
        initial="hidden"
        whileInView="show"
        className="w-full text-center lg:mt-32 mt-12"
      >
        <Container>
          <h1 className="mb-12 text-4xl font-semibold">Some of Our Clients</h1>
          <p className="2xl:text-2xl text-xl font-normal leading-relaxed md:px-[13vw] 2xl:px-[8vw]">
            Since our inception in 2015 we&apos;ve been fortunate to work with a
            wide array of different clients, over 90% of whom we&apos;re proud
            to say are still valued partner today.
          </p>
        </Container>
        <div className="flex justify-center items-center flex-wrap mt-6">
          {client.map((item, index) => (
            <Image
              key={`client_home_${index}`}
              src={item}
              alt=""
              className="lg:mx-10 mx-4 lg:w-[200px] w-[100px] my-6"
            />
          ))}
        </div>
        <div className="w-fulL flex justify-center lg:mt-8 mt-12">
          <button className="text-white font-extrabold tracking-[2px] cursor-pointer rounded-[5px] lg:px-[1.6rem] px-[1.3rem] lg:py-[1.4rem] py-[1.1rem] bg-[#60ad58] hover:bg-[#42827d] transition ease-out duration-500">
            VIEW ALL OUR CLIENTS
          </button>
        </div>
      </motion.div>
      {/* Latest Games */}
      <div className="w-full text-center mt-24 pt-32 border-t border-[#ccc]">
        <h1 className="mb-12 text-4xl font-semibold">Latest Games</h1>
        <p className="2xl:text-2xl text-xl font-normal leading-relaxed">
          Our Latest projects
        </p>
        <ul className="w-full min-h-[400px] mt-24">
          {visible ? (
            <li
              className={classNames(
                visible ? "opacity-100" : "opacity-0",
                "w-full flex justify-center flex-wrap lg:px-20 px-0 transition duration-500"
              )}
            >
              {game1.map((item, index) => (
                <Image
                  key={`game1_home_${index}`}
                  src={item}
                  alt=""
                  className="mx-2 my-2 lg:w-[260px] lg:h-[200px] w-[170px] h-[100px] cursor-pointer"
                />
              ))}
            </li>
          ) : (
            <li
              className={classNames(
                visible ? "opacity-0" : "opacity-100",
                "w-full flex justify-center flex-wrap lg:px-20 px-0 transition duration-500"
              )}
            >
              {game2.map((item, index) => (
                <Image
                  key={`game2_home_${index}`}
                  src={item}
                  width={250}
                  alt=""
                  className="mx-2 my-2 lg:w-[260px] lg:h-[200px] w-[170px] h-[100px] cursor-pointer"
                />
              ))}
            </li>
          )}
        </ul>
        <div className="w-full flex justify-center items-center 2xl:pt-0 pt-20">
          <ul className="flex justify-between lg:w-96 w-56 h-3 ">
            <li
              className={classNames(
                "text-[#ccc] cursor-pointer w-[49%] hover:bg-[#60ad58] text-left pl-2 text-xs pt-2 transition ease-out duration-500",
                visible ? "bg-[#60ad58]" : "bg-[#ccc]"
              )}
              onClick={() => setVisible(true)}
            >
              1
            </li>
            <li
              className={classNames(
                "text-[#ccc] cursor-pointer w-[49%] hover:bg-[#60ad58] text-left pl-2 text-xs pt-2 transition ease-out duration-500",
                visible ? "bg-[#ccc]" : "bg-[#60ad58]"
              )}
              onClick={() => setVisible(false)}
            >
              2
            </li>
          </ul>
        </div>
      </div>
      {/* The Renaissance team */}
      <motion.div
        variants={slideIn("down", "tween", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        className="w-full bg-[#333] mt-32 text-white text-center relative z-0 py-36"
      >
        <Image
          src={TestimonialIcon}
          alt=""
          className="lg:w-[120px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <h2 className="lg:text-3xl text-2xl italic font-bold">
          The Renaissance team brought energy, creativity and results.
          Recommended
        </h2>
        <div className="w-full flex justify-center mt-12 mb-2">
          <Image
            src={ClientCurvedigital}
            alt=""
            width={64}
            className=" rounded-full"
          />
        </div>
        <p className="text-xl font-bold leading-relaxed">Stuart Dinsey</p>
        <p className="text-xl leading-relaxed">Chairman of Curve Digital</p>
      </motion.div>
      <Awards />
      <Register />
      <Project />
    </div>
  );
}
