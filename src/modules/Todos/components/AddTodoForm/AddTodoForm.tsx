"use client";
import { SimpleButton } from "@/components/ui/buttons/SimpleButton/SimpleButton";
import styles from "./AddTodoForm.module.css";
import { useTodoStore } from "../../../../store/todo/todo.store";
import { ChangeEvent, useState } from "react";
export const AddTodoForm = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState<boolean>(false);

  const addTodo = useTodoStore((state) => state.addTodo);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  };
  const addTodoHandle = () => {
    if (text != "") {
      setError(false);
      addTodo({
        body: text,
        isChecked: false,
        id: Date.now(),
        title: "todo Title",
      });
      setText("");
      return;
    }
    setError(true);
    return;
  };
  return (
    <div className={styles.wrapper}>
      <input className="input" value={text} onChange={handleChange} />
      <SimpleButton onClick={addTodoHandle}>Добавить</SimpleButton>
      {error && <p>Поле не должно быть пустым</p>}
    </div>
  );
};
