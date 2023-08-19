import React from "react";
 const ThemeContext  = React.createContext();
 const ThemeUpdateContext  = React.createContext();

 export function useTheme(){
    return React.useContext(ThemeContext)
 }

 
 export function useThemeUpdate(){
    return React.useContext(ThemeUpdateContext)
 }


export function ThemeProvider({children}) {
    
    const [darkTheme,setDarkTheme] = React.useState(true);
    
    
    const toggleTheme =() => {
        setDarkTheme((prev)=> !prev );
    }

    return (
        <>
            <ThemeContext.Provider value={darkTheme}>
                <ThemeUpdateContext.Provider value={toggleTheme }>
                    {children}
                </ThemeUpdateContext.Provider>
            </ThemeContext.Provider>
        </>
    )
    
}
