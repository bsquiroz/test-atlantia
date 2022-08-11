import { useEffect, useState } from "react";
import "./styles.css";

export const ThemeChange = () => {
    const [themeChange, setThemeChange] = useState(false);

    useEffect(() => {
        window.document.body.classList.toggle("dark");
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
