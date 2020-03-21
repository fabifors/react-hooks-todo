import React, { useReducer, useState } from 'react';
import TodoItem from '../components/TodoItem.js'

import reducer from '../store/TodosReducer.js';

const initialState = {
  todos: []
}

function Todos () {
  const [ content, setContent ] = useState('');
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { todos } = state;

  return (
    <div className="todos">
      <div className="input-group">
        <div className="input-group__icon"></div>
        <input 
          className="input-group__input"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          type="text"
          />
        <button
          className="input-group__action"
          onClick={() => dispatch({type: 'add', payload: { content }})}
          >Add Todo</button>
      </div>
      <div className="todos-list">
        <ul>
          { todos.map(todo => (
            <TodoItem
              key={todo.id}
              todoItem={todo}
              handleEdit={(payload) => dispatch({ type: 'edit', payload })}
              handleRemove={(id) => dispatch({ type: 'remove', payload: { id } })}
              handleToggleEdit={(id) => dispatch({ type: 'toggle-edit', payload: { id } })}
              handleToggleDone={(id) => dispatch({ type: 'toggle-done', payload: { id } })}
              />
          )) }
        </ul>
      </div>
    </div>
  );
}

export default Todos;
