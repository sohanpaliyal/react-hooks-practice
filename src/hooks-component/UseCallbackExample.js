import React from 'react'

export default function UseCallbackExample({getItems}) {
    const [items , setItems ] = React.useState([])

    React.useEffect(()=>{
        setItems(getItems(5))
        console.log("updateing items ==>");
    },[getItems])


    return  items.map(item => <div key={item} > {item} </div>)
  
}
