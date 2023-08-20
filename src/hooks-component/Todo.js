import React from 'react'

export default function Todo({todo , dispatch}) {
  return (
    <div>
      <span  style={{color : todo.complete ? "#AAA" : "#000" } }>{todo.name}</span>
      <button onClick={()=>dispatch( {type : 'toggleTodo' , payload :{id  : todo.id}} ) }>toggle</button>
      <button onClick={()=>dispatch( {type : 'deleteTodo' , payload :{id  : todo.id}} ) }>delete</button>
    </div>
  )
}
