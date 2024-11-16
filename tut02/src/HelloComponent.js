import { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import store from './Store'
import { testSvc } from './services/testsvc'

const testService =  (data) => {
    return store.dispatch(testSvc());
  }

const HelloComponent = (props) =>{
    const counterSelector = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const [counter,setCounter]= useState(0)

    return (
    <>
    <button onClick={()=>{
         setCounter(props.mycounter)
         console.log(">>>" + props.mycounter)
    }
    }>test</button>
    <h1>{counter}</h1>
    <button onClick={()=>{
         props.counterService()
    }
    }>test2</button>
     

    </>)
   
    
}
const mapStateToProp = (state) => ({
        mycounter: state.counter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    counterService: (data) => {
        return dispatch(testSvc())
    }
})

export default connect(mapStateToProp,mapDispatchToProps)(HelloComponent);
 
