interface ITodoItemProps {
  todo: Pick<ITodoItem, "body" | "isChecked" | "title" | "id">;
  // toggleTodo: (todoId: number) => void;
}

export type { ITodoItemProps };
