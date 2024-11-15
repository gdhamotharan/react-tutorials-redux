import { useState } from "react";
import './App.css';
import store from './Store';


function App() {

  const [counter, setCounter] = useState("");
  return (
    <div className="App">
      <div className='container'>
          <button onClick={()=>{ 
              setCounter(store.getState().counter);
              store.dispatch({'type':'TEST'})
            }
          }>test</button>
        <h1>{counter}</h1>
      
      </div>
    </div>
  );
}

export default App;
