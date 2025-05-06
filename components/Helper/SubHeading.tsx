import { ReactNode } from "react";

type Prop = {
  children: ReactNode;
};
const SubHeading = ({ children }: Prop) => {
  return (
    <div className="w-full flex justify-center ">
      <div className="bg-success rounded-2xl font-bold  mt-10 mb-10 text-success-content text-2xl px-3 py-2">
        {children}
      </div>
    </div>
  );
};

export default SubHeading;
