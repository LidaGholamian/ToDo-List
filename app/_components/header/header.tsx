import { ImCheckmark } from "react-icons/im";

export const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center text-neutral p-4 container h-[80px]">
      <div className="w-[65%] mx-auto flex justify-between items-center">
        <ImCheckmark className="text-xl text-white" />
        <span className="text-xl text-white">ToDo List</span>
      </div>
    </div>
  );
};
