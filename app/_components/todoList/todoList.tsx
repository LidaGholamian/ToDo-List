"use client";

import { MdDeleteOutline } from "react-icons/md";
import { useTodoContext } from "@/app/context";
import toast from "react-hot-toast";

export const TodoList = () => {
  const { state, dispatch } = useTodoContext();

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-xs md:text-base lg:text-base xl:text-base text-neutral font-semibold">
        Task List *
      </h2>
      <ul className="space-y-2">
        {state.todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between text-neutral/80 dark:bg-grey/15 dark:hover:bg-grey/25 bg-grey/5 hover:bg-grey/15 p-2 rounded-md gap-3"
          >
            <div
              className={`flex flex-col justify-center items-start flex-grow cursor-pointer text-neutral-content ${
                todo.completed ? "line-through dark:text-error text-error" : ""
              }`}
              onClick={() =>
                dispatch({ type: "TOGGLE_TASK", payload: todo.id })
              }
            >
              <span>{todo.title}</span>
              <span
                className={`text-xs text-grey/50 ${
                  todo.completed
                    ? "line-through dark:text-error text-error"
                    : ""
                }`}
              >
                Added on: {formatDate(todo.date)}
              </span>
            </div>
            <button
              onClick={() =>
                dispatch({ type: "DELETE_TASK", payload: todo.id })
              }
              className="hover:bg-error/90 hover:text-white p-1 rounded"
            >
              <MdDeleteOutline className="text-[20px] dark:text-neutral-content" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
