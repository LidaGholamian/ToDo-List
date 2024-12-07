import { Todo } from "../_components/types/list.type";

export interface TodoState {
  todos: Todo[];
}

export type TodoContextType= {
    todos: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
  }

  export type TodoAction =
  | { type: "ADD_TASK"; payload: { title: string; date: string } }
  | { type: "DELETE_TASK"; payload: number }
  | { type: "TOGGLE_TASK"; payload: number }
  | { type: "INITIALIZE_TASKS"; payload: Todo[] }
  | { type: "REORDER_TASKS"; payload: Todo[] };
