"use client";

import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { servicesData } from "@/Data/data";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="bg-gradient-to-b from-error-content to-base-100  pt-12 md:pt-14 lg:pt-16 pb-12 md:pb-14 lg:pb-16">
      <SectionHeading>Services</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto items-center mt-20">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
