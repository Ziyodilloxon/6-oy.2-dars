import React, { useState } from "react";
import "./App.css";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inpValue, setInpValue] = useState("");

  const handleChange = (e) => {
    setInpValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inpValue !== "") {
      setTodos([...todos, inpValue]);
      setInpValue("");
    }
  };

  return (
    <div className="div">
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="inp"
          type="text"
          value={inpValue}
          onChange={handleChange}
        />
        <button className="btn" type="submit">
          Add Todo
        </button>
      </form>
      <ul className="list">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return <TodoApp />;
}

export default App;
