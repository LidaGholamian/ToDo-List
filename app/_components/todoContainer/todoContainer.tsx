import { Tab } from "../types/tabs.type";
import { Tabs } from "../tabs";
import { TodoList } from "../todoList";
import { TaskForm } from "../taskForm";
import { Toaster } from "react-hot-toast";

export const TodoContainer: React.FC = () => {
  const tabs: Tab[] = [
    {
      label: "Tasks",
      content: <TodoList />,
    },
    {
      label: "Task Form",
      content: <TaskForm />,
    },
  ];

  return (
    <div className="flex flex-col items-center w-[80%] mb-10 bg-white dark:bg-secondary shadow-2xl rounded-lg container  overflow-y-auto">
      <Toaster position="bottom-left" reverseOrder={false} />
      <div className="w-full flex justify-center items-center bg-blue h-[50px] rounded-t-lg">
        <p className="text-xl text-white font-semibold">ToDo List</p>
      </div>
      <div className="p-5 flex justify-center w-full">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
};
