import { useState } from "react";
import { connect } from 'react-redux'
import store from './Store';
import './App.css';
import HelloComponent from "./HelloComponent";



const cityAction = (data) => (dispatch) => {
  return {
    type: 'AAAAAAAAAAAA'
  };
};

const cityListService = (data, ...rest) => {
  
  return (dispatch) => {
    dispatch({type: 'AAAAAAAAAAAA'})
  }
  //fetch('https://jsonplaceholder.typicode.com/photos').then( res => {
  //  res.json().then(data =>{
  //    console.log(data)
  //  }))
  //});

  //return {
  //  type: 'AAAAAAAAAAAA'
  //};
}
const accCityListService=(data) => {
   console.log(data)

   return store.dispatch(
    cityListService(data, (err, res) => {
      console.log('---------------')
      console.log(data)
      console.log('---------------')
    })
  );

}

function App(props) {

 return (
    <div className="App">
      <div className='container'>
        <HelloComponent/>    
      </div>
    </div>
  );
}
 

export default App;

 
