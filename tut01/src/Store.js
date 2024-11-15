import { createStore } from 'redux'

const counterState = { counter: 0 };

const reducer =(state=counterState, action)=>{
    console.log(state.counter)
 
    return { counter: state.counter + 1 };
  }
  const store = createStore(reducer);

  export default store;
  