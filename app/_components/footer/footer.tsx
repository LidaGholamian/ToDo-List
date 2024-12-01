import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const Footer: React.FC = () => {
  return (
    <div
      dir="ltr"
      className="flex flex-col justify-start items-center pb-4 text-white w-full container"
    >
      <div className="w-[65%] mx-auto flex flex-col gap-4 justify-start items-start">
        <div className="flex justify-center gap-2 items-center">
          <HiOutlineMail className="text-white text-xl" />
          <span className="text-white text-xl">ta.gholamian@gmail.com</span>
        </div>
        <div className="flex justify-center gap-2 items-center">
          <FaPhoneAlt className="text-white text-xl" />
          <span className="text-white text-xl">09352993146</span>
        </div>
      </div>
    </div>
  );
};
