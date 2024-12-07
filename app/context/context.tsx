"use client";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
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
        title: action.payload.title, // Get title from payload
        completed: false,
        date: action.payload.date || new Date().toISOString(), // Get date from payload
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

    case "REORDER_TASKS":
      return { ...state, todos: action.payload };

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
  const [isClient, setIsClient] = useState(false);

  const [state, dispatch] = useReducer(
    todoReducer,
    initialState,
    (initialState: TodoState): TodoState => {
      if (typeof window !== "undefined") {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? { todos: JSON.parse(savedTodos) } : initialState;
      }
      return initialState;
    }
  );

  useEffect(() => {
    // Ensure that the code is running only in the browser
    setIsClient(true);
  }, []);

  // Load tasks from localStorage once the component has mounted (client-side only)
  useEffect(() => {
    if (isClient && typeof window !== "undefined") {
      const savedTodos = localStorage.getItem("todos");
      if (savedTodos) {
        dispatch({ type: "INITIALIZE_TASKS", payload: JSON.parse(savedTodos) });
      }
    }
  }, [isClient]);

  // Persist tasks to localStorage whenever tasks change (client-side only)
  useEffect(() => {
    if (isClient && typeof window !== "undefined") {
      // Whenever the tasks array changes (add, delete, toggle), save to localStorage
      localStorage.setItem("todos", JSON.stringify(state.todos));
    }
  }, [state.todos, isClient]);

  // Render nothing initially on the server
  if (!isClient) {
    return null;
  }
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};
