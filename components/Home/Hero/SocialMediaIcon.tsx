import Image from "next/image";
import Link from "next/link";

interface Icon {
  src: string;
  url: string;
  alt: string;
}
interface IconProp {
  icon: Icon;
  index: number;
}

const SocialMediaIcon = ({ icon, index }: IconProp) => {
  return (
    <div className="flex items-center ">
      <Link
        href={icon.url}
        className={`  w-10 border h-10 shadow-md sm:w-11 sm:h-11 lg:w-13 lg:h-13 rounded-full bg-[#fff] flex items-center justify-center ${
          index !== 0 ? "-ml-2 md:-ml-2.5 lg:-ml-3.5" : ""
        }`}
      >
        <Image
          src={icon.src}
          alt={icon.alt}
          width={30}
          height={30}
          className="object-contain w-9  h-9  sm:w-9.5 sm:h-9.5 lg:w-10 lg:h-10  p-1"
        />
      </Link>
    </div>
  );
};

export default SocialMediaIcon;
