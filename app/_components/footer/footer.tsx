import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const Footer: React.FC = () => {
  return (
    <div dir="ltr" className="flex flex-col justify-start items-center pb-8">
      <div className="w-[80%] mx-auto flex flex-col gap-4 justify-start items-start dark:text-white text-neutral text-xl">
        <div className="flex justify-center gap-2 items-center">
          <HiOutlineMail />
          <span>ta.gholamian@gmail.com</span>
        </div>
        <div className="flex justify-center gap-2 items-center">
          <FaPhoneAlt />
          <span>09352993146</span>
        </div>
      </div>
    </div>
  );
};
