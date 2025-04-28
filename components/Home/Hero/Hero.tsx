import { BaseInfo } from "@/Data/data";
import Image from "next/image";
import React from "react";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex items-center overflow-hidden  bg-base-100">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div>
            <div className="mx-auto mt-20  sm:mt-20 md:mt-20 mb-5 lg:mb-0 bg-cover lg:hidden rounded-[3rem] border-[3.5px] border-info-content overflow-hidden w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-black">
              <Image
                src={BaseInfo.profilePic}
                alt={BaseInfo.name}
                width={250}
                height={250}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold">
              I am {BaseInfo.name}
            </h1>
            {/* Title  */}
            <h1 className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white">
              {BaseInfo.position}
            </h1>
            {/* Description */}
            <p className="mt-6 text-sm md:text-base text-gray-400 text-opacity-50">
              {BaseInfo.description}
            </p>
            {/* Button */}
            <button className="btn btn-secondary mt-5">
              <span>Download CV</span>
              <FaDownload />
            </button>
          </div>
          {/* Image content */}
          <div className="mx-auto bg-cover hidden lg:block rounded-[3rem] border-[3.5px] border-info-content overflow-hidden w-[450px] h-[450px] bg-black">
            <Image
              src={BaseInfo.profilePic}
              alt={BaseInfo.name}
              width={450}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
