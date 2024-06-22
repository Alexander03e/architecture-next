"use client";
import { useTodoStore } from "@/store/todo/todo.store";
import { TodoItem } from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

export const TodoList = () => {
  const { todos, addTodo } = useTodoStore();
  return (
    <div className={styles.wrapper}>
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </div>
  );
};
