import "./styles.css";
import Logo from "../../assets/logo.svg";
import { FC } from "react";
import { ThemeChange } from "../themeChange";

export const Navbar: FC = () => {
    return (
        <div className="styles_navbar bg_blue-500">
            <img src={Logo} alt="logo" />
            <ThemeChange />
        </div>
    );
};
