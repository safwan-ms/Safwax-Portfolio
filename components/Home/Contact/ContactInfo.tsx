import { contactData } from "@/Data/data";
import React from "react";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="space-y-6">
        {/* Email Block */}
        <div className="flex items-start space-x-4 ">
          <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center">
            <FaEnvelope className="w-5 h-5 md:w-7 md:h-7 text-white" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl text-white font-bold">
              Email Address
            </h1>
            <p className="text-base sm:text-lg text-white text-opacity-70">
              {contactData.email}
            </p>
          </div>
        </div>
        {/* Address Block*/}
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center">
            <FaMap className="w-5 h-5 md:w-7 md:h-7 text-white" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl text-white font-bold">Address</h1>
            <p className="text-base sm:text-lg text-white text-opacity-70">
              {contactData.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
