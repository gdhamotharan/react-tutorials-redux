import { combineReducers } from "redux";
import { cityReducer } from "./cityReducer";
import { counterReducer } from "./counterReducer"




const createRootReducer = () =>{
    combineReducers({
        cityReducer,
        counterReducer
    })
}

export default createRootReducer;