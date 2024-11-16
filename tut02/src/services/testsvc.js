import store from '../Store'

export const testSvc=()=>{
    return (dispatch)=>{
        dispatch({type:'testing'})
        console.log('this is testing log.....')
    }
} 