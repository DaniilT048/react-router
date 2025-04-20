import {createContext, useContext, useEffect, useState} from "react";

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const root = document.getElementById("root");
        root.classList.remove("light-theme", "dark-theme");
        root.classList.add(`${theme}-theme`);
    },[theme]);

    const toggleTheme = () => {
        setTheme((prev) => prev === "dark" ? "light" : "dark");
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}




