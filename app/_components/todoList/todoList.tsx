"use client";

import { MdDeleteOutline } from "react-icons/md";
import { useTodoContext } from "@/app/context";
import { FiCheckCircle, FiCircle } from "react-icons/fi"; // Icons for checkmark
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// Individual Draggable Item
type DraggableItemProps = {
  id: string;
  title: string;
  completed: boolean;
};

export const DraggableItem: React.FC<DraggableItemProps> = ({
  id,
  title,
  completed,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: transform ? CSS.Transform.toString(transform) : undefined,
    transition,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex items-center justify-between p-1 rounded-md cursor-move gap-10"
    >
      <span className={`flex-grow ${completed ? "text-accent/80" : ""}`}>
        {title}
      </span>
    </li>
  );
};

export const TodoList = () => {
  const { state, dispatch } = useTodoContext();

  const toggleTaskCompletion = (id: number) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  };

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

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    // If no valid drop target, return
    if (!over || active.id === over.id) return;

    const oldIndex = state.todos.findIndex(
      (todo) => todo.id === Number(active.id)
    );
    const newIndex = state.todos.findIndex(
      (todo) => todo.id === Number(over.id)
    );

    const reorderedTodos = arrayMove(state.todos, oldIndex, newIndex);
    dispatch({ type: "REORDER_TASKS", payload: reorderedTodos });
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-xs md:text-base lg:text-base xl:text-base text-neutral dark:text-white font-semibold">
        Task List *
      </h2>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={state.todos.map((todo) => todo.id.toString())}
          strategy={verticalListSortingStrategy}
        >
          <ul className="space-y-2">
            {state.todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between dark:bg-grey/15 dark:hover:bg-grey/25 bg-grey/5 hover:bg-grey/15 p-2 rounded-md gap-2"
                draggable
              >
                <div
                  className="flex justify-between items-center flex-grow cursor-pointer text-neutral-content dark:text-white gap-7"
                  onClick={() =>
                    dispatch({ type: "TOGGLE_TASK", payload: todo.id })
                  }
                >
                  <div className="flex justify-center items-center gap-1">
                    <span
                      onClick={() => toggleTaskCompletion(todo.id)} // Toggle on checkmark click
                      className="cursor-pointer text-[20px]"
                    >
                      {todo.completed ? (
                        <FiCheckCircle className="text-accent/80 dark:text-green-400" />
                      ) : (
                        <FiCircle className="text-gray-400 dark:text-gray-500" />
                      )}
                    </span>
                    {/* Draggable item */}
                    <DraggableItem
                      key={todo.id}
                      id={todo.id.toString()}
                      title={todo.title}
                      completed={todo.completed}
                    />
                  </div>

                  {/* Added date */}
                  <span className="text-grey/50 text-xs">
                    Added on: {formatDate(todo.date)}
                  </span>
                </div>
                <button
                  onClick={() =>
                    dispatch({ type: "DELETE_TASK", payload: todo.id })
                  }
                  className="hover:bg-error/90 hover:text-white p-1 rounded"
                >
                  <MdDeleteOutline className="text-[20px]" />
                </button>
              </li>
            ))}
          </ul>
        </SortableContext>
      </DndContext>
    </div>
  );
};
