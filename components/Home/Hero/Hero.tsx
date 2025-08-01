"use client";
import { BaseInfo } from "@/Data/data";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import * as motion from "motion/react-client";
import ContactForm from "../Contact/ContactForm";
import SocialMediaIcon from "./SocialMediaIcon";
import TiltCard from "@/components/Helper/TiltCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};
const Hero = () => {
  return (
    <div
      className="w-full custom-bg pb-12 md:pb-14 lg:pb-16 pt-16 min-h-screen flex items-center overflow-hidden  bg-base-100"
      id="home"
    >
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div>
            <motion.div className="mx-auto mt-5 mb-5 lg:mb-0 bg-cover lg:hidden rounded-full border-[3.5px] border-info-content overflow-hidden w-[200px] h-[200px] md:w-[350px] md:h-[350px] bg-black">
              <Image
                src={BaseInfo.profilePic}
                alt={BaseInfo.name}
                width={250}
                height={250}
                className="w-full h-full object-cover object-top"
              />
            </motion.div>

            <motion.h1
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "linear" }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-2xl text-base-content md:text-3xl lg:text-4xl mb-5 font-semibold"
            >
              I am {BaseInfo.name}
            </motion.h1>
            {/* Title  */}
            <motion.h1
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "linear" }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-gradient-to-r from-[#f72585]  to-[#7209b7] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] "
            >
              {BaseInfo.position}
            </motion.h1>
            {/* Description */}
            <motion.p
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "linear" }}
              viewport={{ once: true, amount: 0.5 }}
              className="mt-6 text-sm md:text-base text-base-content text-opacity-50"
            >
              {BaseInfo.description}
            </motion.p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex mt-3"
            >
              {BaseInfo.socialMedia.map((icon, index) => (
                <motion.div variants={itemVariants} key={index}>
                  <SocialMediaIcon index={index} icon={icon} />
                </motion.div>
              ))}
            </motion.div>

            {/* Button */}
            <div className="flex space-x-4">
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.5 }}
                className="btn responsive-btn px-2 text-sm btn-secondary mt-5"
              >
                <a href="images/Safwan_Resume.pdf" download>
                  <span>Download CV</span>
                </a>
                <FaDownload />
              </motion.button>
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.5 }}
                className="btn btn-primary px-2 text-sm responsive-btn mt-5"
                onClick={() => {
                  const modal = document.getElementById(
                    "my_modal_3"
                  ) as HTMLDialogElement;
                  if (modal) modal.showModal();
                }}
              >
                <span>Hire Me</span>
              </motion.button>
            </div>
          </div>

          <dialog id="my_modal_3" className="modal">
            <div className="modal-box  p-0 m-0">
              <form method="dialog p-0 m-0">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle text-base-content btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <ContactForm />
            </div>
          </dialog>

          {/* Image content */}
          <TiltCard>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mx-auto bg-cover hidden lg:block rounded-[3rem] border-[5px] border-info-content overflow-hidden w-[450px] h-[450px] bg-black"
            >
              <Image
                src={BaseInfo.profilePic}
                alt={BaseInfo.name}
                width={450}
                height={450}
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </TiltCard>
        </div>
      </div>
    </div>
  );
};

export default Hero;
