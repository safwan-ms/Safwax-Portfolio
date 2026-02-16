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
    <div className="flex items-center">
      <Link
        target="_blank"
        href={icon.url}
        className={`group relative w-11 h-11 sm:w-12 sm:h-12 lg:w-13 lg:h-13 rounded-2xl bg-base-content/5 border border-base-content/10 backdrop-blur-sm flex items-center justify-center hover:bg-base-content/10 hover:border-[#f72585]/30 hover:shadow-[0_0_20px_rgba(247,37,133,0.15)] transition-all duration-300 ${
          index !== 0 ? "ml-3" : ""
        }`}
      >
        <Image
          src={icon.src}
          alt={icon.alt}
          width={24}
          height={24}
          className="object-contain w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
        />
      </Link>
    </div>
  );
};

export default SocialMediaIcon;
