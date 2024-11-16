const counterState = { counter: 0 };

export const counterReducer =(state=counterState, action)=>{
    console.log("counterReducer>>>>>>>>>>>>")
    return { counter: state.counter + 1 };
  }