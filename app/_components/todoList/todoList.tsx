"use client";

import { Todo } from "../types/list.type";
import { RiInformation2Line } from "react-icons/ri";
import { IoStar } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";
import { useTodoContext } from "@/app/context";

export const TodoList = () => {
  // const lists: Todo[] = [
  //   {
  //     id: 1,
  //     title: "task 1",
  //     favIcon: true,
  //     completed: false,
  //   },
  //   {
  //     id: 2,
  //     title: "task 2",
  //     favIcon: false,
  //     completed: true,
  //   },
  //   {
  //     id: 3,
  //     title: "task 2",
  //     favIcon: false,
  //     completed: true,
  //   },
  //   {
  //     id: 4,
  //     title: "task 2",
  //     favIcon: false,
  //     completed: true,
  //   },
  //   {
  //     id: 5,
  //     title: "task 2",
  //     favIcon: false,
  //     completed: true,
  //   },
  //   {
  //     id: 6,
  //     title: "task 2",
  //     favIcon: false,
  //     completed: true,
  //   },
  //   {
  //     id: 7,
  //     title: "task 2",
  //     favIcon: false,
  //     completed: true,
  //   },
  //   {
  //     id: 8,
  //     title: "task 2",
  //     favIcon: false,
  //     completed: true,
  //   },
  // ];

  const { todos, deleteTodo, toggleTodo } = useTodoContext();
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between border-b pb-2 gap-3"
        >
          <div
            className={`flex-grow cursor-pointer ${
              todo.completed ? "line-through text-error" : ""
            }`}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.title}
          </div>
          <RiInformation2Line />
          <div>{todo.favIcon ? <IoStar /> : <IoStarOutline />}</div>
          <FiEdit />
          <button
            onClick={() => deleteTodo(todo.id)}
            className="hover:bg-error/90 hover:text-white text-xs md:text-base lg:text-base xl:text-base p-1 rounded"
          >
            <MdDeleteOutline />
          </button>
        </li>
      ))}
    </ul>
  );

  // const onRenderCell = (list: Todo) => {
  //   return (
  //     <div className="list-item" key={list.id}>
  //       <div className="flex items-center justify-center text-xs md:text-base lg:text-base xl:text-base">
  //         {list.title}
  //       </div>
  //       <div className="flex gap-2 items-center justify-center text-xs md:text-base lg:text-base xl:text-base pr-2">
  //         <RiInformation2Line />
  //         <div>{list.favIcon ? <IoStar /> : <IoStarOutline />}</div>
  //         <FiEdit />
  //         <MdDeleteOutline />
  //       </div>
  //     </div>
  //   );
  // };
  // return <div className="list">{todos.map(onRenderCell)}</div>;
};
