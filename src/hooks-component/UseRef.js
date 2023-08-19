import React, { useEffect } from 'react'


export default function UseRef(props) {
    
    
    // on useRef update the component is not re-rendering itself just like it 'll do if we update  any useState  
    // and we can also use useRef to get any html element reference just viewChildren in the angular example is given below in the component
    // if we are updating any input's value by its reference then it will not going to update linked useState variable ==> in the example given 
    // below you can see if we update value of input by its reference the value of name will not update itSelf.

    // do not do by ref appendChild or removeCHild in the dom it has drw backs


    // if you want to store previous value of any state then you can also use useRef
   
    const renderCount = React.useRef(0)
    const inputRef = React.useRef();

    useEffect(()=>{
        renderCount.current+=1;
    })

    const focus =() =>{
        console.log(inputRef.current)
        inputRef.current.focus()
        inputRef.current.value = 'hello there';

        // console.log("name ==>",props.name)
    }


  return (
    <div>
            <input ref={inputRef} value={props.name} onChange={(e)=>props.setName(e.target.value)}/>
            {renderCount.current}
            <button onClick={focus}>focus on input by useRef</button>
        
       
                     
 
    </div>
  )
}
