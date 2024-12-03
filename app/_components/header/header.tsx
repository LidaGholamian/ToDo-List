import { ImCheckmark } from "react-icons/im";
import { ThemeSwitch } from "../themeSwitch";

export const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center h-[80px] dark:text-white text-neutral text-xl">
      <div className="w-[80%] mx-auto flex justify-between items-center ">
        <ThemeSwitch />
        <ImCheckmark />
        <span>ToDo List</span>
      </div>
    </div>
  );
};
