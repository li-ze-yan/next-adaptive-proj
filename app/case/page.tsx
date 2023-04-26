"use client";
import { ArticleCard, ArticleFullCard, Banner, Project } from "@/components";
import CasePic1 from "@/public/images/casePic1.jpg";
import CasePic2 from "@/public/images/casePic2.jpg";
import CasePic3 from "@/public/images/casePic3.jpg";
import CaseStudies4 from "@/public/images/caseStudies4.jpg";
import CaseStudies5 from "@/public/images/caseStudies5.jpg";
import CaseStudies6 from "@/public/images/caseStudies6.jpg";
import CaseStudies7 from "@/public/images/caseStudies7.jpg";
import CaseStudies8 from "@/public/images/caseStudies8.jpg";
import CaseStudies9 from "@/public/images/caseStudies9.jpg";
import CaseStudies10 from "@/public/images/caseStudies10.jpg";
import CaseStudies11 from "@/public/images/caseStudies11.jpg";
import CaseStudies12 from "@/public/images/caseStudies12.jpg";
import CaseStudies13 from "@/public/images/caseStudies13.jpg";
import CaseStudies14 from "@/public/images/caseStudies14.jpg";
import classNames from "classnames";
import { useEffect, useState } from "react";

const Case = () => {
  const [tabs] = useState([
    "View All Items",
    "UK Campaigns",
    "EMEA Campaigns",
    "Worldwide Campaigns",
  ]);
  const [dataSource] = useState([
    {
      title: "The Ascent",
      picture: CasePic1,
      type: "WORLDWIDE-CAMPAIGNS",
      developer: "Curve Digital",
      releaseTime: "Fri Aug 13, 2021",
      url: "/images/casePic1.jpg",
    },
    {
      title: "The Outer Worlds",
      picture: CasePic2,
      type: "UK-CAMPAIGNS",
      developer: "Private Division",
      releaseTime: "Sat Dec 14, 2019",
    },
    {
      title: "Autonauts",
      picture: CasePic3,
      type: "WORLDWIDE-CAMPAIGNS",
      developer: "Curve Digital",
      releaseTime: "Fri Dec 13, 2019",
    },
    {
      title: "Baldur's Gate",
      picture: CaseStudies4,
      type: "EMEA-CAMPAIGNS",
      developer: "Skybound",
      releaseTime: "Mon Oct 28, 2019",
    },
    {
      title: "The Walking Dead",
      picture: CaseStudies5,
      type: "EMEA-CAMPAIGNS",
      developer: "Skybound",
      releaseTime: "Mon Oct 28, 2019",
    },
    {
      title: "Ancestors",
      picture: CaseStudies6,
      type: "UK-CAMPAIGNS",
      developer: "Private Division",
      releaseTime: "Mon Oct 28, 2019",
    },
    {
      title: "Felix the Reaper",
      picture: CaseStudies7,
      type: "UK-CAMPAIGNS",
      developer: "Daedelic Entertainment",
      releaseTime: "Mon Oct 28, 2019",
    },
    {
      title: "Kerbal Space Program 2",
      picture: CaseStudies8,
      type: "UK-CAMPAIGNS",
      developer: "Private Division",
      releaseTime: "Mon Oct 28, 2019",
    },
    {
      title: "Beyond a Steel Sky",
      picture: CaseStudies9,
      type: "WORLDWIDE-CAMPAIGNS",
      developer: "Revolution Software",
      releaseTime: "Tue Oct 8, 2019",
    },
    {
      title: "Pacer",
      picture: CaseStudies10,
      type: "WORLDWIDE-CAMPAIGNS",
      developer: "R8 Games",
      releaseTime: "Fri Oct 11, 2019",
    },
    {
      title: "Disintegration",
      picture: CaseStudies11,
      type: "UK-CAMPAIGNS",
      developer: "Private Division",
      releaseTime: "Tue Oct 8, 2019",
    },
    {
      title: "Overcooked",
      picture: CaseStudies12,
      type: "WORLDWIDE-CAMPAIGNS",
      developer: "Team 17",
      releaseTime: "Mon Oct 7, 2019",
    },
    {
      title: "Yooka-Laylee",
      picture: CaseStudies13,
      type: "WORLDWIDE-CAMPAIGNS",
      developer: "Team 17",
      releaseTime: "Mon Oct 7, 2019",
    },
    {
      title: "Forgotton Anne",
      picture: CaseStudies14,
      type: "WORLDWIDE-CAMPAIGNS",
      developer: "Square Enix Collective",
      releaseTime: "Fri Oct 4, 2019",
    },
  ]);
  const [ukDataSource] = useState([
    {
      title: "The Outer Worlds",
      picture: CasePic2,
      type: "UK-CAMPAIGNS",
      developer: "Private Division",
      releaseTime: "Sat Dec 14, 2019",
    },
    {
      title: "Felix the Reaper",
      picture: CaseStudies7,
      type: "UK-CAMPAIGNS",
      developer: "Daedelic Entertainment",
      releaseTime: "Mon Oct 28, 2019",
    },
    {
      title: "Ancestors",
      picture: CaseStudies6,
      type: "UK-CAMPAIGNS",
      developer: "Private Division",
      releaseTime: "Mon Oct 28, 2019",
    },
    {
      title: "Kerbal Space Program 2",
      picture: CaseStudies8,
      type: "UK-CAMPAIGNS",
      developer: "Private Division",
      releaseTime: "Mon Oct 28, 2019",
    },
    {
      title: "Disintegration",
      picture: CaseStudies11,
      type: "UK-CAMPAIGNS",
      developer: "Private Division",
      releaseTime: "Tue Oct 8, 2019",
    },
  ]);
  const [emDataSource] = useState([
    {
      title: "Baldur's Gate",
      picture: CaseStudies4,
      type: "EMEA-CAMPAIGNS",
      developer: "Skybound",
      releaseTime: "Mon Oct 28, 2019",
    },
    {
      title: "The Walking Dead",
      picture: CaseStudies5,
      type: "EMEA-CAMPAIGNS",
      developer: "Skybound",
      releaseTime: "Mon Oct 28, 2019",
    },
  ]);
  const [worldDataSource] = useState([
    {
      title: "The Ascent",
      picture: CasePic1,
      type: "WORLDWIDE-CAMPAIGNS",
      developer: "Curve Digital",
      releaseTime: "Fri Aug 13, 2021",
      url: "/images/casePic1.jpg",
    },
    {
      title: "Autonauts",
      picture: CasePic3,
      type: "WORLDWIDE-CAMPAIGNS",
      developer: "Curve Digital",
      releaseTime: "Fri Dec 13, 2019",
    },
    {
      title: "Pacer",
      picture: CaseStudies10,
      type: "WORLDWIDE-CAMPAIGNS",
      developer: "R8 Games",
      releaseTime: "Fri Oct 11, 2019",
    },
    {
      title: "Beyond a Steel Sky",
      picture: CaseStudies9,
      type: "WORLDWIDE-CAMPAIGNS",
      developer: "Revolution Software",
      releaseTime: "Tue Oct 8, 2019",
    },
    {
      title: "Overcooked",
      picture: CaseStudies12,
      type: "WORLDWIDE-CAMPAIGNS",
      developer: "Team 17",
      releaseTime: "Mon Oct 7, 2019",
    },
    {
      title: "Yooka-Laylee",
      picture: CaseStudies13,
      type: "WORLDWIDE-CAMPAIGNS",
      developer: "Team 17",
      releaseTime: "Mon Oct 7, 2019",
    },
    {
      title: "Forgotton Anne",
      picture: CaseStudies14,
      type: "WORLDWIDE-CAMPAIGNS",
      developer: "Square Enix Collective",
      releaseTime: "Fri Oct 4, 2019",
    },
  ]);
  const [checked, setChecked] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 获取媒体查询的结果
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    // 设置媒体查询的值
    setIsMobile(mediaQuery.matches);
    // 设置事件
    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches);
    };
    // 绑定事件
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    // 卸载事件
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="w-full">
      {/* Banner */}
      <Banner
        titles={
          <div className="text-white lg:h-[75vh] h-[80vh] bg-[#42827d] w-full lg:px-[8vw] flex items-center flex-wrap">
            <div>
              <h2 className="text-[#bbe3b7] font-bold text-2xl mx-[3vw]">
                Case Studies
              </h2>
              <p className="lg:leading-[4.5rem] leading-[3.5rem] lg:text-5xl text-4xl  font-bold mt-10 mx-[3vw]">
                Here are some of our recent projects, from
              </p>
              <p className="lg:leading-[4.5rem] leading-[3.5rem] lg:text-5xl text-4xl font-bold mx-[3vw]">
                small indie studios to international
              </p>
              <p className="lg:leading-[4.5rem] leading-[3.5rem] lg:text-5xl text-4xl font-bold mx-[3vw]">
                publishers our non formulaic approach
              </p>
              <p className="lg:leading-[4.5rem] leading-[3.5rem] lg:text-5xl text-4xl font-bold mx-[3vw]">
                allow us to always find the best solution
              </p>
              <p className="lg:leading-[4.5rem] leading-[3.5rem] lg:text-5xl text-4xl font-bold mx-[3vw]">
                for everyone!
              </p>
            </div>
          </div>
        }
      />
      <div className="w-full lg:mt-10 mt-0">
        <div className="flex flex-wrap justify-center lg:gap-20 gap-6 font-mont lg:px-0 px-2">
          {tabs.map((item, index) => (
            <label
              key={`case_studies_tabs_${index}`}
              // className=""
              className={classNames(
                index === checked
                  ? "text-[#60ad58] after:bg-[#60ad58] after:-bottom-1"
                  : "hover:text-[#60ad58] after:bg-transparent hover:after:bg-[#60ad58] after:bottom-0 hover:after:-bottom-1 after:transiton after:ease-in-out after:duration-300",
                "transition ease-out duration-200 cursor-pointer text-xl font-bold relative after:w-full after:left-0 after:absolute after:h-[3px]"
              )}
              onClick={() => setChecked(index)}
            >
              {item}
            </label>
          ))}
        </div>
        <div className="mt-20 xl:px-40 px-4 md:flex md:justify-center md:gap-10 md:flex-wrap">
          {checked === 0 &&
            dataSource.map((item, index) => {
              if (index === 0 && !isMobile) {
                return (
                  <ArticleFullCard
                    key={`case_studies_lgData_${index}`}
                    picture={item.url as string}
                    type={item.type}
                    title={item.title}
                    developer={item.developer}
                    releaseTime={item.releaseTime}
                  />
                );
              }
              return (
                <ArticleCard
                  key={`case_studies_lgData_${index}`}
                  picture={item.picture}
                  type={item.type}
                  title={item.title}
                  developer={item.developer}
                  releaseTime={item.releaseTime}
                />
              );
            })}
          {checked === 1
            ? ukDataSource.map((item, index) => {
                return (
                  <ArticleCard
                    key={`case_studies_lgData_${index}`}
                    picture={item.picture}
                    type={item.type}
                    title={item.title}
                    developer={item.developer}
                    releaseTime={item.releaseTime}
                  />
                );
              })
            : checked === 2
            ? emDataSource.map((item, index) => {
                return (
                  <ArticleCard
                    key={`case_studies_lgData_${index}`}
                    picture={item.picture}
                    type={item.type}
                    title={item.title}
                    developer={item.developer}
                    releaseTime={item.releaseTime}
                  />
                );
              })
            : worldDataSource.map((item, index) => {
                return (
                  <ArticleCard
                    key={`case_studies_lgData_${index}`}
                    picture={item.picture}
                    type={item.type}
                    title={item.title}
                    developer={item.developer}
                    releaseTime={item.releaseTime}
                  />
                );
              })}
        </div>
      </div>
      <Project />
    </div>
  );
};
export default Case;
