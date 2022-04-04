import React from "react";
import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./data";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddButton = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Todo List</span>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAddButton={handleAddButton}
      />
    </div>
  );
};

export default App;
