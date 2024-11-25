"use client";

import { createContext, useContext, useState } from "react";
import { Todo } from "../_components/types/list.type";
import { TodoContextType } from "../types/todoContext.type";

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todos, setTodo] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    setTodo((prev) => [
      ...prev,
      { id: Date.now(), title, favIcon: false, completed: false },
    ]);
  };

  const toggleTodo = (id: number) => {
    setTodo((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodo((prev) => prev.filter((todos) => todos.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
};
