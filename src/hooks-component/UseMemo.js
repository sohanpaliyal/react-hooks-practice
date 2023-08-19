import React from 'react'

export default function UseMemo() {

    const [number , setNumber ] = React.useState(0);
    const [ dark  , setDark ] = React.useState(false);

    const doubleNumber = React.useMemo(()=>{return slowFun(number)}, [number] );

    const themeStyles = React.useMemo(()=>{ 
       return  {
        backgroundColor : dark ? 'black' : 'white',
        color : dark ? 'white' : 'black'
        }
    },[dark])


    React.useEffect(()=>{console.log("theme changed")},[themeStyles])

  return (
    <>
        <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>
        <button onClick={()=>setDark((prev)=>!prev)}> change Theme </button>
        <div style={themeStyles}>
            {doubleNumber}
        </div>
    </>
  )
}



function slowFun(num){
    console.log('calling slow fn');
    for (let index = 0; index < 100000000; index++) {}
    return num * 2;
}