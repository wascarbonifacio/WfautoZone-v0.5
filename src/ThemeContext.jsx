import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () =>{
    return useContext(ThemeContext);
};

export const ThemeProvider = ( { children } ) =>{
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () =>{
        //esta es la funcion que me devolvera True o false para saber en que estado se encuentra el switch
        setDarkMode(!darkMode);
        
    };

    // console.log(darkMode) 

    return(
        <ThemeContext.Provider value={ { darkMode, toggleDarkMode } }>
            {children}
        </ThemeContext.Provider>
    );

};