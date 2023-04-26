import { Awards, Banner, Project, Register } from "@/components";

const TopRegister = () => {
  return (
    <div className="w-full">
      {/* Banner */}
      <Banner
        titles={
          <div className="text-white h-[65vh] w-full bg-[#42827d] lg:px-[8vw] flex items-center flex-wrap">
            <div>
              <h2 className="text-[#bbe3b7] text-2xl font-bold mx-[3vw]">
                Register with us
              </h2>
              <p className="lg:leading-[4.5rem] leading-[3.5rem] lg:text-5xl text-4xl  font-bold mt-10 mx-[3vw]">
                If you are a content creator/journalist or
              </p>
              <p className="lg:leading-[4.5rem] leading-[3.5rem] lg:text-5xl text-4xl font-bold mx-[3vw]">
                influencer register with us now to get all
              </p>
              <p className="lg:leading-[4.5rem] leading-[3.5rem] lg:text-5xl text-4xl font-bold mx-[3vw]">
                the latest news from our clients!
              </p>
            </div>
          </div>
        }
      />
      <Register flag={true} />
      <Project />
      <Awards />
    </div>
  );
};
export default TopRegister;
