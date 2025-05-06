import * as motion from "motion/react-client";
import Image from "next/image";
interface FrontendSkill {
  title: string;
  image: string;
}
interface FrontendSkillProp {
  skill: FrontendSkill;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const SkillCard = ({ skill }: FrontendSkillProp) => {
  const { image, title } = skill;
  return (
    <motion.div className="py-4 px-3 sm:p-6  hover:bg-info/30 duration-300 transition-all cursor-pointer text-center rounded-full bg-base-300">
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="object-cover w-[60px] sm:w-[80px] mx-auto"
      />
      <h1 className="text-[12px] sm:text-[18px] mt-4 text-base-content font-[600]">
        {title}
      </h1>
    </motion.div>
  );
};

export default SkillCard;
