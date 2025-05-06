import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";
import * as motion from "motion/react-client";
interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}
interface ServiceProps {
  service: Service;
  index: number;
}
const ServiceCard = ({ service, index }: ServiceProps) => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: index * 0.3 }}
      viewport={{ once: true }}
    >
      <Tilt className="shadow-2xl border-2 border-error-content p-6 rounded-lg bg-gradient-to-br from-info-content to-neutral">
        <Image src={service.icon} alt={service.title} width={50} height={50} />
        <h1 className="mt-4 text-lg font-bold text-white">{service.title}</h1>
        <p className="mt-3 text-sm text-gray-300">{service.description}</p>
      </Tilt>
    </motion.div>
  );
};

export default ServiceCard;
