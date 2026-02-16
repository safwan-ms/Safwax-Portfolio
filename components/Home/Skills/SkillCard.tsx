import Image from "next/image";

interface Skill {
  title: string;
  image: string;
}
interface SkillCardProp {
  skill: Skill;
  accentColor: string;
}

const SkillCard = ({ skill, accentColor }: SkillCardProp) => {
  const { image, title } = skill;
  return (
    <div
      className="group relative flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl bg-base-content/[0.02] border border-base-content/5 hover:border-base-content/10 cursor-pointer transition-all duration-300 hover:shadow-lg overflow-hidden"
      style={
        {
          "--accent": accentColor,
        } as React.CSSProperties
      }
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${accentColor}08, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-xl bg-base-content/5 group-hover:bg-base-content/8 group-hover:scale-110 transition-all duration-300">
        <Image
          src={image}
          alt={title}
          width={40}
          height={40}
          className="object-contain w-8 h-8 sm:w-10 sm:h-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      {/* Title */}
      <span className="relative text-[12px] sm:text-[14px] font-semibold text-base-content/70 group-hover:text-base-content transition-colors duration-300 text-center">
        {title}
      </span>
    </div>
  );
};

export default SkillCard;
