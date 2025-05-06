import { aboutInfo } from "@/Data/data";
import { FaCheck } from "react-icons/fa";
import * as motion from "motion/react-client";
import { Poppins } from "next/font/google";
import Image from "next/image";
import SectionHeading from "@/components/Helper/SectionHeading";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: "500",
});
const About = () => {
  return (
    <div
      className="bg-base-100 to-error-content pt-12 md:pt-14 lg:pt-16 pb-12 md:pb-14 lg:pb-16"
      id="about"
    >
      <div
        className={`flex justify-center -rotate-6 uppercase text-white text-[26px] sm:text-3xl md:text-4xl`}
      ></div>
      <SectionHeading>About Me</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1  lg:grid-cols-2 gap-8 items-center mt-20">
        {/* Image Content */}
        <div className="grid grid-cols-2 gap-16 items-center lg:mx-auto">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto bg-cover hidden lg:block rounded-[3rem] border-[5px] border-info-content overflow-hidden w-[450px] h-[450px] bg-black"
          >
            <Image
              src={aboutInfo.img}
              alt={aboutInfo.title}
              width={450}
              height={450}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        {/* Text Content */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold  ">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-base-content ">
            {aboutInfo.description}
          </p>
          <div className="mt-8">
            <motion.div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-error">
                Frontend Development
              </p>
            </motion.div>{" "}
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
        </motion.div>
      </div>
    </div>
  );
};

export default About;
