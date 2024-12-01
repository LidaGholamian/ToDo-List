"use client";

import { useTodoContext } from "@/app/context";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

export const TaskForm: React.FC = () => {
  const { addTodo } = useTodoContext();
  const [newTodo, setNewTodo] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      toast.success("Task added successfully");
      setNewTodo("");
    } else if (newTodo.trim() === "") {
      // No task text, do nothing or show a warning toast
      toast.error("Please enter a task before adding!");
      return;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="w-full">
      <p className="text-xs md:text-base lg:text-base xl:text-base text-neutral font-semibold">
        Tasks*
      </p>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a new task..."
          className="flex-grow border border-gray-300 rounded p-2"
        />
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
