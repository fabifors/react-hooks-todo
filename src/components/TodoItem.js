import React from 'react'

export const TodoItem = (props) => {
  const { todoItem, handleRemove, handleToggleEdit, handleEdit, handleToggleDone } = props;
  const { content, id, edit, done } = todoItem;

  const renderContent = (<span onClick={() => handleToggleEdit(id)}>{content}</span>);
  const renderInput = (
    <form onSubmit={(e) => { 
      handleToggleEdit(id);
      e.preventDefault(); 
      }}>
      <input 
        type="text"
        action="submit"
        value={content}
        onChange={(e) => handleEdit({id, content: e.target.value})}
        />
    </form>
  );

  return (
    <li 
      className={ `todo-item ${done ? 'todo-item--done' : ''}`}
      >
      <div
        className="todo-item__state"
        onClick={() => handleToggleDone(id)}
        >
          {done ? '✔' : ''}
        </div>
      <div className="todo-item__content">
        { edit ? renderInput : renderContent }
      </div>
      <div className="todo-item__actions">
        <span
          role="img"
          aria-label="remove"
          className="todo-item__actions__remove"
          onClick={() => handleRemove(id)}
          >💩</span>
      </div>
    </li>
  )
}

export default TodoItem;