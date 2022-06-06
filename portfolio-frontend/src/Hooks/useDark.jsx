import { useEffect, useState } from "react"


export default function useDark() {
    const [theme,setTheme] = useState("dark");
    const colorTheme = theme === "light" ? "dark" : "light";
  useEffect(()=>{
      const root = document.documentElement;
      root.classList.remove(colorTheme);
      root.classList.add(theme)
  },[theme]);
  return[colorTheme,setTheme]
}

