import { aboutInfo } from "@/Data/data";
import SectionHeading from "../Helper/SectionHeading";
import { FaCheck } from "react-icons/fa";
import * as motion from "motion/react-client";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: "500",
});
const About = () => {
  return (
    <div
      className="bg-gradient-to-b from-base-100 to-error-content pt-12 md:pt-14 lg:pt-16 pb-16"
      id="about"
    >
      <div
        className={`flex justify-center -rotate-6 uppercase text-white text-[26px] sm:text-3xl md:text-4xl`}
      ></div>
      <SectionHeading>About Me</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1  lg:grid-cols-2 gap-8 items-center mt-20">
        {/* Text Content */}
        <div>
          <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold  ">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-base-content ">
            {aboutInfo.description}
          </p>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-error">
                Frontend Development
              </p>
            </div>{" "}
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-orange-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-error">
                Backend Development
              </p>
            </div>{" "}
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-green-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-error">
                Full-Stack Development
              </p>
            </div>
          </div>
        </div>
        {/* Stats Content */}
        <div className="grid grid-cols-2 gap-16 items-center lg:mx-auto">
          {/* 1st State */}
          <div>
            <Image
              src="/images/customer.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-base-content text-center">
              {aboutInfo.client}
            </p>
            <p className="text-base sm:text-lg text-base-content/70">
              Satisfied Customer
            </p>
          </div>
          {/* 2nd State */}
          <div>
            <Image
              src="/images/experience.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-base-content text-center">
              {aboutInfo.experience}
            </p>
            <p className="text-base sm:text-lg text-base-content/70">
              Years Experience
            </p>
          </div>
          {/* 3rd State */}
          <div>
            <Image
              src="/images/completed.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-base-content text-center">
              {aboutInfo.project}
            </p>
            <p className="text-base sm:text-lg text-base-content/70">
              Completed Projects
            </p>
          </div>
          {/* 2nd State */}
          <div>
            <Image
              src="/images/rocket.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-base-content text-center">
              {aboutInfo.website}
            </p>
            <p className="text-base sm:text-lg text-base-content/70">
              Website Launced{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
