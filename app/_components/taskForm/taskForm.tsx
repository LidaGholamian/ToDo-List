"use client";

import { useTodoContext } from "@/app/context";
import React, { useState } from "react";

export const TaskForm: React.FC = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodoContext();
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };
  return (
    <div className="w-full ">
      <p className="text-xs md:text-base lg:text-base xl:text-base text-neutral font-semibold">
        Tasks*
      </p>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow border border-gray-300 rounded p-2"
        />
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-xs md:text-base lg:text-base xl:text-base text-neutral font-semibold">
          Description*
        </p>
        <textarea
          placeholder="Add some description..."
          className="flex-grow border border-gray-300 rounded p-2"
        ></textarea>
      </div>
      <button
        onClick={handleAddTodo}
        className="bg-primary text-white text-xs md:text-base lg:text-base xl:text-base px-4 py-2 rounded"
      >
        Add
      </button>
    </div>
  );
};
