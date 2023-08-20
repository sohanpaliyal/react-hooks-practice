import './App.css';
import React from 'react';
// import StateAndEffect from "./hooks-component/StateAndEffect";
// import UseMemo from "./hooks-component/UseMemo";
import UseRef from './hooks-component/UseRef';
import UseContext from './hooks-component/UseContext';
import { ThemeProvider } from './hooks-component/ThemeContext';
import UseReducer from './hooks-component/UseReducer';
import UseReducer2 from './hooks-component/UseReducer2';
import UseCallback from './hooks-component/UseCallback';

// export const ThemeContext  = React.createContext();



function App() {
 
  const [name , setName  ] = React.useState('')

console.log('app fn' , name);

// const [resourceType , setResourceType] = React.useState('posts')




// React.useEffect(()=>{
//   console.log('effect call')

//   return ()=>{
//     console.log('effect return callled');
//   }
// },[resourceType])



  return (

    <>
          
            {/* <button onClick={()=>setResourceType('posts')}>Posts</button>
            <button onClick={()=>setResourceType('users')}>Users</button>
            <button onClick={()=>setResourceType('comments')}>Comments</button>
            <h1>{resourceType}</h1> */}



            {/* hello there */}
            
            
            {/* <UseMemo/> */}
            <ThemeProvider >
                <UseContext></UseContext>
            </ThemeProvider>
                <UseRef name={name} setName={setName}/>
                  <input  value={name} onChange={(e)=>setName(e.target.value)} placeholder='app input'/>
                
                <UseReducer/>
                <UseReducer2/>
              {/* <StateAndEffect /> */}



              <UseCallback/>

    </>
  );


}

export default App;
