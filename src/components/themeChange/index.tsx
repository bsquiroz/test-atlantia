import { useEffect, useState } from "react";
import "./styles.css";

const getTheme = localStorage.getItem("theme");

export const ThemeChange = () => {
    const [themeChange, setThemeChange] = useState(
        getTheme ? JSON.parse(getTheme) : false
    );

    useEffect(() => {
        if (themeChange) {
            window.document.body.classList.remove("dark");
        } else {
            window.document.body.classList.add("dark");
        }

        localStorage.setItem("theme", JSON.stringify(themeChange));
    }, [themeChange]);

    return (
        <div className="style_theme">
            <div
                onClick={() => {
                    setThemeChange(!themeChange);
                }}
                className={`circle ${themeChange ? "active" : ""}`}
            ></div>
        </div>
    );
};
