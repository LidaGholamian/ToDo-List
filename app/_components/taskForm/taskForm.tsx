"use client";

import { useTodoContext } from "@/app/context";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { toast } from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";

export const TaskForm: React.FC = () => {
  const { dispatch } = useTodoContext();

  const [newTodo, setNewTodo] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleAddTodo = () => {
    if (newTodo.trim() === "") {
      // No task text, do nothing or show a warning toast
      toast.error("Please enter a task before adding!");
      return;
    }
    dispatch({
      type: "ADD_TASK",
      payload: {
        title: newTodo,
        date: selectedDate
          ? selectedDate.toISOString()
          : new Date().toISOString(),
      }, // Pass both title and date
    });
    toast.success("Task added successfully!");
    setNewTodo("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="w-full">
      <p className="text-xs md:text-base lg:text-base xl:text-base text-neutral dark:text-white font-semibold">
        Tasks*
      </p>
      <div className="flex gap-2 mb-4 w-[100%]">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a new task..."
          className="flex-grow w-[80%] border border-gray-300 rounded p-2 dark:bg-grey/15 dark:text-white text-neutral/80"
        />
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date | null) => setSelectedDate(date)}
          placeholderText="set a date please"
          className="form-control form-control-solid w-full border-grey/15 dark:bg-grey/15 dark:text-white text-neutral/80 rounded p-2 "
          isClearable={true}
        />
      </div>

      <button
        onClick={handleAddTodo}
        className="bg-blue text-white text-xs md:text-base lg:text-base xl:text-base px-4 py-2 rounded"
      >
        Add
      </button>
    </div>
  );
};
