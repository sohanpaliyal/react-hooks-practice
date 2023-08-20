import React from 'react'
import Todo from './Todo'


function reducer(todos , action){
    switch(action.type){
        case 'addTodo':
            return [ ...todos , newTodo(action.payload.name)]
        case 'toggleTodo':
            return todos.map((todo)=>{
                if(todo.id === action.payload.id) return { ...todo , complete : !todo.complete }
                else return todo
            }) 
        case 'deleteTodo':
            return todos.filter((todo)=>(todo.id !== action.payload.id)) 
        default :
            return todos
    }
}

function newTodo(name){
    return {id : Date.now() , name  , complete : false}
}


export default function UseReducer2() {
  
    const [ todos , dispatch ] = React.useReducer(reducer , [] )
    const [name , setName ] = React.useState('');

    function handleSubmit(e){
        e.preventDefault()
        dispatch({type : 'addTodo' , payload :{name}})
        setName('')
    }

    console.log(todos)
    return (
    <div>
         <h1> use reducer 2 functional component example = </h1>    

      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} />
      </form>

      {
        todos.map((el)=>{
            return <Todo key={el.id} todo={el} dispatch={dispatch}/>
        })
      }
    </div>
  )
}
