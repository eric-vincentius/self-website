import {useContext, useState} from 'react';
import avatar from './Library/avatar.png'

function Header({darkMode, changeMode}) {
    // const [darkMode, setDarkMode] = useState(false);
    // const changeMode = () => {
    //     setDarkMode(prevMode => !prevMode);
    // }

    return (
        <div className="navbar" style={{ backgroundColor: darkMode ? "rgba(26, 26, 26, 0.685)" : "rgba(255, 255, 79, 0.712)"}}>
            <div className = "left-navbar">
                <img alt="avatar" src = {avatar}></img>
                <h1 style={{ color: darkMode ? "white" : "black"}}>Eric Vincentius Jaolis</h1>
            </div>
            <div className = "mid-navbar">

            </div>
            <div className = "right-navbar">
                <a href="#about-me" style={{ color: darkMode ? "white" : "blue"}}>About</a>
                <a href="#favourites" style={{ color: darkMode ? "white" : "blue"}}>Favourites</a>
                <a href="#portofolios" style={{ color: darkMode ? "white" : "blue"}}>Portofolios</a>
                <a href="#message" style={{ color: darkMode ? "white" : "blue"}}>Message</a>
                <button onClick={changeMode}>
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </div>
        </div>
    )
}

export default Header;