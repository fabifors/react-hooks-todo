import React, { useState } from "react";

const INITIAL_STATE = {
  todos: []
};

const [state, setState] = useState(INITIAL_STATE);

const methods = {
  init: () => {
    const localStore = localStorage.getItem("todos");
    if (localStore) {
      setState({ ...localStore });
    }
  }
};

export default {
  state,
  methods
};
