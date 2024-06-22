export interface ITodoStore {
  todos: ITodoItem[];
  addTodo: (data: ITodoItem) => any;
  toggleTodo: (todoId: number) => void;
  deleteTodo: (todoId: number) => void;
}
