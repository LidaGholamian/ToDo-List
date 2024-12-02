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
    <ul className="space-y-2">
      {state.todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between border-b pb-2 gap-3"
        >
          <div
            className={`flex justify-between items-center flex-grow cursor-pointer ${
              todo.completed ? "line-through text-error" : ""
            }`}
            onClick={() => dispatch({ type: "TOGGLE_TASK", payload: todo.id })}
          >
            <span>{todo.title}</span>
            <span className="text-xs text-grey">
              Added on: {formatDate(todo.date)}
            </span>
          </div>
          <button
            onClick={() => dispatch({ type: "DELETE_TASK", payload: todo.id })}
            className="hover:bg-error/90 hover:text-white p-1 rounded"
          >
            <MdDeleteOutline className="text-[20px]" />
          </button>
        </li>
      ))}
    </ul>
  );
};
