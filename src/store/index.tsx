import { createStore } from 'redux';
// @ts-ignore
const store = createStore(fn);

const state = store.getState();



const ADD_TODO = (payload:any) => {
  return {
    type: 'ADD_TODO',
    payload
  }
};

store.dispatch({ type: 'ADD_TODO', payload: 'text' })
store.dispatch(ADD_TODO('hello world'))