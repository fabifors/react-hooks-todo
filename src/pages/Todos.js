import React, { useReducer, useState } from 'react';
import TodoItem from '../components/TodoItem.js'

const initialState = {
  todos: []
}

function createTodo (content) {
  return {
    id: Date.now(),
    content: content,
    done: false,
    edit: false
  }
}

function reducer (state, action) {
  let index;
  const { type, payload } = action;
  switch (type) {
    case 'add':
      let todo = createTodo(payload.content);
      state.todos.push(todo);
      return { todos: [ ...state.todos ] };

    case 'remove':
      let newState = state.todos.filter(todo => todo.id !== payload.id)
      return { todos: [ ...newState ] };

    case 'edit':
      index = state.todos.findIndex(todo => todo.id === payload.id)
      state.todos[index].content = payload.content
      return { todos: [ ...state.todos ] };

    case 'toggle-done':
      index = state.todos.findIndex(todo => todo.id === payload.id);
      if (state.todos[index].done) {
        state.todos[index].done = false;
      } else {
        state.todos[index].done = true;
      }
      return {todos: [ ...state.todos ]};

    case 'toggle-edit':
      console.log(payload.id);
      index = state.todos.findIndex((todo) => todo.id === payload.id);
      state.todos[index].edit = !state.todos[index].edit;
      return { todos: [ ...state.todos ]};

    default: throw new Error();
  }
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
