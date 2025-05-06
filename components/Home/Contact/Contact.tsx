import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SectionHeading from "@/components/Helper/SectionHeading";
import * as motion from "motion/react-client";
const Contact = () => {
  return (
    <div
      className="pt-12 md:pt-14 lg:pt-16 pb-12 md:pb-14 lg:pb-16 bg-base-100"
      id="contact"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <div className="grid grid-cols-1 pt-8 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10 ">
        {/* Contact Form */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>
        {/* Contact Info */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="xl:mx-auto"
        >
          <ContactInfo />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
