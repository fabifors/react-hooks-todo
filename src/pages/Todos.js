import React, { useReducer } from "react";

import reducer from "../store/TodosReducer.js";
import AddTodoItem from "../components/AddTodoItem.js";
import TodosList from "../components/TodosList.js";

function Todos() {
  const initialState = { todos: [] };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { todos } = state;
  console.log(state);

  return (
    <div className="todos">
      <h1 className="page-title">Todos</h1>
      <AddTodoItem dispatch={dispatch} />
      <TodosList dispatch={dispatch} todos={todos} />
    </div>
  );
}

export default Todos;
