import port1 from './Library/port1.png'
import port2 from './Library/port2.png'
import port3 from './Library/port3.png'
import port4 from './Library/port 4.png'

function Portofolio({darkMode, changeMode}) {
    return (
        <div className="port-section" style={{ backgroundColor: darkMode ? "rgba(26, 26, 26, 0.2)" : "rgba(255, 255, 79, 0.1)"}}>
            <h2>MY PORTOFOLIOS</h2>
            <div id="portofolios" className="portofolios" >
                <div>
                    <img alt="squator-website" src={port1}></img>
                    <p><a href="https://revou-fundamental-course.github.io/4-sep-23-eric-vincentius/" target="_blank">Squator Website</a></p>
                </div>
                <div>
                    <img alt="squator-website" src={port2}></img>
                    <p><a href="https://drive.google.com/file/d/1mjRql7Rbbk9_Oz_7HPKRKETieSiX5yVe/view?usp=sharing" target="_blank">Telcom Churn Analysis</a></p>
                </div>
                <div>
                    <img alt="squator-website" src={port3}></img>
                    <p><a href="https://drive.google.com/file/d/1aWo0LjINmn-xPXAj4eepYqgDS-ghUvBb/view?usp=sharing" target="_blank">Book & Go Business Strategy</a></p>
                </div>
                <div>
                    <img alt="squator-website" src={port4}></img>
                    <p><a href="https://drive.google.com/file/d/1DdUJwQNwm6KGPQWLn_ZqLWjAJ02QsKnr/view?usp=sharing" target="_blank">Petrokimia Business Analysis</a></p>
                </div>
            </div>
        </div>
    )
}

export default Portofolio;