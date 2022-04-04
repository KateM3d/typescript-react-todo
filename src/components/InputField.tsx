interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddButton: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAddButton }) => {
  return (
    <form className="input" onSubmit={handleAddButton}>
      <input
        type="input"
        placeholder="Enter task"
        className="input_box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="btn" type="submit">
        Go!
      </button>
    </form>
  );
};

export default InputField;
