import React, { useState } from "react";

function AddTodoItem({ dispatch }) {
  const [input, setInput] = useState("");

  const handleFormSubmit = e => {
    e.preventDefault();
    dispatch({ type: "add", payload: { content: input } });
    setInput("");
  };

  return (
    <>
      <div className="input-group">
        <div className="input-group__inner">
          <div className="input-group__icon">
            <span role="img" aria-label="todo icon">
              📦
            </span>
          </div>
          <form onSubmit={e => handleFormSubmit(e)}>
            <input
              className="input-group__input"
              placeholder="Add todo"
              value={input}
              onChange={event => setInput(event.target.value)}
              type="text"
            />
            <button className="input-group__action" type="submit">
              ✈
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTodoItem;
