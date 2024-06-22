import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { ITodoStore } from "./todo.interface";

export const useTodoStore = create<ITodoStore>()(
  persist(
    devtools(
      immer((set) => ({
        todos: [],
        deleteTodo: (todoId: number) => {
          set((state) => {
            state.todos = state.todos.filter((todo) => todo.id != todoId);
          });
        },
        toggleTodo: (todoId: number) =>
          set((state) => {
            const todo = state.todos.find((item) => item.id == todoId);
            if (todo) {
              todo.isChecked = !todo.isChecked;
            }
          }),
        addTodo: (data: ITodoItem) =>
          set((state) => {
            let id = Date.now();
            state.todos.unshift({
              body: data.body,
              id,
              isChecked: data.isChecked,
              title: data.title,
            });
          }),
      }))
    ),
    {
      name: "todo-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
