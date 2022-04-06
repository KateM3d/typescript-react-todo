import { useState } from "react";
import { Todo } from "../data";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import TodoList from "./TodoList";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEddit] = useState<boolean>(false);
  const [editTodo, setEdditTodo] = useState<string>(todo.todo);

  const handleDoneClick = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDeleteClick = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdditTodo = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEddit(false);
  };
  return (
    <form
      className="todos_single"
      onSubmit={(e) => handleEdditTodo(e, todo.id)}
    >
      {edit ? (
        <input
          value={todo.todo}
          onChange={(e) => setEdditTodo(e.target.value)}
          className="todos_single-eddit"
        />
      ) : todo.isDone ? (
        <s className="todos_single-text">{todo.todo}</s>
      ) : (
        <li className="todos_single-text">{todo.todo}</li>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEddit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDeleteClick(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDoneClick(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};
export default SingleTodo;
