// Should the todos be created inside the component instead of in the state reducer? Move this anyway
function createTodo(content) {
  return {
    id: Date.now(),
    content: content,
    done: false,
    edit: false
  };
}

function TodosReducer(state, action) {
  let index;
  const { type, payload } = action;
  switch (type) {
    case "add":
      let todo = createTodo(payload.content);
      return { todos: [...state.todos, todo] };

    case "remove":
      let newState = state.todos.filter(todo => todo.id !== payload.id);
      return { todos: [...newState] };

    case "edit":
      const nextTodos = [...state.todos];
      index = nextTodos.findIndex(todo => todo.id === payload.id);
      const nextTodo = { ...nextTodos[index] };
      nextTodo.content = payload.content;
      nextTodos[index] = { ...nextTodo };
      return { todos: [...nextTodos] };

    case "toggle-done":
      index = state.todos.findIndex(todo => todo.id === payload.id);
      if (state.todos[index].done) {
        state.todos[index].done = false;
      } else {
        state.todos[index].done = true;
      }
      return { todos: [...state.todos] };

    case "toggle-edit":
      console.log(payload.id);
      index = state.todos.findIndex(todo => todo.id === payload.id);
      state.todos[index].edit = !state.todos[index].edit;
      return { todos: [...state.todos] };

    default:
      throw new Error();
  }
}

export default TodosReducer;
