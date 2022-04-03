const InputField = () => {
  return (
    <form className="input">
      <input type="input" placeholder="Enter task" className="input_box" />
      <button className="btn" type="submit">
        Go!
      </button>
    </form>
  );
};

export default InputField;
