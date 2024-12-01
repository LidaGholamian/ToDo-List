"use client";

import { createContext, useContext, useReducer, useState } from "react";
import { Todo } from "../_components/types/list.type";
import { TodoAction, TodoState } from "../types/todoContext.type";

const initialState: TodoState = {
  todos: [],
};

// reducer function
const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case "ADD_TASK":
      const addTodo: Todo = {
        id: Date.now(),
        title: action.payload,
        completed: false,
        date: new Date().toISOString(),
      };
      return { todos: [...state.todos, addTodo] };

    case "DELETE_TASK":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "TOGGLE_TASK":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    default:
      return state;
  }
};

// create context
const TodoContext = createContext<{
  state: TodoState;
  dispatch: React.Dispatch<TodoAction>;
}>({ state: initialState, dispatch: () => undefined });

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};
