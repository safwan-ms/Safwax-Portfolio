import Image from "next/image";
interface OtherToolsSkill {
  title: string;
  image: string;
}
interface OtherToolsSkillProp {
  skill: OtherToolsSkill;
}
const OtherToolsSkill = ({ skill }: OtherToolsSkillProp) => {
  const { image, title } = skill;
  return (
    <div className="py-4 px-3 sm:p-6  hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center rounded-full bg-gray-900">
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="object-cover w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] mx-auto"
      />
      <h1 className="text-[12px] sm:text-[18px] mt-4 text-white font-[600]">
        {title}
      </h1>
    </div>
  );
};

export default OtherToolsSkill;
