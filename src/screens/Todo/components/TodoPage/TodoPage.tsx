import { AddTodoForm, TodoList } from "../../../../modules/Todos";
import styles from "./TodoPage.module.css";

export const TodoPage = () => {
  return (
    <div className={styles.wrapper}>
      Todo page
      <AddTodoForm />
      <TodoList />
    </div>
  );
};
