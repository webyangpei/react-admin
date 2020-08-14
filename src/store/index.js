import { createStore } from 'redux';
const store = createStore(fn);

const state = store.getState();



const action = (payload) => {
  return {
    type: 'ADD_TODO',
    payload
  }
};

// store.dispatch({ type: 'ADD_TODO', payload: 'text' })
store.dispatch(action('hello world'))