import React from 'react'
import {  useTheme , useThemeUpdate } from "./ThemeContext";
export default function UseContext() {
    
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();

    const themeStyles  =  {
            backgroundColor : darkTheme ? '#333' : '#ccc',
            color : darkTheme ? '#ccc' : '#333',
            margin : '2rem',
            padding : '2rem'
        }
  return (
    <div>
        
                            
                             <button onClick={toggleTheme} > Toggle Theme </button>
                            <div style={themeStyles}>
                                theme
                            </div>
        
    </div>
  )
}
