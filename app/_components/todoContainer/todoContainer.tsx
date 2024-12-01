import { Tab } from "../types/tabs.type";
import { Tabs } from "../tabs";
import { TodoList } from "../todoList";
import { TaskForm } from "../taskForm";
import { Toaster } from "react-hot-toast";
import { CompletedTasks } from "../compeletTodos";

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
    {
      label: "Completed",
      content: <CompletedTasks />,
    },
  ];

  return (
    <div className="flex flex-col items-center w-[65%] mb-10 bg-white shadow-2xl container">
      <Toaster position="bottom-left" reverseOrder={false} />
      <div className="w-full flex justify-center items-center bg-primary h-[50px]">
        <p className="text-xl text-white font-semibold">ToDo List</p>
      </div>
      <div className="p-5 flex justify-center items-start w-full">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
};
