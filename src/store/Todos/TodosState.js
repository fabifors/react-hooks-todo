import React, { useState } from "react";

const INITIAL_STATE = {
  todos: []
};

const [state, setState] = useState(INITIAL_STATE);

const init = () => {
  const localStore = localStorage.getItem("todos");
  if (localStore) {
    setState({ ...localStore });
  }
};
