"use client";
import React, { useState } from "react";

const ContactForm = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-4 sm:p-10">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        Let's Work Together
      </h1>
      <p className="text-white ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias adipisci
        deserunt et debitis nam! Non
      </p>
      {/* Input Fields */}
      <form className="mt-8 block w-full overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-600 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-600 border-opacity-15 outline-none w-full"
          />
        </div>
        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-600 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-600 border-opacity-15 outline-none w-full"
          />
        </div>
        <div>
          <select
            defaultValue="select"
            className="w-full mt-5  bg-black text-white placeholder:text-gray-600 px-4 py-3.5 border-[1.5px] border-gray-600 border-opacity-15 outline-none"
          >
            <option disabled defaultValue="select">
              Select an option
            </option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="fullstack">Full-Stack Development</option>
          </select>
        </div>
        <textarea
          className="w-full mt-5  bg-black text-white placeholder:text-gray-600 px-4 py-3.5 border-[1.5px] border-gray-600 border-opacity-15 outline-none"
          rows={7}
          placeholder="Message"
        ></textarea>
        <div className="mt-4">
          <button className="responsive-btn text-base py-2 px-2 btn-secondary hover:btn-secondary/90">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
