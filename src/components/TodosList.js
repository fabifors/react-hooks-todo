import React from "react";
import TodoItem from "./TodoItem";

function TodosList(props) {
  const { todos, dispatch } = props;
  return (
    <div className="todos-list">
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todoItem={todo}
            handleEdit={payload => dispatch({ type: "edit", payload })}
            handleRemove={id => dispatch({ type: "remove", payload: { id } })}
            handleToggleEdit={id =>
              dispatch({ type: "toggle-edit", payload: { id } })
            }
            handleToggleDone={id =>
              dispatch({ type: "toggle-done", payload: { id } })
            }
          />
        ))}
      </ul>
    </div>
  );
}

export default TodosList;
