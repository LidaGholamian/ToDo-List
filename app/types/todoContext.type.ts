import { Todo } from "../_components/types/list.type";

export type TodoContextType= {
    todos: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
  }