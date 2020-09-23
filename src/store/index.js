import { createStore } from 'redux';
const store = createStore(fn);

const state = store.getState();



const ADD_TODO = (payload) => {
  return {
    type: 'ADD_TODO',
    payload
  }
};

store.dispatch({ type: 'ADD_TODO', payload: 'text' })
store.dispatch(ADD_TODO('hello world'))