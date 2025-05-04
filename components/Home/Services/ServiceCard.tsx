import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";
interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}
interface ServiceProps {
  service: Service;
}
const ServiceCard = ({ service }: ServiceProps) => {
  return (
    <Tilt className="shadow-2xl border-2 border-error-content p-6 rounded-lg bg-gradient-to-br from-info-content to-neutral">
      <Image src={service.icon} alt={service.title} width={50} height={50} />
      <h1 className="mt-4 text-lg font-bold text-white">{service.title}</h1>
      <p className="mt-3 text-sm text-gray-300">{service.description}</p>
    </Tilt>
  );
};

export default ServiceCard;
