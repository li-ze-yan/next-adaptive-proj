"use client";
import { slideIn } from "@/app/utils/motion";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <motion.section
      variants={slideIn("down", "tween", 0.1, 1)}
      initial="hidden"
      whileInView="show"
      className="w-full bg-project-pattern md:bg-project-normal bg-project-big bg-no-repeat bg-half text-center my-36"
    >
      <div className="lg:px-5 px-3 text-[#1c1c1c] font-mont">
        <div className="text-center">
          <h2 className="md:text-[2.5rem] xl:text-[3rem] text-[2rem] leading-[1.4] md:px-20 gl:px-0 font-semibold lg:mb-[3rem] xl:mb-[5rem] mb-[1.7rem]">
            Got a project? Let&apos;s work together!
          </h2>
        </div>
        <div className="text-center md:w-[50vw] xl:w-[37.5vw] w-[75vw] mx-auto">
          <div>
            <p className="lg:mb-[3rem] xl:mb-[5rem] mb-[1.7rem] lg:text-lg text-[16px] leading-[1.6]">
              Since our inception in 2015 we&apos;ve been fortunate to work with
              a wide array of different clients, over 90% of whom we&apos;re
              proud to say are still valued partner today... We&apos;re always
              looking to work with new and exciting clients. If you like the
              sound of the way Renaissance works, get in touch and let&apos;s
              see what we can do together towards a free consultation
            </p>
            <button className="text-white font-extrabold tracking-[2px] cursor-pointer rounded-[5px] lg:px-[1.6rem] px-[1.3rem] lg:py-[1.4rem] py-[1.1rem] bg-[#60ad58] hover:bg-[#42827d] transition ease-out duration-500">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Project;
