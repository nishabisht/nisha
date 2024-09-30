import React, { createContext, useState, useEffect } from "react";
import "../css/darkTheme.css"; // Load both themes
import "../css/lightTheme.css";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement; // Target the <html> element or body
    if (theme === "dark") {
      root.classList.add("dark-theme");
      root.classList.remove("light-theme");
    } else {
      root.classList.add("light-theme");
      root.classList.remove("dark-theme");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
