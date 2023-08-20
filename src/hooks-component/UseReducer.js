import React from 'react'




    function reducer(state , action){
        switch(action.type){
            case 'increment':
                return { count : state.count + 1}
            case 'decrement':
                return { count : state.count - 1}
            default :
                return state
        }
    }

export default function UseReducer() {
    const [state , dispatch] = React.useReducer(reducer , {count : 0})
  return (
    <div>
        <h1> use reducer functional component </h1>
        <button onClick={()=>dispatch({type : 'decrement'})}> decrement </button>
        <span> { state.count } </span>
        <button onClick={()=>dispatch({type : 'increment'})}> increment </button>
    </div>
  )
}
