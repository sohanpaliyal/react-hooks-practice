import React from 'react'
import UseCallbackExample from './UseCallbackExample';

export default function UseCallback() {

    // the only difference between useCallBack and useMemo is useMemo takes function but it only return that function 's retrun value only.
    // but useCallback return that function itself 
    const [number , setNumber ] = React.useState(1);
    const [dark , setDark] = React.useState(false);
    const getItems = React.useCallback((inrementor) =>{
        return [number + inrementor , number + 1 + inrementor , number + 2 + inrementor ,]
    } , [number])    
  
    const theme ={
        backgroundColor : dark ? '#333' : '#ccc',
        color : dark ? '#ccc' : '#333',
    }
    return (
        <div style={theme}>
            <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)}/>
            <button onClick={()=> setDark(prev=>!prev)}>
                toggle theme
            </button>

            <UseCallbackExample getItems={getItems}/>
        </div>
    )
}
