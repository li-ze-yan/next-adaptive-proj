import { Awards, Banner } from "@/components";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="w-full">
      {/* Banner */}
      <Banner
        titles={
          <div className="text-white h-[60vh] w-full bg-[#42827d] lg:px-[8vw] flex items-center flex-wrap">
            <div>
              <h2 className="text-[#bbe3b7] text-2xl font-bold mx-[3vw]">
                Contact
              </h2>
              <p className="lg:leading-[4.5rem] leading-[3.5rem] lg:text-5xl text-4xl  font-bold mt-10 mx-[3vw]">
                Please give us a call, drop us an email or
              </p>
              <p className="lg:leading-[4.5rem] leading-[3.5rem] lg:text-5xl text-4xl font-bold mx-[3vw]">
                fill out the contact form and we’ll get back
              </p>
              <p className="lg:leading-[4.5rem] leading-[3.5rem] lg:text-5xl text-4xl font-bold mx-[3vw]">
                to you.
              </p>
            </div>
          </div>
        }
      />
      {/* Send us a Message */}
      <div className="w-full flex-wrap content-start lg:grid block lg:grid-cols-2 grid-cols-1 lg:gap-96 lg:px-32 lg:pt-5 px-4">
        <div className="lg:w-[42vw] w-full">
          <h2 className="lg:text-5xl text-4xl font-bold text-black mb-10">
            Send us a Message
          </h2>
          <fieldset className="mb-16">
            <label
              htmlFor="name"
              className="text-base font-bold text-[#60ad58]"
            >
              FULL NAME*
            </label>
            <input
              placeholder="Name"
              className="w-full mt-2 bg-[#fff] border-[2px] border-[#ccc] focus:shadow-input focus:border-[1px] border-solid rounded-[5px] p-[1.2rem] h-[3.5rem] text-[1rem] block text-[#000] outline-[#60ad58] transition ease-out duration-500"
            />
          </fieldset>
          <fieldset className="mb-16">
            <label
              htmlFor="address"
              className="text-base font-bold text-[#60ad58]"
            >
              EMAIL ADDRESS*
            </label>
            <input
              placeholder="Email"
              className="w-full mt-2 bg-[#fff] border-[2px] border-[#ccc] focus:shadow-input focus:border-[1px] border-solid rounded-[5px] p-[1.2rem] h-[3.5rem] text-[1rem] block text-[#000] outline-[#60ad58] transition ease-out duration-500"
            />
          </fieldset>
          <fieldset className="mb-16">
            <label
              htmlFor="tele"
              className="text-base font-bold text-[#60ad58]"
            >
              TELEPHONE*
            </label>
            <input
              placeholder="Telephone"
              className="w-full mt-2 bg-[#fff] border-[2px] border-[#ccc] focus:shadow-input focus:border-[1px] border-solid rounded-[5px] p-[1.2rem] h-[3.5rem] text-[1rem] block text-[#000] outline-[#60ad58] transition ease-out duration-500"
            />
          </fieldset>
          <fieldset>
            <label
              htmlFor="message"
              className="text-base font-bold text-[#60ad58]"
            >
              YOUR MESSAGE
            </label>
            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full mt-2 bg-[#fff] border-[2px] border-[#ccc] focus:shadow-input focus:border-[1px] border-solid rounded-[5px] p-[1.2rem] text-[1rem] block text-[#000] outline-[#60ad58] transition ease-out duration-500"
            />
          </fieldset>
          <p className="mt-8 leading-[1.6] lg:w-[42vw] w-[76vw] lg:text-lg text-[16px]">
            The personal data provided by you in the contact form will be
            processed in order to respond to your inquiry, according to the
            information included in{" "}
            <span className="text-[#42827d] hover:text-[#60ad58] transition ease-out duration-500">
              Renaissance PR’s
            </span>
          </p>
          <p className="text-[#42827d] hover:text-[#60ad58] transition ease-out duration-500 mt-2 mb-8">
            <Link href="/privacy">Privacy Policy</Link>
          </p>
          <button className="text-white font-extrabold tracking-[2px] cursor-pointer rounded-[5px] lg:px-[1.6rem] px-[1.3rem] lg:py-[1.4rem] py-[1.1rem] bg-[#60ad58] hover:bg-[#42827d] transition ease-out duration-500">
            SEND MESSAGE
          </button>
        </div>
        <div className="lg:w-[42vw] w-full lg:mt-0 mt-20 lg:text-left">
          <h2 className="lg:text-5xl text-4xl font-bold text-black mb-10">
            Contact Information
          </h2>
          <ul className="w-full">
            <li>
              <p className="text-[#60ad58] font-bold text-xl mb-8">TELEPHONE</p>
              <p>+44(0)7828 692315</p>
            </li>
            <li className="mt-8">
              <p className="text-[#60ad58] font-bold text-xl mb-8">EMAIL</p>
              <p>stefano@renaissancepr.biz</p>
            </li>
          </ul>
        </div>
      </div>
      <Awards />
    </div>
  );
};
export default Contact;
