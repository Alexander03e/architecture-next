"use client";
import { FC, useState } from "react";
import styles from "./TodoItem.module.css";
import { ITodoItemProps } from "./TodoItem.interface";
import { useTodoStore } from "../../../../store/todo/todo.store";

export const TodoItem: FC<ITodoItemProps> = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodoStore();
  const { title, isChecked, body, id } = todo;
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => toggleTodo(todo.id)}
        />
        <h3>{title}</h3>
        <button className={styles.deleteButton} onClick={() => deleteTodo(id)}>
          X
        </button>
        <p>
          {id} {isChecked}
        </p>
      </div>
      <p>{body}</p>
    </div>
  );
};
