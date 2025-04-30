import { ReactNode } from "react";
import { Poppins } from "next/font/google";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: "500",
});

//define props type
type Props = {
  children: ReactNode;
};
const SectionHeading = ({ children }: Props) => {
  return (
    <div
      className={`flex justify-center  uppercase  text-white text-[26px] sm:text-3xl md:text-4xl`}
    >
      {/* Section Heading */}
      <p
        className={`bg-neutral px-3 py-2 lg:px-4 lg:py-3 rounded ${poppinsFont.className}`}
      >
        {children}
      </p>
    </div>
  );
};

export default SectionHeading;
